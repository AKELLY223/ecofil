import React from "react";
import usine from "../assets/imgs/usine.jpg";

const About = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">À propos de nous</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={usine}
              alt="Notre entreprise"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Notre histoire
            </h2>
            <p className="text-gray-600 mb-4">
              Fondée en 2005, ECOFIL_MALI est née de la passion de son fondateur
              pour l'automobile et le désir de proposer des produits de qualité
              supérieure pour l'entretien des véhicules.
            </p>
            <p className="text-gray-600 mb-4">
              Au fil des années, nous avons développé une expertise reconnue
              dans le domaine des huiles moteur et des systèmes de filtration,
              devenant un partenaire de choix pour de nombreux professionnels et
              particuliers exigeants.
            </p>
            <p className="text-gray-600">
              Aujourd'hui, notre équipe de techniciens qualifiés continue
              d'innover pour vous proposer les solutions les plus performantes
              et adaptées à vos besoins.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Notre mission
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Fournir à nos clients des produits de haute qualité, un service
            exceptionnel et des conseils experts pour assurer la longévité et
            les performances optimales de leurs véhicules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-700 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
            <p className="text-gray-600">
              Nous suivons les dernières avancées technologiques pour vous
              proposer des produits toujours plus performants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-700 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Qualité</h3>
            <p className="text-gray-600">
              Tous nos produits sont rigoureusement testés et répondent aux
              normes de qualité les plus strictes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-700 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Service client
            </h3>
            <p className="text-gray-600">
              Notre équipe dédiée est à votre écoute pour répondre à toutes vos
              questions et vous accompagner.
            </p>
          </div>
        </div>

        <div className="bg-blue-700 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Notre engagement
          </h2>
          <p className="text-center max-w-3xl mx-auto">
            Chez AutoLub, nous nous engageons à fournir des produits de la plus
            haute qualité, un service client exceptionnel et des conseils
            techniques experts pour garantir la satisfaction totale de nos
            clients et la performance optimale de leurs véhicules.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
