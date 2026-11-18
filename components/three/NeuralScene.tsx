"use client";
import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { sceneState } from "@/lib/sceneState";

/* ------------------------------------------------------------------ */
/* A vertical, fully-connected neural network that spans the page.     */
/* Layer 0 (input) sits behind the hero, the last layer (output)       */
/* behind the contact section. Scrolling moves the camera down it,     */
/* and signals keep flowing forward from layer to layer.               */
/* ------------------------------------------------------------------ */

const SPACING = 5.4; // world units between layers

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Pt = [number, number];

const grid = (cols: number, rows: number, gap: number): Pt[] => {
  const out: Pt[] = [];
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      out.push([(c - (cols - 1) / 2) * gap, (r - (rows - 1) / 2) * gap]);
  return out;
};

/** Nodes on a flat ellipse: wide in x (screen width), shallow in z (depth). */
const ellipse = (n: number, rx: number, rz: number, phase = 0): Pt[] =>
  Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2 + phase;
    return [Math.cos(a) * rx, Math.sin(a) * rz] as Pt;
  });

const row = (n: number, gap: number): Pt[] =>
  Array.from({ length: n }, (_, i) => [(i - (n - 1) / 2) * gap, 0] as Pt);

/** Node layout of each layer in its own horizontal (x, z) plane. */
const LAYERS: Pt[][] = [
  grid(5, 2, 2.9).map(([x, z]) => [x, z * 0.7] as Pt), // input  — hero (10 neurons)
  [...ellipse(14, 6.6, 2.4), ...ellipse(6, 3.0, 1.1, 0.5)], // about
  [...ellipse(16, 7.0, 2.6, 0.2), ...ellipse(8, 3.6, 1.3)], // experience
  [...ellipse(18, 7.2, 2.7), ...ellipse(10, 4.0, 1.5, 0.3), ...ellipse(3, 1.3, 0.5)], // projects
  [...ellipse(14, 6.6, 2.4, 0.25), ...ellipse(6, 3.0, 1.1)], // certifications
  [...ellipse(10, 5.0, 2.0), ...ellipse(4, 2.0, 0.8, 0.8)], // beyond
  row(3, 2.4).map(([x, z]) => [x + 3.4, z] as Pt), // output — contact (sits in the free space top-right)
];

const LAYER_COLORS = ["#38bdf8", "#3b82f6", "#6366f1", "#8b5cf6", "#a78bfa", "#c084fc", "#e0f2fe"].map(
  (c) => new THREE.Color(c),
);

/* ------------------------------------------------------------------ */
/* Shaders                                                             */
/* ------------------------------------------------------------------ */

const nodeVertex = /* glsl */ `
  attribute float aSize;
  attribute float aLayer;
  attribute float aAct;
  attribute vec3 color;
  uniform float uPixelRatio;
  uniform float uFocus;
  uniform float uTime;
  varying vec3 vColor;
  varying float vBright;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float focus = 1.0 - smoothstep(0.0, 1.6, abs(aLayer - uFocus));
    float breathe = 0.5 + 0.5 * sin(uTime * 1.4 + aLayer * 1.7 + position.x * 0.8);
    vBright = 0.3 + 0.6 * focus + 0.15 * breathe * focus + 0.9 * aAct;
    gl_PointSize = aSize * (1.0 + 0.9 * aAct + 0.25 * focus) * uPixelRatio * 240.0 / -mv.z;
    vColor = mix(color, vec3(1.0), aAct * 0.55);
  }
`;

const nodeFragment = /* glsl */ `
  varying vec3 vColor;
  varying float vBright;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float core = smoothstep(0.17, 0.0, d);          // solid neuron body
    float halo = pow(smoothstep(0.5, 0.0, d), 2.2);  // soft glow
    float a = (core * 0.9 + halo * 0.7) * vBright;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor * (0.7 + core * 0.8), min(a, 1.0));
  }
`;

const pulseVertex = /* glsl */ `
  attribute float aFocus;
  uniform float uPixelRatio;
  varying float vA;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = 120.0 * uPixelRatio / -mv.z;
    vA = aFocus;
  }
`;

const pulseFragment = /* glsl */ `
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = pow(smoothstep(0.5, 0.0, d), 2.0) * vA;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vec3(0.75, 0.9, 1.0), a);
  }
`;

/* ------------------------------------------------------------------ */

function Network({ pulseCount }: { pulseCount: number }) {
  const { gl, size } = useThree();
  const outer = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Group>(null!);
  const nodeGeo = useRef<THREE.BufferGeometry>(null!);
  const pulseGeo = useRef<THREE.BufferGeometry>(null!);
  const spin = useRef(0);
  const live = useRef({ x: 0, scale: 1, focus: 0 });

  const net = useMemo(() => {
    const rng = mulberry32(11);
    const nodes: { x: number; y: number; z: number; layer: number }[] = [];
    const layerStart: number[] = [];
    LAYERS.forEach((layer, li) => {
      layerStart.push(nodes.length);
      for (const [x, z] of layer) {
        nodes.push({
          x: x + (rng() - 0.5) * 0.12,
          y: -li * SPACING + (li === 0 || li === LAYERS.length - 1 ? 0 : (rng() - 0.5) * 0.5),
          z: z + (rng() - 0.5) * 0.12,
          layer: li,
        });
      }
    });
    layerStart.push(nodes.length);

    const N = nodes.length;
    const positions = new Float32Array(N * 3);
    const colors = new Float32Array(N * 3);
    const sizes = new Float32Array(N);
    const layers = new Float32Array(N);
    const act = new Float32Array(N);
    const last = LAYERS.length - 1;
    nodes.forEach((n, i) => {
      positions.set([n.x, n.y, n.z], i * 3);
      const c = LAYER_COLORS[n.layer];
      colors.set([c.r, c.g, c.b], i * 3);
      layers[i] = n.layer;
      sizes[i] = n.layer === 0 ? 1.0 : n.layer === last ? 1.9 : 0.85 + rng() * 0.5;
    });
    // The middle output neuron is the "winning" class.
    sizes[layerStart[last] + 1] = 2.8;

    // Fully connect each pair of consecutive layers.
    const edgeFrom: number[] = [];
    const edgeTo: number[] = [];
    const outEdges: number[][] = Array.from({ length: N }, () => []);
    const pairGeometries: THREE.BufferGeometry[] = [];
    for (let li = 0; li < last; li++) {
      const pos: number[] = [];
      const col: number[] = [];
      const ca = LAYER_COLORS[li];
      const cb = LAYER_COLORS[li + 1];
      // Compare positions relative to each layer's extent so a wide layer
      // still maps neatly onto a narrow one (e.g. into the output layer).
      const extent = (from: number, to: number) => {
        let mx = 1e-3, mz = 1e-3;
        for (let k = from; k < to; k++) {
          mx = Math.max(mx, Math.abs(nodes[k].x));
          mz = Math.max(mz, Math.abs(nodes[k].z));
        }
        return { mx, mz };
      };
      const ea = extent(layerStart[li], layerStart[li + 1]);
      const eb = extent(layerStart[li + 1], layerStart[li + 2]);
      const fanOut = 3; // nearest neighbours per node
      for (let a = layerStart[li]; a < layerStart[li + 1]; a++) {
        const ax = nodes[a].x / ea.mx, az = nodes[a].z / ea.mz;
        const cands: { b: number; d: number }[] = [];
        for (let b = layerStart[li + 1]; b < layerStart[li + 2]; b++) {
          const dx = nodes[b].x / eb.mx - ax;
          const dz = (nodes[b].z / eb.mz - az) * 0.5;
          cands.push({ b, d: dx * dx + dz * dz });
        }
        cands.sort((p, q) => p.d - q.d);
        const picked = new Set(cands.slice(0, fanOut).map((c) => c.b));
        // one long-range connection keeps it looking like a learned network
        picked.add(cands[Math.floor(rng() * cands.length)].b);
        picked.forEach((b) => {
          outEdges[a].push(edgeFrom.length);
          edgeFrom.push(a);
          edgeTo.push(b);
          pos.push(nodes[a].x, nodes[a].y, nodes[a].z, nodes[b].x, nodes[b].y, nodes[b].z);
          col.push(ca.r, ca.g, ca.b, cb.r, cb.g, cb.b);
        });
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
      pairGeometries.push(g);
    }

    const pulses = Array.from({ length: pulseCount }, () => ({ edge: 0, t: 0, speed: 1 }));
    const pulsePositions = new Float32Array(pulseCount * 3);
    const pulseFocus = new Float32Array(pulseCount);

    return {
      rng, N, positions, colors, sizes, layers, act, layerStart, last,
      edgeFrom, edgeTo, outEdges, pairGeometries, pulses, pulsePositions, pulseFocus,
    };
  }, [pulseCount]);

  const spawn = (p: { edge: number; t: number; speed: number }, near: number) => {
    const { rng, layerStart, last, outEdges } = net;
    const li = Math.max(0, Math.min(last - 1, Math.floor(near - 1 + rng() * 2.2)));
    const node = layerStart[li] + Math.floor(rng() * (layerStart[li + 1] - layerStart[li]));
    const outs = outEdges[node];
    p.edge = outs[Math.floor(rng() * outs.length)];
    p.t = 0;
    p.speed = 0.55 + rng() * 0.6;
  };

  // Initial scatter so the first frame already shows a forward pass.
  useMemo(() => {
    net.pulses.forEach((p) => {
      spawn(p, net.rng() * 2);
      p.t = net.rng();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [net]);

  const pixelRatio = Math.min(gl.getPixelRatio(), 2);

  const nodeMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: nodeVertex,
        fragmentShader: nodeFragment,
        uniforms: { uPixelRatio: { value: pixelRatio }, uFocus: { value: 0 }, uTime: { value: 0 } },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [pixelRatio],
  );

  const pulseMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: pulseVertex,
        fragmentShader: pulseFragment,
        uniforms: { uPixelRatio: { value: pixelRatio } },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [pixelRatio],
  );

  const lineMaterials = useMemo(
    () =>
      net.pairGeometries.map(
        () =>
          new THREE.LineBasicMaterial({
            vertexColors: true,
            transparent: true,
            opacity: 0.05,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
          }),
      ),
    [net],
  );

  useFrame((state, rawDt) => {
    const dt = Math.min(rawDt, 1 / 30);
    const t = state.clock.elapsedTime;
    const reduced = sceneState.reducedMotion;
    const mobile = size.width < 768;
    const L = live.current;

    // ---- follow the scroll position down the network ---------------
    const e = reduced ? 1 : Math.min(1, dt * 3);
    L.focus += (sceneState.layerPos - L.focus) * e;
    L.x = 0;
    L.scale += ((mobile ? 0.42 : size.width < 1024 ? 0.7 : 1) - L.scale) * e;

    // Camera rides down the network; the pointer adds a gentle parallax.
    const m = sceneState.mouse;
    // On the last layer, frame the output neurons in the upper part of the
    // screen so they sit above the contact form instead of behind it.
    const last = LAYERS.length - 1;
    const endT = Math.max(0, Math.min(1, L.focus - (last - 1)));
    const endEase = endT * endT * (3 - 2 * endT);
    const camY = -L.focus * SPACING * L.scale - endEase * 3.3 * L.scale;
    const cam = state.camera;
    const k = Math.min(1, dt * 2.5);
    cam.position.x += (m.x * 0.9 - cam.position.x) * k;
    cam.position.y = camY + 3.2 - m.y * 0.6;
    cam.position.z = 11;
    cam.lookAt(0, camY - 0.4, 0);

    // The output layer sits right of centre on desktop (free space above the
    // form); on narrow screens slide the network so it stays centred.
    outer.current.position.x = size.width < 1024 ? -3.4 * L.scale * endEase : L.x;
    outer.current.scale.setScalar(L.scale);
    if (!reduced) spin.current += dt;
    inner.current.rotation.y = Math.sin(spin.current * 0.12) * 0.12 + m.x * 0.12;

    nodeMaterial.uniforms.uFocus.value = L.focus;
    nodeMaterial.uniforms.uTime.value = t;

    // Connections near the current layer are brighter.
    lineMaterials.forEach((mat, li) => {
      const f = 1 - Math.min(1, Math.abs(li + 0.5 - L.focus) / 1.6);
      mat.opacity = 0.04 + 0.26 * f;
    });

    // ---- forward pass: signals travel layer to layer -----------------
    const { act, pulses, pulsePositions, pulseFocus, edgeFrom, edgeTo, outEdges, positions, layers } = net;
    const decay = Math.exp(-dt * 2.4);
    for (let i = 0; i < act.length; i++) act[i] *= decay;

    pulses.forEach((p, i) => {
      if (!reduced) p.t += dt * p.speed;
      if (p.t >= 1) {
        const arrived = edgeTo[p.edge];
        act[arrived] = Math.min(1, act[arrived] + 0.55);
        const outs = outEdges[arrived];
        // Keep propagating while near the viewer, otherwise restart close by.
        if (outs.length && Math.abs(layers[arrived] - L.focus) < 2.2) {
          p.edge = outs[Math.floor(net.rng() * outs.length)];
          p.t = 0;
        } else {
          spawn(p, L.focus);
        }
      }
      const a = edgeFrom[p.edge] * 3;
      const b = edgeTo[p.edge] * 3;
      pulsePositions[i * 3] = positions[a] + (positions[b] - positions[a]) * p.t;
      pulsePositions[i * 3 + 1] = positions[a + 1] + (positions[b + 1] - positions[a + 1]) * p.t;
      pulsePositions[i * 3 + 2] = positions[a + 2] + (positions[b + 2] - positions[a + 2]) * p.t;
      const layerHere = layers[edgeFrom[p.edge]] + p.t;
      const fade = Math.sin(Math.PI * Math.min(1, p.t * 1.0001)) * 0.6 + 0.4;
      pulseFocus[i] = (1 - Math.min(1, Math.abs(layerHere - L.focus) / 2.2)) * fade;
    });

    nodeGeo.current.attributes.aAct.needsUpdate = true;
    pulseGeo.current.attributes.position.needsUpdate = true;
    pulseGeo.current.attributes.aFocus.needsUpdate = true;
  });

  return (
    <group ref={outer}>
      <group ref={inner}>
        {net.pairGeometries.map((g, i) => (
          <lineSegments key={i} geometry={g} material={lineMaterials[i]} frustumCulled={false} />
        ))}
        <points material={nodeMaterial} frustumCulled={false}>
          <bufferGeometry ref={nodeGeo}>
            <bufferAttribute attach="attributes-position" args={[net.positions, 3]} />
            <bufferAttribute attach="attributes-color" args={[net.colors, 3]} />
            <bufferAttribute attach="attributes-aSize" args={[net.sizes, 1]} />
            <bufferAttribute attach="attributes-aLayer" args={[net.layers, 1]} />
            <bufferAttribute attach="attributes-aAct" args={[net.act, 1]} usage={THREE.DynamicDrawUsage} />
          </bufferGeometry>
        </points>
        <points material={pulseMaterial} frustumCulled={false}>
          <bufferGeometry ref={pulseGeo}>
            <bufferAttribute attach="attributes-position" args={[net.pulsePositions, 3]} usage={THREE.DynamicDrawUsage} />
            <bufferAttribute attach="attributes-aFocus" args={[net.pulseFocus, 1]} usage={THREE.DynamicDrawUsage} />
          </bufferGeometry>
        </points>
      </group>
    </group>
  );
}

/** Far, slow star dust for depth; it travels with the camera. */
function Dust() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const rng = mulberry32(7);
    const arr = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i++) {
      arr.set([(rng() - 0.5) * 34, (rng() - 0.5) * 24, -6 - rng() * 14], i * 3);
    }
    return arr;
  }, []);
  useFrame((state, dt) => {
    // Parallax: dust moves slower than the network as the camera descends.
    ref.current.position.y = state.camera.position.y * 0.75;
    if (sceneState.reducedMotion) return;
    ref.current.rotation.z += dt * 0.005;
    ref.current.position.x += (-sceneState.mouse.x * 0.5 - ref.current.position.x) * 0.03;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#64748b" transparent opacity={0.5} depthWrite={false} sizeAttenuation />
    </points>
  );
}

export default function NeuralScene() {
  const pulseCount = typeof window !== "undefined" && window.innerWidth < 768 ? 60 : 130;
  return (
    <Canvas
      camera={{ position: [0, 3.2, 11], fov: 50 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Dust />
      <Network pulseCount={pulseCount} />
    </Canvas>
  );
}
