"use client"

import { useEffect, useState } from "react"
import { ArrowRight, X } from "lucide-react"
import { serviceCatalog, serviceTabs, type Service } from "@/lib/services"
import { Reveal } from "./reveal"

export function Services() {
  const [activeTab, setActiveTab] = useState<(typeof serviceTabs)[number]["key"]>("all")
  const [selected, setSelected] = useState<Service | null>(null)

  const visible =
    activeTab === "all"
      ? serviceCatalog
      : serviceCatalog.filter((service) => service.category === activeTab)

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selected])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section id="services" className="py-28 bg-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">What We Do</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4 text-navy text-balance">
            Services across three divisions
          </h2>
          <p className="mt-4 text-slate text-pretty">
            One partner for the technology, creative, and business expertise your organization
            needs to grow.
          </p>
        </Reveal>

        <Reveal className="flex justify-center mt-10">
          <div className="inline-flex flex-wrap p-1.5 rounded-full gap-1 bg-white border border-line">
            {serviceTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab.key ? "bg-navy text-white" : "bg-transparent text-slate"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((service) => (
              <div key={service.id} className="card p-0 overflow-hidden text-left w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-[190px] object-cover block rounded-t-2xl"
                />
                <div className="p-7 flex flex-col gap-3">
                  <span className="inline-flex items-center w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] bg-blue-light text-blue">
                    {service.categoryLabel}
                  </span>
                  <h3 className="font-display font-semibold text-navy">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-slate">{service.shortDescription}</p>
                  <button
                    type="button"
                    onClick={() => setSelected(service)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold w-fit bg-navy text-white transition-colors hover:bg-blue"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-5 z-[120]"
      style={{ background: "rgba(8,31,66,.8)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="serviceModalTitle"
    >
      <div className="w-[min(900px,100%)] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-white rounded-3xl relative shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close service details"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 text-navy flex items-center justify-center shadow-md z-10"
        >
          <X className="w-4 h-4" />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          className="w-full h-[280px] object-cover block"
        />
        <div className="p-8 lg:p-10">
          <p className="eyebrow">Service Details</p>
          <h3 id="serviceModalTitle" className="font-display font-semibold text-2xl mt-3 text-navy">
            {service.title}
          </h3>
          <p className="mt-4 leading-relaxed text-slate">{service.longDescription}</p>

          <div className="mt-8 grid gap-6">
            <div>
              <h4 className="font-display font-semibold text-lg text-navy">Business Benefits</h4>
              <ul className="mt-4 space-y-3">
                {service.businessBenefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-line px-4 py-3"
                  >
                    <span className="w-2.5 h-2.5 mt-2 rounded-full shrink-0 bg-blue" />
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg text-navy">Who this is for</h4>
              <p className="mt-3 leading-relaxed text-slate">{service.audience}</p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg text-navy">Included services</h4>
              <ul className="mt-4 space-y-3">
                {service.subServices.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-line px-4 py-3"
                  >
                    <span className="w-2.5 h-2.5 mt-2 rounded-full shrink-0 bg-blue" />
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="btn-primary inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold w-fit"
            >
              {service.cta} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
