import { useState } from 'react';

const data = [
    {
        id: 0,
        title: "Introduction to Data Engineering",
        desc: "List basic skills required for an entry-level data engineering role. Discuss various stages and concepts in the data engineering lifecycle. Describe data engineering technologies such as Relational Databases, NoSQL Data Stores, and Big Data Engines. Summarize concepts in data security, governance, and compliance.",
        img: "/IntroData.jpg",
        issuer: "IBM",
        date: "2024",
        level: "Professional",
        skills: ["Data Engineering", "ETL", "Data Governance", "Big Data"]
    },
    {
        id: 1,
        title: "Introduction to Big Data with Spark and Hadoop",
        desc: "Apply Spark programming basics, including parallel programming basics for DataFrames, data sets, and Spark SQL. Use Spark's RDDs and data sets, optimize Spark SQL using Catalyst and Tungsten, and use Spark's development and runtime environment options.",
        img: "/bigdata.jpg",
        issuer: "IBM",
        date: "2024",
        level: "Advanced",
        skills: ["Apache Spark", "Hadoop", "Big Data", "Spark SQL"]
    },
    {
        id: 2,
        title: "ETL and Data Pipelines with Shell, Airflow and Kafka",
        desc: "Describe and contrast Extract, Transform, Load (ETL) processes and Extract, Load, Transform (ELT) processes. Explain batch vs concurrent modes of execution. Implement ETL workflow through bash and Python functions. Describe data pipeline components, processes, tools, and technologies.",
        img: "/etl.jpg",
        issuer: "IBM",
        date: "2024",
        level: "Professional",
        skills: ["ETL", "Apache Airflow", "Apache Kafka", "Data Pipelines"]
    },
];

const Certifications = () => {
    const [hoveredCert, setHoveredCert] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
                        Professional
                        <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                            Certifications
                        </span>
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Continuously advancing my expertise through industry-recognized certifications
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="max-w-6xl mx-auto space-y-8">
                    {data.map((cert, index) => (
                        <CertificationCard
                            key={cert.id}
                            certification={cert}
                            index={index}
                            isHovered={hoveredCert === cert.id}
                            onHover={() => setHoveredCert(cert.id)}
                            onLeave={() => setHoveredCert(null)}
                        />
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-20">
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="space-y-2">
                                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                                    {data.length}+
                                </div>
                                <div className="text-gray-300 font-medium">Certifications Earned</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                                    100%
                                </div>
                                <div className="text-gray-300 font-medium">Industry Recognized</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                                    2024
                                </div>
                                <div className="text-gray-300 font-medium">Latest Achievement</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CertificationCard = ({ certification, index, isHovered, onHover, onLeave }) => {
    const isEven = index % 2 === 0;

    const getLevelColor = (level) => {
        switch (level) {
            case 'Advanced':
                return 'from-red-500 to-pink-500';
            case 'Professional':
                return 'from-teal-500 to-cyan-500';
            case 'Intermediate':
                return 'from-orange-500 to-yellow-500';
            default:
                return 'from-gray-500 to-gray-600';
        }
    };

    return (
        <div
            className={`
                group cursor-pointer transition-all duration-500 transform hover:scale-[1.02]
                ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}
            `}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                <div className={`flex flex-col lg:flex-row ${!isEven ? 'lg:flex-row-reverse' : ''} h-full`}>
                    {/* Image/Certificate Section */}
                    <div className="lg:w-2/5 relative overflow-hidden">
                        <div className="aspect-video lg:aspect-auto lg:h-full relative">
                            <img
                                src={certification.img}
                                alt={certification.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            
                            {/* Certificate Badge */}
                            <div className="absolute top-4 left-4">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                                    <span className="text-white text-sm font-semibold">🏆 Certified</span>
                                </div>
                            </div>

                            {/* Verification Badge */}
                            <div className="absolute bottom-4 right-4">
                                <div className="bg-green-500/90 backdrop-blur-sm rounded-full p-2 border border-green-400/50">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="space-y-6">
                            {/* Header Info */}
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${getLevelColor(certification.level)} text-white rounded-full`}>
                                    {certification.level}
                                </span>
                                <span className="text-gray-400 text-sm">
                                    {certification.issuer} • {certification.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                {certification.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                                {certification.desc}
                            </p>

                            {/* Skills */}
                            {certification.skills && (
                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold text-gray-200 flex items-center">
                                        <span className="w-2 h-2 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full mr-2"></span>
                                        Skills Gained
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {certification.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 pt-4">
                                <button className="group/btn inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-200 hover:scale-105">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                        <polyline points="14,2 14,8 20,8"/>
                                        <line x1="16" y1="13" x2="8" y2="13"/>
                                        <line x1="16" y1="17" x2="8" y2="17"/>
                                        <polyline points="10,9 9,9 8,9"/>
                                    </svg>
                                    <span>View Certificate</span>
                                </button>
                                
                                <button className="group/btn inline-flex items-center space-x-2 text-teal-400 hover:text-white font-semibold text-sm transition-colors duration-200">
                                    <span>Verify Credential</span>
                                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.75.75 0 0 1 1.06-1.06l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certifications;