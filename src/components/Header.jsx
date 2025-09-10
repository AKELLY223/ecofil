import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-yellow-400" : "text-white";
  };

  return (
    <header className="bg-blue-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold">ECOFIL_MALI</h1>
            <span className="ml-2 text-yellow-400 text-sm">
              OIL FILTRATION TECHNOLOGY
            </span>
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className={`hover:text-yellow-400 transition ${isActive(
                    "/"
                  )}`}
                >
                  MAISON
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`hover:text-yellow-400 transition ${isActive(
                    "/about"
                  )}`}
                >
                  À PROPOS DE NOUS
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={`hover:text-yellow-400 transition ${isActive(
                    "/products"
                  )}`}
                >
                  PRODUITS
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`hover:text-yellow-400 transition ${isActive(
                    "/services"
                  )}`}
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  to="/applications"
                  className={`hover:text-yellow-400 transition ${isActive(
                    "/applications"
                  )}`}
                >
                  APPLICATIONS
                </Link>
              </li>
              <li>
                <Link
                  to="/certifications"
                  className={`hover:text-yellow-400 transition ${isActive(
                    "/certifications"
                  )}`}
                >
                  CERTIFICATS
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`hover:text-yellow-400 transition ${isActive(
                    "/contact"
                  )}`}
                >
                  CONTACTS
                </Link>
              </li>
            </ul>
          </nav>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className={`block py-2 hover:text-yellow-400 transition ${isActive(
                    "/"
                  )}`}
                >
                  MAISON
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block py-2 hover:text-yellow-400 transition ${isActive(
                    "/about"
                  )}`}
                >
                  À PROPOS DE NOUS
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={`block py-2 hover:text-yellow-400 transition ${isActive(
                    "/products"
                  )}`}
                >
                  PRODUITS
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`block py-2 hover:text-yellow-400 transition ${isActive(
                    "/services"
                  )}`}
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  to="/applications"
                  className={`block py-2 hover:text-yellow-400 transition ${isActive(
                    "/applications"
                  )}`}
                >
                  APPLICATIONS
                </Link>
              </li>
              <li>
                <Link
                  to="/certifications"
                  className={`block py-2 hover:text-yellow-400 transition ${isActive(
                    "/certifications"
                  )}`}
                >
                  CERTIFICATS
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block py-2 hover:text-yellow-400 transition ${isActive(
                    "/contact"
                  )}`}
                >
                  CONTACTS
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
