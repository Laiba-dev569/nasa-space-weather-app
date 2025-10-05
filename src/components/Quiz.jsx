import { useState } from "react";

export default function Quiz({ quiz }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === quiz[current].answer) setScore(score + 1);
    if (current < quiz.length - 1) setCurrent(current + 1);
    else setFinished(true);
  };

  if (finished)
    return (
      <h2 className="text-center text-xl mt-10">
        Your Score: {score}/{quiz.length}
      </h2>
    );

  return (
    <div className="border p-4 rounded shadow-md max-w-md mx-auto mt-10 bg-white">
      <h2 className="text-lg font-bold">{quiz[current].question}</h2>
      <div className="mt-3 flex flex-col gap-2">
        {quiz[current].options.map((opt, idx) => (
          <button
            key={idx}
            className="p-2 bg-yellow-200 rounded hover:bg-yellow-300"
            onClick={() => handleAnswer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

