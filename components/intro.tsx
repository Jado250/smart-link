import { ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"

const highlights = [
  {
    title: "Integrated support",
    text: "Technology, finance, and operations aligned in one place.",
  },
  {
    title: "Flexible delivery",
    text: "Scalable services for startups, SMEs, and institutions.",
  },
  {
    title: "Reliable partnership",
    text: "A trusted team that stays engaged beyond delivery.",
  },
]

const stats = [
  { value: "24/7", label: "Responsive Support" },
  { value: "100%", label: "Tailored Solutions" },
  { value: "Kigali", label: "Based & Growing" },
]

export function Intro() {
  return (
    <section
      id="intro"
      className="relative pt-40 pb-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg,var(--color-mist) 0%, #ffffff 70%)" }}
    >
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full float-shape"
        style={{ background: "radial-gradient(circle,var(--color-blue-light) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-40 -left-32 w-80 h-80 rounded-full float-shape-delay"
        style={{ background: "radial-gradient(circle,var(--color-blue-light) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="eyebrow">Business &amp; Technology Solutions</span>
          <h2 className="font-display font-bold leading-[1.08] mt-4 text-4xl sm:text-5xl lg:text-[3.4rem] text-navy text-balance">
            One company, multiple solutions for lasting business growth
          </h2>
          <p className="mt-6 text-lg leading-relaxed max-w-xl text-slate">
            SMART LINK offers integrated business services spanning technology, accounting,
            finance, business support, creative services, digital solutions, and virtual
            assistance. By combining these capabilities under one team, clients receive practical
            support, consistent communication, and dependable delivery across every need.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-line px-4 py-3"
                style={{ background: "rgba(255,255,255,.7)" }}
              >
                <p className="font-semibold text-navy">{item.title}</p>
                <p className="mt-1 text-slate">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="btn-secondary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold"
            >
              Our Services
            </a>
          </div>

          <div className="mt-14 flex items-center gap-10">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-10">
                {i > 0 && <div className="w-px h-10 bg-line" />}
                <div>
                  <p className="font-display font-bold text-2xl text-navy">{stat.value}</p>
                  <p className="text-xs mt-1 text-slate">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative h-[420px] flex items-center justify-center">
          <svg
            viewBox="0 0 480 420"
            className="w-full h-full max-w-lg"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Abstract network of connected nodes representing linked business solutions"
          >
            <line x1="120" y1="120" x2="240" y2="210" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />
            <line x1="240" y1="210" x2="380" y2="130" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />
            <line x1="240" y1="210" x2="180" y2="330" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />
            <line x1="240" y1="210" x2="360" y2="320" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />
            <line x1="120" y1="120" x2="80" y2="260" stroke="#CBDBF3" strokeWidth="2" className="pulse-line" />

            <circle cx="240" cy="210" r="30" fill="var(--color-navy)" className="node-glow" />
            <circle cx="240" cy="210" r="30" fill="none" stroke="var(--color-navy)" strokeWidth="1" opacity=".25" />
            <text x="240" y="215" textAnchor="middle" fontFamily="Sora" fontWeight="700" fontSize="13" fill="#fff">
              SL
            </text>

            <circle cx="120" cy="120" r="20" fill="var(--color-blue)" />
            <g transform="translate(112.5 112.5)" stroke="white" strokeWidth="2" fill="none">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </g>

            <circle cx="380" cy="130" r="22" fill="#fff" stroke="var(--color-blue)" strokeWidth="2" />
            <g transform="translate(372.5 122.5)" stroke="#1E5FBF" strokeWidth="2" fill="none">
              <path d="M3 3v18h18M7 14l4-4 4 4 5-5" />
            </g>

            <circle cx="180" cy="330" r="24" fill="#fff" stroke="var(--color-blue)" strokeWidth="2" />
            <g transform="translate(172 322)" stroke="#1E5FBF" strokeWidth="2" fill="none">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M3 10h18M8 2v4M16 2v4" />
            </g>

            <circle cx="360" cy="320" r="18" fill="var(--color-navy)" opacity=".85" />
            <circle cx="80" cy="260" r="14" fill="var(--color-blue)" opacity=".7" />
          </svg>
        </Reveal>
      </div>
    </section>
  )
}
