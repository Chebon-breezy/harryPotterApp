import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface Character {
  name: string;
  role: string;
  house: string;
  wand: string;
  characteristics: Array<any>;
}

const CharacterPage = () => {
  const [character, setCharacter] = useState<Character | null>(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchCharacter = async () => {
        const { data } = await axios.get(`/api/character/${id}`);
        setCharacter(data);
      };
      fetchCharacter();
    }
  }, [id]);

  return (
    <div>
      {character && (
        <>
          <h1>{character.name}</h1>
          <p>Role: {character.role}</p>
          <p>House: {character.house}</p>
          <p>Wand: {character.wand}</p>
        </>
      )}
    </div>
  );
};

export default CharacterPage;
