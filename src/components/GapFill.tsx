"use client";

import { useMemo, useState } from "react";

type Gap = { id: number; answer: string };
type GapFillProps = {
  text: string;            // use ___ for each gap
  answers: string[];       // correct answers in order
  caseInsensitive?: boolean;
};

function normalise(s: string, ci: boolean) {
  const t = s.trim().replace(/\s+/g, " ");
  return ci ? t.toLowerCase() : t;
}

/**
 * Renders a paragraph with input boxes where ___ appear.
 * - answers[] must match the number of ___ in the text.
 * - Shows per-gap feedback after "Check".
 */
export default function GapFill({ text, answers, caseInsensitive = true }: GapFillProps) {
  const gaps: Gap[] = useMemo(
    () => answers.map((a, i) => ({ id: i, answer: a })),
    [answers]
  );

  // Split text by ___, interleave with input refs by index
  const parts = useMemo(() => text.split(/___/g), [text]);

  const [inputs, setInputs] = useState<string[]>(() => gaps.map(() => ""));
  const [checked, setChecked] = useState(false);

  const correctCount = useMemo(() => {
    if (!checked) return 0;
    return inputs.reduce((acc, v, i) => {
      const ok = normalise(v, caseInsensitive) === normalise(gaps[i].answer, caseInsensitive);
      return acc + (ok ? 1 : 0);
    }, 0);
  }, [checked, inputs, gaps, caseInsensitive]);

  const allFilled = inputs.every(v => v.trim().length > 0);

  function setInput(i: number, v: string) {
    if (checked) return;
    setInputs(prev => {
      const copy = [...prev];
      copy[i] = v;
      return copy;
    });
  }

  function onCheck() {
    setChecked(true);
  }
  function onReset() {
    setInputs(gaps.map(() => ""));
    setChecked(false);
  }

  return (
    <div className="space-y-4">
      <p className="leading-8">
        {parts.map((chunk, i) => (
          <span key={i}>
            {chunk}
            {i < gaps.length && (
              <input
                aria-label={`Gap ${i + 1}`}
                value={inputs[i]}
                onChange={(e) => setInput(i, e.target.value)}
                className={[
                  "mx-1 rounded-md border px-2 py-1 align-middle",
                  checked
                    ? (normalise(inputs[i], caseInsensitive) === normalise(gaps[i].answer, caseInsensitive)
                        ? "border-green-600 bg-green-50"
                        : "border-red-600 bg-red-50")
                    : "border-gray-300"
                ].join(" ")}
                size={Math.max(answers[i].length, 4)}
              />
            )}
          </span>
        ))}
      </p>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onCheck}
          disabled={checked || !allFilled}
          className="rounded-lg bg-black text-white px-4 py-2 disabled:opacity-40"
          title={!allFilled ? "Fill all gaps first" : ""}
        >
          Check
        </button>
        <button
          type="button"
          onClick={onReset}
          className="rounded-lg border px-4 py-2"
        >
          Reset
        </button>

        {checked && (
          <span className="text-sm">
            Score: <strong>{correctCount}</strong> / {gaps.length}
          </span>
        )}
      </div>

      {checked && (
        <details className="text-sm text-gray-700">
          <summary className="cursor-pointer underline">Show answers</summary>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            {gaps.map((g, i) => (
              <li key={g.id}>
                <span className="font-mono">{g.answer}</span>
              </li>
            ))}
          </ol>
        </details>
      )}
    </div>
  );
}
