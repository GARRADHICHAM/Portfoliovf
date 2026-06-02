import { useState } from "react";

const experienceData = [
  {
    id: 0,
    title: "Ingénieur Data & IA",
    company: "CMQ e-ICC — Université Côte d'Azur, Campus Cannes",
    type: "Stage M2",
    date: "Avr 2026 – Sep 2026",
    status: "current",
    img: "/etl.jpg",
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
    img: "/sas.png",
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
    img: "/brest.png",
    bullets: [
      "Implémentation de modèles Deep Learning (CNN, U-Net, ResNet) sous TensorFlow/PyTorch pour la détection d'anomalies en imagerie médicale",
      "Développement d'une plateforme d'annotation web (FastAPI, Next.js, MongoDB) réduisant de 60% le temps d'annotation manuelle",
      "Déploiement de l'infrastructure sur AWS S3 avec Docker pour assurer la portabilité et la scalabilité",
    ],
    tags: ["TensorFlow", "PyTorch", "CNN", "U-Net", "FastAPI", "Next.js", "MongoDB", "AWS S3", "Docker"],
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "HPS — Hightech Payment Systems, Casablanca, Maroc",
    type: "Stage",
    date: "Mar 2023 – Juil 2023",
    status: "completed",
    img: "/Fraud.png",
    bullets: [
      "Développement de modèles ML (Scikit-learn) pour la détection d'anomalies et de fraudes financières sur datasets transactionnels",
      "Mise en place de pipelines PySpark permettant une identification 30% plus rapide des comportements suspects",
      "Feature engineering et optimisation de modèles pour la sécurisation des flux financiers",
    ],
    tags: ["Python", "Scikit-learn", "PySpark", "Machine Learning", "Fraud Detection"],
  },
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-40 h-40 sm:w-72 sm:h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-40 h-40 sm:w-72 sm:h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 py-8 sm:py-16">
        {/* Header */}
        <div className="pl-4 sm:pl-[80px] flex flex-col items-start mb-10 sm:mb-16">
          <h1 className="flex flex-wrap items-end gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
              Work
            </span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
              Experience
            </span>
          </h1>
          <div className="h-1 w-20 sm:w-32 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">

          {/* ── CENTER LINE (lg+) ── */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-orange-400/60 to-transparent rounded-full"></div>

          {/* ── LEFT LINE (mobile / md) ── */}
          <div className="lg:hidden absolute left-5 sm:left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-orange-400/60 to-transparent rounded-full"></div>

          <div className="space-y-10 sm:space-y-14 lg:space-y-16">
            {experienceData.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={exp.id} className="relative">

                  {/* ════════════════════════════════
                      DESKTOP: alternating layout
                  ════════════════════════════════ */}
                  <div className="hidden lg:flex items-start gap-0">

                    {/* Left slot */}
                    <div className="w-5/12 pr-10">
                      {isLeft ? (
                        <TimelineCard exp={exp} onClick={() => setSelectedExp(exp)} />
                      ) : (
                        <DateBlock exp={exp} align="right" />
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="w-2/12 flex flex-col items-center pt-6">
                      <TimelineDot exp={exp} />
                    </div>

                    {/* Right slot */}
                    <div className="w-5/12 pl-10">
                      {isLeft ? (
                        <DateBlock exp={exp} align="left" />
                      ) : (
                        <TimelineCard exp={exp} onClick={() => setSelectedExp(exp)} />
                      )}
                    </div>
                  </div>

                  {/* ════════════════════════════════
                      MOBILE / MD: left-side timeline
                  ════════════════════════════════ */}
                  <div className="lg:hidden flex items-start gap-4 sm:gap-6">
                    {/* Dot */}
                    <div className="flex flex-col items-center flex-shrink-0 pt-5 pl-1 sm:pl-3">
                      <TimelineDot exp={exp} />
                    </div>
                    {/* Card */}
                    <div className="flex-1 min-w-0">
                      <TimelineCard exp={exp} onClick={() => setSelectedExp(exp)} />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedExp && (
        <ExperienceModal exp={selectedExp} onClose={() => setSelectedExp(null)} />
      )}
    </div>
  );
};

/* ── Dot ── */
const TimelineDot = ({ exp }) => (
  <div className="relative flex items-center justify-center">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-teal-400 to-orange-400 p-0.5 shadow-lg z-10">
      <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
        {exp.status === "current" ? (
          <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full animate-pulse"></div>
        ) : (
          <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        )}
      </div>
    </div>
    {exp.status === "current" && (
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full blur opacity-60 animate-pulse"></div>
    )}
  </div>
);

/* ── Date block shown on the opposite side (desktop only) ── */
const DateBlock = ({ exp, align }) => (
  <div className={`pt-6 flex flex-col gap-1 ${align === "right" ? "items-end text-right" : "items-start text-left"}`}>
    <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-full">
      {exp.type}
    </span>
    <p className="text-gray-300 text-sm font-semibold mt-1">{exp.date}</p>
    <p className="text-gray-400 text-xs">{exp.company}</p>
    {exp.status === "current" && (
      <span className="mt-1 px-2 py-0.5 text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 rounded-full animate-pulse">
        En cours
      </span>
    )}
  </div>
);

/* ── Card ── */
const TimelineCard = ({ exp, onClick }) => (
  <div
    onClick={onClick}
    className="group cursor-pointer bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden hover:bg-white/[0.14] hover:border-white/30 hover:scale-[1.02] transition-all duration-400"
  >
    {/* Image */}
    <div className="relative overflow-hidden h-44 sm:h-52">
      <img
        src={exp.img}
        alt={exp.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Badges on image */}
      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
        <span className="px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-full backdrop-blur-sm">
          {exp.type}
        </span>
        {exp.status === "current" && (
          <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-500/90 text-white rounded-full animate-pulse backdrop-blur-sm">
            En cours
          </span>
        )}
      </div>

      {/* Date bottom-right */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1">
        <svg className="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
        </svg>
        <span className="text-gray-300 text-xs">{exp.date}</span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/80 to-orange-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white text-center">
          <svg className="w-8 h-8 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.75.75 0 0 1 1.06-1.06l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0z" />
          </svg>
          <p className="font-semibold text-sm">View Details</p>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-4 sm:p-5 space-y-3">
      <div>
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
          {exp.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 mt-0.5">{exp.company}</p>
      </div>

      {/* First bullet as preview */}
      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
        {exp.bullets[0]}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 sm:gap-1.5">
        {exp.tags.slice(0, 5).map((tag, i) => (
          <span key={i} className="px-2 py-0.5 text-xs font-medium bg-white/10 text-gray-300 rounded-lg border border-white/20">
            {tag}
          </span>
        ))}
        {exp.tags.length > 5 && (
          <span className="px-2 py-0.5 text-xs font-medium bg-white/10 text-gray-400 rounded-lg border border-white/20">
            +{exp.tags.length - 5}
          </span>
        )}
      </div>
    </div>
  </div>
);

/* ── Modal ── */
const ExperienceModal = ({ exp, onClose }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
    <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start p-4 sm:p-6 border-b border-white/10">
        <div className="flex-1 pr-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2 sm:px-3 py-1 text-xs font-semibold bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-full">
              {exp.type}
            </span>
            {exp.status === "current" && (
              <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 rounded-full animate-pulse">
                En cours
              </span>
            )}
          </div>
          <h2 className="text-lg sm:text-2xl font-bold text-white leading-tight">{exp.title}</h2>
          <p className="text-sm text-gray-400 mt-1">{exp.company}</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2 flex-shrink-0">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="overflow-y-auto max-h-[calc(95vh-100px)] sm:max-h-[calc(90vh-100px)]">
        {/* Image */}
        <div className="relative overflow-hidden bg-black flex items-center justify-center" style={{ minHeight: "200px", maxHeight: "38vh" }}>
          <img src={exp.img} alt={exp.title} className="max-w-full max-h-full object-contain" style={{ maxHeight: "38vh" }} />
        </div>

        {/* Details */}
        <div className="p-4 sm:p-6 space-y-5">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
            </svg>
            <span>{exp.date}</span>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Missions</h3>
            <ul className="space-y-3">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-orange-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm leading-relaxed">{bullet}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {exp.tags.map((tag, i) => (
                <span key={i} className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-white/10 text-gray-300 rounded-lg border border-white/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
