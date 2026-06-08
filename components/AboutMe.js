import React from "react";
import { useInView } from "react-intersection-observer";

const specialties = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI & LLM Engineering",
    desc: "Multi-agent systems, RAG architectures, LangChain, Google ADK, prompt engineering and production LLM deployments.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7zm0 5h16M9 4v16" />
      </svg>
    ),
    title: "Data Engineering",
    desc: "End-to-end ETL/ELT pipelines, Apache Spark, Kafka, Airflow, data warehousing and cloud infrastructure (AWS, GCP).",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Full Stack Development",
    desc: "REST APIs with FastAPI & Node.js, Next.js frontends, Docker microservices and CI/CD via GitHub Actions.",
  },
];

const contacts = [
  {
    label: "Location",
    value: "Nice, France",
    href: null,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+33 6 12 79 89 24",
    href: "tel:+33612798924",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "hichamgarrad21@gmail.com",
    href: "mailto:hichamgarrad21@gmail.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hicham-garrad",
    href: "https://www.linkedin.com/in/hicham-garrad",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/GARRADHICHAM",
    href: "https://github.com/GARRADHICHAM",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

const AboutMe = () => {
  const { ref: topRef, inView: topVisible } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: cardsRef, inView: cardsVisible } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: contactRef, inView: contactVisible } = useInView({ threshold: 0.05, triggerOnce: true });

  const fadeUp = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-16 sm:py-20">

      {/* Gradient leading edge — blends Hero into About Me as it slides over */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 via-slate-900/80 to-transparent pointer-events-none z-30"></div>

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Faint watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[8rem] sm:text-[14rem] font-black text-white/[0.02] tracking-widest">ABOUT</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-10 sm:space-y-14">

        {/* Section header */}
        <div ref={topRef} style={fadeUp(topVisible)} className="flex flex-col items-start">
          <h1 className="flex flex-wrap items-end gap-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">About</span>
            <span className="text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="h-1 w-20 sm:w-28 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full"></div>
          <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-xl leading-relaxed" style={fadeUp(topVisible, 150)}>
            Here's a closer look at what I specialise in and how to reach me.
          </p>
        </div>

        {/* Specialty cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {specialties.map((s, i) => (
            <div
              key={i}
              style={fadeUp(cardsVisible, i * 150)}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/40 rounded-2xl p-5 sm:p-6 transition-colors duration-300 hover:shadow-xl hover:shadow-teal-500/10 hover:scale-[1.02]"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center text-teal-400 mb-4 group-hover:from-teal-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="text-white font-bold text-sm sm:text-base mb-2 group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {s.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact grid */}
        <div ref={contactRef} style={fadeUp(contactVisible)} className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8">
          <h3 className="text-white font-semibold text-sm sm:text-base mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-orange-400"></span>
            Get in touch
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {contacts.map((c, i) => {
              const inner = (
                <div style={fadeUp(contactVisible, 80 + i * 80)} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/30 transition-all duration-200 group/c">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-teal-500/20 to-orange-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                    {c.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-xs font-medium">{c.label}</p>
                    <p className="text-gray-200 text-xs sm:text-sm font-medium truncate group-hover/c:text-teal-300 transition-colors duration-200">
                      {c.value}
                    </p>
                  </div>
                </div>
              );

              return c.href ? (
                <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={i}>{inner}</div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
