//index.tsx
import { useState } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import Link from "next/link";

interface Character {
  name: string;
  house: string;
  dateOfBirth: string;
  _id: string;
}

interface HomeProps {
  characters: Character[];
}

const Home: React.FC<HomeProps> = ({ characters }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCharacters = characters.filter(
    (character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.house.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search character"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {filteredCharacters.map((character) => (
        <Link key={character._id} href={`/${character._id}`}>
          <div>
            <h2>{character.name}</h2>
            <p>{character.dateOfBirth}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("https://hp-api.onrender.com/");
  const characters = res.data;

  return {
    props: { characters },
  };
};

export default Home;
