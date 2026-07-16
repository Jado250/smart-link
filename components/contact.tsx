"use client"

import { useState, type FormEvent } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { Reveal } from "./reveal"

const contactCards = [
  { icon: MapPin, title: "Location", value: "Kigali – Gasabo, Rwanda" },
  { icon: Phone, title: "Phone", value: "+250 796 687 309" },
  { icon: Mail, title: "Email", value: "smartlinkbusinesssolution@gmail.com" },
]

type Status = "idle" | "sending" | "success" | "error"

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")
  const [note, setNote] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    setStatus("sending")
    setNote("Sending your message...")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      if (result.success) {
        setStatus("success")
        setNote("Thanks — we'll be in touch shortly.")
        form.reset()
      } else {
        setStatus("error")
        setNote(result.message || "Unable to send message right now.")
      }
    } catch {
      setStatus("error")
      setNote("Unable to send message right now. Please try again later.")
    }
  }

  return (
    <section id="contact" className="py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Contact</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-4 text-navy text-balance">
            Let&apos;s start the conversation
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 mt-14 mb-16">
          {contactCards.map(({ icon: Icon, title, value }) => (
            <Reveal key={title} className="card p-7 text-center">
              <span className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto bg-blue-light">
                <Icon className="w-5 h-5 text-blue" />
              </span>
              <h3 className="font-display font-semibold mt-4 text-navy">{title}</h3>
              <p className="text-sm mt-1 text-slate break-all">{value}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal className="card overflow-hidden min-h-[420px]">
            <iframe
              title="SMART LINK location — Kigali, Gasabo"
              src="https://www.google.com/maps?q=Kigali,Gasabo,Rwanda&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal className="card p-8">
            <FormInner onSubmit={handleSubmit} status={status} note={note} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function FormInner({
  onSubmit,
  status,
  note,
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  status: Status
  note: string
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none border border-line focus:border-blue transition-colors"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none border border-line focus:border-blue transition-colors"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-navy">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+250 ..."
            className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none border border-line focus:border-blue transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="text-sm font-medium text-navy">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none bg-white border border-line focus:border-blue transition-colors"
        >
          <option>Technology Solutions</option>
          <option>Creative Services</option>
          <option>Business Services</option>
          <option>Not Sure Yet</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project..."
          className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none resize-none border border-line focus:border-blue transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full py-3.5 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
      </button>
      {note && (
        <p
          className="text-xs text-center"
          style={{ color: status === "error" ? "#b91c1c" : "var(--color-blue)" }}
        >
          {note}
        </p>
      )}
    </form>
  )
}
