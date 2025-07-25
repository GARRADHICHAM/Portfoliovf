import { useState } from 'react';

const KeyCompetences = () => {
    const [activeTab, setActiveTab] = useState('data-science');

    const competences = [
        {
            id: 'data-science',
            title: 'Data Science',
            icon: '🤖',
            color: 'from-teal-500 to-cyan-500',
            skills: [
                'Create, Evaluate and Deploy Machine learning Models with Sklearn',
                'Supervised learning: Regression, KNN, SVM, Logistic Regression and Decision Tree Models',
                'Unsupervised Learning: K-Means for data Clustering',
                'Processing Big Data and Distributed Systems with PySpark',
                'Analysing Datasets with pandas, numpy and scipy',
                'Data Visualization with matplotlib and seaborn',
                'Databases and SQL for Data Science',
                'Making data-driven decisions'
            ],
            tools: ['TensorFlow', 'Scikit-learn', 'Keras', 'PyTorch', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Seaborn', 'OpenCV', 'LLM', 'NLP', 'PowerBI', 'GPT']
        },
        {
            id: 'data-engineering',
            title: 'Data Engineering',
            icon: '⚙️',
            color: 'from-orange-500 to-red-500',
            skills: [
                'Master up-to-date practical skills and knowledge data engineers use in daily roles',
                'Create, design, & manage relational databases & apply DBA concepts',
                'Work with RDBMSs such as MySQL, PostgreSQL, & IBM Db2',
                'Implement ETL & Data Pipelines with Bash, Airflow & Kafka',
                'Architect, populate, deploy Data Warehouses; create BI reports & interactive dashboards',
                'Deep knowledge of NoSQL & Big Data using MongoDB, Cassandra, Cloudant',
                'Expertise in Hadoop, Apache Spark, Spark SQL, Spark ML, and Spark Streaming',
                'Compose powerful queries with advanced SQL techniques like views, transactions, stored procedures'
            ],
            tools: ['Apache Spark', 'Kafka', 'Airflow', 'MongoDB', 'PostgreSQL', 'MySQL', 'Hadoop', 'Cassandra', 'Docker', 'Kubernetes']
        },
        {
            id: 'software-engineering',
            title: 'Software Engineering',
            icon: '💻',
            color: 'from-purple-500 to-pink-500',
            skills: [
                'Develop, Invent and Design Web Applications',
                'Build robust Web Applications with Next.js and Tailwind CSS',
                'Maintain Backend REST Web services: RESTful APIs and GraphQL APIs',
                'API Testing and Documentation with Postman',
                'Develop Android applications using Java Native',
                'Implement system authentication with Token authentication and JWT',
                'Setup and maintain Microservices Architectures'
            ],
            tools: ['React', 'Next.js', 'Node.js', 'Express', 'GraphQL', 'Java', 'Spring Boot', 'Docker', 'Microservices', 'JWT']
        }
    ];

    const activeCompetence = competences.find(comp => comp.id === activeTab);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10  mx-auto px-6 py-8">
                {/* Header */}
                <div className="pl-[80px] flex flex-col items-start">
                    <h1 className="flex flex-wrap justify-start items-end gap-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2">
                        <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                            Professional
                        </span>
                        <span className="text-lg sm:text-2xl lg:text-3xl bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
                            Competences
                        </span>
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full mb-4"></div>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 shadow-2xl">
                        <div className="flex space-x-1">
                            {competences.map((competence) => (
                                <button
                                    key={competence.id}
                                    onClick={() => setActiveTab(competence.id)}
                                    className={`
                                        relative px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-300
                                        ${activeTab === competence.id
                                            ? `bg-gradient-to-r ${competence.color} text-white shadow-lg transform scale-105`
                                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                        }
                                        group overflow-hidden
                                    `}
                                >
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                                    <div className="relative flex items-center space-x-3">
                                        <span className="text-xl">{competence.icon}</span>
                                        <span className="hidden sm:inline whitespace-nowrap">{competence.title}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
                        {/* Section Header */}
                        <div className="flex items-center space-x-4 mb-8">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeCompetence.color} flex items-center justify-center text-2xl shadow-lg`}>
                                {activeCompetence.icon}
                            </div>
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                    {activeCompetence.title}
                                </h2>
                                <div className={`h-1 w-24 bg-gradient-to-r ${activeCompetence.color} rounded-full`}></div>
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid lg:grid-cols-2 gap-8 mb-10">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-200 mb-6 flex items-center">
                                    <span className="w-2 h-2 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full mr-3"></span>
                                    Core Skills
                                </h3>
                                <div className="space-y-4">
                                    {activeCompetence.skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-start space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                                        >
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeCompetence.color} mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                                            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                                                {skill}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-200 mb-6 flex items-center">
                                    <span className="w-2 h-2 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full mr-3"></span>
                                    Technologies & Tools
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {activeCompetence.tools.map((tool, index) => (
                                        <span
                                            key={index}
                                            className={`
                                                px-4 py-2 rounded-full text-sm font-medium
                                                bg-gradient-to-r ${activeCompetence.color} text-white
                                                shadow-lg hover:shadow-xl transform hover:scale-105
                                                transition-all duration-300 cursor-default
                                                border border-white/20
                                            `}
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom accent */}
                        <div className={`h-1 w-full bg-gradient-to-r ${activeCompetence.color} rounded-full opacity-50`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyCompetences;