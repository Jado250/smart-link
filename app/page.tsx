import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Process } from "@/components/process"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
