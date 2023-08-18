interface Props {
  character: Character;
}

export default function Details({ character }: Props) {
  return (
    <div>
      <h1>{character.name}</h1>
      {/* other details */}
    </div>
  );
}
