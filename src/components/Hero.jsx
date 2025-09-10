import React from "react";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Des huiles moteur de qualité supérieure
        </h2>
        <p className="text-xl mb-8">
          Découvrez notre gamme complète de produits pour l'entretien de votre
          véhicule
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full transition duration-300">
          Voir tous les produits
        </button>
      </div>
    </section>
  );
};

export default Hero;
