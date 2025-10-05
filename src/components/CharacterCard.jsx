// src/components/CharacterCard.jsx
import React from "react";

export default function CharacterCard({ character }) {
  return (
    <div className="border rounded shadow p-4 text-center hover:scale-105 transition-transform">
      <img
        src={character.img}
        alt={character.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h2 className="text-lg font-bold">{character.name}</h2>
      <p className="text-sm text-gray-600">{character.role}</p>
    </div>
  );
}

