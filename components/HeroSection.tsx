"use client";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

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

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#09090B]"
    >
      {/* Blue radial glow at top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(37, 99, 235, 0.22) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Bottom fade to section below */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none bg-gradient-to-t from-[#09090B] to-transparent" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
      >
        {/* Left: profile image */}
        <motion.div variants={fadeUp} className="flex-shrink-0 hidden sm:block">
          <img
            src="/mee2.png"
            alt="Hicham Garrad"
            className="w-64 lg:w-80 xl:w-96 h-[380px] lg:h-[460px] xl:h-[520px] object-cover rounded-2xl"
          />
        </motion.div>

        {/* Right: text content */}
        <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left flex-1">
          {/* Availability badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-1.5 backdrop-blur-sm">
              CDI disponible · Octobre 2026
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-100 leading-none"
          >
            Hicham{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Garrad
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p variants={fadeUp} className="text-lg sm:text-xl font-semibold text-zinc-300">
            Ingénieur IA &amp; Data
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-2 text-sm text-zinc-500 flex-wrap justify-center lg:justify-start"
          >
            <span>Multi-Agents LLM</span>
            <span className="text-zinc-700">·</span>
            <span>Pipelines Data</span>
            <span className="text-zinc-700">·</span>
            <span>Full Stack</span>
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg"
          >
            Ingénieur IA &amp; Data en fin de M2 MIAGE IA Appliquée (UCA). Mon parcours combine{" "}
            <span className="text-zinc-200 font-medium">multi-agents LLM</span>,{" "}
            <span className="text-zinc-200 font-medium">data science</span> et{" "}
            <span className="text-zinc-200 font-medium">pipelines de données</span> — expériences
            en startup, multinationale et laboratoire, déploiements sur AWS, GCP et OVH.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 flex-wrap justify-center lg:justify-start pt-1"
          >
            <a
              href="/CV_HICHAM_GARRAD_Ni.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-blue-500/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Télécharger le CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-zinc-900 text-zinc-200 text-sm font-semibold rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
            >
              Me contacter
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </motion.div>
        </div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-zinc-700 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
