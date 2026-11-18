"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SECTIONS } from "@/lib/sceneState";

const LABELS = SECTIONS.map((_, i) =>
  i === 0 ? "input_layer" : i === SECTIONS.length - 1 ? "output_layer" : `hidden_layer_${i}`,
);

/**
 * Small fixed read-out (desktop) naming the network layer that matches the
 * section in view, from the input layer (hero) to the output layer (contact).
 */
export default function NetworkHUD() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(SECTIONS.indexOf(e.target.id as (typeof SECTIONS)[number]));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden
      className="hidden lg:flex fixed left-6 bottom-6 z-40 items-center gap-3 pointer-events-none font-mono text-[11px]"
    >
      <div className="flex flex-col gap-1.5">
        {SECTIONS.map((id, i) => (
          <span
            key={id}
            className={`block w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              i === active
                ? "bg-sky-300 shadow-[0_0_10px_rgba(125,211,252,0.9)] scale-125"
                : i < active
                  ? "bg-violet-400/60"
                  : "bg-white/15"
            }`}
          />
        ))}
      </div>
      <div className="glass rounded-lg px-3 py-2 leading-tight">
        <span className="text-zinc-500">layer {String(active).padStart(2, "0")} / {String(SECTIONS.length - 1).padStart(2, "0")}</span>
        <div className="relative h-4 overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={active}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="block text-sky-200"
            >
              {LABELS[active]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
