import Link from "next/link";

export const metadata = { title: "A2 Key" };

export default function A2Page() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">A2 Key</h1>
      <p className="text-sm text-gray-700 mb-6">
        Example tasks and demos. (We’ll add real items soon.)
      </p>
      <div className="space-x-4">
        <Link href="/quiz" className="underline">Try a quick MCQ</Link>
        <Link href="/levels" className="underline">← Back to Levels</Link>
      </div>
    </>
  );
}
