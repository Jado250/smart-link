"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      id="nav"
      className={`nav-shell fixed top-0 inset-x-0 z-50 ${solid ? "solid" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="relative w-10 h-10 rounded-xl flex items-center justify-center bg-navy">
              <span className="absolute w-2.5 h-2.5 rounded-full bg-white left-2 top-1/2 -translate-y-1/2" />
              <span className="absolute w-2.5 h-2.5 rounded-full bg-white right-2 top-1/2 -translate-y-1/2" />
              <span className="absolute h-[3px] w-3.5 bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </span>
            <span className="font-display font-bold text-lg tracking-tight leading-tight text-navy">
              SMART LINK
              <br />
              Business Solution
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink hover:text-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="btn-primary hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            Get in Touch <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-navy"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-line">
          <div className="px-6 py-5 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
