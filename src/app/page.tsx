import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-3">Cambridge-style practice, free</h2>
        <p className="mb-8">Start with a level, then try a quick quiz. Auth and progress saving come next.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <Link href="/levels" className="rounded-2xl border p-6 hover:shadow block">
            <h3 className="font-semibold mb-2">Browse Levels →</h3>
            <p className="text-sm text-gray-600">A2, B1, B2 demos.</p>
          </Link>
          <Link href="/quiz" className="rounded-2xl border p-6 hover:shadow block">
            <h3 className="font-semibold mb-2">Quick MCQ demo →</h3>
            <p className="text-sm text-gray-600">Answer one question and see feedback.</p>
          </Link>
        </div>
      </section>
    </>
  );
}
