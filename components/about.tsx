import { Lightbulb, BadgeCheck, ShieldCheck, HeartHandshake } from "lucide-react"
import { Reveal } from "./reveal"

const focuses = [
  { label: "Focus", value: "Technology & Systems" },
  { label: "Focus", value: "Creative & Marketing" },
  { label: "Focus", value: "Finance & Advisory" },
  { label: "Location", value: "Kigali, Rwanda" },
]

const commitments = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "practical solutions that keep clients ahead.",
  },
  {
    icon: BadgeCheck,
    title: "Professionalism",
    text: "clear communication, every step of the way.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "honest advice, even when it's not the easy answer.",
  },
  {
    icon: HeartHandshake,
    title: "Client Satisfaction",
    text: "work measured by the results our clients see.",
  },
]

export function About() {
  return (
    <section id="about" className="py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="order-2 lg:order-1 relative">
          <div className="card p-10 lg:p-12 bg-navy">
            <p className="font-display text-2xl font-semibold text-white leading-snug text-pretty">
              &ldquo;One roof for technology, finance, and professional business services — built
              on innovation, integrity, and real client outcomes.&rdquo;
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {focuses.map((item, i) => (
                <div key={i}>
                  <p className="eyebrow" style={{ color: "#9DC0F0" }}>
                    {item.label}
                  </p>
                  <p className="text-white text-sm mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <span className="eyebrow">About Us</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4 text-navy text-balance">
            Built to bring every business need under one roof
          </h2>
          <p className="mt-6 leading-relaxed text-slate">
            SMART LINK Business Solutions LTD combines technology, finance, and professional
            business services into a single, dependable partner. Instead of juggling separate
            vendors, our clients work with one team that understands the full picture — from the
            systems that run their operations to the numbers that guide their decisions.
          </p>
          <p className="mt-4 leading-relaxed text-slate">
            We&apos;re guided by four commitments in every engagement:
          </p>
          <ul className="mt-6 space-y-4">
            {commitments.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-blue-light">
                  <Icon className="w-4 h-4 text-blue" />
                </span>
                <span>
                  <span className="font-semibold text-navy">{title}</span> —{" "}
                  <span className="text-slate">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
