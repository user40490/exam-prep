import Link from "next/link";
export const metadata = { title: "B2 First" };
export default function B2Page() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">B2 First</h1>
      <p className="text-sm text-gray-700 mb-6">Coming soon: Part-by-part practice with timer.</p>
      <Link href="/levels" className="underline">← Back to Levels</Link>
    </>
  );
}
