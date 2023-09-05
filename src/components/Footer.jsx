import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contacto</h2>
            <p>Correo: info@example.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Enlaces</h2>
            <ul className="space-y-2">
              <li><a href="/">Inicio</a></li>
              <li><a href="/productos">Productos</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Redes Sociales</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-2">
        © 2023 Tu Sitio - Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
