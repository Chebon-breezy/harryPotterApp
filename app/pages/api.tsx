import axios from "axios";

const api = axios.create({
  baseURL: "https://hp-api.onrender.com/",
});

export const getCharacters = async () => {
  const response = await api.get("/characters");
  return response.data;
};

export const getCharacter = async (id) => {
  const response = await api.get(`/characters/${id}`);
  return response.data;
};
