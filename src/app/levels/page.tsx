import Link from "next/link";

export const metadata = { title: "Levels" };

const levels = [
  {
    code: "b2",
    name: "B2 First",
    blurb: "Upper-intermediate exam practice.",
    href: "/quiz",            // demo route you already have
    cta: "Start B2 demo →",
  },
  {
    code: "c1",
    name: "C1 Advanced",
    blurb: "Advanced tasks and strategies.",
    href: "/gapfill",         // demo route you already have
    cta: "Try a GapFill →",
  },
  {
    code: "c2",
    name: "C2 Proficiency",
    blurb: "Proficiency-level practice. (Placeholder for next task type.)",
    href: "/levels/c2",       // keep placeholder page for now
    cta: "Open C2 placeholder →",
  },
];

export default function LevelsPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Levels</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {levels.map((l) => (
          <Link
            key={l.code}
            href={l.href}
            className="block rounded-2xl border p-6 hover:shadow-soft transition"
          >
            <h2 className="text-lg font-semibold">{l.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{l.blurb}</p>
            <p className="text-sm mt-3 underline text-brand">{l.cta}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
