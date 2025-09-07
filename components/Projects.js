import { useState } from 'react';

const data = [
    {

        id: 5,
        title: "Breast Cancer Detection SaaS using Deep Learning:",
        desc: "Preprocessing and enhancement of medical images Design and training of models (classification, segmentation) Integration of models into a backend microservice for deployment via a REST API, with an active learning loop Development of an interactive web platform for assisted breast cancer diagnosis",
        img: "/brest.png",
        tags: ["Python", "scikit-learn", "TensorFlow", "Keras", "next.js", "FastAPI", "MongoDB", "s3 bucket"],
        category: "AI/ML"
    },
    {

        id: 0,
        title: "Fraud Detection",
        desc: "Ce travail est réalisé dans le cadre de mon projet de fin d'études effectué au sein de la société HPS, visant à développer un système de détection des fraudes monétique en utilisant des algorithmes de machine Learning.",
        img: "/Fraud.png",
        tags: ["Python", "scikit-learn", "TensorFlow", "Keras"],
        category: "Machine Learning"
    },
    {

        id: 9,
        title: "Big Data Pipeline for Churn Prediction with ML:",
        desc: "Creation of a pipeline using PySpark, Kafka, and Apache Airflow to process monthly and historical data stored in a Data Warehouse and MySQL. Integration of a churn detection model with Machine Learning and exposure of the results via FastAPI. Data visualization with Power BI.",
        img: "/churn.png",
        tags: ["Python", "scikit-learn", "TensorFlow", "Keras", "PySpark", "Kafka", "Airflow", "FastAPI", "Power BI"],
        category: "Machine Learning"
    },
    {

        id: 12,
        title: "Revenue Forecasting for B2B SaaS Clients:",
        desc: "Development of a hybrid model combining ML and time series (XGBoost, Prophet) to predict monthly recurring revenue (MRR). Interactive visualization of forecasts and scenarios using Streamlit.",
        img: "/sas.png",
        tags: ["Python", "scikit-learn", "TensorFlow", "Keras", "XGBoost", "Prophet", "Streamlit", "FastAPI", "MongoDB", "next.js"],
        category: "Machine Learning"
    },
    {

        id: 19,
        title: "Multi-Agent Recommendation System for an E-Commerce Platform:",
        desc: "Développement d’un système de recommandation personnalisé utilisant des agents intelligents et des modèles ML. Backend avec FastAPI, MongoDB, et frontend en Next.js.",
        img: "/sma.png",
        tags: ["Python", "scikit-learn", "TensorFlow", "Keras", "FastAPI", "MongoDB", "Next.js", "s3 bucket"],
        category: "Machine Learning"
    },
    {
        id: 8,
        title: "Plant Disease Detection System",
        desc: "Building a plant disease detection system, using AI to analyze images and identify diseases, facilitating rapid diagnosis of crop health issues through a microservice.",
        img: "/Plant.png",
        tags: ["React", "Node.js", "RESTful API", "Computer Vision"],
        category: "AI/ML"
    },
    {
        id: 9,
        title: "Real-time Facial Emotion Recognition (CNN)",
        desc: "Building a real-time facial emotion recognition system using CNNs to analyze facial expressions instantly.",
        img: "/Emotion.png",
        tags: ["Python", "TensorFlow", "OpenCV", "CNN"],
        category: "Computer Vision"
    },
    {
        id: 1,
        title: "City-Info",
        desc: "Conception et développement d'une application Android en Java qui facilite le processus de géolocalisation autour d'une ville se basent sur les différents points d'intérêts de citoyen.",
        img: "/City.png",
        tags: ["Java", "MySQL", "RESTful API", "Android"],
        category: "Mobile Development"
    },
    {
        id: 2,
        title: "ORMVAO",
        desc: "Conception et développement d'une application Android en Java pour l'office régionale de mise en valeur agricole d'Ouarzazate (ORMVAO) qui facilite le processus de gestion des formations au sein de l'ORMVAO.",
        img: "/Discover_App.png",
        tags: ["Java", "Android", "SQLite", "Material Design"],
        category: "Mobile Development"
    },
    {
        id: 3,
        title: "Stock Management",
        desc: "Conception et développement d'une application de gestion des stocks qui permet de suivre toutes les informations des marchandises gérées dans un entrepôt.",
        img: "/stcok.png",
        tags: ["Java", "Swing", "MySQL", "Desktop App"],
        category: "Desktop Application"
    },
    {
        id: 4,
        title: "E-commerce Analysis",
        desc: "A comprehensive e-commerce data analysis project to extract insights from customer behavior, sales patterns, and market trends using advanced analytics techniques.",
        img: "/ecom.png",
        tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
        category: "Data Analysis"
    },
];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [hoveredProject, setHoveredProject] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', ...new Set(data.map(project => project.category))];

    const filteredProjects = selectedCategory === 'All'
        ? data
        : data.filter(project => project.category === selectedCategory);

    // Update your handleProjectClick function to this:
    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    // Add this function to close the modal:
    const closeModal = () => {
        setSelectedProject(null);
    };

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
                <div className="pl-[80px] flex flex-col items-start">
                    <h1 className="flex flex-wrap justify-start items-end gap-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2">
                        <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                            Featured
                        </span>
                        <span className="text-lg sm:text-2xl lg:text-3xl bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
                            Projects
                        </span>
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full mb-4"></div>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 shadow-2xl">
                        <div className="flex flex-wrap gap-1">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`
                                        relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300
                                        ${selectedCategory === category
                                            ? 'bg-gradient-to-r from-teal-500 to-orange-500 text-white shadow-lg'
                                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                        }
                                        group overflow-hidden
                                    `}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                    <span className="relative">{category}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                isHovered={hoveredProject === project.id}
                                onHover={() => setHoveredProject(project.id)}
                                onLeave={() => setHoveredProject(null)}
                                onClick={() => handleProjectClick(project)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

const ProjectCard = ({ project, index, isHovered, onHover, onLeave, onClick }) => {
    const isEven = index % 2 === 0;

    return (
        <div
            className={`
                group cursor-pointer transition-all duration-500 transform hover:scale-[1.02]
                ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}
            `}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onClick}
        >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                <div className={`flex flex-col lg:flex-row ${!isEven ? 'lg:flex-row-reverse' : ''} h-full`}>
                    {/* Image Section */}
                    <div className="lg:w-2/5 relative overflow-hidden">
                        <div className="aspect-video lg:aspect-auto lg:h-full relative">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                            {/* Overlay on hover */}
                            <div className={`
                                absolute inset-0 bg-gradient-to-r from-teal-500/90 to-orange-500/90 
                                flex items-center justify-center opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300
                            `}>
                                <div className="text-white text-center">
                                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.75.75 0 0 1 1.06-1.06l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0z" />
                                    </svg>
                                    <p className="font-semibold">View Project</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="space-y-6">
                            {/* Category Badge */}
                            <div className="inline-flex">
                                <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-full">
                                    {project.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                                {project.desc}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Action Button */}
                            <div className="pt-4">
                                <button className="group/btn inline-flex items-center space-x-2 text-teal-400 hover:text-white font-semibold transition-colors duration-200">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.75.75 0 0 1 1.06-1.06l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0z" />
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

// Add this ProjectModal component (place it after your ProjectCard component):
const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Mock additional images - replace with actual project images
    const projectImages = [
        project.img,
        project.img, // Replace with actual additional images
        project.img, // Replace with actual additional images
        project.img  // Replace with actual additional images
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl max-w-4xl w-full max-h-[100vh] overflow-hidden">
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <div>
                        <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-full">
                            {project.category}
                        </span>
                        <h2 className="text-2xl font-bold text-white mt-2">{project.title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                    {/* Image Slider */}
                    <div className="relative">
                        <div className="aspect-video relative overflow-hidden">
                            <img
                                src={projectImages[currentImageIndex]}
                                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                            />

                            {/* Navigation Arrows */}
                            {projectImages.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Image Indicators */}
                        {projectImages.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {projectImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToImage(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentImageIndex
                                            ? 'bg-white'
                                            : 'bg-white/50 hover:bg-white/75'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Project Details */}
                    <div className="p-6 space-y-6">
                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                            <p className="text-gray-300 leading-relaxed">{project.desc}</p>
                        </div>

                        {/* Technologies */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-sm font-medium bg-white/10 text-gray-300 rounded-lg border border-white/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;