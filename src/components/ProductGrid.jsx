import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ products, onVideoClick }) => {
  return (
    <section id="produits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nos produits phares
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onVideoClick={onVideoClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
