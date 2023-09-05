import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ContactSection = () => {
  return (
    <div>
      <Navbar/>
      <section className="bg-gray-100 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">Contáctanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="max-w-md mx-auto">
              <form className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="name" className="text-gray-800 dark:text-white">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-800 dark:text-white">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-gray-800 dark:text-white">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="border rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Enviar
                </button>
              </form>
            </div>
            <div className="max-w-md mx-auto">
              <p className="text-gray-800 dark:text-white">
                Si tienes alguna pregunta o comentario, no dudes en contactarnos. Estamos aquí para ayudarte.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ContactSection;
