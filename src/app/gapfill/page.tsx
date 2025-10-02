import Link from "next/link";
import GapFill from "@/components/GapFill";

export const metadata = { title: "GapFill Demo" };

/** Original B2/C1-style open cloze (created by us, not copied) */
const TEXT = `The course was far ___ challenging than I had expected, not only because of the workload
but ___ due to the pace. By the end of the first week I ___ barely keep up.
What helped most was forming a study group; without it, I would ___ certainly have fallen behind.`;

const ANSWERS = [
  "more",
  "also",
  "could",
  "almost"
];

export default function GapFillPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm underline">← Home</Link>
          <Link href="/levels" className="text-sm underline">Levels</Link>
        </div>

        <h1 className="mt-3 mb-6 text-2xl font-semibold">GapFill (Open Cloze) Demo</h1>

        <p className="text-sm text-gray-600 mb-4">
          Type one word in each gap. Click <strong>Check</strong> to see which are correct.
        </p>

        <GapFill text={TEXT} answers={ANSWERS} />
      </div>
    </main>
  );
}
