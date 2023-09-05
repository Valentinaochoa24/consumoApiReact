import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
 const { id } = useParams();
 const [character, setCharacter] = useState(null);

 useEffect(() => {
   const fetchCharacterDetails = async () => {
     try {
       const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
       const data = await response.json();
       setCharacter(data);
     } catch (error) {
       console.error('Error fetching character details:', error);
     }
   };

   fetchCharacterDetails();
 }, [id]);

 if (!character) {
   return <p>Loading...</p>;
 }

 return (
   <div>
     <h2>Character Details</h2>
     <p>Name: {character.name}</p>
     <p>Status: {character.status}</p>
     <p>Species: {character.species}</p>
     {/* Mostrar más detalles del personaje aquí */}
   </div>
 );
};

export default CharacterDetails;