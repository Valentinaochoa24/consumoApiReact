import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const Character = () => {
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

 return
 (
  <div>
    <h2>Character Details</h2>
    <p>Name: {character.name}</p>
    <p>Status: {character.status}</p>
    <p>Species: {character.species}</p>
  </div>
 );
}

export default Character;