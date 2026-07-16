import { ArrowRight, BadgeCheck, Wallet, HeartHandshake, Zap } from "lucide-react"
import { Reveal } from "./reveal"

const trustItems = [
  { icon: BadgeCheck, label: "Professional Team" },
  { icon: Wallet, label: "Affordable Solutions" },
  { icon: HeartHandshake, label: "Client Satisfaction" },
  { icon: Zap, label: "Fast Support" },
]

export function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/bgn.jpg" alt="" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,31,66,.60) 0%, rgba(8,31,66,.50) 45%, rgba(8,31,66,.64) 100%)",
          }}
        />
      </div>

      <Reveal className="max-w-5xl mx-auto px-6 lg:px-10 relative text-center">
        <span className="eyebrow" style={{ color: "#9DC0F0" }}>
          Professional Business, Technology &amp; Digital Solutions
        </span>

        <h1 className="font-display font-bold leading-[1.08] mt-5 text-4xl sm:text-5xl lg:text-6xl text-white text-balance">
          Transforming Businesses Through Technology, Innovation &amp; Professional Services
        </h1>

        <p
          className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto text-pretty"
          style={{ color: "#C7D7EF" }}
        >
          SMART LINK Business Solutions LTD helps startups, SMEs, NGOs, schools, government
          institutions and large organizations improve efficiency through technology,
          accounting, virtual assistance, business consulting, digital marketing and creative
          services.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold"
          >
            Request Consultation <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-colors"
            style={{ border: "1.5px solid rgba(255,255,255,.4)" }}
          >
            Explore Services
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white">
              <Icon className="w-4 h-4" />
              <span className="text-sm" style={{ color: "#C7D7EF" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
