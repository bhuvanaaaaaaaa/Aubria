import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">

      <header className="sticky top-0 z-50 bg-[#0C2340] border-b border-[#E87722]/40">

        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">

          {/* LEFT — Auburn University */}
          <div className="text-white font-semibold">
            Auburn University
          </div>

          {/* CENTER — Aubria */}
          <div className="text-center text-[#E87722] text-xl font-bold">
            Aubria.ai
          </div>

          {/* RIGHT — Navigation */}
          <nav className="flex justify-end space-x-6 text-white font-medium">
            <a href="/" className="hover:text-[#E87722] transition">
              Home
            </a>

            <a href="/request" className="hover:text-[#E87722] transition">
              Form
            </a>
          </nav>

        </div>

      </header>

        <main>{children}</main>

        <footer className="border-t mt-20 text-center p-6 text-sm text-gray-500">
          Auburn Student-Made • Microsoft Forms + Excel 
        </footer>

      </body>
    </html>
  );
}
