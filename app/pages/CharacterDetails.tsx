import React, { useState } from "react";
import { getCharacters } from "./api";

const CharacterDetails = ({ character }) => {
  return (
    <div>
      <h1>{character.name}</h1>
      <p>{character.role}</p>
      <p>{character.house}</p>
      <p>{character.wand}</p>
    </div>
  );
};

export default CharacterDetails;
