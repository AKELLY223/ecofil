import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description:
        "Certification système de management de la qualité pour la conception, la production et la commercialisation de nos produits.",
      image:
        "https://images.unsplash.com/photo-1563013541-5a2d08efd3f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      validity: "Valide jusqu'au 15/12/2025",
      benefits: [
        "Processus qualité standardisés",
        "Amélioration continue",
        "Satisfaction client accrue",
        "Optimisation des processus",
      ],
    },
    {
      title: "ISO 14001:2015",
      description:
        "Certification management environnemental pour notre engagement en faveur de pratiques durables et respectueuses de l'environnement.",
      image:
        "https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      validity: "Valide jusqu'au 20/03/2026",
      benefits: [
        "Réduction de l'impact environnemental",
        "Gestion des déchets optimisée",
        "Conformité réglementaire",
        "Démarche écoresponsable",
      ],
    },
    {
      title: "API SP",
      description:
        "Certification American Petroleum Institute pour nos huiles moteur, garantissant des performances et une protection optimales.",
      image:
        "https://images.unsplash.com/photo-1581431886217-6e7be9abf0ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      validity: "Certification permanente",
      benefits: [
        "Protection contre l'usure",
        "Nettoyage du moteur",
        "Performance à haute température",
        "Compatibilité avec les catalyseurs",
      ],
    },
    {
      title: "ACEA C3",
      description:
        "Norme européenne pour les huiles stables, aptes aux véhicules équipés de systèmes de post-traitement des gaz d'échappement.",
      image:
        "https://images.unsplash.com/photo-1610041321320-8b2a1a5c0c9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      validity: "Certification permanente",
      benefits: [
        "Compatibilité avec les FAP/DPF",
        "Faible teneur en cendres sulphatées",
        "Protection contre l'usure",
        "Stabilité à l'oxydation",
      ],
    },
    {
      title: "OEM Approvals",
      description:
        "Agréments constructeurs pour une compatibilité garantie avec les marques automobiles principales.",
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      validity: "Certification permanente",
      benefits: [
        "Agrément Mercedes-Benz",
        "Agrément Volkswagen",
        "Agrément BMW",
        "Agrément Renault",
      ],
    },
    {
      title: "Ecologique Européen",
      description:
        "Label garantissant que nos produits respectent les normes environnementales européennes les plus strictes.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      validity: "Valide jusqu'au 10/11/2024",
      benefits: [
        "Biodégradabilité accrue",
        "Toxicité réduite",
        "Emballages recyclables",
        "Procédés de production propres",
      ],
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* En-tête de la page */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Certifications</h1>
          <p className="mt-2">
            Découvrez les certifications et agréments qui garantissent la
            qualité de nos produits
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Gage de qualité et de performance
          </h2>
          <p className="text-gray-600">
            Chez AutoLub, nous nous engageons à fournir des produits de la plus
            haute qualité, conformes aux normes internationales les plus
            exigeantes. Nos certifications témoignent de notre engagement envers
            l'excellence, la durabilité et la satisfaction de nos clients.
          </p>
        </div>

        {/* Grille des certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={certification.image}
                  alt={certification.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {certification.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {certification.description}
                </p>

                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-blue-800 text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {certification.validity}
                  </p>
                </div>

                <h4 className="font-semibold text-gray-700 mb-2">
                  Avantages :
                </h4>
                <ul className="space-y-2">
                  {certification.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300 w-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Télécharger le certificat
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section engagement qualité */}
        <div className="bg-blue-50 p-8 rounded-lg mt-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Notre engagement qualité
              </h2>
              <p className="text-gray-600">
                Tous nos produits sont développés et testés selon les normes les
                plus strictes. Notre processus de contrôle qualité garantit que
                chaque article qui quitte notre usine répond aux exigences de
                performance et de durabilité que nos clients attendent.
              </p>
            </div>
            <div className="md:w-1/3 text-center md:text-right">
              <a
                href="/contact"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded transition duration-300 inline-block"
              >
                Demander un certificat
              </a>
            </div>
          </div>
        </div>

        {/* Section processus de certification */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Notre processus de certification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <span className="text-blue-800 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Tests en laboratoire
              </h3>
              <p className="text-gray-600">
                Chaque produit subit une série de tests rigoureux en laboratoire
                pour vérifier ses performances et sa conformité aux
                spécifications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <span className="text-blue-800 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Validation externe
              </h3>
              <p className="text-gray-600">
                Des organismes certificateurs indépendants vérifient et valident
                nos processus et produits selon les normes en vigueur.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <span className="text-blue-800 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Surveillance continue
              </h3>
              <p className="text-gray-600">
                Nous maintenons nos certifications grâce à des audits réguliers
                et une amélioration continue de nos processus.
              </p>
            </div>
          </div>
        </div>

        {/* Section labels */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Labels et reconnaissances
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  Qualité France
                </span>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 14v6m-3-3h6M6 10h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm10-4a2 2 0 11-4 0 2 2 0 014 0zM4 6a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  Eco-label UE
                </span>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
                <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-700"
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
                <span className="text-sm font-medium text-gray-700 text-center">
                  Sécurité Premium
                </span>
              </div>

              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  Performance Vérifiée
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
