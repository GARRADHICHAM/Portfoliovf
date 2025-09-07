import React from "react";

const educationData = [
    {
        title: "Master 2 MIAGE Intelligence artificielle appliquée",
        institution: "Université Côte d'Azur - Sciences, Biot",
        date: "septembre 2025",
        status: "current"
    },
    {
        title: "Master in Business Intelligence & Big Data Analytics",
        institution: "University Chouaib Doukkali",
        date: "2023-2025",
        status: "completed"
    },
    {
        title: "Honors Professional Degree Diploma BIG DATA",
        institution: "University Soultan Moulay Sliman",
        date: "2022-2023",
        status: "completed"
    },
    {
        title: "Honors DUT Computer Engineering",
        institution: "University Soultan Moulay Sliman",
        date: "2020-2022",
        status: "completed"
    },
];

const Education = () => (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 overflow-hidden backdrop-blur-sm shadow-2xl">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-20 h-20 sm:w-40 sm:h-40 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-20 h-20 sm:w-40 sm:h-40 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Header */}
        <div className="relative z-10 flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-teal-500/20 to-orange-500/20 backdrop-blur-sm border border-white/20">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="m24 8.48v11.52a1 1 0 0 1 -2 0v-8.248l-7.4 3.536a5 5 0 0 1 -2.577.694 5.272 5.272 0 0 1 -2.7-.739l-7.38-3.513a3.691 3.691 0 0 1 -.084-6.455c.027-.016.056-.031.084-.045l7.457-3.558a5.226 5.226 0 0 1 5.282.045l7.375 3.513a3.767 3.767 0 0 1 1.943 3.25zm-11.978 9.5a7.26 7.26 0 0 1 -3.645-.972l-4.377-2.089v2.7a5.007 5.007 0 0 0 3.519 4.778 15.557 15.557 0 0 0 4.481.603 15.557 15.557 0 0 0 4.481-.607 5.007 5.007 0 0 0 3.519-4.778v-2.691l-4.459 2.13a6.983 6.983 0 0 1 -3.519.928z" />
                </svg>
            </div>
            <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    Education
                </h1>
                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full mt-1 sm:mt-2"></div>
            </div>
        </div>

        {/* Education Timeline */}
        <div className="relative z-10 space-y-4 sm:space-y-6">
            {educationData.map((edu, idx) => (
                <div 
                    key={idx} 
                    className="group relative"
                >
                    {/* Education Card */}
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/10">
                        
                        {/* Timeline Dot */}
                        <div className="relative flex-shrink-0 self-center sm:self-start">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-teal-400 to-orange-400 p-0.5 shadow-lg">
                                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                                    {edu.status === 'current' ? (
                                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full animate-pulse"></div>
                                    ) : (
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {edu.status === 'current' && (
                                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full blur opacity-75 animate-pulse"></div>
                            )}
                        </div>

                        {/* Education Content */}
                        <div className="flex-1 space-y-2 text-center sm:text-left">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-2 sm:space-y-0">
                                <h2 className="text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300 break-words">
                                    {edu.title}
                                </h2>
                                {edu.status === 'current' && (
                                    <span className="px-2 py-1 sm:px-3 text-xs font-semibold bg-gradient-to-r from-teal-400 to-orange-400 text-white rounded-full shadow-lg animate-pulse self-center sm:self-start flex-shrink-0">
                                        Current
                                    </span>
                                )}
                            </div>
                            
                            <p className="text-sm sm:text-base text-gray-300 font-medium break-words">
                                {edu.institution}
                            </p>
                            
                            {edu.date && (
                                <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-400">
                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                                    </svg>
                                    <span className="text-xs sm:text-sm">{edu.date}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Bottom Gradient Line */}
        <div className="relative z-10 mt-6 sm:mt-8">
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-teal-400/50 to-transparent rounded-full"></div>
        </div>
    </div>
);

export default Education;