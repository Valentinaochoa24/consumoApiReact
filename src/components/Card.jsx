import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ character }) => {
  const { name, status, species, image, id } = character;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transform hover:translate-y-[-5px] transition-transform duration-300 ease-in-out">
      <Link to={`/character/${id}`} className="block">
        <img
          className="w-full h-64 object-cover rounded-t-lg md:h-48 md:rounded-none md:rounded-tl-lg"
          src={image}
          alt=""
        />
      </Link>
      <div className="p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 text-gray-700 dark:text-gray-400">{status}</p>
        <p className="mb-3 text-gray-700 dark:text-gray-400">{species}</p>
        <Link
          to={`/character/${id}`}
          className="inline-block px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default Card;
