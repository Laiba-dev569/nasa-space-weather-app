import React from "react";
import Story from "../components/Story";

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="text-center p-6 bg-yellow-300 shadow">
        <h1 className="text-3xl font-bold">🌌 Space Adventure Story</h1>
      </header>
      <main className="p-4">
        <Story />
      </main>
    </div>
  );
}




