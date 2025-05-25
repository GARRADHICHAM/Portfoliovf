
import Image from "next/image";
import { useState } from "react";
import ProjectIndex from '../components/projectIndex'
import { useRouter } from 'next/router';
import Link from 'next/link';
const data = [
    {
        id: 0,
        title: "Fraude Detection",
        desc: "Ce travail est réalisé dans le cadre de mon projet de fin d’études effectué au sein de la société HPS, visant à développer un système de détection des fraudes monétique en utilisant des algorithmes de machine Learning.",
        img: "/Fraud.png",
        tags: ["Pythone", "scikit-learn", "Stensorflow", "Keras"],
    },
    {
        id: 8,
        title: "Plant disease detection system",
        desc: "Building a plant disease detection system, using AI to analyze images and identify diseases, facilitating rapid diagnosis of crop health issues through a microservice.",
        img: "/Plant.png",
        tags: ["React", "Node", "RESTful API", "SCSS"],
    },
    {
        id: 9,
        title: "Real-time facial emotion recognition (CNN)",
        desc: "Building a real-time facial emotion recognition system using CNNs to analyze facial expressions instantly.",
        img: "/Emotion.png",
        tags: ["React", "Node", "RESTful API", "SCSS"],
    },
    {
        id: 1,
        title: "City-Info",
        desc: "Conception et développement d'une application Android en Java qui facilite le processus de géolocalisation autour dune ville se basent sur les différents points d’intérêts de citoyen,...",
        img: "/City.png",
        tags: ["Java", "Mysql", "RESTful API", "SCSS"],
    },
    {
        id: 2,
        title: "ORMVAO",
        desc: "Conception et développement d'une application Android en Java pour l’office régionale de mise en valeur agricole d' Ouarzazate (ORMVAO) qui facilite le processus de gestion des formations au sein de l’ORMVAO.",
        img: "/Discover_App.png",
        tags: ["React", "Node", "RESTful API", "SCSS"],
    },
    {
        id: 3,
        title: "Stock-Management",
        desc: "Conception et développement d'une application de gestion des stocks qui permet de suivre toutes les informations des marchandises gérées dans un entrepôt... ",
        img: "/stcok.png",
        tags: ["java", "swing", "windows", "mysql"],
    },


    {
        id: 4,
        title: "e-commerce analyse",
        desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
        img: "/foodgredient.webp",
        tags: ["React", "Node", "RESTful API", "SCSS"],
    },
];
const Projects = () => {

    return (
        <div className="flex-col  bg-white p-4 rounded-lg drop-shadow-sm h-auto px-6 " >
            <h1 className="font-Helvetica text-[#264653] font-bold text-3xl mb-4">Projects</h1>
            <div className="flex-col space-y-4">
                {data.map((el) => (
                    <Card
                        
                        key={el.id}
                        id={el.id}
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

export default Projects;

const Card = ({ id , title, desc, img, tags }) => {

    const router = useRouter();
    
    const handleClick = () => {
        // Navigate to the Projects page with data
        router.push({
            pathname: '/Projects',
            query: { id, title, desc, img, tags: JSON.stringify(tags) },
        });
    };

    return (
        <div
            className="flex space-x-4 border-b-2 pb-2 h-auto w-auto hover:bg-gray-200 hover:cursor-pointer"
            data-aos="zoom-in-up"
            onClick={handleClick}
        >
            <div className="flex w-1/3 items-center justify-center ">
                <img
                    className=" "
                    src={img}
                    alt={title}
                />
            </div>

            <div className="w-2/3  space-y-2">
                <div className="text-4xl font-extralight">{title}</div>
                <div className="text-justify">{desc}</div>
                <div>
                    {tags.map((el) => (
                        <div className="tags" key={el}>
                            {el}
                        </div>
                    ))}
                </div>
            </div>

        
        </div>
    );
};