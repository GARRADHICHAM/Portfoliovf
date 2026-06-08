"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";

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
    date: "Sep 2025 – présent",
    status: "current",
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

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="relative bg-[#09090B] py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-2">
            Parcours
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-16">
            Expérience &amp; Formation
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Work experience: 2/3 */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.1}>
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-8">
                Expérience professionnelle
              </h3>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-0 w-px bg-gradient-to-b from-blue-500 via-zinc-800 to-transparent" />

              <div className="space-y-0">
                {experiences.map((exp, i) => (
                  <AnimatedSection key={exp.id} delay={0.15 + i * 0.07}>
                    <div className="relative flex gap-6 pb-10 last:pb-0">
                      {/* Timeline dot */}
                      <div className="relative z-10 flex-shrink-0 mt-1">
                        {exp.status === "current" ? (
                          <div className="relative w-4 h-4">
                            <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping" />
                            <div className="relative w-4 h-4 bg-blue-500 rounded-full ring-2 ring-[#09090B]" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 bg-[#09090B] border-2 border-zinc-700 rounded-full ring-2 ring-[#09090B]" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <button
                          onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                          className="w-full text-left group"
                        >
                          <div className="flex items-start justify-between gap-3 flex-wrap">
                            <div>
                              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                                <h3 className="text-zinc-100 font-semibold text-sm group-hover:text-blue-400 transition-colors">
                                  {exp.title}
                                </h3>
                                {exp.status === "current" && (
                                  <span className="text-xs px-2 py-0.5 bg-blue-500/15 text-blue-400 border border-blue-500/30 rounded-full">
                                    En cours
                                  </span>
                                )}
                              </div>
                              <p className="text-zinc-500 text-sm">{exp.company}</p>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="text-xs px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-full whitespace-nowrap">
                                {exp.type}
                              </span>
                              <span className="text-xs text-zinc-600 whitespace-nowrap hidden sm:block">
                                {exp.date}
                              </span>
                              <svg
                                className={`w-4 h-4 text-zinc-600 flex-shrink-0 transition-transform duration-200 ${
                                  expanded === exp.id ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                          <p className="text-xs text-zinc-600 mt-0.5 sm:hidden">{exp.date}</p>
                        </button>

                        <AnimatePresence>
                          {expanded === exp.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 space-y-4">
                                <ul className="space-y-2.5">
                                  {exp.bullets.map((bullet, bi) => (
                                    <li key={bi} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                                      <div className="w-1 h-1 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                                      {bullet}
                                    </li>
                                  ))}
                                </ul>
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                  {exp.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2 py-0.5 text-xs bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-md"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* Education: 1/3 */}
          <div>
            <AnimatedSection delay={0.1}>
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-8">
                Formation
              </h3>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-0 w-px bg-gradient-to-b from-zinc-700 to-transparent" />

              <div className="space-y-0">
                {education.map((edu, i) => (
                  <AnimatedSection key={i} delay={0.2 + i * 0.07}>
                    <div className="relative flex gap-6 pb-8 last:pb-0">
                      <div className="relative z-10 flex-shrink-0 mt-1">
                        {edu.status === "current" ? (
                          <div className="relative w-4 h-4">
                            <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping" />
                            <div className="relative w-4 h-4 bg-blue-500 rounded-full ring-2 ring-[#09090B]" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 bg-[#09090B] border-2 border-zinc-700 rounded-full ring-2 ring-[#09090B]" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2 flex-wrap mb-0.5">
                          <h4 className="text-zinc-200 font-medium text-sm leading-snug">
                            {edu.title}
                          </h4>
                          {edu.status === "current" && (
                            <span className="text-xs px-2 py-0.5 bg-blue-500/15 text-blue-400 border border-blue-500/30 rounded-full flex-shrink-0">
                              En cours
                            </span>
                          )}
                        </div>
                        <p className="text-zinc-500 text-xs leading-relaxed">{edu.institution}</p>
                        <p className="text-zinc-600 text-xs mt-0.5">{edu.date}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
