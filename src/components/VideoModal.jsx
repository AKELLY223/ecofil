import React from "react";

const VideoModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent  bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 z-10"
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
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${product.videoId}`}
              title={product.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-96"
            ></iframe>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {product.title}
          </h3>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
