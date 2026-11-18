"use client";
import { PointerEvent, useEffect, useRef, useState } from "react";
import { TECH_ICONS } from "@/lib/techIcons";

/**
 * A 3D sphere of technology logos. It turns slowly on its own, leans toward
 * the mouse, and can be grabbed and spun (mouse or touch). Tiles are plain
 * DOM nodes positioned every frame through refs, so React never re-renders
 * during the animation.
 */
export default function TechCloud() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<string | null>(null);

  // Mutable animation state (not React state).
  const sim = useRef({
    points: [] as { x: number; y: number; z: number }[],
    radius: 160,
    tile: 46,
    vx: 0, // angular velocity around the x axis (rad/s)
    vy: 0.35, // angular velocity around the y axis (rad/s)
    dragging: false,
    lastX: 0,
    lastY: 0,
    lastT: 0,
    hoverX: 0,
    hoverY: 0,
    hovering: false,
    paused: false,
    visible: true,
    reduced: false,
  });

  // Evenly spread the logos over a sphere (Fibonacci lattice).
  if (sim.current.points.length === 0) {
    const n = TECH_ICONS.length;
    const golden = Math.PI * (3 - Math.sqrt(5));
    sim.current.points = TECH_ICONS.map((_, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = golden * i;
      return { x: Math.cos(th) * r, y, z: Math.sin(th) * r };
    });
  }

  useEffect(() => {
    const s = sim.current;
    const wrap = wrapRef.current!;
    s.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const w = wrap.clientWidth;
      s.radius = w * 0.37;
      s.tile = w < 360 ? 38 : 48;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const io = new IntersectionObserver(([e]) => (s.visible = e.isIntersecting));
    io.observe(wrap);

    let raf = 0;
    let prev = performance.now();
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((now - prev) / 1000, 1 / 30);
      prev = now;
      if (!s.visible) return;

      if (!s.dragging) {
        // Drift back toward a gentle auto-rotation, steered by the mouse.
        const auto = s.reduced || s.paused ? 0 : 0.35;
        // Hovering a logo freezes the sphere so the logo can be read.
        const steer = s.hovering && !s.paused;
        const tx = steer ? -s.hoverY * 0.9 : 0;
        const ty = steer ? auto + s.hoverX * 0.9 : auto;
        const k = Math.min(1, dt * 2.2);
        s.vx += (tx - s.vx) * k;
        s.vy += (ty - s.vy) * k;
      }

      const ax = s.vx * dt;
      const ay = s.vy * dt;
      const cx = Math.cos(ax), sx = Math.sin(ax);
      const cy = Math.cos(ay), sy = Math.sin(ay);

      for (let i = 0; i < s.points.length; i++) {
        const p = s.points[i];
        // rotate around y, then x
        let x = p.x * cy + p.z * sy;
        let z = -p.x * sy + p.z * cy;
        const y = p.y * cx - z * sx;
        z = p.y * sx + z * cx;
        // keep on the unit sphere despite float drift
        const len = Math.hypot(x, y, z) || 1;
        p.x = x / len;
        p.y = y / len;
        p.z = z / len;
        x = p.x;

        const el = tileRefs.current[i];
        if (!el) continue;
        const depth = (p.z + 1) / 2; // 0 = back, 1 = front
        const scale = 0.45 + depth * 0.6;
        const px = x * s.radius - s.tile / 2;
        const py = p.y * s.radius - s.tile / 2;
        el.style.transform = `translate3d(${px}px, ${py}px, 0) scale(${scale})`;
        el.style.opacity = String(0.18 + depth * 0.82);
        el.style.zIndex = String(Math.round(depth * 100));
        el.style.filter = depth < 0.35 ? "grayscale(0.6)" : "none";
        el.style.width = el.style.height = `${s.tile}px`;
      }
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  // ---- grab & spin ------------------------------------------------------
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    const s = sim.current;
    s.dragging = true;
    s.lastX = e.clientX;
    s.lastY = e.clientY;
    s.lastT = performance.now();
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const s = sim.current;
    const r = e.currentTarget.getBoundingClientRect();
    s.hoverX = ((e.clientX - r.left) / r.width) * 2 - 1;
    s.hoverY = ((e.clientY - r.top) / r.height) * 2 - 1;
    if (!s.dragging) return;
    const now = performance.now();
    const dt = Math.max((now - s.lastT) / 1000, 1 / 120);
    // drag right => spin right; velocity carries on after release (inertia)
    s.vy = ((e.clientX - s.lastX) / s.radius) / dt;
    s.vx = (-(e.clientY - s.lastY) / s.radius) / dt;
    s.vx = Math.max(-8, Math.min(8, s.vx));
    s.vy = Math.max(-8, Math.min(8, s.vy));
    s.lastX = e.clientX;
    s.lastY = e.clientY;
    s.lastT = now;
  };
  const endDrag = () => (sim.current.dragging = false);

  return (
    <div className="relative">
      <div
        ref={wrapRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerEnter={(e) => e.pointerType === "mouse" && (sim.current.hovering = true)}
        onPointerLeave={() => {
          sim.current.hovering = false;
          endDrag();
        }}
        className="relative mx-auto aspect-square w-full max-w-[480px] cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: "pan-y" }}
        role="list"
        aria-label="Technologies maîtrisées"
      >
        {/* glow + orbit rings */}
        <div
          aria-hidden
          className="absolute inset-[12%] rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.22), rgba(139,92,246,0.12) 50%, transparent 72%)" }}
        />
        <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-40">
          <ellipse cx="50" cy="50" rx="37" ry="37" fill="none" stroke="url(#tc-g)" strokeWidth="0.2" />
          <ellipse cx="50" cy="50" rx="37" ry="12" fill="none" stroke="url(#tc-g)" strokeWidth="0.2" />
          <ellipse cx="50" cy="50" rx="12" ry="37" fill="none" stroke="url(#tc-g)" strokeWidth="0.2" />
          <defs>
            <linearGradient id="tc-g" x1="0" x2="1">
              <stop offset="0" stopColor="#38bdf8" />
              <stop offset="1" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>

        {/* tiles, all anchored at the centre and moved by transform */}
        <div className="absolute left-1/2 top-1/2">
          {TECH_ICONS.map((icon, i) => (
            <div
              key={icon.name}
              ref={(el) => {
                tileRefs.current[i] = el;
              }}
              role="listitem"
              aria-label={icon.name}
              title={icon.name}
              onPointerEnter={() => {
                setActive(icon.name);
                sim.current.paused = true;
              }}
              onPointerLeave={() => {
                setActive(null);
                sim.current.paused = false;
              }}
              className="group/tile absolute left-0 top-0 grid place-items-center rounded-2xl bg-zinc-900/80 border border-white/10 shadow-lg shadow-black/40 backdrop-blur-sm transition-[border-color,box-shadow] duration-200 hover:border-white/40"
              style={{ width: 46, height: 46, opacity: 0 }}
            >
              {icon.path ? (
                <svg viewBox="0 0 24 24" className="w-[52%] h-[52%]" fill={icon.color} aria-hidden>
                  <path d={icon.path} />
                </svg>
              ) : (
                <span className="font-display font-bold text-[13px] tracking-tight" style={{ color: icon.color }}>
                  {icon.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* caption: the hovered technology, or a hint */}
      <p className="mt-2 text-center font-mono text-xs h-5" aria-live="polite">
        {active ? (
          <span className="text-sky-200">{active}</span>
        ) : (
          <span className="text-zinc-500">Faites tourner · survolez un logo</span>
        )}
      </p>
    </div>
  );
}
