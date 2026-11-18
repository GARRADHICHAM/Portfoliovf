"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./ui/AnimatedSection";
import SectionHeading from "./ui/SectionHeading";

const certs = [
  {
    id: 0,
    title: "Introduction to Data Engineering",
    issuer: "IBM",
    date: "2024",
    level: "Professional",
    img: "/IntroData.jpg",
    skills: ["Data Engineering", "ETL", "Data Governance", "Big Data"],
    desc: "List basic skills required for an entry-level data engineering role. Discuss various stages in the data engineering lifecycle. Describe technologies such as Relational Databases, NoSQL Data Stores, and Big Data Engines.",
  },
  {
    id: 1,
    title: "Introduction to Big Data with Spark and Hadoop",
    issuer: "IBM",
    date: "2024",
    level: "Advanced",
    img: "/bigdata.jpg",
    skills: ["Apache Spark", "Hadoop", "Big Data", "Spark SQL"],
    desc: "Apply Spark programming basics for DataFrames, data sets, and Spark SQL. Use Spark's RDDs, optimize Spark SQL using Catalyst and Tungsten, and configure the development environment.",
  },
  {
    id: 2,
    title: "ETL and Data Pipelines with Shell, Airflow and Kafka",
    issuer: "IBM",
    date: "2024",
    level: "Professional",
    img: "/etl.jpg",
    skills: ["ETL", "Apache Airflow", "Apache Kafka", "Data Pipelines"],
    desc: "Describe and contrast ETL and ELT processes. Explain batch vs concurrent execution. Implement ETL workflows through bash and Python. Describe data pipeline components, processes, and technologies.",
  },
];

const levelStyle: Record<string, string> = {
  Advanced: "text-rose-300 bg-rose-400/10 border-rose-400/30",
  Professional: "text-sky-300 bg-sky-400/10 border-sky-400/30",
  Intermediate: "text-amber-300 bg-amber-400/10 border-amber-400/30",
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Card that flips in 3D on hover (desktop) or tap (touch). */
function FlipCard({ cert }: { cert: (typeof certs)[number] }) {
  const [flipped, setFlipped] = useState(false);
  const pointerType = useRef("mouse");
  const level = levelStyle[cert.level] || "text-zinc-300 bg-zinc-800 border-zinc-700";

  return (
    <div
      className="h-[400px] cursor-pointer"
      style={{ perspective: 1400 }}
      onPointerDown={(e) => (pointerType.current = e.pointerType)}
      onPointerEnter={(e) => e.pointerType === "mouse" && setFlipped(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setFlipped(false)}
      onClick={() => pointerType.current !== "mouse" && setFlipped((f) => !f)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${cert.title} — retourner la carte`}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 glass rounded-3xl overflow-hidden flex flex-col"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="relative h-48 overflow-hidden flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cert.img} alt={cert.title} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-[#0b0b10]/20 to-transparent" />
            <span className="absolute top-4 left-4 text-xs font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 shadow-lg shadow-blue-500/30">
              {cert.issuer}
            </span>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-3">
              <span className={`text-[11px] px-2.5 py-1 border rounded-full font-medium ${level}`}>{cert.level}</span>
              <span className="font-mono text-xs text-zinc-500">{cert.date}</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-zinc-50 leading-snug">{cert.title}</h3>
            <div className="mt-auto flex items-center gap-2 text-xs text-zinc-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Survolez ou touchez pour retourner
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden p-7 flex flex-col border border-sky-400/20 bg-gradient-to-br from-blue-950/90 via-[#0b0b14]/95 to-violet-950/90 backdrop-blur-xl"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div aria-hidden className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-500/20 blur-3xl" />
          <p className="relative font-mono text-[11px] text-sky-300 uppercase tracking-widest mb-3">
            {cert.issuer} · {cert.date}
          </p>
          <h3 className="relative font-display text-lg font-semibold text-white leading-snug mb-4">{cert.title}</h3>
          <p className="relative text-sm text-zinc-300 leading-relaxed">{cert.desc}</p>
          <div className="relative mt-auto pt-5 flex flex-wrap gap-1.5">
            {cert.skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="04"
          eyebrow="Certifications"
          title="Certifications"
          highlight="IBM"
          subtitle="Data engineering, Big Data et pipelines — validés par IBM."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <AnimatedSection key={cert.id} delay={0.1 + i * 0.12}>
              <FlipCard cert={cert} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
