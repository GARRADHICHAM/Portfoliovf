import React from "react";

const AboutMe = () => {
    return (
        <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 lg:py-10 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center mb-6 sm:mb-8 lg:mb-10">
                <div className="w-1 h-8 sm:h-10 bg-gradient-to-b from-teal-500 to-orange-500 rounded-full mr-3 sm:mr-4 shadow-lg"></div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent border-b-2 border-teal-400/30 pb-1">
                    About Me
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                {/* Profile Image */}
                <div className="relative group flex-shrink-0 self-center lg:self-start">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-orange-400 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse rounded-lg"></div>
                    <div className="relative">
                        <img
                            src="images/me.jpg"
                            alt="Hicham Garrad"
                            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[400px] xl:h-[400px] object-cover border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500 rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-[2] relative space-y-4 sm:space-y-6">
                    {/* Introduction */}
                    <div className="relative z-10">
                        <p className="text-white font-nunito text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
                            <span className="text-xl sm:text-2xl mr-2">👨‍💼</span>
                            Bonjour, je m'appelle <span className="font-bold text-teal-400 sm:text-lg lg:text-xl">Hicham Garrad</span>, diplômé d’un Master en Business Intelligence & Big Data et passionné par la data science et l’intelligence artificielle. Installé en France et actuellement en Master 2 MIAGE – IA Appliquée à l’Université Côte d’Azur, je suis immédiatement disponible pour une alternance afin de mettre mes compétences en pratique dans un environnement stimulant.
                        </p>
                    </div>

                    {/* Contact Information Card */}
                    <div className="w-full sm:max-w-md lg:max-w-lg border border-teal-700/50 p-4 sm:p-5 lg:p-6 mx-auto lg:mx-0 rounded-lg bg-slate-800/30 backdrop-blur-sm">
                        <div className="space-y-3 sm:space-y-4 font-nunito text-gray-100 relative z-10">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <span className="text-xs sm:text-sm font-semibold text-teal-400">Adresse:</span>
                                <span className="text-xs sm:text-sm font-medium break-words">Vallauris, France</span>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <span className="text-xs sm:text-sm font-semibold text-teal-400">Téléphone:</span>
                                <a href="tel:+33612798924" className="text-xs sm:text-sm font-medium hover:text-teal-300 transition-colors">
                                    +33 6 12 79 89 24
                                </a>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <span className="text-xs sm:text-sm font-semibold text-teal-400">Email:</span>
                                <a href="mailto:hichamgarrad21@gmail.com" className="text-xs sm:text-sm font-medium hover:text-teal-300 transition-colors break-all">
                                    hichamgarrad21@gmail.com
                                </a>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <span className="text-xs sm:text-sm font-semibold text-teal-400">LinkedIn:</span>
                                <a 
                                    href="https://www.linkedin.com/in/hicham-garrad" 
                                    className="hover:text-blue-400 text-xs sm:text-sm font-medium transition-colors break-all" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    linkedin.com/in/hicham-garrad
                                </a>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <span className="text-xs sm:text-sm font-semibold text-teal-400">GitHub:</span>
                                <a 
                                    href="https://github.com/GARRADHICHAM" 
                                    className="hover:text-blue-400 text-xs sm:text-sm font-medium transition-colors break-all" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    github.com/GARRADHICHAM
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;