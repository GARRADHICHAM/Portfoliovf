"use client";
import AnimatedSection from "./ui/AnimatedSection";

const stats = [
  { value: "4+", label: "Expériences pro" },
  { value: "11+", label: "Projets réalisés" },
  { value: "3", label: "De la donnée brute au système en production" },
  { value: "Oct 2026", label: "Disponible CDI" },
];

const techStack = [
  {
    category: "Langages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Java"],
  },
  {
    category: "IA & LLM",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "Google ADK", "RAG", "NLP", "Prompt Engineering"],
  },
  {
    category: "Data Engineering",
    items: ["PySpark", "Kafka", "Airflow", "Power BI", "ETL/ELT", "Data Warehouse"],
  },
  {
    category: "Dev & APIs",
    items: ["FastAPI", "Next.js", "Node.js", "Docker", "REST API", "Microservices"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (S3, EC2)", "GCP", "OVH", "GitHub Actions", "CI/CD"],
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#09090B] py-24 sm:py-32 overflow-hidden"
    >
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-2">
            À propos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-14">
            Ingénieur IA &amp; Data
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: bio, stats, contact */}
          <div className="space-y-10">
            <AnimatedSection delay={0.1}>
              <p className="text-zinc-400 text-base leading-relaxed">
                Ingénieur IA &amp; Data en fin de{" "}
                <span className="text-zinc-200 font-medium">M2 MIAGE IA Appliquée (UCA)</span>.
                Mon parcours combine multi-agents LLM, data science et pipelines de données —
                expériences en startup, multinationale et laboratoire, déploiements sur{" "}
                <span className="text-zinc-200 font-medium">AWS, GCP et OVH</span>.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed mt-4">
                Je construis des systèmes intelligents end-to-end : de la collecte de données
                brutes jusqu&apos;aux interfaces utilisateur, en passant par les pipelines ML et
                les agents LLM en production.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="group p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500/30 hover:bg-zinc-900 transition-all duration-200"
                  >
                    <p className="text-2xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors duration-200">{stat.value}</p>
                    <p className="text-sm text-zinc-500 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col gap-2.5">
                {[
                  {
                    label: "Nice, France",
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                  },
                  {
                    label: "hichamgarrad21@gmail.com",
                    href: "mailto:hichamgarrad21@gmail.com",
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    label: "linkedin.com/in/hicham-garrad",
                    href: "https://linkedin.com/in/hicham-garrad",
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    label: "github.com/GARRADHICHAM",
                    href: "https://github.com/GARRADHICHAM",
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                  },
                ].map((item, i) =>
                  item.href ? (
                    <a
                      key={i}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-200 transition-colors group"
                    >
                      <span className="text-zinc-600 group-hover:text-blue-400 transition-colors flex-shrink-0">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <div key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                      <span className="text-zinc-600 flex-shrink-0">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  )
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: tech stack */}
          <div className="space-y-6">
            {techStack.map((group, i) => (
              <AnimatedSection key={group.category} delay={0.1 + i * 0.07} direction="right">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2.5">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm text-zinc-300 bg-zinc-900/80 border border-zinc-800 rounded-full hover:border-blue-500/40 hover:text-zinc-100 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
