import Link from "next/link";
export const metadata = { title: "B1 Preliminary" };
export default function B1Page() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">B1 Preliminary</h1>
      <p className="text-sm text-gray-700 mb-6">Coming soon: Reading, Use of English, Listening demos.</p>
      <Link href="/levels" className="underline">← Back to Levels</Link>
    </>
  );
}
