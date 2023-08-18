import { getCharacters, getCharacter } from "../services/api";

describe("API", () => {
  test("getCharacters returns array of characters", async () => {
    const characters = await getCharacters();
    expect(Array.isArray(characters)).toBe(true);
  });

  test("getCharacter returns single character", async () => {
    const character = await getCharacter("1");
    expect(character.id).toBe("1");
  });
});
