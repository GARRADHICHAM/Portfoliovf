"use client";
import { useState, FormEvent } from "react";
import AnimatedSection from "./ui/AnimatedSection";

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
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value || "Contact depuis le portfolio";
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
    <section id="contact" className="relative bg-[#09090B] py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-72 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(37, 99, 235, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-2">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-3">
            Travaillons ensemble
          </h2>
          <p className="text-zinc-400 text-base mb-14 max-w-lg">
            Je suis actuellement en stage et disponible pour un CDI à partir d&apos;octobre 2026.
            N&apos;hésitez pas à me contacter.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: contact info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              <div className="space-y-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all duration-200 flex-shrink-0">
                      {social.renderIcon()}
                    </div>
                    <div>
                      <p className="text-xs text-zinc-600">{social.label}</p>
                      <p className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">
                        {social.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Disponibilité
                  </span>
                </div>
                <p className="text-zinc-200 text-sm font-semibold">CDI · Octobre 2026</p>
                <p className="text-zinc-500 text-xs mt-1">Nice, France · Open au remote</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection delay={0.2} direction="right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1.5">Nom</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Votre nom"
                    className="w-full px-4 py-2.5 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1.5">Sujet</label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Sujet (optionnel)"
                    className="w-full px-4 py-2.5 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="w-full px-4 py-2.5 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1.5">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Votre message..."
                  className="w-full px-4 py-2.5 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status !== "idle"}
                className="w-full py-2.5 px-6 text-sm font-semibold rounded-lg transition-all duration-200 disabled:opacity-70 bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
              >
                {status === "idle" && "Envoyer le message"}
                {status === "sending" && "Ouverture du client mail..."}
                {status === "sent" && "Message envoyé — merci !"}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-zinc-900">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-700">
            © 2026 Hicham Garrad — Ingénieur IA &amp; Data
          </p>
          <a href="#hero" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
            Haut de page ↑
          </a>
        </div>
      </div>
    </section>
  );
}
