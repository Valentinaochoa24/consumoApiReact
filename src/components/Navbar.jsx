import React from 'react';
import { Link } from 'react-router-dom';

const NavWrapper = () => {
  return (
    <header className="bg-gray-900 p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-white font-semibold text-lg">
          <Link to="/" className="text-white hover:text-gray-300">UNIVERSE RICK AND MORTY</Link> 
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link> 
          </li>
          <li>
            <Link to="/welcome" className="text-white hover:text-gray-300">Pruebame</Link> 
          </li>
          <li>
            <Link to="/contacto" className="text-white hover:text-gray-300">Contacto</Link> 
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavWrapper;

