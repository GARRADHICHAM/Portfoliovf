"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const cards = [
  {
    emoji: "🏀",
    title: "Basketball",
    text: "Le seul endroit où je ne pushe pas sur main un vendredi soir.",
    // TODO: add your basketball photo to /public/basketball.jpg
    img: "/basket.jpeg",
    alt: "Basketball",
  },
  {
    emoji: "🎵",
    title: "Musique",
    text: "Je produis de la musique quand les pipelines tournent sans erreur. Ce qui arrive parfois. 🎵",
    // TODO: add your music photo to /public/music.jpg
    img: "/musique.png",
    alt: "Musique",
  },
];

function HobbyCard({
  card,
  delay,
}: {
  card: (typeof cards)[0];
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className="flex-1 min-w-0 bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/[0.07] transition-all duration-300 group"
    >
      {/* Image — 4/3 aspect ratio */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={card.img}
          alt={card.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Text */}
      <div className="p-6">
        <h3 className="text-zinc-100 font-semibold text-lg mb-2">
          {card.emoji} {card.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{card.text}</p>
      </div>
    </motion.div>
  );
}

export default function BeyondCode() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="beyond"
      className="relative bg-[#09090B] py-24 sm:py-32 overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <p className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-2">
            Au-delà du code
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-3">
            En dehors du code
          </h2>
          <p className="text-zinc-500 text-sm">
            Parce qu&apos;un ingénieur IA, c&apos;est aussi un humain.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row gap-5">
          {cards.map((card, i) => (
            <HobbyCard key={card.title} card={card} delay={0.1 + i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
