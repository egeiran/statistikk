import { useState } from "react";
import MathText from "./MathText";

export type QuizQuestion = {
  question: string;
  options: readonly string[];
  answer: number;
};

export default function Quiz({ questions }: { questions: readonly QuizQuestion[] }) {
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const currentQ = questions[qIndex];
  const progress = ((qIndex + (selected !== null ? 1 : 0)) / questions.length) * 100;

  const handleAnswer = (j: number) => {
    if (selected === null) {
      setSelected(j);
      if (j === currentQ.answer) setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setQIndex((i) => i + 1);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
      {/* Progress bar */}
      <div className="w-full bg-zinc-800 h-2 rounded mb-3 overflow-hidden">
        <div
          className="bg-emerald-600 h-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-sm text-zinc-400 mb-4">
        Spørsmål {qIndex + 1} av {questions.length} ({Math.round(progress)}%)
      </p>

      <p className="font-medium mb-3 text-white">
        {qIndex + 1}. <MathText text={currentQ.question} />
      </p>

      <div className="flex flex-col gap-2">
        {currentQ.options.map((opt, j) => {
          const isCorrect = j === currentQ.answer;
          const isSelected = selected === j;

          let color = "bg-zinc-800 hover:bg-zinc-700 text-zinc-200";
          if (selected !== null) {
            if (isSelected && isCorrect) color = "bg-emerald-700 text-white";
            else if (isSelected && !isCorrect) color = "bg-red-700 text-white";
            else if (isCorrect) color = "bg-emerald-800 text-white/70";
            else color = "bg-zinc-800 text-zinc-500";
          }

          return (
            <button
              key={j}
              onClick={() => handleAnswer(j)}
              disabled={selected !== null}
              className={`px-3 py-2 rounded-md text-left transition ${color}`}
            >
              <MathText text={opt} />
            </button>
          );
        })}
      </div>

      {selected !== null && qIndex < questions.length - 1 && (
        <button
          onClick={handleNext}
          className="mt-4 px-3 py-2 bg-emerald-700 hover:bg-emerald-600 rounded text-white"
        >
          Neste spørsmål →
        </button>
      )}

    {selected !== null && qIndex === questions.length - 1 && (
    <div className="mt-4 text-center">
        <p className="text-emerald-400 font-semibold mb-1">
        🎉 Du har fullført quizen!
        </p>
        <p className="text-zinc-300 mb-3">
        Resultat: {score}/{questions.length} riktig (
        {Math.round((score / questions.length) * 100)}%)
        </p>
        <button
        onClick={() => {
            setQIndex(0);
            setSelected(null);
            setScore(0);
        }}
        className="px-3 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md text-white"
        >
        🔁 Ta quizen på nytt
        </button>
    </div>
    )}
    </div>
  );
}