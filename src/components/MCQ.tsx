"use client";

import { useState } from "react";

type MCQProps = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
};

export default function MCQ({ question, options, correctIndex, explanation }: MCQProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = submitted && selected === correctIndex;

  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-lg font-medium">{question}</p>

      <div className="space-y-2">
        {options.map((opt, i) => {
          const chosen = selected === i;
          const showState = submitted && (i === correctIndex || i === selected);

          return (
            <button
              key={i}
              type="button"
              onClick={() => !submitted && setSelected(i)}
              className={[
                "w-full text-left border rounded-xl px-4 py-3",
                chosen && !submitted ? "border-gray-900" : "border-gray-300",
                showState && i === correctIndex ? "border-green-600 bg-green-50" : "",
                showState && i === selected && i !== correctIndex ? "border-red-600 bg-red-50" : "",
              ].join(" ")}
            >
              <span className="mr-2 font-semibold">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          disabled={selected === null || submitted}
          onClick={() => setSubmitted(true)}
          className="rounded-lg bg-black text-white px-4 py-2 disabled:opacity-40"
        >
          Submit
        </button>

        {submitted && (
          <span className={isCorrect ? "text-green-700" : "text-red-700"}>
            {isCorrect ? "Correct" : "Incorrect"}
          </span>
        )}
      </div>

      {submitted && explanation && (
        <p className="mt-3 text-sm text-gray-700">
          {explanation}
        </p>
      )}
    </div>
  );
}
