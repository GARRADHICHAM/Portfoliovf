

const KeyCompetences = () => {
    return (
        <div className="flex-col bg-white p-4 rounded-lg drop-shadow-sm h-auto px-6 " >
            <h1 className="font-Helvetica text-[#264653] font-bold text-3xl mb-4">Professional Competences </h1>


            <div>
                <h1 className="font-Helvetica font-bold text-2xl mb-4">Data Science </h1>

                <ul className="list-disc list-inside  text-left space-y-2  font-lato text-[#434343] text-[16px] leading-[24px] text-wrap mb-2">
                    <li>Create, Evaluate and Deploy Machine learning Models with Sklearn.</li>
                    <li>Supervised learning : Regression, KNN, SVM, Logistic Regression and DecisionTree Models.</li>
                    <li>UnSupervised Learning : K-Means for data Clustring.</li>
                    <li>Processing  Big Data and Disrtibuted Systems with PySpark.</li>
                    <li>Analysing Datasets with pandas, numpy and scipy.</li>
                    <li>Data Visualization with matplotlib and seaborn.</li>
                    <li>Databases and SQL for Data Science.</li>
                    <li>Making data decisions.</li>
                    <li>Tools :tensorflow , scikit-learn , Keras ,pytorch , Pandas, Numpy , Matplotlib, Plotly, Seaborn  , OpenCV , LLM ,NLP , PowerBI , GPT.</li>
                </ul>
            </div>

            <div>
                <h1 className="font-Helvetica font-bold text-2xl mb-4 pt-6">Data Engineering </h1>
                <ul className="list-disc list-inside  text-left space-y-2  font-lato text-[#434343] text-[16px] leading-[24px] text-wrap mb-2">
                    <li>Master the most up-to-date practical skills and knowledge data engineers use in their daily roles.</li>
                    <li>create, design, & manage relational databases & apply database administration (DBA) concepts to </li>
                    <li>RDBMSs such as MySQL, PostgreSQL, & IBM Db2 .</li>
                    <li>Implement ETL & Data Pipelines with Bash, Airflow & Kafka.</li>
                    <li>architect, populate, deploy Data Warehouses; create BI reports & interactive dashboards .</li>
                    <li>Deep knowledge of NoSQL & Big Data using MongoDB, Cassandra, Cloudant, </li>
                    <li>Hadoop, Apache Spark, Spark SQL, Spark ML, and Spark Streaming .</li>
                    <li>Compose  powerful queries with advanced SQL techniques like views, transactions, stored procedures,...</li>
                </ul>
            </div>

            
            <div>
                <h1 className="font-Helvetica font-bold text-2xl mb-4 pt-6">Software Engineering </h1>
                <ul className="list-disc list-inside  text-left space-y-2  font-lato text-[#434343] text-[16px] leading-[24px] text-wrap mb-2">
                    <li>Develop, Invent and Design Web Applications.</li>
                    <li>Develop, Nextjs and tailwind css , robust  Web Applications.</li>
                    <li>Maintain Backend REST Web services : RESTFUL APIs and GraphQL APIs. </li>
                    <li>Testing APIs with Postman.</li>
                    <li>Develop android application using java Native.</li>
                    <li>Maintain system authentication with Token authentication and JWT.</li>
                    <li>Setup Microservices Architectures. </li>
                   
                </ul>
            </div>


        </div>
    )
}

export default KeyCompetences;