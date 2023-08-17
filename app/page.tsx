// app/page.tsx
import Link from "next/link";
import axios from "axios";

interface Character {
  _id: string;
  name: string;
  dob: string;
  house: string;
  // other character attributes here
}

export async function getServerSideProps() {
  const { data } = await axios.get("https://hp-api.onrender.com/");

  return {
    props: {
      characters: data,
    },
  };
}

const HomePage = ({ characters }: { characters: Character[] }) => {
  return (
    <div className="flex flex-col items-center">
      {characters &&
        characters.map((character: Character) => (
          <Link href={`/character/${character._id}`} key={character._id}>
            <div className="mb-4 w-72 border-2 border-gray-300 rounded-lg p-4 hover:shadow-xl cursor-pointer">
              <h2 className="font-bold text-xl mb-2">{character.name}</h2>
              <p>Date of Birth: {character.dob}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default HomePage;
