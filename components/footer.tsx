const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Choose Us" },
]

const serviceList = [
  "Technology",
  "Business",
  "Creative",
  "Virtual Assistance",
  "Accounting",
  "Digital Solutions",
]

export function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative w-9 h-9 rounded-lg flex items-center justify-center bg-blue">
              <span className="absolute w-2 h-2 rounded-full bg-white left-1.5 top-1/2 -translate-y-1/2" />
              <span className="absolute w-2 h-2 rounded-full bg-white right-1.5 top-1/2 -translate-y-1/2" />
              <span className="absolute h-[2px] w-3 bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </span>
            <span className="font-display font-bold text-white">SMART LINK</span>
          </div>
          <p className="text-sm mt-4" style={{ color: "#8DA6CC" }}>
            Professional business, technology, and digital solutions under one roof for
            organizations seeking growth, efficiency, and dependable support.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm" style={{ color: "#8DA6CC" }}>
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm">Contact</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm" style={{ color: "#8DA6CC" }}>
            <span>Kigali – Gasabo, Rwanda</span>
            <span>+250 796 687 309</span>
            <span className="break-all">smartlinkbusinesssolution@gmail.com</span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm">Services</h4>
          <div className="mt-4 flex flex-col gap-3">
            {serviceList.map((service) => (
              <span key={service} className="text-sm" style={{ color: "#8DA6CC" }}>
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className="border-t py-6 text-center text-xs"
        style={{ borderColor: "#12315F", color: "#6E88AF" }}
      >
        © 2026 SMART LINK Business Solutions LTD. All Rights Reserved.
      </div>
    </footer>
  )
}
