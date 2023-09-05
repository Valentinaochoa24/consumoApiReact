import React, { Fragment, useEffect, useState } from 'react'; 
import Card from './components/Card'; 
 
const App = () => { 
  const [characters, setCharacters] = useState([]); 
 
  // useEffect(() => { 
  //   const fetchData = async () => { 
  //     const data = await fetch('https://rickandmortyapi.com/api/character'); 
  //     const response = await data.json();
  //     setCharacters(response.results); 
  //   } 
  //   // llamar la función 
  //   fetchData() 
  //     // capturar el error 
  //     .catch(console.error); 
  // }, []) 

  return ( 
    <Fragment>
        <section className="h-96 bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-100 grid place-content-center">
          <p className="text-8xl font-black">The Rick and Morty API</p>
        </section>

        <div className="grid grid-cols-2 mt-20 mx-28 gap-6">
          {characters.map(character => (
            <Card key={character.id} character={character} />
          ))}
        </div>
    </Fragment>
  ) 
} 
 
export default App;