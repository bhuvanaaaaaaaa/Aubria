"use client";

import "./globals.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function MenuDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const close = () => setOpen(false);

  return (
    <div ref={ref} className="relative">
      {/* Three vertical dots */}
      <button
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
        className="text-white text-2xl px-3 py-1 rounded-lg hover:bg-white/10 transition"
      >
        ⋮
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl bg-[#0C2340] border border-white/20 shadow-lg overflow-hidden">
          <Link
            href="/"
            onClick={close}
            className="block px-4 py-3 text-white hover:bg-white/10 transition"
          >
            Home
          </Link>

          <Link
            href="/request"
            onClick={close}
            className="block px-4 py-3 text-white hover:bg-white/10 transition"
          >
            Form
          </Link>

          <Link
            href="/our-story"
            onClick={close}
            className="block px-4 py-3 text-white hover:bg-white/10 transition"
          >
            Our Story
          </Link>
        </div>
      )}
    </div>
  );
}

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
            <div className="text-white font-semibold">Auburn University</div>

            {/* CENTER — Aubria */}
            <div className="text-center text-[#E87722] text-xl font-bold">
              Aubria.ai
            </div>

            {/* RIGHT — Kebab menu */}
            <nav className="flex justify-end">
              <MenuDropdown />
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
