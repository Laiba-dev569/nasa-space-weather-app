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
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/charts" element={<ChartsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}




