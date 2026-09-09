import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import CharactersPage from "./pages/CharactersPage";
import QuizPage from "./pages/QuizPage";
import ChartsPage from "./pages/ChartsPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/charts" element={<ChartsPage />} />
          </Routes>
        </main>
        <footer className="border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md py-6 px-4 text-center text-xs text-slate-500 font-mono">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-amber-400">☀️</span>
              <span>NASA Space Weather Educational Exploration Platform</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span>Heliophysics Division</span>
              <span>•</span>
              <span>Solar Dynamics Observatory</span>
              <span>•</span>
              <span className="text-cyan-400">Open Source</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}




