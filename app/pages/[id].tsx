// pages/[id].tsx
import { GetServerSideProps } from "next";
import axios from "axios";

interface Character {
  name: string;
  role: string;
  house: string;
  wand: string;
  // include here all the fields that the API returns
}

interface CharacterProps {
  character: Character;
}

const Character: React.FC<CharacterProps> = ({ character }) => (
  <div>
    <h1>{character.name}</h1>
    <p>Role: {character.role}</p>
    <p>House: {character.house}</p>
    <p>Wand: {character.wand}</p>
  </div>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await axios.get(`https://hp-api.onrender.com/${id}`);
  const character = res.data;

  return {
    props: { character },
  };
};

export default Character;
