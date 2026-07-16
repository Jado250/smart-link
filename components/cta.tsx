import { ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"

export function CTA() {
  return (
    <section className="py-24 bg-navy">
      <Reveal className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white text-balance">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-5 text-lg" style={{ color: "#B8CCEA" }}>
          Let&apos;s talk about where your organization wants to go — and how SMART LINK can help
          you get there.
        </p>
        <a
          href="#contact"
          className="mt-9 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-white text-navy transition-transform hover:-translate-y-0.5"
        >
          Contact Us Today <ArrowRight className="w-4 h-4" />
        </a>
      </Reveal>
    </section>
  )
}
