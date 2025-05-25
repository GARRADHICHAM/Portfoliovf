

const LeftSide = () => {

    return (
        <div className=" rounded-lg space-y-2   ">

            <div className="bg-white rounded-lg p-4 space-y-3">
                <div className="flex space-x-2 items-center">
                    <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" ><path d="M12,.042a9.992,9.992,0,0,0-9.981,9.98c0,2.57,1.99,6.592,5.915,11.954a5.034,5.034,0,0,0,8.132,0c3.925-5.362,5.915-9.384,5.915-11.954A9.992,9.992,0,0,0,12,.042ZM12,14a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z" /></svg>
                    <h1 className="text-sm">Biot , Provence-Alpes-Côte d'Azur , France</h1>
                </div>

                {/* <div className="flex space-x-2">
                    <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" ><path d="M24,6.24c0,7.64-10.13,17.76-17.76,17.76-1.67,0-3.23-.63-4.38-1.78l-1-1.15c-1.16-1.16-1.16-3.12,.05-4.33,.03-.03,2.44-1.88,2.44-1.88,1.2-1.14,3.09-1.14,4.28,0l1.46,1.17c3.2-1.36,5.47-3.64,6.93-6.95l-1.16-1.46c-1.15-1.19-1.15-3.09,0-4.28,0,0,1.85-2.41,1.88-2.44,1.21-1.21,3.17-1.21,4.38,0l1.05,.91c1.2,1.19,1.83,2.75,1.83,4.42Z" /></svg>
                    <h1 className="text-sm">+2126 91 56 86 69</h1>
                </div> */}


                <div className="flex space-x-2">
                    <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" ><path d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z" /><path d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z" /></svg>
                    <h1 className="text-sm">hichamgarrad21@gmail.com</h1>
                </div>

                <div className="flex space-x-2">
                    <img src="icons/linkedin.svg" className="w-[18px] h-[18px]" />
                    <a href="https://www.linkedin.com/in/hicham-garrad" className="hover:text-blue-700 text-sm">linkedin.com/in/hicham-garrad</a>
                </div>

                <div className="flex space-x-2">
                    <img src="icons/github.png" className="w-[18px] h-[18px]" />
                    <a href="https://github.com/GARRADHICHAM" className="hover:text-blue-700 text-sm">github.com/GARRADHICHAM</a>
                </div>

            </div>


            {/* -----------Education Section----------------------------------------------------------------  */}
            <div className="bg-white rounded-lg p-4 space-y-2" data-aos="zoom-in-up">
                <div className="flex space-x-2 items-center">
                    <h1 className="font-bold text-2xl ">Education</h1>
                </div>

                <div className="flex space-x-2">
                    <svg id="Layer_1" height="16px" viewBox="0 0 24 24" width="16px" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m24 8.48v11.52a1 1 0 0 1 -2 0v-8.248l-7.4 3.536a5 5 0 0 1 -2.577.694 5.272 5.272 0 0 1 -2.7-.739l-7.38-3.513a3.691 3.691 0 0 1 -.084-6.455c.027-.016.056-.031.084-.045l7.457-3.558a5.226 5.226 0 0 1 5.282.045l7.375 3.513a3.767 3.767 0 0 1 1.943 3.25zm-11.978 9.5a7.26 7.26 0 0 1 -3.645-.972l-4.377-2.089v2.7a5.007 5.007 0 0 0 3.519 4.778 15.557 15.557 0 0 0 4.481.603 15.557 15.557 0 0 0 4.481-.607 5.007 5.007 0 0 0 3.519-4.778v-2.691l-4.459 2.13a6.983 6.983 0 0 1 -3.519.928z" /></svg>
                    <div className="flex-col">
                        <h1 className="font-bold text-md">Master 2 MIAGE  Intelligence artificielle appliquée</h1>
                        <h2>Université Côte d'Azur - Sciences , Biot , septembre 2025</h2>
                    </div>
                </div>

                <div className="flex space-x-2">
                    <svg id="Layer_1" height="16px" viewBox="0 0 24 24" width="16px" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m24 8.48v11.52a1 1 0 0 1 -2 0v-8.248l-7.4 3.536a5 5 0 0 1 -2.577.694 5.272 5.272 0 0 1 -2.7-.739l-7.38-3.513a3.691 3.691 0 0 1 -.084-6.455c.027-.016.056-.031.084-.045l7.457-3.558a5.226 5.226 0 0 1 5.282.045l7.375 3.513a3.767 3.767 0 0 1 1.943 3.25zm-11.978 9.5a7.26 7.26 0 0 1 -3.645-.972l-4.377-2.089v2.7a5.007 5.007 0 0 0 3.519 4.778 15.557 15.557 0 0 0 4.481.603 15.557 15.557 0 0 0 4.481-.607 5.007 5.007 0 0 0 3.519-4.778v-2.691l-4.459 2.13a6.983 6.983 0 0 1 -3.519.928z" /></svg>
                    <div className="flex-col">
                        <h1 className="font-bold text-md">Master in Business Intelligence & Big Data Analytics</h1>
                        <h2>University Chouaib Doukkali(2023-2025)</h2>
                    </div>
                </div>


                <div className="flex space-x-2">
                    <svg id="Layer_1" height="16px" viewBox="0 0 24 24" width="16px" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m24 8.48v11.52a1 1 0 0 1 -2 0v-8.248l-7.4 3.536a5 5 0 0 1 -2.577.694 5.272 5.272 0 0 1 -2.7-.739l-7.38-3.513a3.691 3.691 0 0 1 -.084-6.455c.027-.016.056-.031.084-.045l7.457-3.558a5.226 5.226 0 0 1 5.282.045l7.375 3.513a3.767 3.767 0 0 1 1.943 3.25zm-11.978 9.5a7.26 7.26 0 0 1 -3.645-.972l-4.377-2.089v2.7a5.007 5.007 0 0 0 3.519 4.778 15.557 15.557 0 0 0 4.481.603 15.557 15.557 0 0 0 4.481-.607 5.007 5.007 0 0 0 3.519-4.778v-2.691l-4.459 2.13a6.983 6.983 0 0 1 -3.519.928z" /></svg>
                    <div className="flex-col">
                        <h1 className="font-bold text-md">Honors Professional Degree Diploma BIG DATA</h1>
                        <h2 className="">University Soultan Moulay Sliman (2022-2023)</h2>
                    </div>
                </div>

                <div className="flex space-x-2">
                    <svg id="Layer_1" height="16px" viewBox="0 0 24 24" width="16px" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m24 8.48v11.52a1 1 0 0 1 -2 0v-8.248l-7.4 3.536a5 5 0 0 1 -2.577.694 5.272 5.272 0 0 1 -2.7-.739l-7.38-3.513a3.691 3.691 0 0 1 -.084-6.455c.027-.016.056-.031.084-.045l7.457-3.558a5.226 5.226 0 0 1 5.282.045l7.375 3.513a3.767 3.767 0 0 1 1.943 3.25zm-11.978 9.5a7.26 7.26 0 0 1 -3.645-.972l-4.377-2.089v2.7a5.007 5.007 0 0 0 3.519 4.778 15.557 15.557 0 0 0 4.481.603 15.557 15.557 0 0 0 4.481-.607 5.007 5.007 0 0 0 3.519-4.778v-2.691l-4.459 2.13a6.983 6.983 0 0 1 -3.519.928z" /></svg>
                    <div className="flex-col">
                        <h1 className="font-bold text-md">Honors DUT Computer Engineering</h1>
                        <h2 className="">University Soultan Moulay Sliman (2020-2022)</h2>
                    </div>
                </div>



            </div>
            {/* -----------Skills Section----------------------------------------------------------------  */}
            <div className="bg-white rounded-lg p-4 space-y-2" data-aos="zoom-in-up">
                <div className="flex space-x-2 items-center">
                    <h1 className="font-bold text-2xl ">Hard Skills</h1>
                </div>

                <div className="flex-col space-y-4" container data-aos="zoom-in-up">

                    <ProgressBar skill={'Python'} progress={"90"} experties={'Expert'} />

                    <ProgressBar skill={'JavaScript'} progress={"80"} experties={'Pro'} />

                    <ProgressBar skill={'Pandas, Numpy & Matplotlib, Plotly, Seaborn , PowerBI'} progress={"80"} experties={'Pro'} />

                    <ProgressBar skill={'ML & Tensorflow , scikit-learn , Keras , openCv'} progress={"80"} experties={'Pro'} />

                    <ProgressBar skill={'ETL ,kafka ,Airflow'} progress={"55"} experties={'Competent'} />

                    <ProgressBar skill={'Nextjs  , tailwind css'} progress={"80"} experties={'Pro'} />

                    <ProgressBar skill={'Git ,GitLab , Github'} progress={"60"} experties={'Competent'} />

                </div>

            </div>

            {/* -----------Languages Section----------------------------------------------------------------  */}
            <div className="bg-white rounded-lg p-4 space-y-2 container" data-aos="zoom-in-up">
                <div className="flex space-x-2 items-center">
                    <h1 className="font-bold text-2xl ">Languages</h1>
                </div>

                <div className="flex-col ">
                    <div className="flex">
                        <h1 className="font-bold">Arabic : </h1>
                        <h2>Native Speaker</h2>
                    </div>
                    <Rating rating={5} />



                </div>

                <div className="flex-col ">
                    <div className="flex">
                        <h1 className="font-bold">Français :</h1>
                        <h2>Professional Proficiency</h2>
                    </div>
                    <Rating rating={4} />
                </div>

                <div className="flex-col ">
                    <div className="flex">
                        <h1 className="font-bold">English : </h1>
                        <h2>Professional Proficiency</h2>
                    </div>
                    <Rating rating={4} />
                </div>




            </div>

            {/* -----------Hobbies Section----------------------------------------------------------------  */}
            <div className="bg-white rounded-lg p-4 space-y-2">
                <div className="flex space-x-2 items-center">
                    <h1 className="font-bold text-2xl ">Hobbies</h1>
                </div>

                <div className="flex space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16px" height="16px"><path d="M16.252,6.334A9.223,9.223,0,0,1,14,.181a11.95,11.95,0,0,1,5.741,2.664Zm-8.5,8.5L10.586,12,2.845,4.259A11.944,11.944,0,0,0,0,12H.323A11.582,11.582,0,0,1,7.749,14.837ZM21.155,4.259,17.666,7.748A9.531,9.531,0,0,0,23.819,10,11.95,11.95,0,0,0,21.155,4.259Zm-6.318,3.49A11.585,11.585,0,0,1,12,.323V0A11.944,11.944,0,0,0,4.259,2.845L12,10.586ZM23.677,12a11.584,11.584,0,0,1-7.426-2.837L13.414,12l7.741,7.741A11.944,11.944,0,0,0,24,12ZM9.163,16.251A11.937,11.937,0,0,1,12,23.648V24h0a11.944,11.944,0,0,0,7.741-2.845L12,13.414ZM7.746,17.668,4.259,21.155A11.95,11.95,0,0,0,10,23.819,9.495,9.495,0,0,0,7.746,17.668ZM.181,14a11.95,11.95,0,0,0,2.664,5.741l3.489-3.489A9.452,9.452,0,0,0,.181,14Z" /></svg>
                    <div className="flex-col">
                        <h1 className="font-bold">BasketBall</h1>
                    </div>
                </div>


                <div className="flex space-x-2">
                    <svg id="Layer_1" height="16px" viewBox="0 0 24 24" width="16px" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m22.916.691a2.992 2.992 0 0 0 -2.469-.638l-11.999 2.247a3 3 0 0 0 -2.448 2.951v11.305a3.959 3.959 0 0 0 -2-.556 4 4 0 1 0 4 4v-10.58l14-2.62v6.761a3.959 3.959 0 0 0 -2-.561 4 4 0 1 0 4 4v-14a3 3 0 0 0 -1.084-2.309z" /></svg>                    <div className="flex-col">
                        <h1 className="font-bold">Music Production</h1>

                    </div>
                </div>

                <div className="flex space-x-2">
                    <svg id="Layer_1" height="16px" viewBox="0 0 24 24" width="16px" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m23.121 7.122-2.414-2.415 2-2-1.414-1.414-2 2-2.414-2.414a3 3 0 0 0 -4.243 0l-2.828 2.828 4.535 4.536-6.1 6.1-4.536-4.535-2.828 2.828a3 3 0 0 0 0 4.242l2.414 2.415-2 2 1.414 1.414 2-2 2.414 2.414a3 3 0 0 0 4.243 0l2.828-2.828-4.535-4.536 6.1-6.1 4.535 4.535 2.828-2.828a3 3 0 0 0 0-4.242z" /></svg>                    <div className="flex-col">
                        <h1 className="font-bold">Fitness</h1>

                    </div>
                </div>



            </div>


        </div>
    )
}

export default LeftSide;


const Rating = ({ rating }) => {
    let stars = [];

    // Loop for filled stars
    for (let i = 0; i < rating; i++) {
        stars.push(
            <svg key={i} class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        );
    }

    // Loop for empty stars (if rating is less than 5)
    const diff = 5 - rating;
    for (let i = 0; i < diff; i++) {
        stars.push(
            <svg key={rating + i} class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        );
    }

    return <div className="flex space-x-1">{stars}</div>; // Return the array of stars
};

const ProgressBar = ({ skill, progress, experties }) => {

    return (

        <div>

            <div className="flex justify-between mb-1">
                <span className="text-base font-bold text-black font-Helvitica dark:text-white">{skill}</span>
                <span className="text-sm font-medium text-gray-600 dark:text-white">{experties}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div className={`bg-[#2A9D8F] h-4 rounded-full`} style={{ width: `${progress}%` }}></div>
            </div>

        </div>
    )
}
