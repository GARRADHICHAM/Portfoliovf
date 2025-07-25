import { useState } from 'react';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');


    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = 'CV_HICHAM_GARRAD_D_S_ALT.pdf';
        link.download = 'Garrad_Hicham_Resume.pdf';
        link.click();
        console.log('Resume downloaded');
    };

    const handleContactClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSectionClick = (sectionId) => {
        setActiveSection(sectionId);
        // You can add navigation logic here, such as scrolling to sections
        console.log(`Navigating to ${sectionId}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Navigation Bar */}
            
            {/* Main Hero Content */}
            <div className=" pt-16 flex items-center justify-center relative z-10">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                        {/* Left side - Profile Info */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 flex-1">
                            {/* Profile Picture */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                                <div className="relative">
                                    <img
                                        src="images/me.jpg"
                                        alt="Hicham Garrad"
                                        className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="text-center lg:text-left space-y-6">
                                <div className="space-y-2">
                                    <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
                                        HICHAM
                                        <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                                            GARRAD
                                        </span>
                                    </h1>
                                    <div className="h-1 w-24 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto lg:mx-0 rounded-full"></div>
                                </div>

                                <p className="text-xl lg:text-2xl text-gray-300 font-light">
                                    Junior Data Scientist
                                </p>

                                <p className="text-gray-400 max-w-md leading-relaxed">
                                    Passionate about transforming data into actionable insights.
                                    Specializing in machine learning, data visualization, and statistical analysis.
                                </p>
                                <div className="flex space-x-2">
                                    <svg width="16px" height="16px" fill='white' xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" ><path d="M12,.042a9.992,9.992,0,0,0-9.981,9.98c0,2.57,1.99,6.592,5.915,11.954a5.034,5.034,0,0,0,8.132,0c3.925-5.362,5.915-9.384,5.915-11.954A9.992,9.992,0,0,0,12,.042ZM12,14a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z" /></svg>
                                    <h1 className="text-sm text-gray-50">Biot , Provence-Alpes-Côte d'Azur , France</h1>
                                </div>

                                {/* Social Links */}
                                <div className="flex justify-center lg:justify-start space-x-4">
                                    <a
                                        href="https://linkedin.com/in/hicham-garrad"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                    >
                                        <svg className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://github.com/GARRADHICHAM"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                    >
                                        <svg className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://www.instagram.com/hicham_garrad/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                    >
                                        <svg className="w-6 h-6 text-white group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Action Buttons */}
                        <div className="flex flex-col space-y-4 lg:space-y-6">
                            <button
                                onClick={handleDownloadResume}
                                className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                <div className="relative flex items-center space-x-3">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.033,19.011a3.489,3.489,0,0,0,2.475-1.024l3.919-3.919-2.121-2.121-2.782,2.782L13.5,0l-3,0,.024,14.709L7.76,11.947,5.639,14.068l3.919,3.919A3.487,3.487,0,0,0,12.033,19.011Z" />
                                        <path d="M21,16v5H3V16H0v5a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V16Z" />
                                    </svg>
                                    <span>DOWNLOAD RESUME</span>
                                </div>
                            </button>

                            <button
                                onClick={handleContactClick}
                                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                <div className="relative flex items-center space-x-3">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M5.521,19.9h5.322l3.519,3.515a2.035,2.035,0,0,0,1.443.6,2.1,2.1,0,0,0,.523-.067,2.026,2.026,0,0,0,1.454-1.414L23.989,1.425Z" />
                                        <path d="M4.087,18.5,22.572.012,1.478,6.233a2.048,2.048,0,0,0-.886,3.42l3.495,3.492Z" />
                                    </svg>
                                    <span>CONTACT ME</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Contact Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn p-4">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-2xl animate-slideUp border border-white/20">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors duration-200 hover:rotate-90 transform"
                        >
                            ×
                        </button>

                        <div className="text-center space-y-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full mx-auto flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                            </div>

                            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                Let's Connect
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                Ready to discuss your next data science project?
                                Drop me a line and let's turn data into insights together.
                            </p>

                            <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-teal-500">
                                <a
                                    href="mailto:hichamgarrad21@gmail.com"
                                    className="text-teal-600 hover:text-teal-700 font-semibold text-lg transition-colors duration-200"
                                >
                                    hichamgarrad21@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                
                .animate-slideUp {
                    animation: slideUp 0.4s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Hero;