import Link from "next/link";

export const metadata = { title: "Levels" };

const levels = [
  { code: "a2", name: "A2 Key", blurb: "Elementary practice and demos." },
  { code: "b1", name: "B1 Preliminary", blurb: "Lower-intermediate tasks." },
  { code: "b2", name: "B2 First", blurb: "Upper-intermediate exam practice." },
];

export default function LevelsPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Levels</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {levels.map(l => (
          <Link
            key={l.code}
            href={`/levels/${l.code}`}
            className="rounded-2xl border p-6 hover:shadow block"
          >
            <h2 className="text-lg font-semibold">{l.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{l.blurb}</p>
            <p className="text-sm mt-3 underline">Open level →</p>
          </Link>
        ))}
      </div>
    </>
  );
}
