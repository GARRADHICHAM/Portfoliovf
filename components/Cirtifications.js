
import Image from "next/image";
const data = [
    {
        id: 0,
        title: "Introduction to Data Engineering",
        desc: "List basic skills required for an entry-level data engineering role. Discuss various stages and concepts in the data engineering lifecycle. Describe data engineering technologies such as Relational Databases, NoSQL Data Stores, and Big Data Engines.Summarize concepts in data security, governance, and compliance.",
        img: "/IntroData.jpg",
       
    },
    {
        id: 1,
        title: "Introduction to Big Data with Spark and Hadoop",
        desc: "Apply Spark programming basics, including parallel programming basics for DataFrames, data sets, and Spark SQL. Use Spark’s RDDs and data sets, optimize Spark SQL using Catalyst and Tungsten, and use Spark’s development and runtime environment options.",
        img: "/bigdata.jpg",
        
    },
    {
        id: 2,
        title: "ETL and Data Pipelines with Shell, Airflow and Kafka",
        desc: "Describe and contrast Extract, Transform, Load (ETL) processes and Extract, Load, Transform (ELT) processes. Explain batch vs concurrent modes of execution. Implement ETL workflow through bash and Python functions. Describe data pipeline components, processes, tools, and technologies.",
        img: "/etl.jpg",

    },
   
];
const Cirtifications = () => {
    return (
        <div className="flex-col bg-white p-4 rounded-lg drop-shadow-sm h-auto px-6 " >
            <h1 className="font-Helvetica text-[#264653] font-bold text-3xl mb-4">Cirtifications</h1>
            <div className="flex-col space-y-2">
                {data.map((el) => (
                    <Card
                        key={el.id}
                        title={el.title}
                        desc={el.desc}
                        img={el.img}
                        tags={el.tags}
                    />
                ))}

            </div>


        </div>
    )
}

export default Cirtifications;

const Card = ({ title, desc, img, tags }) => {
    return (
        <div
            className="border flex border-accent h-auto w-auto "
            data-aos="zoom-in-up"
        >
            <div className="flex items-center justify-center ">
                <img
                    className="  w-[800px] h-auto"
                    src={img}
               
                    alt={title}
                />
            </div>

            <div className="p-4 w-auto space-y-4">
                <div className="text-4xl font-extralight">{title}</div>
                <div className="text-justify">{desc}</div>
              
            </div>
        </div>
    );
};