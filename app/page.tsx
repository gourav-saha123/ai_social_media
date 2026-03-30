import { Google } from "@lobehub/icons";
import Navbar from "@/components/Navbar";

const categories = [
  "Hackathon",
  "Cultural Fest",
  "Tech Talk",
  "Sports Meet",
  "Workshop",
  "Club Recruitment",
];

const universities = ["IIT Delhi", "NIT Trichy", "BITS Pilani", "VIT", "DTU"];

const featureCards = [
  {
    label: "CREATE EVENT",
    img: "/hc1.jpg",
    desc: "Launch hackathons, fests & workshops for your campus or club in minutes.",
  },
  {
    label: "FIND EVENT",
    img: "/hc2.jpg",
    desc: "Browse and discover events happening across campuses that match your interests.",
  },
  {
    label: "CREATE OR JOIN TEAM",
    img: "/hc3.jpg",
    desc: "Form a new team or join an existing one and participate together.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/home.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0e0e0e]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-16 w-full max-w-3xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1.05] mb-4">
            FIND EVENTS.{" "}
            <span className="text-[#B9FF66]">JOIN TEAMS.</span>
            <br />
            DO MORE ON CAMPUS
          </h1>

          <p className="text-white/50 text-sm md:text-base max-w-md mb-10">
            One platform for college events, team formation, and campus collaboration.
          </p>

          {/* Search Box */}
          <div className="w-full max-w-xl bg-black/80 border border-white/10 rounded-sm p-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-sm bg-white/5 border border-white/10 mb-4">
              <span className="text-white/35 text-base">⌕</span>
              <input
                className="flex-1 text-sm text-white bg-transparent outline-none placeholder:text-white/30"
                placeholder="Search events, hackathons, clubs..."
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 text-xs rounded-sm border border-white/10 text-white/45 hover:border-[#B9FF66]/50 hover:text-[#B9FF66] cursor-pointer transition-all"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mt-6 text-white/25 text-[10px] tracking-widest">
            <div className="h-px w-14 bg-white/10" />
            OR CONTINUE WITH
            <div className="h-px w-14 bg-white/10" />
          </div>

          {/* Google CTA */}
          <button className="mt-4 flex items-center gap-3 px-6 py-3 rounded-sm border border-white/40 hover:border-white/30 text-sm text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
            <Google.Color size={20} />
            Get Started with Google
          </button>

          {/* Trust row */}
          <div className="mt-8 flex items-center gap-3 text-white/20 text-[10px] tracking-widest flex-wrap justify-center">
            <span>TRUSTED BY STUDENTS AT</span>
            {universities.map((u) => (
              <span key={u} className="text-white/40">
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Cards ──────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1 uppercase tracking-tight">
          Whatever you&apos;re looking for,
        </h2>

        <p className="text-center text-white/35 text-sm mb-12 tracking-widest">
          we&apos;ve got it all
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featureCards.map((card) => (
            <div
              key={card.label}
              className="group p-6 rounded-sm border border-white/8 bg-white/[0.03] hover:border-[#B9FF66]/40 hover:bg-white/[0.06] transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-sm mb-5">
                <img
                  src={card.img}
                  alt={card.label}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Label */}
              <div className="text-[10px] tracking-[0.2em] text-[#B9FF66] mb-2 font-bold">
                {card.label}
              </div>

              {/* Description */}
              <p className="text-white/45 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <div className="border-t border-white/8 px-8 py-5 flex items-center justify-between text-[10px] text-white/25 tracking-widest">
        <span>
          collegeflow<span className="text-[#B9FF66]">.</span>
        </span>
        <span>CAMPUS EVENT MANAGEMENT © 2025</span>
      </div>
    </div>
  );
}