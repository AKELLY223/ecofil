import React from "react";

// Import des PDF avec Vite
import iso9001 from "../certif/iso-9001-2015.pdf";
import iso14001 from "../certif/iso-14001-2015.pdf";
import apiSP from "../certif/api-sp.pdf";
import aceaC3 from "../certif/acea-c3.pdf";
import oemApprovals from "../certif/oem-approvals.pdf";
import ecologiqueEuropeen from "../certif/ecologique-europeen.pdf";

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
      pdf: iso9001,
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
      pdf: iso14001,
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
      pdf: apiSP,
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
      pdf: aceaC3,
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
      pdf: oemApprovals,
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
      pdf: ecologiqueEuropeen,
    },
  ];

  // Fonction pour ouvrir le PDF dans une nouvelle fenêtre
  const openPdfInNewWindow = (pdfUrl) => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  // Fonction pour télécharger le PDF
  const downloadPdf = (pdfUrl, fileName) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName || "certificat.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => openPdfInNewWindow(certification.pdf)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Aperçu PDF
                  </button>
                  <button
                    onClick={() =>
                      downloadPdf(
                        certification.pdf,
                        `${certification.title
                          .replace(/\s+/g, "-")
                          .toLowerCase()}.pdf`
                      )
                    }
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center"
                  >
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
                    Télécharger
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Le reste de votre code reste inchangé */}
        {/* ... (engagement qualité, processus de certification, labels) ... */}
      </div>
    </div>
  );
};

export default Certifications;
