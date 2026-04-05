// src/components/CharacterCard.jsx
import React from "react";

export default function CharacterCard({ character }) {
  return (
    <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <img
        src={character.img}
        alt={character.name}
        className="w-full h-56 object-cover rounded-xl mb-5 shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"
      />
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-white mb-1">{character.name}</h2>
        <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">{character.role}</p>
        <p className="text-sm text-slate-300 leading-relaxed text-left">
          {character.description}
        </p>
      </div>
    </div>
  );
}
