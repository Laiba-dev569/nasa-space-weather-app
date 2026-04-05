import React, { useState } from "react";
import Quiz from "../components/Quiz";
import { quizData } from "../data/quizData";
import { characterQuizData } from "../data/characterQuizData";

export default function QuizPage() {
  const [quizType, setQuizType] = useState("general");

  const currentQuizData = quizType === "general" ? quizData : characterQuizData;

  return (
    <div className="min-h-screen bg-slate-900 p-6 pt-24 text-gray-100">
      <div className="max-w-3xl mx-auto">
        <header className="text-center p-8 bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-xl rounded-2xl mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 pointer-events-none"></div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 relative z-10 drop-shadow-sm mb-3">
            🪐 Space Quiz Challenge
          </h1>
          <p className="text-lg text-slate-300 relative z-10 mb-8">
            Test your knowledge about space and solar phenomena!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 mx-auto w-full max-w-sm sm:max-w-none">
            <button
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                quizType === 'general' 
                  ? 'bg-emerald-500 text-slate-900 shadow-[0_0_15px_rgba(16,185,129,0.5)] scale-105' 
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600'
              }`}
              onClick={() => setQuizType('general')}
            >
              General Quiz
            </button>
            <button
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                quizType === 'characters' 
                  ? 'bg-cyan-500 text-slate-900 shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-105' 
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600'
              }`}
              onClick={() => setQuizType('characters')}
            >
              Characters Quiz
            </button>
          </div>
        </header>

        <main className="animate-fade-in-up">
          {/* We key on quizType so the component resets its internal state when varying the quiz */}
          <Quiz key={quizType} quiz={currentQuizData} />
        </main>
      </div>
    </div>
  );
}
