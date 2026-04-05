import React, { useState } from "react";
import Quiz from "../components/Quiz";
import { quizData } from "../data/quizData";
import { characterQuizData } from "../data/characterQuizData";

export default function QuizPage() {
  const [quizType, setQuizType] = useState("general");

  const currentQuizData = quizType === "general" ? quizData : characterQuizData;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="text-center p-6 bg-yellow-200 shadow rounded mb-6">
        <h1 className="text-3xl font-bold">🪐 Space Quiz Challenge</h1>
        <p className="mt-2 text-gray-700">Test your knowledge about space and solar phenomena!</p>

        <div className="mt-4 flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded font-bold ${quizType === 'general' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setQuizType('general')}
          >
            General Quiz
          </button>
          <button
            className={`px-4 py-2 rounded font-bold ${quizType === 'characters' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setQuizType('characters')}
          >
            Characters Quiz
          </button>
        </div>
      </header>

      <main>
        {/* We key on quizType so the component resets its internal state when varying the quiz */}
        <Quiz key={quizType} quiz={currentQuizData} />
      </main>
    </div>
  );
}


