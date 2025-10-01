import React from "react";

// Import your PDF files here
import iso9001Pdf from "../certif/iso-9001-2015.pdf";
import iso14001Pdf from "../certif/iso-14001-2015.pdf";
import apiSpPdf from "../certif/api-sp.pdf";
import aceaC3Pdf from "../certif/acea-c3.pdf";
import oemApprovalsPdf from "../certif/oem-approvals.pdf";
import ecologiqueEuropenPdf from "../certif/ecologique-europeen.pdf";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "ISO 9001:2015",
      description: "Système de management de la qualité",
      pdf: iso9001Pdf,
    },
    {
      id: 2,
      title: "ISO 14001:2015",
      description: "Système de management environnemental",
      pdf: iso14001Pdf,
    },
    {
      id: 3,
      title: "API SP",
      description: "Certification API pour huiles moteur",
      pdf: apiSpPdf,
    },
    {
      id: 4,
      title: "ACEA C3",
      description: "Norme européenne pour huiles moteur",
      pdf: aceaC3Pdf,
    },
    {
      id: 5,
      title: "Approbations OEM",
      description: "Certifications des constructeurs",
      pdf: oemApprovalsPdf,
    },
    {
      id: 6,
      title: "Écologique Européen",
      description: "Certification environnementale européenne",
      pdf: ecologiqueEuropenPdf,
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
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-200"
              onClick={() => handlePdfClick(certification.pdf)}
            >
              <div className="p-6 flex flex-col h-full">
                {/* PDF Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-red-100 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-red-600"
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
                  </div>
                </div>

                {/* Content */}
                <div className="text-center flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {certification.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {certification.description}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-auto pt-4">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center space-x-2">
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span>Voir le certificat</span>
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
            aux normes internationales les plus strictes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
