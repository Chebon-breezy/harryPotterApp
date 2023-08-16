import React, { useState, useEffect } from "react";
import { getCharacters } from "./pages/api";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  const handleGetCharacters = async () => {
    const response = await getCharacters();
    setCharacters(response.data);
  };

  useEffect(() => {
    handleGetCharacters();
  }, []);

  return (
    <div>
      <h1>Harry Potter Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <h3>{character.name}</h3>
            <p>{character.dateOfBirth}</p>
          </li>
        ))}
      </ul>
      <SearchBar />
    </div>
  );
};

export default Home;
