// src/pages/HomePage.jsx
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-yellow-600">☀️ Welcome to Space Weather!</h1>
      <p className="mt-4 text-lg">Join Sunny on an adventure through Space 🚀</p>
      <Link
        to="/story"
        className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg"
      >
        Start Story
      </Link>
    </div>
  );
}
