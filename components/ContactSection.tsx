"use client";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";
import Magnetic from "./ui/Magnetic";

type SocialItem = {
  label: string;
  value: string;
  href: string;
  renderIcon: () => React.ReactNode;
};

const socials: SocialItem[] = [
  {
    label: "Email",
    value: "hichamgarrad21@gmail.com",
    href: "mailto:hichamgarrad21@gmail.com",
    renderIcon: () => (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hicham-garrad",
    href: "https://linkedin.com/in/hicham-garrad",
    renderIcon: () => (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/GARRADHICHAM",
    href: "https://github.com/GARRADHICHAM",
    renderIcon: () => (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

type Status = "idle" | "sending" | "sent";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const subject =
      (form.elements.namedItem("subject") as HTMLInputElement).value || "Contact depuis le portfolio";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    setStatus("sending");
    const sub = encodeURIComponent(`[Portfolio] ${subject}`);
    const body = encodeURIComponent(`De: ${name}\n\n${message}`);
    window.open(`mailto:hichamgarrad21@gmail.com?subject=${sub}&body=${body}`);

    setTimeout(() => {
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 500);
  };

  return (
    <section id="contact" className="relative pt-28 sm:pt-36 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Travaillons"
          highlight="ensemble"
          subtitle="Je suis disponible immédiatement pour un CDI. N'hésitez pas à me contacter."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
          {/* Left: contact info */}
          <div className="space-y-4">
            {socials.map((social, i) => (
              <AnimatedSection key={social.label} delay={0.1 + i * 0.08} direction="left">
                <TiltCard max={8} className="glass rounded-2xl hover:border-sky-400/25 transition-colors">
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4"
                  >
                    <span
                      className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/15 to-violet-500/15 border border-white/[0.08] text-sky-300 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 flex-shrink-0"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      {social.renderIcon()}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
                        {social.label}
                      </span>
                      <span className="block text-sm text-zinc-200 group-hover:text-white truncate transition-colors">
                        {social.value}
                      </span>
                    </span>
                    <svg
                      className="w-4 h-4 text-zinc-600 group-hover:text-sky-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7v9" />
                    </svg>
                  </a>
                </TiltCard>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.35} direction="left">
              <div className="relative overflow-hidden rounded-2xl p-6 border border-emerald-400/20 bg-gradient-to-br from-emerald-500/[0.08] via-transparent to-sky-500/[0.06]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-mono text-[11px] text-emerald-300/80 uppercase tracking-widest">
                    Disponibilité
                  </span>
                </div>
                <p className="font-display text-xl font-semibold text-zinc-50">Disponible immédiatement · CDI</p>
                <p className="text-zinc-400 text-sm mt-1">Mobilité nationale, France · Open au remote</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: form */}
          <AnimatedSection delay={0.2} direction="right">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-2">Nom</span>
                  <input name="name" type="text" required placeholder="Votre nom" className="input-glow" />
                </label>
                <label className="block">
                  <span className="block font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-2">Sujet</span>
                  <input name="subject" type="text" placeholder="Sujet (optionnel)" className="input-glow" />
                </label>
              </div>
              <label className="block">
                <span className="block font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-2">Email</span>
                <input name="email" type="email" required placeholder="votre@email.com" className="input-glow" />
              </label>
              <label className="block">
                <span className="block font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-2">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Votre message..."
                  className="input-glow resize-none"
                />
              </label>
              <Magnetic strength={0.15} className="w-full">
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="relative w-full overflow-hidden py-3.5 px-6 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 shadow-xl shadow-blue-500/25 hover:brightness-110 disabled:opacity-80 transition"
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={status}
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="inline-flex items-center gap-2"
                    >
                      {status === "idle" && (
                        <>
                          Envoyer le message
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                      {status === "sending" && "Ouverture du client mail..."}
                      {status === "sent" && "Message envoyé — merci !"}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </Magnetic>
            </form>
          </AnimatedSection>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 mt-28">
        <div className="relative pt-8">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-500">© 2026 Hicham Garrad — Ingénieur IA &amp; Data</p>
            <a
              href="#hero"
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              Haut de page
              <span className="grid place-items-center w-7 h-7 rounded-full border border-white/10 group-hover:-translate-y-1 group-hover:border-sky-400/40 transition-all">
                ↑
              </span>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
