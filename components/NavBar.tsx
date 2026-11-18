"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const CV_URL = "/CV_Hicham_GARRAD_portfolio.pdf";

const navLinks = [
  { label: "À propos", href: "#about", id: "about" },
  { label: "Expérience", href: "#experience", id: "experience" },
  { label: "Projets", href: "#projects", id: "projects" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Beyond the Code", href: "#beyond", id: "beyond" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy — highlight the section currently in view
  useEffect(() => {
    const sections = ["hero", ...navLinks.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500"
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 inset-x-0 z-50 px-4"
      >
        <div
          className={`mx-auto max-w-5xl flex items-center justify-between gap-4 rounded-full pl-5 pr-2 h-14 transition-all duration-500 ${
            scrolled
              ? "glass-strong shadow-2xl shadow-black/40"
              : "bg-transparent border border-transparent"
          }`}
        >
          <a href="#hero" className="group flex items-center gap-2" aria-label="Accueil">
            <span className="relative grid place-items-center w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 text-[11px] font-bold text-white shadow-lg shadow-sky-500/30 group-hover:rotate-[360deg] transition-transform duration-700">
              HG
            </span>
            <span className="hidden sm:block font-display text-sm font-semibold text-zinc-100">
              Hicham Garrad
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-[13px] rounded-full transition-colors duration-200 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.1]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={CV_URL}
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/25 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              CV
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
              className="lg:hidden w-10 h-10 grid place-items-center rounded-full text-zinc-300 hover:bg-white/[0.06] transition-colors"
            >
              <div className="relative w-4 h-3">
                <span className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ${mobileOpen ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ${mobileOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden mx-auto max-w-5xl mt-2 glass-strong rounded-3xl p-3 shadow-2xl shadow-black/50"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className={`flex items-center justify-between px-4 py-3 text-sm rounded-2xl transition-colors ${
                    activeSection === link.id
                      ? "text-white bg-white/[0.06]"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                  <span className="font-mono text-[10px] text-zinc-600">0{i + 1}</span>
                </motion.a>
              ))}
              <a
                href={CV_URL}
                download
                className="mt-2 block px-4 py-3 text-sm font-semibold text-center rounded-2xl text-white bg-gradient-to-r from-blue-600 to-violet-600"
              >
                Télécharger le CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
