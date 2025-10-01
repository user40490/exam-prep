import Link from "next/link";

export const metadata = { title: "C1 Advanced" };

export default function C1Page() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">C1 Advanced</h1>
      <p className="text-sm text-gray-700 mb-6">
        Coming soon: Reading & Use of English parts, Listening demos, and strategies.
      </p>
      <div className="space-x-4">
        <Link href="/quiz" className="underline">Try a quick MCQ</Link>
        <Link href="/levels" className="underline">← Back to Levels</Link>
      </div>
    </>
  );
}
