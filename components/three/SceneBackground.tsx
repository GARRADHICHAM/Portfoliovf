"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { sceneState, SECTIONS } from "@/lib/sceneState";

const NeuralScene = dynamic(() => import("./NeuralScene"), { ssr: false });

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Fixed, full-viewport 3D layer behind the page. It wires DOM signals
 * (scroll position as a layer index, pointer position) into
 * `sceneState`, which the WebGL scene reads every frame.
 */
export default function SceneBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(hasWebGL());

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => (sceneState.reducedMotion = mq.matches);
    syncMotion();
    mq.addEventListener("change", syncMotion);

    // Map the scroll position to a continuous layer index: section i
    // centred in the viewport => layer i centred on screen.
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const updateLayer = () => {
      const center = window.scrollY + window.innerHeight / 2;
      let pos = 0;
      for (let i = 0; i < sections.length; i++) {
        const top = sections[i].offsetTop;
        const h = sections[i].offsetHeight;
        if (center >= top && center < top + h) {
          pos = i + (center - top) / h - 0.5;
          break;
        }
        if (i === sections.length - 1 && center >= top + h) pos = i;
      }
      sceneState.layerPos = Math.max(0, Math.min(sections.length - 1, pos));
    };
    updateLayer();

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      sceneState.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      sceneState.mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", updateLayer, { passive: true });
    window.addEventListener("resize", updateLayer);
    return () => {
      mq.removeEventListener("change", syncMotion);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", updateLayer);
      window.removeEventListener("resize", updateLayer);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 z-0 pointer-events-none">
      {/* Static fallback glow — always present, the 3D fades in over it */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 35%, rgba(59,130,246,0.14), transparent 70%), radial-gradient(ellipse 45% 40% at 20% 80%, rgba(139,92,246,0.10), transparent 70%)",
        }}
      />
      {enabled && (
        <div className="absolute inset-0 animate-scene-in">
          <NeuralScene />
        </div>
      )}
      {/* Vignette keeps text readable over the particles */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 90% at 50% 50%, transparent 40%, rgba(5,5,8,0.75) 100%)",
        }}
      />
    </div>
  );
}
