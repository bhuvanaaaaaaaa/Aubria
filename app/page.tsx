"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-[#0C2340]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT SIDE — Auburn background + centered 16:9 video with controls */}
        <section className="flex items-center justify-center px-6 py-10 bg-[#0C2340]">
          <div className="w-full max-w-3xl">
            <div className="text-sm text-white/70 mb-3">
            </div>

            {/* 16:9 container */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden ring-1 ring-white/15 bg-black shadow-lg">
              <video
                className="h-full w-full object-contain bg-black"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/media/ai_web.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mt-3 text-xs text-white/60 leading-relaxed">
              Tip: If audio doesn’t start automatically, press play once.
            </div>
          </div>
        </section>

        {/* RIGHT SIDE — Marketing */}
        <section className="flex flex-col justify-center px-12 py-10 bg-[#0C2340]">
          <h1 className="text-4xl font-bold leading-tight">
            Meet <span className="text-[#E87722]">Aubria</span>
          </h1>

          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl">
            Want a keynote speaker without weeks of coordination?
            Aubria helps Auburn departments create engaging AI-powered keynote experiences.
            <br /><br />
            Click <b>Request</b>, share your event details, and our team prepares a customized
            keynote video designed specifically for your audience.
          </p>

          <p className="mt-4 italic text-white/70">✨ Smart. Simple. Auburn-built.</p>

          <div className="mt-6">
    <Link href="/request">
      <button className="bg-[#E87722] hover:bg-[#cf6b1f] text-white font-semibold px-8 py-3 rounded-xl transition">
        Get Started 
      </button>
    </Link>
  </div>
        </section>

      </div>
    </main>
  );
}
