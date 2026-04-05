import React, { useState } from "react";

export default function Quiz({ quiz }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === quiz[current].answer) setScore(score + 1);
    
    // Slight timeout so the user sees they clicked before moving on immediately
    setTimeout(() => {
      if (current < quiz.length - 1) setCurrent(current + 1);
      else setFinished(true);
    }, 150);
  };

  if (finished)
    return (
      <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 p-8 rounded-2xl shadow-2xl max-w-lg mx-auto text-center animate-fade-in-up">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">
          Quiz Completed!
        </h2>
        <div className="text-6xl font-black text-white mb-6">
          {score} <span className="text-2xl text-slate-400">/ {quiz.length}</span>
        </div>
        <p className="text-lg text-slate-300">
          {score === quiz.length 
            ? "Perfect score! You're a true space explorer 🚀" 
            : score > quiz.length / 2 
            ? "Great job! The universe is proud of you 🌟" 
            : "Keep exploring the cosmos to learn more! 🔭"}
        </p>
      </div>
    );

  return (
    <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 p-6 md:p-8 rounded-2xl shadow-xl max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
          Question {current + 1} of {quiz.length}
        </span>
        <span className="text-sm font-bold text-slate-400 bg-slate-900/50 px-3 py-1 rounded-full">
          Score: {score}
        </span>
      </div>
      
      <h2 className="text-xl md:text-2xl font-bold text-white mb-8 leading-snug">
        {quiz[current].question}
      </h2>
      
      <div className="flex flex-col gap-3">
        {quiz[current].options.map((opt, idx) => (
          <button
            key={idx}
            className="p-4 text-left font-medium text-slate-200 bg-slate-700/50 hover:bg-slate-600 hover:text-white border border-slate-600 hover:border-emerald-500/50 rounded-xl transition-all duration-200 shadow-sm active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-500"
            onClick={() => handleAnswer(opt)}
          >
            <span className="inline-block bg-slate-800 text-slate-400 group-hover:bg-emerald-500 group-hover:text-slate-900 rounded tracking-wider text-xs font-bold px-2 py-1 mr-3 transition-colors">
              {String.fromCharCode(65 + idx)}
            </span>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

