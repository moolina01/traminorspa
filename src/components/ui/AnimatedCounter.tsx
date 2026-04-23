"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  format?: "compact" | "default"
  duration?: number
}

export default function AnimatedCounter({
  value,
  suffix = "",
  format = "default",
  duration = 2000,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState("0")
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const started = useRef(false)

  useEffect(() => {
    if (!isInView || started.current) return
    started.current = true

    const start = Date.now()
    const isFloat = value % 1 !== 0
    const decimals = isFloat ? 1 : 0

    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * value

      if (format === "compact" && current >= 1000) {
        setDisplay(
          (current / 1000).toFixed(decimals === 0 ? 0 : 1).replace(".", ",") + ".000"
        )
      } else {
        setDisplay(current.toFixed(decimals).replace(".", ","))
      }

      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, value, format, duration])

  return <span ref={ref}>{display}{suffix}</span>
}
