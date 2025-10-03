import React from "react";
import bus from "../images/bus.jpg";
import busGars from "../images/busGars.jpg";
import bus2 from "../images/bus2.jpg";
import gars from "../images/gars.jpg";
import bigBus from "../images/bigBus.jpg";

const Applications = () => {
  const applicationCategories = [
    {
      title: "Automobiles particulières",
      description:
        "Nos huiles et filtres sont spécialement conçus pour les véhicules particuliers, offrant une protection optimale et des performances accrues.",
      image: bus,
      features: [
        "Moteurs essence et diesel",
        "Transmissions automatiques et manuelles",
        "Systèmes de freinage",
        "Direction assistée",
      ],
    },
    {
      title: "Poids lourds et transport",
      description:
        "Des solutions robustes pour les flottes de camions et véhicules commerciaux, garantissant fiabilité et longévité.",
      image: busGars,
      features: [
        "Moteurs diesel haute performance",
        "Systèmes de filtration avancés",
        "Huiles longue durée",
        "Compatibilité avec les normes Euro 6",
      ],
    },
    {
      title: "Véhicules agricoles",
      description:
        "Des produits adaptés aux conditions extrêmes rencontrées dans le secteur agricole, pour une protection maximale.",
      image: bus2,
      features: [
        "Résistance aux charges lourdes",
        "Protection contre l'usure",
        "Performance par temps froid",
        "Compatibilité avec les biocarburants",
      ],
    },
    {
      title: "Engins de chantier",
      description:
        "Des lubrifiants et filtres haute performance pour les engins de construction et travaux publics.",
      image: gars,
      features: [
        "Protection contre la contamination",
        "Stabilité à haute température",
        "Performance en conditions extrêmes",
        "Intervalle de vidange prolongé",
      ],
    },
    {
      title: "Marine et navigation",
      description:
        "Solutions spécialisées pour les moteurs marins, offrant une protection contre la corrosion et les environnements salins.",
      image: bigBus,
      features: [
        "Résistance à l'eau salée",
        "Protection anticorrosion",
        "Lubrification des systèmes marins",
        "Compatibilité avec les diesel marins",
      ],
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* En-tête de la page */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Applications</h1>
          <p className="mt-2">
            Découvrez les différents domaines d'application de nos produits
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Des solutions pour tous les secteurs
          </h2>
          <p className="text-gray-600">
            Chez Ecofil_Mali, nous développons des huiles moteur et des systèmes
            de filtration adaptés à une large gamme d'applications. Que vous
            soyez un particulier, un professionnel du transport, de
            l'agriculture ou de la construction, nous avons les produits qu'il
            vous faut.
          </p>
        </div>

        {/* Grille des applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applicationCategories.map((app, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {app.title}
                </h3>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300 w-full">
                  Voir les produits
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section conseils */}
        <div className="bg-blue-50 p-8 rounded-lg mt-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Vous ne trouvez pas votre application ?
              </h2>
              <p className="text-gray-600">
                Notre équipe technique peut vous conseiller sur les produits les
                plus adaptés à vos besoins spécifiques. Contactez-nous pour une
                étude personnalisée de votre application.
              </p>
            </div>
            <div className="md:w-1/3 text-center md:text-right">
              <a
                href="/contact"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded transition duration-300 inline-block"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>

        {/* Section technique */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Support technique par application
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Guides techniques
                </h3>
              </div>
              <p className="text-gray-600">
                Accédez à nos guides techniques détaillés pour chaque type
                d'application. Vous y trouverez des informations sur les
                spécifications produits, les intervalles de maintenance et les
                meilleures pratiques d'utilisation.
              </p>
              <a
                href="#"
                className="text-blue-700 hover:text-blue-900 font-medium inline-block mt-4"
              >
                Télécharger les guides →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  FAQ par secteur
                </h3>
              </div>
              <p className="text-gray-600">
                Consultez notre foire aux questions organisée par secteur
                d'activité. Nous y répondons aux interrogations les plus
                courantes concernant l'utilisation de nos produits dans des
                contextes spécifiques.
              </p>
              <a
                href="#"
                className="text-blue-700 hover:text-blue-900 font-medium inline-block mt-4"
              >
                Voir les FAQ →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
