"use client"

import { useEffect, useRef, type ElementType, type ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function Reveal({ children, className = "", as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
