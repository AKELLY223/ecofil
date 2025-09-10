import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onVideoClick, onDetailsClick }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    if (onDetailsClick) {
      onDetailsClick(product);
    } else {
      // Redirection par défaut vers une page de détails
      navigate(`/product/${product.id}`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x200?text=Image+Non+Disponible";
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {product.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-blue-700">
            {product.price}
          </span>
          <button
            onClick={() => onVideoClick(product)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Voir la vidéo
          </button>
        </div>
        <button
          onClick={handleDetailsClick}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          PLUS D'INFORMATIONS
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
