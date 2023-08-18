export function formatDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function filterCharacters(characters: Character[], query: string) {
  return characters.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );
}
