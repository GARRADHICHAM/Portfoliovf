import { useState } from 'react';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle resume download
    const handleDownloadResume = () => {
        // Method 1: Direct download from public folder
        const link = document.createElement('a');
        link.href = 'CV_HICHAM_GARRAD_D_S_ALT.pdf'; // Place your PDF in public/resume/
        link.download = 'Garrad_Hicahm_Resume.pdf';
        link.click();

        // Optional: Track download analytics
        // You can add analytics tracking here if needed
        console.log('Resume downloaded');
    };

    // Function to handle contact modal
    const handleContactClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-white flex w-full justify-center items-center h-auto">
            <section className="container justify-between space-x-6 p-4 flex px-20 items-center">
                <div className="flex space-x-6 items-center w-full">
                    <div className="pic">
                        <img src="/images/mypic.jpeg" alt="MyPiC" className="rounded-full h-[180px]" />
                    </div>
                    <div className="flex-col h-full items-center">
                        <h1 className="font-Helvetica font-bold text-[40px] text-[#49515A]">GARRAD HICAHM</h1>
                        <h1 className="font-Helvetica text-[25px] text-[#2A9D8F]">Junior Data Scientist</h1>
                        <section className="flex space-x-2 pt-1">
                            <a
                                href="https://linkedin.com/in/hicham-garrad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-[40px] w-[40px] rounded-full bg-gray-100 p-3 hover:bg-gray-300 hover:cursor-pointer transition-colors duration-200"
                            >
                                <img src="/icons/linkedin.png" className="w-auto" />
                            </a>
                            <a
                                href="https://github.com/GARRADHICHAM"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-[40px] w-[40px] rounded-full bg-gray-100 p-3 hover:bg-gray-300 hover:cursor-pointer transition-colors duration-200"
                            >
                                <img src="/icons/github.png" className="w-auto" />
                            </a>
                            <a
                                href="https://www.instagram.com/hicham_garrad/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-[40px] w-[40px] rounded-full bg-gray-100 p-3 hover:bg-gray-300 hover:cursor-pointer transition-colors duration-200"
                            >
                                <img src="/icons/instagram.png" className="w-auto" />
                            </a>
                        </section>
                    </div>
                </div>
                <div className="flex-col flex w-auto space-y-4">
                    <button
                        onClick={handleDownloadResume}
                        className="rounded-lg w-auto flex space-x-1 p-2 items-center bg-[#E76F51] hover:bg-[#d85a3a] transition-colors duration-200"
                    >
                        <svg fill="white" xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="20px" height="20px">
                            <path d="M12.033,19.011a3.489,3.489,0,0,0,2.475-1.024l3.919-3.919-2.121-2.121-2.782,2.782L13.5,0l-3,0,.024,14.709L7.76,11.947,5.639,14.068l3.919,3.919A3.487,3.487,0,0,0,12.033,19.011Z" />
                            <path d="M21,16v5H3V16H0v5a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V16Z" />
                        </svg>
                        <h1 className="font-Roboto font-bold text-white text-sm">DOWNLOAD RESUME</h1>
                    </button>
                    <button
                        onClick={handleContactClick}
                        className="rounded-lg flex space-x-1 p-2 bg-[#F4A261] hover:bg-[#f0935a] transition-colors duration-200"
                    >
                        <svg fill="white" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                            <path d="M5.521,19.9h5.322l3.519,3.515a2.035,2.035,0,0,0,1.443.6,2.1,2.1,0,0,0,.523-.067,2.026,2.026,0,0,0,1.454-1.414L23.989,1.425Z" />
                            <path d="M4.087,18.5,22.572.012,1.478,6.233a2.048,2.048,0,0,0-.886,3.42l3.495,3.492Z" />
                        </svg>
                        <h1 className="font-Roboto font-bold text-white text-sm">CONTACT ME</h1>
                    </button>
                </div>
            </section>

            {/* Contact Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                        >
                            ×
                        </button>

                        {/* Modal content */}
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-[#49515A] mb-4">Contact me</h2>
                            <p className="text-gray-700 text-lg">
                                Contact me on{' '}
                                <a
                                    href="mailto:yasserazelmad@gmail.com"
                                    className="text-[#2A9D8F] hover:text-[#1e7c70] underline font-semibold"
                                >
                                    hichamgarrad21@gmail.com
                                </a>
                                {' '}for more details.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hero;