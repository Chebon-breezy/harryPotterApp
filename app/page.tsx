import { GetStaticProps } from "next";
import Link from "next/link";
import { Character } from "../types";
import { getCharacters } from "../services/api";
import Card from "../components/Card";

interface Props {
  characters: Character[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const characters = await getCharacters();

  return {
    props: {
      characters,
    },
  };
};

export default function Home({ characters }: Props) {
  return (
    <div className="grid">
      {characters.map((character) => (
        <Link key={character.id} href={`/characters/${character.id}`}>
          <Card character={character} />
        </Link>
      ))}
    </div>
  );
}
