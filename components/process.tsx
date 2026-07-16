import { Reveal } from "./reveal"

const steps = [
  { number: "01", title: "Consultation", text: "Understand client needs." },
  { number: "02", title: "Planning", text: "Develop the right strategy." },
  { number: "03", title: "Implementation", text: "Execute professionally." },
  { number: "04", title: "Support", text: "Provide continuous assistance." },
]

export function Process() {
  return (
    <section className="py-28 bg-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our Process</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4 text-navy text-balance">
            How an engagement runs, step by step
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-line" />
          <div className="grid lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step) => (
              <Reveal key={step.number} className="text-center lg:text-left">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 font-display font-bold text-lg relative z-10 bg-navy text-white">
                  {step.number}
                </div>
                <h3 className="font-display font-semibold mt-5 text-navy">{step.title}</h3>
                <p className="text-sm mt-2 text-slate">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
