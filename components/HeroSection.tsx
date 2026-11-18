"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import TiltCard from "./ui/TiltCard";
import Magnetic from "./ui/Magnetic";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const ROLES = ["agents LLM", "pipelines data", "produits full stack", "modèles ML"];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hicham-garrad",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "GitHub",
    href: "https://github.com/GARRADHICHAM",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
];

const floatingChips = [
  { label: "Multi-Agents LLM", className: "-left-10 top-[14%]", z: 70, delay: 0 },
  { label: "Pipelines Data", className: "-right-8 top-[46%]", z: 90, delay: 1.2 },
  { label: "Full Stack", className: "-left-6 bottom-[12%]", z: 60, delay: 2.4 },
];

/** Name that flips in letter by letter. */
function FlipWord({ text, delay, className = "" }: { text: string; delay: number; className?: string }) {
  return (
    <span className={`inline-block ${className}`} style={{ perspective: 600 }}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block origin-bottom"
          initial={{ rotateX: -95, y: 30, opacity: 0 }}
          animate={{ rotateX: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: delay + i * 0.045, ease: EASE }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-grid align-bottom" style={{ perspective: 500 }}>
      <AnimatePresence initial={false}>
        <motion.span
          key={ROLES[i]}
          style={{ gridArea: "1 / 1" }}
          initial={{ rotateX: 90, opacity: 0, y: 12 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: -90, opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-gradient font-semibold origin-center whitespace-nowrap"
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function HeroSection() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 700], [0, -120]);
  const contentOpacity = useTransform(scrollY, [0, 550], [1, 0]);
  const portraitY = useTransform(scrollY, [0, 700], [0, -60]);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 sm:pt-28 pb-24"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-14 lg:gap-10">
        {/* ---------- Text ---------- */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1"
        >
          <motion.div {...fade(0.3)}>
            <span className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-1.5 text-xs text-sky-200/90">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
              </span>
              Disponible immédiatement · CDI
            </span>
          </motion.div>

          <motion.p {...fade(0.4)} className="font-mono text-sm text-zinc-500">
            <span className="text-sky-400">&gt;</span> Ingénieur IA &amp; Data
            <span className="animate-blink text-sky-400">_</span>
          </motion.p>

          <h1 className="font-display font-bold tracking-tight leading-[0.92] text-[clamp(3.4rem,10vw,7.5rem)]">
            <FlipWord text="Hicham" delay={0.5} className="text-zinc-50" />
            <br />
            <FlipWord text="Garrad" delay={0.75} className="text-gradient" />
          </h1>

          <motion.p {...fade(1.1)} className="text-lg sm:text-xl text-zinc-300">
            Je construis des <RotatingRole />
          </motion.p>

          <motion.p {...fade(1.25)} className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg">
            Ingénieur IA &amp; Data diplômé d&apos;un M2 MIAGE IA Appliquée (UCA). Mon parcours combine{" "}
            <span className="text-zinc-100 font-medium">multi-agents LLM</span>,{" "}
            <span className="text-zinc-100 font-medium">data science</span> et{" "}
            <span className="text-zinc-100 font-medium">pipelines de données</span>, expériences en
            startup, multinationale et laboratoire, déploiements sur AWS, GCP et OVH.
          </motion.p>

          <motion.div {...fade(1.4)} className="flex items-center gap-3 flex-wrap justify-center lg:justify-start pt-2">
            <Magnetic>
              <a
                href="/CV_Hicham_GARRAD_portfolio.pdf"
                download
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white overflow-hidden shadow-xl shadow-blue-500/25"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600" />
                <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="relative w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="relative">Télécharger le CV</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-zinc-100 glass hover:bg-white/[0.08] transition-colors"
              >
                Me contacter
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Magnetic>
            <div className="flex items-center gap-1 pl-1">
              {socials.map((s) => (
                <Magnetic key={s.label} strength={0.5}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 grid place-items-center rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ---------- Portrait ---------- */}
        <motion.div
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 0.85, rotateY: -25 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: EASE }}
          className="order-1 lg:order-2 mx-auto w-[min(52vw,210px)] sm:w-[300px] lg:w-[360px]"
        >
          <TiltCard max={12} className="rounded-[2rem]">
            {/* Glow behind */}
            <div
              aria-hidden
              className="absolute -inset-10 rounded-full blur-3xl opacity-60"
              style={{
                background: "radial-gradient(circle, rgba(59,130,246,0.45), rgba(139,92,246,0.25) 45%, transparent 70%)",
                transform: "translateZ(-60px)",
              }}
            />
            {/* Rotating gradient border */}
            <div className="relative rounded-[2rem] p-[1.5px] conic-border shadow-2xl shadow-blue-900/40">
              <div className="relative aspect-[2/3] rounded-[calc(2rem-1.5px)] overflow-hidden bg-[#0b1020]">
                <Image
                  src="/My_pic.png"
                  alt="Hicham Garrad"
                  fill
                  priority
                  sizes="(max-width: 1024px) 320px, 360px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-300/80">
                  <span>Nice, France</span>
                  <span>AI · Data</span>
                </div>
              </div>
            </div>

            {/* Floating chips — sit in front of the card in 3D */}
            {floatingChips.map((c) => (
              <div
                key={c.label}
                className={`absolute hidden sm:block ${c.className}`}
                style={{ transform: `translateZ(${c.z}px)` }}
              >
                <div className="animate-float" style={{ animationDelay: `${c.delay}s` }}>
                  <span className="glass-strong inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-zinc-100 shadow-xl shadow-black/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-400" />
                    {c.label}
                  </span>
                </div>
              </div>
            ))}
          </TiltCard>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Défiler vers la suite"
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        <span className="w-6 h-10 rounded-full border border-current flex justify-center pt-2">
          <motion.span
            className="w-1 h-2 rounded-full bg-current"
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      </motion.a>
    </section>
  );
}
