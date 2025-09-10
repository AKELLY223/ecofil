import React, { useState } from "react";

const VideoModal = ({ product, isOpen, onClose }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg overflow-hidden w-3/4 h-3/4 flex flex-col">
        <div className="relative h-4/5">
          {" "}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 z-10 hover:bg-red-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="aspect-w-16 aspect-h-9 w-full h-full">
            {" "}
            <iframe
              src={`https://www.youtube.com/embed/${product.videoId}`}
              title={product.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        <div className="p-6 flex-grow overflow-y-auto">
          {" "}
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {product.title}
          </h3>
          <div className="relative">
            <p
              className={`text-gray-600 transition-all duration-300 ease-in-out ${
                isDescriptionExpanded
                  ? "max-h-full"
                  : "max-h-16 overflow-hidden"
              }`}
            >
              {product.description}
            </p>
            {product.description && product.description.length > 100 && (
              <button
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="text-blue-600 hover:text-blue-800 text-sm mt-2 focus:outline-none"
              >
                {isDescriptionExpanded ? "Afficher moins" : "Afficher plus"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
