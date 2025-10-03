import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import VideoModal from "../components/VideoModal";
import products from "../data/products.js";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const openVideoModal = (product) => {
    setSelectedProduct(product);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setSelectedProduct(null);
  };

  const categories = [
    { id: "all", name: "Tous les produits" },
    { id: "oils", name: "Huiles moteur" },
    { id: "filters", name: "Filtres" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Nos produits</h1>
          <p className="mt-2">
            Découvrez notre gamme complète de produits de qualité
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filtres de catégories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Catégories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === category.id
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onVideoClick={openVideoModal}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-xl">
              Aucun produit dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>

      <VideoModal
        product={selectedProduct}
        isOpen={showVideoModal}
        onClose={closeVideoModal}
      />
    </div>
  );
};

export default Products;
