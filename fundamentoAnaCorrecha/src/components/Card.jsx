import React from 'react' 
import { Link } from 'react-router-dom';
 
const Card = ({ character }) => {
  const { name, status, species, image, id} = character;

  return ( 
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"> 
      <img 
      className="object-cover w-full rounded-t-lg h-96 object-cover md:h-full md:w-48 md:rounded-none md:rounded-l-lg" 
      src={image} alt="" /> 
      <div className="flex flex-col justify-between p-4 leading-normal"> 
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5> 
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{status}</p> 
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{species}</p> 
        <Link to={`character/${id}`}>Ver Detalles</Link>
      </div> 
    </div> 
  ); 
};
 
export default Card;