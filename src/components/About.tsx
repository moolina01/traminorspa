"use client"

import { useState, useEffect } from "react"
import ScrollReveal from "@/components/ui/ScrollReveal"
import AnimatedCounter from "@/components/ui/AnimatedCounter"
import { STATS } from "@/lib/constants"
import Image from "next/image"

const CAROUSEL_IMAGES = [
  { src: "/foto10.jpeg", alt: "Operaciones Traminor" },
  { src: "/foto9.jpeg",  alt: "Flota Traminor" },
  { src: "/foto8.jpeg",  alt: "Transporte minero Traminor" },
]

export default function About() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)
  const next = () => setCurrent((c) => (c + 1) % CAROUSEL_IMAGES.length)

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="nosotros" className="overflow-hidden">
      {/* ── Asymmetric company section ── */}
      <div className="bg-cream noise-overlay">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-[55%_45%] gap-0 items-center">

            {/* Carousel — bleeds slightly past its column */}
            <ScrollReveal direction="left" className="relative lg:pl-4 lg:mr-8">
              <div
                className="relative aspect-[4/3] overflow-hidden bg-navy-950"
                style={{ boxShadow: "24px 24px 0 0 var(--color-sand)" }}
              >
                {CAROUSEL_IMAGES.map((img, i) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain transition-opacity duration-1000"
                    style={{ opacity: i === current ? 1 : 0 }}
                    priority={i === 0}
                  />
                ))}
                {/* Diagonal accent overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/60 via-transparent to-transparent" />
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent/20" />

                {/* Arrow buttons */}
                <button
                  onClick={prev}
                  aria-label="Anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-navy-950/60 text-white hover:bg-accent/80 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-navy-950/60 text-white hover:bg-accent/80 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                  {CAROUSEL_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Ir a imagen ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-white/50"}`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
 
            {/* Text */}
            <ScrollReveal delay={0.15} className="lg:pl-12">
              <div className="flex flex-col gap-6">
                <div>
                  <span
                    className="text-xs font-mono tracking-[0.2em] uppercase text-accent"
                    style={{ fontFamily: "var(--font-space-mono)" }}
                  >
                    Nuestra Empresa
                  </span>
                  <h2
                    className="mt-3 text-4xl md:text-5xl font-extrabold text-ink leading-tight"
                    style={{ fontFamily: "var(--font-jakarta-sans)" }}
                  >
                    Más de 15 años
                    <br />
                    <span className="text-navy-800">moviendo lo</span>
                    <br />
                    más exigente
                  </h2>
                  <div className="mt-4 h-[3px] w-12 bg-accent" />
                </div>
                <p className="text-steel leading-relaxed text-base md:text-[15px]">
                  Traminor SPA nació en Copiapó para responder a la demanda creciente de transporte
                  especializado de la industria minera del norte de Chile. Desde nuestros inicios,
                  hemos construido una reputación basada en la seguridad operacional, el cumplimiento
                  normativo y la confianza de nuestros clientes.
                </p>
                <p className="text-steel leading-relaxed text-base md:text-[15px]">
                  Operamos en el desierto más árido del mundo con la seriedad que exige el transporte
                  de sustancias peligrosas. Cada viaje es un compromiso.
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/25 hover:border-accent hover:text-accent transition-colors w-fit pb-0.5"
                >
                  Contactar ahora
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
 
      {/* ── Stats bar ── */}
      <div className="bg-navy-950 pattern-dots relative overflow-hidden">
        {/* Diagonal accent stripe */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" />
 
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1} className="flex flex-col gap-2">
                <div
                  className="text-5xl md:text-6xl font-bold leading-none"
                  style={{ fontFamily: "var(--font-space-mono)", color: "#E30613" }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    format={stat.format as "compact" | "default" | undefined}
                  />
                </div>
                <div className="h-px w-8 bg-white/10" />
                <p className="text-xs text-zinc-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
 