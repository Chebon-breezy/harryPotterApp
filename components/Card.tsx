import { Character } from "../types";

interface Props {
  character: Character;
}

export default function Card({ character }: Props) {
  return (
    <div className="card">
      <h2>{character.name}</h2>
      <p>{character.dateOfBirth}</p>
    </div>
  );
}
