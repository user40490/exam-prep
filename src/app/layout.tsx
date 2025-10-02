import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Exam Prep (MVP)",
  description: "Free practice tasks and demos",
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-gray-900`}>
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              {/* Simple logo mark */}
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand text-white text-xs font-bold">E</span>
              <span className="text-xl font-semibold">Exam Prep</span>
            </Link>
           <nav className="text-sm">
  <Link href="/" className="mr-4 hover:underline">Home</Link>
  <Link href="/levels" className="mr-4 hover:underline">Levels</Link>
  <Link href="/gapfill" className="mr-4 hover:underline">GapFill</Link>
  <Link href="/quiz" className="hover:underline">Try a Quiz</Link>
</nav>
          </div>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

        {/* Footer */}
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-gray-600 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Exam Prep</p>
            <div className="space-x-4">
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/legal" className="hover:underline">Legal</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
