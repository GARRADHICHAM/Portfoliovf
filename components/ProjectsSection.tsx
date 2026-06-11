"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";

type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  images?: string[];
  tags: string[];
  category: string;
  demo?: string;
};

const projects: Project[] = [
  {
    id: 21,
    title: "Serveur MCP pour API Hôtelière",
    desc: "Serveur MCP (TypeScript) orchestrant 5 tools d'intégration entre Claude AI et l'API hôtelière Thaïs. Gestion des réservations, disponibilités et tarifs en langage naturel. Architecture modulaire 4 couches.",
    img: "/MCP.png",
    tags: ["TypeScript", "MCP", "Claude AI", "API Integration", "Node.js"],
    category: "AI & LLM",
  },
  {
    id: 20,
    title: "Automated Investment Platform — ADK Multi-Agents",
    desc: "Plateforme orchestrant 6 agents LLM spécialisés (Gemini 2.5 Flash Lite) pour l'analyse des marchés financiers. REST API déployée sur Google Cloud Run avec CI/CD GitHub Actions, interface Next.js.",
    img: "/agents/agents1.png",
    images: ["/agents/agents1.png", "/agents/agents2.png", "/agents/agents3.png"],
    tags: ["Python", "Google ADK", "Gemini", "FastAPI", "Next.js", "Cloud Run"],
    category: "AI & LLM",
    demo: "https://investment-platform-mu.vercel.app/",
  },
  {
    id: 19,
    title: "Système de Recommandation Multi-Agents",
    desc: "Système de recommandation personnalisé utilisant des agents intelligents et des modèles ML pour e-commerce. Backend FastAPI + MongoDB, frontend Next.js.",
    img: "/sma.png",
    tags: ["Python", "FastAPI", "MongoDB", "Next.js", "Machine Learning"],
    category: "AI & LLM",
  },
  {
    id: 8,
    title: "Plant Disease Detection",
    desc: "Système de détection de maladies des plantes par IA, analyse d'images via microservice Computer Vision. Diagnostic rapide des problèmes sanitaires des cultures.",
    img: "/Plant.png",
    tags: ["React", "Node.js", "Computer Vision", "REST API"],
    category: "AI & LLM",
  },
  {
    id: 10,
    title: "Reconnaissance d'Émotions Faciales (CNN)",
    desc: "Système de reconnaissance d'émotions faciales en temps réel par CNN. Analyse des expressions à la volée via OpenCV et TensorFlow.",
    img: "/Emotion.png",
    tags: ["Python", "TensorFlow", "OpenCV", "CNN"],
    category: "AI & LLM",
  },
  {
    id: 9,
    title: "Pipeline Big Data — Prédiction de Churn",
    desc: "Pipeline end-to-end : ingestion Kafka, orchestration Airflow, stockage Data Warehouse et MySQL. Modèle ML de détection de churn via FastAPI, visualisation Power BI.",
    img: "/churn.png",
    tags: ["Python", "PySpark", "Kafka", "Airflow", "FastAPI", "Power BI"],
    category: "Data",
  },
  {
    id: 12,
    title: "Revenue Forecasting pour SaaS B2B",
    desc: "Modèle hybride ML + séries temporelles (XGBoost, Prophet) pour prédire le MRR mensuel. Visualisation interactive des scénarios via Streamlit.",
    img: "/sas.png",
    tags: ["Python", "XGBoost", "Prophet", "Streamlit", "FastAPI", "MongoDB"],
    category: "Data",
  },
  {
    id: 4,
    title: "E-commerce Data Analysis",
    desc: "Analyse complète de données e-commerce : comportement client, tendances de ventes et insights marché via analytics avancés.",
    img: "/ecom.png",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    category: "Data",
  },
  {
    id: 1,
    title: "City-Info — Application Android",
    desc: "Application Android de géolocalisation autour d'une ville, basée sur les points d'intérêts citoyens. Développée en Java.",
    img: "/City.png",
    tags: ["Java", "MySQL", "REST API", "Android"],
    category: "Full Stack",
  },
  {
    id: 2,
    title: "ORMVAO — Gestion des Formations",
    desc: "Application Android pour l'office régionale agricole d'Ouarzazate, gestion des formations au sein de l'organisation.",
    img: "/Discover_App.png",
    tags: ["Java", "Android", "SQLite", "Material Design"],
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Stock Management",
    desc: "Application desktop de gestion des stocks pour entrepôts, suivi complet des marchandises.",
    img: "/stcok.png",
    tags: ["Java", "Swing", "MySQL", "Desktop App"],
    category: "Full Stack",
  },
];

const filters = ["Tous", "AI & LLM", "Data", "Full Stack"];

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group cursor-pointer bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:bg-zinc-900 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/[0.07] transition-all duration-300 flex flex-col"
    >
      <div className="relative h-44 overflow-hidden bg-zinc-800 flex-shrink-0">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
        <div className="absolute top-3 right-3">
          <span className="text-xs px-2.5 py-1 bg-[#09090B]/80 border border-zinc-800 text-zinc-400 rounded-full backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-zinc-100 font-semibold text-sm leading-snug group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed flex-1 line-clamp-3">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs bg-zinc-800 border border-zinc-700 text-zinc-400 rounded-md"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 text-xs bg-zinc-800 border border-zinc-700 text-zinc-500 rounded-md">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Voir le projet
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const gallery = project.images?.length ? project.images : [project.img];
  const [imgIndex, setImgIndex] = useState(0);

  const prev = useCallback(
    () => setImgIndex((i) => (i - 1 + gallery.length) % gallery.length),
    [gallery.length]
  );
  const next = useCallback(
    () => setImgIndex((i) => (i + 1) % gallery.length),
    [gallery.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0C0C0F] border border-zinc-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Image / gallery */}
        <div className="relative bg-zinc-900 flex-shrink-0">
          <img
            src={gallery[imgIndex]}
            alt={project.title}
            className="w-full max-h-[45vh] object-contain"
          />

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-black/80 backdrop-blur-sm transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {gallery.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Image précédente"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 border border-zinc-700 text-zinc-300 hover:text-white backdrop-blur-sm transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Image suivante"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 border border-zinc-700 text-zinc-300 hover:text-white backdrop-blur-sm transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    aria-label={`Image ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      i === imgIndex ? "w-5 bg-blue-500" : "w-1.5 bg-zinc-600 hover:bg-zinc-500"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full font-medium">
              {project.category}
            </span>
          </div>

          <h3 className="text-zinc-100 font-bold text-xl leading-snug mb-3">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed mb-5">{project.desc}</p>

          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2.5">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-blue-500/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Voir la démo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeFilter === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative bg-[#09090B] py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-2">
            Projets
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-8">
            Ce que j&apos;ai construit
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 text-sm rounded-full border transition-all duration-200 font-medium ${
                  activeFilter === filter
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "bg-transparent border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
