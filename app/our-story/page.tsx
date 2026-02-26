import Image from "next/image";
import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  img: string; // path in /public
};

type StoryItem = {
  name: string;
  role: string;
  body: string;
  img?: string; // path in /public
  team?: TeamMember[];
};

const STORY: StoryItem[] = [
  {
    name: "Christine Cline",
    role: "Director, Proposal Services & Faculty Support (PSFS)",
    img: "/our-story/cc.png",
    body:
      "AUBRIA began at Auburn University as a bold Team Science idea. While planning the 2026 AI@AU / Team Science Series: Building Research Communities in AI (Showcase & Workshop), Christine envisioned opening the event with something entirely new, an AI-generated keynote speaker built to represent Auburn’s research community in a modern, engaging way.",
  },
  {
    name: "Dr. Jennifer Kerpelman",
    role: "Co-Chair, AI@AU / Team Science Series (Showcase & Workshop)",
    img: "/our-story/jk.png",
    body:
      "Christine shared the idea with Dr. Jennifer Kerpelman, who helped shape it into a clear event vision. She then carried the concept forward to Dr. Gerry Dozier so the idea could move from “what if” to “let’s build it.”",
  },
  {
    name: "Dr. Gerry Dozier",
    role: "Co-Chair, AI@AU / Team Science Series (Showcase & Workshop)",
    img: "/our-story/gd.png",
    body:
      "Dr. Dozier assembled a student development team from CSSE to bring AUBRIA to life, combining AI generation, storytelling, and media production into a conference-ready keynote experience designed for Auburn audiences.",
  },
  {
    name: "Dr. Hari Narayanan",
    role: "Chair, CSSE Department",
    img: "/our-story/hn.png",
    body:
      "With guidance from Dr. Jennifer Kerpelman, Dr. Hari Narayanan, and Christine Cline, the student team refined AUBRIA into a polished keynote experience built with care for clarity, credibility, and an Auburn-proud visual identity.",
  },

  // Student team (no left image card — just one wide rectangle)
  {
    name: "The AUBRIA Student Team",
    role: "CSSE • Samuel Ginn College of Engineering, Auburn University",
    body:
      "AUBRIA is a student-led team within CSSE, passionate about Artificial Intelligence, Agentic AI, and Cybersecurity. We are affiliated with AI@AU (Auburn University Artificial Intelligence Initiative) and AU-CAICE (Auburn University Center for AI & Cybersecurity Engineering). Currently, we develop AUBRIA Keynote Talks for Auburn University conferences, workshops, meetings, and research events.",
    team: [
      {
        name: "Jahidul Arafat",
        role: "PhD CSSE Student",
        img: "/our-story/team1.png",
      },
      {
        name: "Bhuvaneshwari Bodakuntla",
        role: "MS Data Engineering student",
        img: "/our-story/team2.png",
      },
      {
        name: "Sawyer Womack",
        role: "BS CSSE Student",
        img: "/our-story/team3.png",
      },
    ],
  },
];

export default function OurStoryPage() {
  return (
    <main className="min-h-screen text-white bg-[#0C2340]">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight">
            Our Story, <span className="text-[#E87722]">Auburn-Built</span>
          </h1>
          <p className="mt-4 text-lg text-white/85 leading-relaxed">
            AUBRIA began as a Team Science idea and became a student-led,
            conference-ready AI keynote experience built within Auburn’s
            research community.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-12 space-y-10">
          {STORY.map((item, idx) => {
            const isTeam = !!item.team;

            // alternating layout ONLY for non-team items
            const reverse = !isTeam && idx % 2 === 1;

            return (
              <section
                key={item.name}
                className={[
                  "grid gap-8 items-center",
                  isTeam ? "grid-cols-1" : "lg:grid-cols-2",
                  reverse ? "lg:[&>div:first-child]:order-2" : "",
                ].join(" ")}
              >
                {/* If it’s NOT team: left image card */}
                {!isTeam && item.img ? (
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden ring-1 ring-white/15 bg-black/10 shadow-lg">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 90vw, 420px"
                        priority={idx < 2}
                      />
                    </div>
                  </div>
                ) : null}

                {/* Text card (always shown) */}
                <div className="rounded-2xl ring-1 ring-white/15 bg-white/5 p-8 shadow-lg">
                  <div className="text-sm text-white/70">{item.role}</div>
                  <h2 className="mt-2 text-2xl font-semibold">{item.name}</h2>
                  <p className="mt-4 text-white/85 leading-relaxed">
                    {item.body}
                  </p>

                  {/* Team row inside the same card */}
                  {item.team ? (
                    <div className="mt-8">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
                        {item.team.map((m) => (
                          <div
                            key={m.name}
                            className="flex flex-col items-center text-center"
                          >
                            <div className="relative w-40 h-40 rounded-full overflow-hidden ring-2 ring-[#E87722] shadow-[0_0_28px_rgba(232,119,34,0.45)]">
                              <Image
                                src={m.img}
                                alt={m.name}
                                fill
                                className="object-cover"
                                sizes="160px"
                              />
                            </div>

                            <div className="mt-4 font-semibold text-white">
                              {m.name}
                            </div>
                            <div className="text-sm text-white/70">{m.role}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl ring-1 ring-white/15 bg-white/5 p-8 shadow-lg">
          <h3 className="text-2xl font-semibold">
            Interested in an AUBRIA Keynote Talk?
          </h3>
          <p className="mt-3 text-white/85 leading-relaxed max-w-3xl">
            If you would like our team to develop an AUBRIA keynote for your
            conference, workshop, meeting, or event, please contact us or reach
            out to our faculty advisor, Dr. Gerry Dozier.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/request"
              className="bg-[#E87722] hover:bg-[#cf6b1f] px-7 py-3 rounded-xl font-semibold"
            >
              Get Started
            </Link>
          </div>

          <div className="mt-4 text-xs text-white/60">
            Affiliations: AI@AU • Department of CSSE • Samuel Ginn College of
            Engineering • Auburn University
          </div>
        </div>
      </div>
    </main>
  );
}
