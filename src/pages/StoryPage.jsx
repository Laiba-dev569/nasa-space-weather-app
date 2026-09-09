import React from "react";
import Story from "../components/Story";

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-slate-900/95 py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-widest uppercase mb-3">
            Interactive Graphic Novel
          </div>
          <h1 className="text-4xl sm:text-5xl font-bangers tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 drop-shadow">
            🌌 Cosmic Adventure: Sunny's Journey
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-comic mt-2">
            Experience the voyage of a solar particle through interplanetary space, experiencing solar flares, coronal mass ejections, and the dance of auroras.
          </p>
        </header>
        <main>
          <Story />
        </main>
      </div>
    </div>
  );
}




