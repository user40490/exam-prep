export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Exam Prep (MVP)</h1>
          <nav className="text-sm">
            <a href="/" className="mr-4 hover:underline">Home</a>
            <a href="/quiz" className="hover:underline">Try a Quiz</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-3">Cambridge-style practice, free</h2>
        <p className="mb-8">
          This is your starter. We’ll add levels, tasks, timers, and progress saving next.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <a href="/quiz" className="rounded-2xl border p-6 hover:shadow">
            <h3 className="font-semibold mb-2">Quick MCQ demo →</h3>
            <p className="text-sm text-gray-600">Answer one question and see feedback.</p>
          </a>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold mb-2">What’s coming</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Levels (A2–B2)</li>
              <li>Timers and attempt saving</li>
              <li>Login with email (Supabase)</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
