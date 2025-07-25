const AboutMe = () => {
    return (
        <div className="h-screen px-4 py-4 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col relative overflow-hidden">
            {/* Header with gradient accent */}
            <div className="flex items-center mb-8">
                <div className="w-1 h-10 bg-gradient-to-b from-teal-500 to-orange-500 rounded-full mr-4 group-hover:h-12 transition-all duration-300 shadow-lg"></div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent border-b-2 border-teal-400/30 pb-1">
                    About Me
                </h1>
            </div>

            {/* Introduction paragraph with enhanced styling */}
            <div className="mb-8 p-6 bg-gradient-to-r from-teal-50/60 to-orange-50/60 rounded-xl border-l-4 border-teal-500 relative overflow-hidden shadow-xl backdrop-blur-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100/40 to-orange-100/40 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                <p className="text-gray-800 text-lg leading-relaxed relative z-10">
                    <span className="text-2xl mr-2">👨‍💼</span>
                    Hello, my name is <span className="font-bold text-teal-700 text-xl">Hicham Garrad</span>, 
                    and I am a passionate <span className="font-bold text-orange-700 text-xl">applied artificial intelligence student and software developer</span> based in France. 
                    I have a strong interest in leveraging data-driven insights and cutting-edge technology to solve complex problems.
                </p>
            </div>

            {/* Skills and experience grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Education & Experience */}
                {/* <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-100 flex items-center border-b border-blue-200/40 pb-1">
                        <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-md">
                            <span className="text-white text-sm">🎓</span>
                        </span>
                        Education & Experience
                    </h3>
                    
                    <div className="space-y-3">
                        <div className="flex items-start space-x-3 p-3 bg-blue-50/70 rounded-lg hover:bg-blue-100/80 transition-all duration-200 shadow-sm hover:scale-[1.03]">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                <span className="font-semibold">Master 2</span> en Business Intelligence & Big Data Analytics
                            </p>
                        </div>
                        
                        <div className="flex items-start space-x-3 p-3 bg-yellow-50/70 rounded-lg hover:bg-yellow-100/80 transition-all duration-200 shadow-sm hover:scale-[1.03]">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                <span className="font-semibold">3 stages professionnels</span> d'au moins 2 mois chacun
                            </p>
                        </div>
                    </div>
                </div> */}

                {/* Technical Skills */}
                {/* <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-100 flex items-center border-b border-purple-200/40 pb-1">
                        <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-md">
                            <span className="text-white text-sm">💻</span>
                        </span>
                        Technical Skills
                    </h3>
                    
                    <div className="space-y-3">
                        <div className="flex items-start space-x-3 p-3 bg-purple-50/70 rounded-lg hover:bg-purple-100/80 transition-all duration-200 shadow-sm hover:scale-[1.03]">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                <span className="font-semibold">Développement:</span> Applications web et Android
                            </p>
                        </div>
                        
                        <div className="flex items-start space-x-3 p-3 bg-green-50/70 rounded-lg hover:bg-green-100/80 transition-all duration-200 shadow-sm hover:scale-[1.03]">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                <span className="font-semibold">Systèmes:</span> Linux, Windows, Cloud, Virtualisation
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* Programming Languages */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-100 flex items-center mb-4 border-b border-teal-200/40 pb-1">
                    <span className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3 shadow-md">
                        <span className="text-white text-sm">🚀</span>
                    </span>
                    Programming Languages
                </h3>
                
                <div className="flex flex-wrap gap-3">
                    {['Python', 'Java', 'JavaScript'].map((lang, index) => (
                        <span key={lang} className={`
                            px-4 py-2 rounded-full text-sm font-semibold text-white shadow-md
                            ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 
                              index === 1 ? 'bg-gradient-to-r from-red-500 to-red-600' : 
                              'bg-gradient-to-r from-yellow-500 to-yellow-600'}
                            hover:scale-110 hover:shadow-lg transition-all duration-200 cursor-default
                        `}>
                            {lang}
                        </span>
                    ))}
                </div>
            </div>

            {/* Data Science & Databases */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Data Science */}
                {/* <div className="bg-gradient-to-br from-indigo-50/70 to-purple-50/70 rounded-xl p-6 border border-indigo-100 shadow-lg backdrop-blur-md">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center border-b border-indigo-200/40 pb-1">
                        <span className="text-indigo-600 mr-2">📊</span>
                        Data Science
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {['TensorFlow', 'scikit-learn', 'Keras', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Seaborn', 'PowerBI', 'OpenCV'].map((tool) => (
                            <span key={tool} className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-indigo-700 border border-indigo-200 shadow hover:bg-indigo-50/80 transition-all duration-150">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div> */}

                {/* Databases & Big Data */}
                {/* <div className="bg-gradient-to-br from-orange-50/70 to-red-50/70 rounded-xl p-6 border border-orange-100 shadow-lg backdrop-blur-md">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center border-b border-orange-200/40 pb-1">
                        <span className="text-orange-600 mr-2">💽</span>
                        Databases & Big Data
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {['MongoDB', 'GraphQL', 'Apache Spark', 'Apache Hadoop', 'SQL Server', 'MySQL', 'ETL', 'Kafka', 'Airflow'].map((db) => (
                            <span key={db} className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-orange-700 border border-orange-200 shadow hover:bg-orange-50/80 transition-all duration-150">
                                {db}
                            </span>
                        ))}
                    </div>
                </div> */}
            </div>

            {/* Methodologies */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4 border-b border-emerald-200/40 pb-1">
                    <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 shadow-md">
                        <span className="text-white text-sm">🏗️</span>
                    </span>
                    Methodologies & Design
                </h3>
                
                <div className="bg-gradient-to-r from-emerald-50/70 to-teal-50/70 rounded-xl p-6 border border-emerald-100 shadow-lg backdrop-blur-md">
                    <div className="flex flex-wrap gap-3">
                        {['UML', 'Merise', 'Agile', 'SQL & NoSQL'].map((method, index) => (
                            <div key={method} className="flex items-center space-x-2 bg-white/80 rounded-lg px-4 py-2 border border-emerald-200 shadow hover:bg-emerald-50/80 transition-all duration-150">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                <span className="text-emerald-700 font-medium text-sm">{method}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Soft Skills */}
            {/* <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4 border-b border-pink-200/40 pb-1">
                    <span className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 shadow-md">
                        <span className="text-white text-sm">🤝</span>
                    </span>
                    Professional Qualities
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[
                        { icon: '🤝', text: 'Travail d\'équipe' },
                        { icon: '⏰', text: 'Respect des délais' },
                        { icon: '🌐', text: 'Communication' },
                        { icon: '📈', text: 'Gestion de projets' },
                        { icon: '💪', text: 'Innovation' },
                        { icon: '🔑', text: 'Responsabilité' },
                        { icon: '⚡', text: 'Apprentissage rapide' },
                        { icon: '🎯', text: 'Orientation client' }
                    ].map((quality) => (
                        <div key={quality.text} className="flex items-center space-x-2 p-3 bg-gradient-to-r from-pink-50/70 to-rose-50/70 rounded-lg border border-pink-100 hover:shadow-lg hover:scale-105 transition-all duration-200">
                            <span className="text-lg">{quality.icon}</span>
                            <span className="text-pink-700 text-xs font-medium">{quality.text}</span>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default AboutMe;