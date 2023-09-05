import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const CharacterDetails = () => {
  let { characterId } = useParams();
  const [ character, setCharacter ] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
   const fetchData = async () => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    const response = await data.json();
 
    setLoading(false);
    setCharacter(response);
   };
 
   fetchData()
   .catch(console.log)
  }, []);
 
  if(loading) return <h1>Loading...</h1>;
 

  const backgroundImage = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${character.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="max-h-screen text-white"style={backgroundImage}>
      <Navbar />
      <div className="py-12 flex flex-col items-center justify-center">
        <img className="w-48 h-48 rounded-full mb-4" alt={character.name} src={character.image}/>
        <h2 className="text-3xl font-semibold mb-2">{character.name}</h2>
        <div className="grid grid-cols-2 gap-2">
          <p><span className="font-semibold">Status:</span> {character.status}</p>
          <p><span className="font-semibold">Species:</span> {character.species}</p>
          <p><span className="font-semibold">Type:</span> {character.type || 'N/A'}</p>
          <p><span className="font-semibold">Gender:</span> {character.gender}</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
 );
};

export default CharacterDetails;