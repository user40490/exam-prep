import Link from "next/link";
import MCQ from "@/components/MCQ";

export const metadata = { title: "Quick MCQ Demo" };

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <Link href="/" className="text-sm underline">← Back</Link>
        <h1 className="mt-3 mb-6 text-2xl font-semibold">Quick MCQ Demo</h1>

        <MCQ
          question="Choose the correct option:"
          options={[
            "I have studied English for five years.",
            "I am studying English for five years.",
            "I study English since five years.",
            "I was studying English since five years."
          ]}
          correctIndex={0}
          explanation="For duration up to now, use present perfect simple: 'have/has + past participle'."
        />
      </div>
    </main>
  );
}
