import React from "react";
import Quiz from "../components/Quiz";
import { quizData } from "../data/quizData";

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="text-center p-6 bg-yellow-200 shadow rounded mb-6">
        <h1 className="text-3xl font-bold">🪐 Space Quiz Challenge</h1>
        <p className="mt-2 text-gray-700">Test your knowledge about space and solar phenomena!</p>
      </header>

      <main>
        <Quiz quiz={quizData} />
      </main>
    </div>
  );
}


