// src/pages/CharactersPage.jsx
import React from "react";
import CharacterCard from "../components/CharacterCard";
import impactsData from "../data/impactsData";

export default function CharactersPage() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {impactsData.map((char, idx) => (
        <CharacterCard key={idx} character={char} />
      ))}
    </div>
  );
}



