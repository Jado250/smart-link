import { Users, Sparkles, LifeBuoy, Wallet, Gem, Target } from "lucide-react"
import { Reveal } from "./reveal"

const reasons = [
  {
    icon: Users,
    title: "Professional Experts",
    text: "Our team brings specialist knowledge across technology, finance, creative execution, and business operations.",
  },
  {
    icon: Sparkles,
    title: "Certified Specialists",
    text: "We combine practical expertise with modern tools to deliver dependable, professional results.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    text: "We tailor solutions to fit real budgets without compromising on quality or professionalism.",
  },
  {
    icon: LifeBuoy,
    title: "Reliable Support",
    text: "We remain responsive and engaged long after project launch, offering ongoing support when needed.",
  },
  {
    icon: Gem,
    title: "Quality Assurance",
    text: "Every engagement is guided by accuracy, consistency, and a strong commitment to excellence.",
  },
  {
    icon: Target,
    title: "Fast Delivery",
    text: "We focus on prompt execution, clear communication, and practical outcomes that keep clients moving forward.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why" className="py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4 text-navy text-balance">
            Reasons clients stay with us
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {reasons.map(({ icon: Icon, title, text }) => (
            <Reveal key={title} className="flex items-start gap-4 p-6 rounded-2xl bg-mist">
              <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-navy">
                <Icon className="w-5 h-5 text-white" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-navy">{title}</h3>
                <p className="text-sm mt-1.5 text-slate">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
