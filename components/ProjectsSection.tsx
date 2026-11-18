"use client";
import { useState, useEffect, useCallback, forwardRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";

type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  images?: string[];
  tags: string[];
  category: string;
  demo?: string;
  /** Button text for `demo` in the modal. Defaults to "Voir la démo". */
  demoLabel?: string;
  /** Mobile app store links. */
  stores?: { apple?: string; play?: string };
  /** Brand assets: when present the card gets a branded cover. */
  brand?: { logo: string; mark: string; screens: string[] };
  /** Optional role line, e.g. for products co-founded or led. */
  role?: string;
  /** Optional detail sections shown in the project modal. */
  highlights?: { title: string; items: string[] }[];
  /** Optional per-project accent color scheme. Defaults to "blue". */
  accent?: "blue" | "violet";
};

const ACCENTS = {
  blue: {
    ring: "hover:border-sky-400/30",
    glow: "from-sky-500/25",
    link: "text-sky-300 hover:text-sky-200",
    badge: "bg-sky-400/10 border-sky-400/30 text-sky-300",
    dotActive: "bg-sky-400",
    button: "from-blue-600 to-sky-500 shadow-blue-500/25",
  },
  violet: {
    ring: "hover:border-violet-400/30",
    glow: "from-violet-500/30",
    link: "text-violet-300 hover:text-violet-200",
    badge: "bg-violet-400/10 border-violet-400/30 text-violet-300",
    dotActive: "bg-violet-400",
    button: "from-violet-600 to-fuchsia-500 shadow-violet-500/25",
  },
} as const;

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const projects: Project[] = [
  {
    id: 23,
    title: "Tali3a — Réseau social de l'humour marocain",
    role: "Co-fondateur · Product Designer & Développeur Frontend",
    desc: "Co-fondateur d'un réseau social (web & mobile) dédié à l'humour et à la culture marocaine : memes, vidéos courtes (Clips) et posts texte (Zips) dans plus de 45 sections thématiques. Product design sur Figma, développement de l'application web (Next.js, React, chat temps réel) et contribution à la stratégie produit et marketing.",
    img: "/tali3a/web/webapp.webp",
    images: [
      "/tali3a/web/webapp.webp",
      "/tali3a/web/intro.webp",
      "/tali3a/web/feed.webp",
      "/tali3a/web/reels.webp",
      "/tali3a/web/zips.webp",
      "/tali3a/web/section.webp",
      "/tali3a/web/ranked.webp",
      "/tali3a/web/chat.webp",
      "/tali3a/web/profile.webp",
    ],
    tags: ["Figma", "Next.js", "React", "TypeScript", "Tailwind CSS", "WebSockets"],
    category: "Full Stack",
    brand: {
      logo: "/tali3a/web/logo-full.webp",
      mark: "/tali3a/web/logo-small.webp",
      screens: ["/tali3a/web/feed.webp", "/tali3a/web/reels.webp", "/tali3a/web/chat.webp"],
    },
    demo: "https://tali3a.com",
    demoLabel: "Visiter tali3a.com",
    stores: {
      apple: "https://apps.apple.com/fr/app/tali3a/id6670433850?l=en-GB",
      play: "https://play.google.com/store/apps/details?id=com.tali3a.app&pcampaignid=web_share",
    },
    highlights: [
      {
        title: "Produit & design",
        items: [
          "Définition de la vision produit et des fonctionnalités clés avec l'équipe fondatrice : feeds, sections, Clips, classements, messagerie, et engagement (upvotes, vues, suggestions).",
          "Conception des interfaces web et mobile sur Figma, des wireframes aux maquettes haute fidélité, avec une identité visuelle cohérente sur les deux plateformes.",
        ],
      },
      {
        title: "Développement web",
        items: [
          "Application web en Next.js et React : feed responsive, profils, sections, recherche, thèmes clair et sombre.",
          "Chat temps réel sur WebSockets (messages privés, groupes, sections, médias et messages vocaux, présence, accusés de lecture) et expérience vidéo verticale plein écran.",
          "Localisation en anglais, français et arabe ; intégration d'une dizaine de microservices backend via REST et WebSockets.",
        ],
      },
      {
        title: "Growth & marketing",
        items: [
          "Contribution à la stratégie go-to-market et aux initiatives de croissance : contenu et réseaux sociaux, acquisition d'utilisateurs, promotion sur les stores.",
          "Fonctionnalités de croissance intégrées au produit : aperçus de liens partageables pour WhatsApp et Facebook, promotion de l'app mobile sur le web, recommandations d'utilisateurs.",
        ],
      },
    ],
  },
  {
    id: 22,
    title: "EthicAI — AI Ethics Auditor",
    desc: "Extension VS Code d'audit éthique automatisé pour modèles IA : biais, explicabilité SHAP, robustesse et conformité EU AI Act (12 articles) en 30 secondes, 100% en local. Architecture TypeScript ↔ Python en streaming NDJSON, moteur Fairlearn/SHAP, rapports PDF générés via ReportLab.",
    img: "/ethicai/ethic1.png",
    images: ["/ethicai/ethic1.png", "/ethicai/ethic2.png", "/ethicai/ethic3.png", "/ethicai/ethic4.png"],
    tags: ["TypeScript", "Python", "VS Code API", "Fairlearn", "SHAP", "Firebase", "Next.js", "ReportLab"],
    category: "AI & LLM",
    demo: "https://ethic-ai-front.vercel.app/",
    accent: "violet",
  },
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

const ArrowIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7v9" />
  </svg>
);

const STORE_ICONS = {
  apple:
    "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701",
  play: "M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z",
} as const;

const STORES = [
  { key: "apple", label: "App Store", caption: "Télécharger sur" },
  { key: "play", label: "Google Play", caption: "Disponible sur" },
] as const;

const StoreIcon = ({ store, className = "w-3.5 h-3.5" }: { store: keyof typeof STORE_ICONS; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d={STORE_ICONS[store]} />
  </svg>
);

/** Small logo tile shown before a branded project's title. */
const BrandMark = ({ src, className = "w-8 h-8" }: { src: string; className?: string }) => (
  <span className={`inline-grid place-items-center flex-shrink-0 rounded-xl bg-[#0b1a4a] border border-[#1565e0]/40 shadow-lg shadow-[#1565e0]/20 ${className}`}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt="" className="w-[78%] h-[78%] object-contain" />
  </span>
);

/** Branded cover: logo on the brand colour with app screens fanned out in 3D. */
function BrandCover({ brand, title }: { brand: NonNullable<Project["brand"]>; title: string }) {
  const fan = [
    { left: "57%", rot: -10, hover: "group-hover:-rotate-[18deg] group-hover:-translate-x-3", z: 10 },
    { left: "70.5%", rot: 0, hover: "group-hover:-translate-y-3", z: 20 },
    { left: "84%", rot: 10, hover: "group-hover:rotate-[18deg] group-hover:translate-x-3", z: 10 },
  ];
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(110% 90% at 0% 0%, #1565e0 0%, #0b2a7a 38%, #08102e 70%, #060814 100%)",
      }}
    >
      {/* subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "linear-gradient(to right, black, transparent 70%)",
          WebkitMaskImage: "linear-gradient(to right, black, transparent 70%)",
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={brand.logo}
        alt={title}
        className="absolute left-[6%] top-1/2 -translate-y-1/2 w-[34%] max-w-[230px] drop-shadow-[0_8px_24px_rgba(21,101,224,0.45)] transition-transform duration-700 group-hover:scale-105"
      />
      {brand.screens.slice(0, 3).map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt=""
          loading="lazy"
          style={{ left: fan[i].left, zIndex: fan[i].z, transform: `translateX(-50%) rotate(${fan[i].rot}deg)` }}
          className={`absolute bottom-[7%] w-[25%] sm:bottom-[10%] sm:w-[30%] rounded-[0.9rem] border border-white/15 shadow-2xl shadow-black/60 transition-transform duration-700 ease-out ${fan[i].hover}`}
        />
      ))}
    </div>
  );
}

// forwardRef: AnimatePresence (mode="popLayout") needs a ref on each card
// to measure it while it animates out.
const ProjectCard = forwardRef<
  HTMLDivElement,
  { project: Project; index: number; featured: boolean; onClick: () => void }
>(function ProjectCard({ project, index, featured, onClick }, ref) {
  const accent = ACCENTS[project.accent ?? "blue"];
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40, rotateX: 18 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: Math.min(index, 6) * 0.05, ease: EASE }}
      className={featured ? "sm:col-span-2" : ""}
      style={{ perspective: 1200 }}
    >
      <TiltCard
        max={featured ? 5 : 8}
        onClick={onClick}
        className={`glass rounded-3xl overflow-hidden cursor-pointer flex flex-col ${accent.ring} transition-colors duration-300 ${
          featured ? "sm:flex-row" : ""
        }`}
      >
        {/* Colour bloom on hover */}
        <div
          aria-hidden
          className={`absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br ${accent.glow} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div
          className={`relative overflow-hidden bg-zinc-900 flex-shrink-0 ${
            featured ? "h-56 sm:h-auto sm:w-[55%] sm:min-h-[320px]" : "h-48"
          }`}
        >
          {project.brand ? (
            <BrandCover brand={project.brand} title={project.title} />
          ) : (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 via-transparent to-transparent" />
            </>
          )}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="font-mono text-[10px] px-2 py-1 rounded-full bg-black/50 backdrop-blur border border-white/10 text-zinc-300">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-black/50 backdrop-blur border border-white/10 text-zinc-200">
              {project.category}
            </span>
          </div>
          {featured && (
            <span className={`absolute bottom-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${accent.badge}`}>
              ★ Projet phare
            </span>
          )}
        </div>

        <div className="relative p-6 flex flex-col flex-1 gap-3" style={{ transform: "translateZ(30px)" }}>
          <h3
            className={`font-display font-semibold text-zinc-50 leading-snug flex items-start gap-3 ${
              featured ? "text-2xl" : "text-lg"
            }`}
          >
            {project.brand && <BrandMark src={project.brand.mark} className="w-9 h-9 mt-0.5" />}
            <span>{project.title}</span>
          </h3>
          {project.role && (
            <p className={`-mt-1 font-mono text-[11px] leading-snug ${accent.link.split(" ")[0]}`}>{project.role}</p>
          )}
          <p className={`text-zinc-400 text-sm leading-relaxed flex-1 ${featured ? "line-clamp-5" : "line-clamp-3"}`}>
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, featured ? 6 : 4).map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
            {project.tags.length > (featured ? 6 : 4) && (
              <span className="chip text-zinc-500">+{project.tags.length - (featured ? 6 : 4)}</span>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">Voir les détails</span>
            <div className="flex items-center gap-3">
              {STORES.map(({ key, label }) =>
                project.stores?.[key] ? (
                  <a
                    key={key}
                    href={project.stores[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`${project.title} sur ${label}`}
                    title={label}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <StoreIcon store={key} />
                  </a>
                ) : null,
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`inline-flex items-center gap-1 text-xs font-semibold ${accent.link} transition-colors`}
                >
                  Voir le projet
                  <ArrowIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
});

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const accent = ACCENTS[project.accent ?? "blue"];
  const gallery = project.images?.length ? project.images : [project.img];
  const [[imgIndex, dir], setImg] = useState<[number, number]>([0, 0]);

  const go = useCallback(
    (step: number) => setImg(([i]) => [(i + step + gallery.length) % gallery.length, step]),
    [gallery.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, go]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      style={{ perspective: 1400 }}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        initial={{ opacity: 0, rotateX: 20, y: 60, scale: 0.92 }}
        animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
        exit={{ opacity: 0, rotateX: -12, y: 40, scale: 0.95 }}
        transition={{ duration: 0.5, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong rounded-3xl shadow-2xl shadow-black/60 max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div className="relative bg-black/40 flex-shrink-0 overflow-hidden">
          <div className="relative h-[42vh] max-h-[420px]">
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                key={imgIndex}
                src={gallery[imgIndex]}
                alt={`${project.title} — ${imgIndex + 1}`}
                custom={dir}
                initial={{ opacity: 0, x: dir * 80, rotateY: dir * 18 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: dir * -80, rotateY: dir * -18 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </AnimatePresence>
          </div>

          <button
            onClick={onClose}
            aria-label="Fermer"
            className="absolute top-3 right-3 w-10 h-10 grid place-items-center rounded-full bg-black/60 border border-white/10 text-zinc-200 hover:text-white hover:rotate-90 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {gallery.length > 1 && (
            <>
              {[
                { step: -1, label: "Image précédente", d: "M15 19l-7-7 7-7", pos: "left-3" },
                { step: 1, label: "Image suivante", d: "M9 5l7 7-7 7", pos: "right-3" },
              ].map((b) => (
                <button
                  key={b.step}
                  onClick={() => go(b.step)}
                  aria-label={b.label}
                  className={`absolute ${b.pos} top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-black/60 border border-white/10 text-zinc-200 hover:text-white hover:scale-110 transition-all`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={b.d} />
                  </svg>
                </button>
              ))}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImg([i, i > imgIndex ? 1 : -1])}
                    aria-label={`Image ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === imgIndex ? `w-6 ${accent.dotActive}` : "w-1.5 bg-zinc-600 hover:bg-zinc-400"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto">
          <span className={`inline-block text-xs px-2.5 py-1 border rounded-full font-medium mb-3 ${accent.badge}`}>
            {project.category}
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-zinc-50 leading-tight mb-3 flex items-center gap-3">
            {project.brand && <BrandMark src={project.brand.mark} className="w-11 h-11" />}
            <span>{project.title}</span>
          </h3>
          {project.role && (
            <p className={`font-mono text-xs mb-3 ${accent.link.split(" ")[0]}`}>{project.role}</p>
          )}
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">{project.desc}</p>

          {project.highlights?.map((h, hi) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + hi * 0.08 }}
              className="mb-6"
            >
              <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-3">{h.title}</p>
              <ul className="space-y-2">
                {h.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-sky-400 to-violet-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-3">Technologies</p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.03 }}
                className="chip"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold bg-gradient-to-r shadow-lg hover:brightness-110 transition ${accent.button}`}
              >
                {project.demoLabel ?? "Voir la démo"}
                <ArrowIcon className="w-4 h-4" />
              </a>
            )}
            {STORES.map(({ key, label, caption }) =>
              project.stores?.[key] ? (
                <a
                  key={key}
                  href={project.stores[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 pl-3.5 pr-4 py-1.5 rounded-xl bg-black border border-white/15 text-white hover:border-white/40 hover:bg-zinc-900 transition-colors"
                >
                  <StoreIcon store={key} className="w-5 h-5" />
                  <span className="flex flex-col leading-none text-left">
                    <span className="text-[9px] text-zinc-400">{caption}</span>
                    <span className="text-sm font-semibold mt-0.5">{label}</span>
                  </span>
                </a>
              ) : null,
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const filtered =
    activeFilter === "Tous" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading index="03" eyebrow="Projets" title="Ce que j'ai" highlight="construit" className="" />

          <div className="glass inline-flex gap-0.5 sm:gap-1 p-1 rounded-full self-start lg:self-end max-w-full overflow-x-auto">
            {filters.map((filter) => {
              const active = activeFilter === filter;
              const count =
                filter === "Tous" ? projects.length : projects.filter((p) => p.category === filter).length;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-3 sm:px-4 py-2 text-[13px] sm:text-sm whitespace-nowrap rounded-full font-medium transition-colors ${
                    active ? "text-white" : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg shadow-blue-500/25"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">
                    {filter}
                    <span className={`ml-1.5 font-mono text-[10px] ${active ? "text-white/70" : "text-zinc-600"}`}>
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                featured={i === 0 && activeFilter === "Tous"}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Portal to <body>: <main> is its own stacking context below the navbar */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
          </AnimatePresence>,
          document.body,
        )}
    </section>
  );
}
