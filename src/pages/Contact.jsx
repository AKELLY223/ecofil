import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous ajouterez la logique pour envoyer le formulaire
    alert("Merci pour votre message ! Nous vous répondrons rapidement.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Contactez-nous</h1>
          <p className="mt-2">
            Nous sommes à votre écoute pour répondre à toutes vos questions
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Envoyez-nous un message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="information">Demande d'information</option>
                  <option value="quote">Demande de devis</option>
                  <option value="technical">Support technique</option>
                  <option value="partnership">Partenariat</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded transition duration-300"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Nos coordonnées
            </h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Adresse
                </h3>
                <p className="text-gray-600">Bamako MALI</p>
                <p className="text-gray-600">
                  Sebenicoro près de 56 logements SEMA{" "}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Téléphone
                </h3>
                <p className="text-gray-600">
                  +223 60 70 68 68/ +223 78 35 48 85
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">ecofilmali@gmail.com</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Horaires d'ouverture
                </h3>
                <p className="text-gray-600">Lundi - Vendredi: 9h - 18h</p>
                <p className="text-gray-600">Samedi: 10h - 16h</p>
                <p className="text-gray-600">Dimanche: Fermé</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Nous trouver
              </h3>
              <div className="bg-gray-300 h-64 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Carte"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31518.146624617447!2d-7.9927789!3d12.6392325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51cd4e5d03e7ff%3A0x123456789abcdef!2sBamako%2C%20Mali!5e0!3m2!1sfr!2sml!4v1694000000000!5m2!1sfr!2sml"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
