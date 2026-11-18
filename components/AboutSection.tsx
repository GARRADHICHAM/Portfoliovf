"use client";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";
import TechCloud from "./ui/TechCloud";

const stats = [
  { value: "4+", label: "Expériences pro" },
  { value: "11+", label: "Projets réalisés" },
  { value: "5", label: "Langages maîtrisés en production" },
  { value: "Immédiatement", label: "Disponible CDI" },
];

/** Skills without a brand logo, shown as tags under the logo cloud. */
const concepts = [
  "Multi-agents LLM",
  "RAG",
  "NLP",
  "Prompt Engineering",
  "Machine Learning",
  "Deep Learning",
  "ETL/ELT",
  "Data Warehouse",
  "REST API",
  "Microservices",
  "WebSockets",
  "CI/CD",
];

const contacts = [
  {
    label: "Nice, France",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    label: "hichamgarrad21@gmail.com",
    href: "mailto:hichamgarrad21@gmail.com",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "linkedin.com/in/hicham-garrad",
    href: "https://linkedin.com/in/hicham-garrad",
    icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z",
  },
  {
    label: "github.com/GARRADHICHAM",
    href: "https://github.com/GARRADHICHAM",
    icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22",
  },
];

/** Counts up numeric stats ("11+") when they scroll into view. */
function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const match = value.match(/^(\d+)(.*)$/);
  const [display, setDisplay] = useState(match ? `0${match[2]}` : value);

  useEffect(() => {
    if (!inView || !match) return;
    const end = parseInt(match[1], 10);
    const controls = animate(0, end, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(`${Math.round(v)}${match[2]}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return <span ref={ref}>{display}</span>;
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="01" eyebrow="À propos" title="Ingénieur" highlight="IA & Data" />

        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14">
          {/* Left: bio, stats, contact */}
          <div className="space-y-6">
            <AnimatedSection delay={0.1}>
              <div className="glass rounded-3xl p-7 sm:p-8">
                <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                  Ingénieur IA &amp; Data diplômé d&apos;un{" "}
                  <span className="text-white font-semibold">M2 MIAGE IA Appliquée (UCA)</span>. Mon parcours
                  combine multi-agents LLM, data science et pipelines de données, expériences en startup,
                  multinationale et laboratoire, déploiements sur{" "}
                  <span className="text-white font-semibold">AWS, GCP et OVH</span>.
                </p>
                <p className="text-zinc-400 text-base leading-relaxed mt-4">
                  Je construis des systèmes intelligents end-to-end : de la collecte de données brutes
                  jusqu&apos;aux interfaces utilisateur, en passant par les pipelines ML et les agents LLM en
                  production.
                </p>

                <div className="mt-7 pt-6 border-t border-white/[0.06] grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {contacts.map((item) => {
                    const inner = (
                      <>
                        <span className="grid place-items-center w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-500 group-hover:text-sky-300 group-hover:border-sky-400/30 transition-colors flex-shrink-0">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={item.icon} />
                          </svg>
                        </span>
                        <span className="truncate">{item.label}</span>
                      </>
                    );
                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100 transition-colors min-w-0"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div key={item.label} className="group flex items-center gap-3 text-sm text-zinc-400 min-w-0">
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 auto-rows-fr gap-4">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={0.15 + i * 0.08} className="h-full">
                  <TiltCard max={14} containerClassName="h-full" className="glass rounded-2xl p-5 overflow-hidden">
                    <div
                      aria-hidden
                      className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br from-sky-500/20 to-violet-500/10 blur-2xl group-hover:scale-150 transition-transform duration-700"
                    />
                    <p
                      className={`relative font-display font-bold text-gradient ${
                        /^\d/.test(stat.value) ? "text-3xl sm:text-4xl" : "text-[15px] min-[400px]:text-lg sm:text-2xl py-2 sm:py-1"
                      }`}
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <StatValue value={stat.value} />
                    </p>
                    <p className="relative text-xs sm:text-sm text-zinc-400 mt-1.5 leading-snug">{stat.label}</p>
                  </TiltCard>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right: technical skills as a 3D logo cloud */}
          <AnimatedSection delay={0.15} direction="right">
            <div className="glass rounded-3xl p-6 sm:p-8 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] font-medium text-zinc-400 uppercase tracking-widest">
                  Compétences techniques
                </p>
                <span className="font-mono text-[11px] text-zinc-600">{"<stack />"}</span>
              </div>

              <div className="flex-1 flex flex-col justify-center py-2">
                <TechCloud />
              </div>

              <motion.div
                className="flex flex-wrap justify-center gap-2 pt-5 border-t border-white/[0.06]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.035, delayChildren: 0.3 } } }}
              >
                {concepts.map((item) => (
                  <motion.span
                    key={item}
                    variants={{
                      hidden: { opacity: 0, scale: 0.6, y: 8 },
                      visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 18 } },
                    }}
                    className="px-3 py-1 text-[12px] text-zinc-300 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-sky-400/40 hover:bg-sky-400/[0.08] hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
