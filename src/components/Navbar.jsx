// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-teal-100 text-zinc-400 p-4 flex justify-around font-bold">
      <Link to="/">Home</Link>
      <Link to="/story">Story</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/charts">Charts</Link>
    </nav>
  );
}

