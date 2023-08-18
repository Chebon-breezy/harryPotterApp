import { GetStaticProps } from "next";
import Link from "next/link";
import { Character } from "../types";
import { getCharacters } from "../services/api";
import Card from "../components/Card";

interface Props {
  characters: Character[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://hp-api.onrender.com/api/characters");
  const data = await res.json();

  return {
    props: {
      characters: data,
    },
  };
};

export default function Home({ characters }: Props) {
  return (
    <div className="grid">
      {characters &&
        characters.map((character) => (
          <Link key={character.id} href={`/characters/${character.id}`}>
            <Card character={character} />
          </Link>
        ))}
    </div>
  );
}
