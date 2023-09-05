import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://rickandmortyapi.com/api/character');
      const response = await data.json();

      setCharacters(response.results);
    };

    fetchData()
      .catch(console.error);
  }, []);

  const showCharacterDetails = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen">
      <Navbar />
      <section className="h-96 bg-gradient-to-b from-gray-800 to-gray-700 text-white dark:text-gray-100 grid place-content-center">
        <p className="text-5xl font-extrabold text-center animate-bounce">
          The Rick and Morty API
        </p>
      </section>

      <div className="grid grid-cols-2 gap-6 mx-4 md:mx-16 lg:mx-28 mt-8">
        {characters.map((character) => (
          <Link key={character.id} to={`/character/${character.id}`}>
            <Card key={character.id} character={character} />
          </Link>
        ))}
      </div>
      <br />
      <br />
      <br />
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
