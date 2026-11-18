"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { PointerEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Classes for the tilting surface itself. */
  className?: string;
  /** Classes for the outer wrapper that holds the perspective. */
  containerClassName?: string;
  /** Max tilt in degrees. */
  max?: number;
  glare?: boolean;
  onClick?: () => void;
}

/**
 * A surface that tilts in 3D toward the pointer, with a moving glare.
 * Children can use `style={{ transform: "translateZ(40px)" }}` to float
 * above the surface for a parallax effect.
 */
export default function TiltCard({
  children,
  className = "",
  containerClassName = "",
  max = 9,
  glare = true,
  onClick,
}: Props) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.13), transparent 55%)`;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div className={containerClassName} style={{ perspective: 1100 }}>
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        onClick={onClick}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`group relative h-full ${className}`}
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: glareBg }}
          />
        )}
      </motion.div>
    </div>
  );
}
