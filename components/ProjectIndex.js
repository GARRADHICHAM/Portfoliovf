import { useState } from 'react';

// Modal Component
const ProjectIndex = ({ isOpen, onClose, img, title, desc, tags }) => {
  if (!isOpen) return null;

  return (
    <div className=" flex items-center justify-center  bg-black bg-opacity-50">
      <div className="relative mx-4 max-w-4xl rounded-lg bg-white p-6 shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          <div className="flex w-full items-center justify-center md:w-1/3">
            <img
              className="max-h-64 object-contain"
              src={img}
              alt={title}
            />
          </div>

          <div className="w-full space-y-4 md:w-2/3">
            <h2 className="text-3xl font-extralight md:text-4xl">{title}</h2>
            <p className="text-justify">{desc}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((el) => (
                <span 
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm" 
                  key={el}
                >
                  {el}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectIndex