// src/pages/CharactersPage.jsx
import React from "react";
import CharacterCard from "../components/CharacterCard";
import impactsData from "../data/impactsData";

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 drop-shadow-md">
            Pioneers of Space Weather
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Discover the brilliant minds behind the science of solar flares, auroras, and predictive space weather modeling.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {impactsData.map((char, idx) => (
            <div className="animate-fade-in-up" style={{animationDelay: `${idx * 150}ms`}} key={idx}>
               <CharacterCard character={char} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
