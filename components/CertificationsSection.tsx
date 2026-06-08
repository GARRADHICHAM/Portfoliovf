"use client";
import AnimatedSection from "./ui/AnimatedSection";

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
  Advanced: "text-red-400 bg-red-400/10 border-red-400/30",
  Professional: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  Intermediate: "text-orange-400 bg-orange-400/10 border-orange-400/30",
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative bg-[#09090B] py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-2">
            Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-12">
            Certifications IBM
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <AnimatedSection key={cert.id} delay={0.1 + i * 0.1}>
              <div className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 flex flex-col h-full">
                <div className="relative h-40 overflow-hidden bg-zinc-800 flex-shrink-0">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold text-white bg-blue-600 px-2.5 py-1 rounded-full">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs px-2.5 py-1 border rounded-full font-medium ${
                        levelStyle[cert.level] || "text-zinc-400 bg-zinc-800 border-zinc-700"
                      }`}
                    >
                      {cert.level}
                    </span>
                    <span className="text-xs text-zinc-600">{cert.date}</span>
                  </div>

                  <h3 className="text-zinc-100 font-semibold text-sm leading-snug group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-zinc-500 text-xs leading-relaxed flex-1 line-clamp-3">
                    {cert.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs bg-zinc-800 border border-zinc-700 text-zinc-400 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
