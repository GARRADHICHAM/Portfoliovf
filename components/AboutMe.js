import React from "react";

const AboutMe = () => {
    return (
        <div className="min-h-screen px-16 py-10 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center mb-10">
                <div className="w-1 h-10 bg-gradient-to-b from-teal-500 to-orange-500 rounded-full mr-4 shadow-lg"></div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent border-b-2 border-teal-400/30 pb-1">
                    About Me
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Contact Card */}

                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-orange-400  blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <div className="relative">
                        <img
                            src="images/me.jpg"
                            alt="Hicham Garrad"
                            className="w-48 h-48 lg:w-[400px] lg:h-[400px]  object-cover border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0  bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                </div>
                {/* Introduction */}
                <div className="flex-[2] relative">
                    <div className="space-y-4 relative z-10">
                        <p className="text-white font-nunito  text-lg leading-relaxed text-justify">
                            <span className="text-2xl mr-2">👨‍💼</span>
                            Bonjour, je m'appelle <span className="font-bold text-teal-700 text-xl">Hicham Garrad</span>, diplômé d’un Master en Business Intelligence & Big Data, passionné par la data science et l’IA. Compétent en analyse de données, modélisation prédictive et outils Big Data. Je m’installe en France en juillet 2025 et recherche une alternance à cette période alternance dans le domaine de la data, de l’intelligence artificielle, en parallèle de mon Master 2 MIAGE – IA Appliquée à l’Université Côte d’Azur.
                        </p>

                    </div>

                    <div className="flex-1 max-w-sm border border-teal-700 mt-4 p-4 mx-auto lg:mx-0 mb-4 lg:mb-0">
                        <div className="flex flex-col gap-4 font-nunito text-gray-100 z-10 relative">
                            <div className="flex items-center gap-2">
                                <span className="text-sm     font-medium">Adress : Biot, Provence-Alpes-Côte d'Azur, France</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm   font-medium">Phone1 : +212 6 91 56 86 69</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <span className="text-sm  font-medium">Phone2 : +33 6 91 56 86 69</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm  font-medium">Email : hichamgarrad21@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="https://www.linkedin.com/in/hicham-garrad" className="hover:text-blue-700 text-sm font-medium" target="_blank" rel="noopener noreferrer">Linkedin : linkedin.com/in/hicham-garrad</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="https://github.com/GARRADHICHAM" className="hover:text-blue-700 text-sm font-medium" target="_blank" rel="noopener noreferrer">Github : github.com/GARRADHICHAM</a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;