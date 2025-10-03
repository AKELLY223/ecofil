import React from "react";

// Import your PDF files here
import Amiga2021 from "../certif/Amiga2021.pdf";
import AMIGADooWelding from "../certif/AMIGADooWelding.pdf";
import CertificatOfConformitzTUV from "../certif/CertificatOfConformitzTUV.pdf";

// Import des images des premières pages   des certificats
import Amiga2021img from "../certif/images/Amiga2021.jpg";
import AMIGADooWeldingimg from "../certif/images/AMIGADooWelding.jpg";
import CertificatOfConformitzTUVimg from "../certif/images/CertificatOfConformitzTUV.jpg";
const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "ISO 9001:2015",
      description: "Système de management de la qualité",
      pdf: Amiga2021,
      image: Amiga2021img,
    },
    {
      id: 2,
      title: "ISO 14001:2015",
      description: "Système de management environnemental",
      pdf: AMIGADooWelding,
      image: AMIGADooWeldingimg,
    },
    {
      id: 3,
      title: "API SP",
      description: "Certification API pour huiles moteur",
      pdf: CertificatOfConformitzTUV,
      image: CertificatOfConformitzTUVimg,
    },
  ];

  const handlePdfClick = (pdfUrl) => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Nos Certifications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'ensemble de nos certifications et agréments qui
            témoignent de notre engagement pour la qualité et l'excellence.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification) => (
            <div
              key={certification.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 flex flex-col"
            >
              {/* Preview Image - Prend toute la hauteur disponible */}
              <div
                className="flex-grow rounded-t-xl overflow-hidden cursor-pointer bg-gray-100 flex items-center justify-center min-h-[60vh]"
                onClick={() => handlePdfClick(certification.pdf)}
              >
                <img
                  src={certification.image}
                  alt={`Première page du certificat ${certification.title}`}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback si l'image ne charge pas */}
                <div
                  className="hidden flex-col items-center justify-center text-gray-400 p-4 min-h-[60vh] w-full"
                  style={{ display: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="text-center text-lg font-medium">
                    Aperçu non disponible
                  </p>
                  <p className="text-center text-sm mt-2">
                    Cliquez pour voir le PDF complet
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col">
                {/* Content */}
                <div className="text-center flex-grow mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {certification.title}
                  </h3>
                  <p className="text-gray-600">{certification.description}</p>
                </div>

                {/* Button */}
                <div className="mt-auto">
                  <button
                    onClick={() => handlePdfClick(certification.pdf)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span>Voir le document complet</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Qualité et Conformité
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Toutes nos certifications sont régulièrement auditées et mises à
            jour pour garantir le plus haut niveau de qualité et de conformité
            aux normes internationales les plus strictes. Cliquez sur les
            aperçus pour consulter les documents complets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
