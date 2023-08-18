import fetch from "node-fetch";

const API_URL = "https://hp-api.onrender.com/api";

export async function getCharacters(): Promise<Character[]> {
  const res = await fetch(`${API_URL}/characters`);
  return res.json();
}

export async function getCharacter(id: string): Promise<Character> {
  const res = await fetch(`${API_URL}/characters/${id}`);
  return res.json();
}
