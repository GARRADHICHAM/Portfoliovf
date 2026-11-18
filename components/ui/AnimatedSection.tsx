"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

/** Reveals its children with a short 3D lift when scrolled into view. */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 36 : 0,
    x: direction === "left" ? -36 : direction === "right" ? 36 : 0,
    rotateX: direction === "up" ? 14 : 0,
    rotateY: direction === "left" ? -12 : direction === "right" ? 12 : 0,
  };

  return (
    <div ref={ref} style={{ perspective: 1200 }} className={className}>
      <motion.div
        initial={initial}
        animate={inView ? { opacity: 1, y: 0, x: 0, rotateX: 0, rotateY: 0 } : initial}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
