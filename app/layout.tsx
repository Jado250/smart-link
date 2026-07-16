import type { Metadata } from "next"
import { Sora, Inter, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-plex-mono",
})

export const metadata: Metadata = {
  title:
    "SMART LINK Business Solutions LTD | Professional Business, Technology & Digital Solutions",
  description:
    "SMART LINK Business Solutions LTD delivers professional technology, accounting, virtual assistance, business support, digital marketing, and creative services for startups, SMEs, NGOs, schools, government institutions, and large organizations.",
  keywords:
    "business solutions, technology services, accounting, virtual assistant, digital marketing, graphic design, IT services, software development, website development, Rwanda",
  openGraph: {
    title: "SMART LINK Business Solutions LTD",
    description:
      "Professional business, technology, and digital solutions under one roof for organizations seeking efficiency, growth, and reliable support.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${plexMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
