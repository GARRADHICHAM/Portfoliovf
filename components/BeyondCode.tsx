"use client";
import Image from "next/image";
import AnimatedSection from "./ui/AnimatedSection";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";

const cards = [
  {
    emoji: "🏀",
    title: "Basketball",
    text: "Le seul endroit où je ne pushe pas sur main un vendredi soir.",
    img: "/basket.jpeg",
    alt: "Basketball",
    tint: "from-orange-500/30",
  },
  {
    emoji: "🎵",
    title: "Musique",
    text: "Je produis de la musique quand les pipelines tournent sans erreur. Ce qui arrive parfois. 🎵",
    img: "/musique.png",
    alt: "Musique",
    tint: "from-violet-500/30",
  },
];

export default function BeyondCode() {
  return (
    <section id="beyond" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="05"
          eyebrow="Au-delà du code"
          title="En dehors du"
          highlight="code"
          subtitle="Parce qu'un ingénieur IA, c'est aussi un humain."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={0.1 + i * 0.12} direction={i === 0 ? "left" : "right"} className="h-full">
              <TiltCard max={8} containerClassName="h-full" className="glass rounded-3xl overflow-hidden">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${card.tint} via-transparent to-transparent mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070b] via-[#07070b]/10 to-transparent" />
                </div>

                <div className="relative -mt-16 p-7" style={{ transform: "translateZ(40px)" }}>
                  <span className="inline-grid place-items-center w-14 h-14 rounded-2xl glass-strong text-3xl shadow-xl shadow-black/40 mb-4 animate-float" style={{ animationDelay: `${i * 1.5}s` }}>
                    {card.emoji}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-zinc-50 mb-2">{card.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{card.text}</p>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
