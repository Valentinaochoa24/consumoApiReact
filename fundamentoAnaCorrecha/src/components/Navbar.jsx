import React from 'react';

const NavWrapper = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-white font-semibold text-lg">
          <a href="/">Mi Sitio</a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-200">Inicio</a>
          </li>
          <li>
            <a href="/productos" className="text-white hover:text-gray-200">Productos</a>
          </li>
          <li>
            <a href="/contacto" className="text-white hover:text-gray-200">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavWrapper;
