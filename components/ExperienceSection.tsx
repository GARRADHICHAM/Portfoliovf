"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";

const experiences = [
  {
    id: 0,
    title: "Ingénieur Data & IA",
    company: "CMQ e-ICC — Université Côte d'Azur, Campus Cannes",
    type: "Stage M2",
    date: "Avr 2026 – Sep 2026",
    status: "current",
    bullets: [
      "Conception d'un pipeline ETL end-to-end intégrant extraction open data, scraping web et déduplication sémantique NLP pour structurer les compétences, formations, établissements et métiers ICC en région PACA",
      "Modélisation et déploiement d'une base MySQL relationnelle alimentée par un pipeline de mise à jour annuel automatisé",
      "Développement d'une API REST FastAPI et d'une interface cartographique Next.js",
      "Intégration d'un chatbot RAG et déploiement de l'architecture complète sur VPS OVH via CI/CD GitHub Actions",
    ],
    tags: ["Python", "FastAPI", "Next.js", "MySQL", "NLP", "RAG", "Docker", "GitHub Actions"],
    link: "https://cartographie.campus-industriesculturellescreatives-sud.fr/",
  },
  {
    id: 1,
    title: "Data Scientist Freelance",
    company: "SoonGO, Paris",
    type: "Freelance",
    date: "Jan 2026 – Mar 2026",
    status: "completed",
    bullets: [
      "Conception et livraison en autonomie de deux pipelines ML end-to-end : scoring d'éligibilité à l'électrification de flotte de véhicules et estimation des coûts de location",
    ],
    tags: ["Python", "Scikit-learn", "Machine Learning", "FastAPI"],
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Labo Elite — Faculté des Sciences El Jadida, Maroc",
    type: "Stage",
    date: "Jan 2025 – Juil 2025",
    status: "completed",
    bullets: [
      "Implémentation de modèles Deep Learning (CNN, U-Net, ResNet) sous TensorFlow/PyTorch pour la détection d'anomalies en imagerie médicale",
      "Développement d'une plateforme d'annotation web (FastAPI, Next.js, MongoDB) réduisant de 60% le temps d'annotation manuelle",
      "Déploiement de l'infrastructure sur AWS S3 avec Docker pour assurer la portabilité et la scalabilité",
    ],
    tags: ["TensorFlow", "PyTorch", "CNN", "FastAPI", "Next.js", "MongoDB", "AWS S3", "Docker"],
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "HPS — Hightech Payment Systems, Casablanca, Maroc",
    type: "Stage",
    date: "Mar 2023 – Juil 2023",
    status: "completed",
    bullets: [
      "Développement de modèles ML (Scikit-learn) pour la détection d'anomalies et de fraudes financières sur datasets transactionnels",
      "Mise en place de pipelines PySpark permettant une identification 30% plus rapide des comportements suspects",
      "Feature engineering et optimisation de modèles pour la sécurisation des flux financiers",
    ],
    tags: ["Python", "Scikit-learn", "PySpark", "Machine Learning", "Fraud Detection"],
  },
];

const education = [
  {
    title: "Master 2 MIAGE — IA Appliquée",
    institution: "Université Côte d'Azur, Biot",
    date: "Sep 2025 – Sep 2026",
    status: "completed",
  },
  {
    title: "Master — Business Intelligence & Big Data Analytics",
    institution: "Université Chouaib Doukkali",
    date: "2023 – 2025",
    status: "completed",
  },
  {
    title: "Licence Pro — Big Data (Mention Bien)",
    institution: "Université Sultan Moulay Sliman",
    date: "2022 – 2023",
    status: "completed",
  },
  {
    title: "DUT Génie Informatique (Mention Bien)",
    institution: "Université Sultan Moulay Sliman",
    date: "2020 – 2022",
    status: "completed",
  },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function Node({ current }: { current: boolean }) {
  return current ? (
    <span className="relative flex w-4 h-4">
      <span className="absolute inset-0 rounded-full bg-sky-400/40 animate-ping" />
      <span className="relative block w-4 h-4 rounded-full bg-gradient-to-br from-sky-300 to-violet-500 ring-4 ring-sky-400/15 shadow-[0_0_18px_rgba(56,189,248,0.8)]" />
    </span>
  ) : (
    <span className="block w-4 h-4 rounded-full bg-[#050508] border-2 border-sky-400/50 ring-4 ring-[#050508]" />
  );
}

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="02" eyebrow="Parcours" title="Expérience &" highlight="Formation" />

        <div className="grid lg:grid-cols-3 gap-14 lg:gap-12">
          {/* Work experience */}
          <div className="lg:col-span-2">
            <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-8">
              Expérience professionnelle
            </p>

            <div ref={timelineRef} className="relative">
              {/* Track + scroll-drawn glowing line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.06]" />
              <motion.div
                style={{ scaleY: lineScale }}
                className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-sky-400 via-blue-500 to-violet-500 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
              />

              <div className="space-y-6">
                {experiences.map((exp, i) => {
                  const open = expanded === exp.id;
                  return (
                    <AnimatedSection key={exp.id} delay={0.05 + i * 0.06} direction="right">
                      <div className="relative flex gap-6">
                        <div className="relative z-10 flex-shrink-0 mt-7">
                          <Node current={exp.status === "current"} />
                        </div>

                        <TiltCard
                          max={4}
                          containerClassName="flex-1 min-w-0"
                          className={`glass rounded-2xl transition-colors duration-300 ${
                            open ? "border-sky-400/25 bg-zinc-900/60" : "hover:border-white/[0.14]"
                          }`}
                        >
                          <button
                            onClick={() => setExpanded(open ? null : exp.id)}
                            aria-expanded={open}
                            className="w-full text-left p-5 sm:p-6"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="min-w-0">
                                <p className="font-mono text-[11px] text-sky-300/80 mb-1.5">{exp.date}</p>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h3 className="font-display text-lg font-semibold text-zinc-50">{exp.title}</h3>
                                  {exp.status === "current" && (
                                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-sky-400/10 text-sky-300 border border-sky-400/30">
                                      En cours
                                    </span>
                                  )}
                                </div>
                                <p className="text-zinc-400 text-sm mt-0.5">{exp.company}</p>
                              </div>
                              <div className="flex items-center gap-3 flex-shrink-0">
                                <span className="hidden sm:inline text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300">
                                  {exp.type}
                                </span>
                                <motion.span
                                  animate={{ rotate: open ? 45 : 0 }}
                                  transition={{ duration: 0.3, ease: EASE }}
                                  className="grid place-items-center w-8 h-8 rounded-full border border-white/[0.1] text-zinc-300"
                                >
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                                  </svg>
                                </motion.span>
                              </div>
                            </div>
                          </button>

                          <AnimatePresence initial={false}>
                            {open && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: EASE }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 sm:px-6 pb-6 space-y-4">
                                  <ul className="space-y-2.5">
                                    {exp.bullets.map((bullet, bi) => (
                                      <motion.li
                                        key={bi}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + bi * 0.06 }}
                                        className="flex gap-3 text-sm text-zinc-300 leading-relaxed"
                                      >
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-sky-400 to-violet-400 flex-shrink-0" />
                                        {bullet}
                                      </motion.li>
                                    ))}
                                  </ul>
                                  <div className="flex flex-wrap gap-1.5">
                                    {exp.tags.map((tag) => (
                                      <span key={tag} className="chip">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                  {exp.link && (
                                    <a
                                      href={exp.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 text-sm text-sky-300 hover:text-sky-200 font-medium"
                                    >
                                      Voir la plateforme
                                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7v9" />
                                      </svg>
                                    </a>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </TiltCard>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-8">Formation</p>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <AnimatedSection key={edu.title} delay={0.1 + i * 0.08} direction="left">
                  <TiltCard max={10} className="glass rounded-2xl p-5 overflow-hidden">
                    <span
                      aria-hidden
                      className="absolute right-3 top-1 font-display text-6xl font-bold text-white/[0.03] select-none"
                    >
                      0{i + 1}
                    </span>
                    <div className="relative flex items-start gap-4" style={{ transform: "translateZ(20px)" }}>
                      <div className="mt-1">
                        <Node current={edu.status === "current"} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] text-sky-300/80 mb-1">{edu.date}</p>
                        <h4 className="text-zinc-100 font-semibold text-sm leading-snug">{edu.title}</h4>
                        <p className="text-zinc-500 text-xs mt-1 leading-relaxed">{edu.institution}</p>
                        {edu.status === "current" && (
                          <span className="inline-block mt-2 text-[11px] px-2 py-0.5 rounded-full bg-sky-400/10 text-sky-300 border border-sky-400/30">
                            En cours
                          </span>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
