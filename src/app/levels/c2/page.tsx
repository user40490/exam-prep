import Link from "next/link";

export const metadata = { title: "C2 Proficiency" };

export default function C2Page() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">C2 Proficiency</h1>
      <p className="text-sm text-gray-700 mb-6">
        Coming soon: advanced tasks and timing practice.
      </p>
      <Link href="/levels" className="underline">← Back to Levels</Link>
    </>
  );
}
