import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import VideoModal from "../components/VideoModal";
import products from "../data/products.js";
import usine from "../assets/imgs/usine.jpg";
import ecofilVideo from "../assets/videos/ecofil_video.mp4";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const openVideoModal = (product) => {
    setSelectedProduct(product);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Des huiles moteur et systèmes de filtration de qualité supérieure
          </h2>
          <p className="text-xl mb-8">
            Découvrez notre gamme complète de produits pour l'entretien de votre
            véhicule
          </p>
          <Link
            to="/products"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
          >
            Voir tous les produits
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nos produits phares
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onVideoClick={openVideoModal}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded transition duration-300 inline-block"
            >
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Colonne vidéo */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative w-full pb-[56.25%] rounded-2xl shadow-lg overflow-hidden">
                <ReactPlayer
                  src={ecofilVideo}
                  playing={true}
                  controls={true}
                  muted={true} // important sinon autoplay bloqué
                  loop={true}
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0"
                />
              </div>
            </div>

            {/* Colonne texte */}
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Qui sommes-nous ?
              </h2>
              <p className="text-gray-600 mb-4">
                ECOFIL_MALI est spécialisé dans la vente d'huiles moteur de
                qualité et de systèmes de filtration pour véhicules. Nous
                proposons une large gamme de produits pour tous types de
                véhicules, des particuliers aux professionnels.
              </p>
              <p className="text-gray-600 mb-6">
                Notre expertise technique nous permet de vous conseiller et de
                vous orienter vers les produits les plus adaptés à vos besoins
                et à votre véhicule.
              </p>
              <Link
                to="/about"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-xl shadow-md transition duration-300 inline-block"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nos services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="text-blue-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Conseil technique
              </h3>
              <p className="text-gray-600">
                Notre équipe d'experts vous conseille sur le choix des produits
                les plus adaptés à votre véhicule.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="text-blue-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Livraison rapide
              </h3>
              <p className="text-gray-600">
                Nous livrons vos commandes en 24-48h partout en France avec des
                partenaires de confiance.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="text-blue-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Support client
              </h3>
              <p className="text-gray-600">
                Notre service client est à votre écoute pour répondre à toutes
                vos questions techniques.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded transition duration-300 inline-block"
            >
              Découvrir tous nos services
            </Link>
          </div>
        </div>
      </section>

      <VideoModal
        product={selectedProduct}
        isOpen={showVideoModal}
        onClose={closeVideoModal}
      />
    </div>
  );
};

export default Home;
