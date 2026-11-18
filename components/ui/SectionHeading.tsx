"use client";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Props {
  index: string;
  eyebrow: string;
  title: string;
  /** Optional trailing words rendered with the animated gradient. */
  highlight?: string;
  subtitle?: string;
  className?: string;
}

/**
 * Section title: a numbered mono eyebrow with a drawing line, then the
 * title words flip up into place in 3D.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  highlight,
  subtitle,
  className = "mb-14",
}: Props) {
  const words = [
    ...title.split(" ").map((w) => ({ w, hl: false })),
    ...(highlight ? highlight.split(" ").map((w) => ({ w, hl: true })) : []),
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      <div className="flex items-center gap-3 mb-4 font-mono text-xs tracking-widest uppercase">
        <motion.span
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }}
          className="text-sky-400"
        >
          {index}
        </motion.span>
        <motion.span
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.8, ease: EASE } },
          }}
          className="h-px w-10 origin-left bg-gradient-to-r from-sky-400 to-violet-400"
        />
        <motion.span
          variants={{
            hidden: { opacity: 0, x: -8 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
          }}
          className="text-zinc-400"
        >
          {eyebrow}
        </motion.span>
      </div>

      <h2
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-50 leading-[1.05]"
        style={{ perspective: 800 }}
      >
        {words.map(({ w, hl }, i) => (
          <span key={i} className="inline-block overflow-hidden pb-1 mr-[0.25em] align-bottom">
            <motion.span
              className={`inline-block origin-bottom ${hl ? "text-gradient" : ""}`}
              variants={{
                hidden: { y: "105%", rotateX: -80, opacity: 0 },
                visible: {
                  y: "0%",
                  rotateX: 0,
                  opacity: 1,
                  transition: { duration: 0.8, delay: 0.1 + i * 0.07, ease: EASE },
                },
              }}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </h2>

      {subtitle && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.35, ease: EASE } },
          }}
          className="mt-4 text-zinc-400 text-base max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
