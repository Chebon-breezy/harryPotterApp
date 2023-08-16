// pages/index.tsx
import { GetServerSideProps } from "next";
import axios from "axios";

const IndexPage: React.FC<{ characters: any[] }> = ({ characters }) => {
  return (
    <div className="p-4">
      {characters ? (
        characters.map((char) => (
          <div key={char.name} className="border-b border-gray-200 py-2">
            <h2 className="text-xl font-bold">{char.name}</h2>
            <p>{char.house}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/hp-characters");
  return { props: { characters: data || [] } };
};

export default IndexPage;
