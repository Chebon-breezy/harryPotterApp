import { GetStaticProps, GetStaticPaths } from "next";
import { getCharacter } from "../../services/api";
import { Character } from "../../types";
import Details from "../../components/Details";

interface Props {
  character: Character;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // paths array
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const character = await getCharacter(params!.id);
  return { props: { character } };
};

export default function CharacterDetails({ character }: Props) {
  return <Details character={character} />;
}
