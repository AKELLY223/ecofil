import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ECOFIL_MALI</h3>
            <p className="text-gray-400">
              Votre spécialiste en huiles moteur et systèmes de filtration
              automobiles.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-white transition"
                >
                  Produits
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/applications"
                  className="text-gray-400 hover:text-white transition"
                >
                  Applications
                </Link>
              </li>
              <li>
                <Link
                  to="/certifications"
                  className="text-gray-400 hover:text-white transition"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              <p>Sebenicoro près de 56 logements SEMA </p>
              <p>BP:E 2981, Bamako MALI</p>
              <p>NIF : 084132865w / Registre de Commerce : MABKO2019B1583</p>
              <p>Tél: +223 60 70 68 68/ +223 78 35 48 85</p>
              <p>E-mail: ecofilmali@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ECOFIL_MALI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
