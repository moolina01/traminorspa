"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { COMPANY } from "@/lib/constants"

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/hero.jpeg"
        alt="Flota de camiones Traminor SPA en Copiapó, Atacama"
        fill
        priority
        className="object-cover object-center"
        quality={90}
      />

      {/* Subtle overlay — NOT too dark, client wants to see the trucks */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/20 to-navy-950/10" />
      {/* Gradiente superior para que el navbar siempre sea legible */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-navy-950/70 to-transparent" />

      {/* Diagonal accent line — our design touch */}
      <div
        className="absolute top-0 right-[28%] w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden md:block"
        style={{ transform: "skewX(-12deg)" }}
      />

      {/* ===== TOP: TRAMINOR SPA — visible, top right ===== */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease }}
        className="relative z-10 flex justify-end pt-28 md:pt-32 px-6 lg:px-12"
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
          style={{ fontFamily: "var(--font-jakarta-sans)" }}
        >
          <span className="text-white">TRAMINOR</span>{" "}
          <span className="text-[#111111]">SPA</span>
        </h2>
      </motion.div>

      {/* ===== BOTTOM: Banner text centered, like client reference ===== */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 mt-auto"
      >
        {/* Dark banner strip at the bottom of the image */}
        <div className="pt-20 md:pt-28 bg-gradient-to-t from-navy-950/80 via-navy-950/50 to-transparent backdrop-blur-[2px] py-8 md:py-10 px-6 lg:px-12">
          {/* Main headline — centered */}
          <motion.h1
            variants={item}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed text-center max-w-4xl mx-auto"
            style={{
              fontFamily: "var(--font-jakarta-sans)",
              textShadow: "0 2px 16px rgba(0,0,0,0.4)",
            }}
          >
            Empresa de Transportes de carga por carretera y servicios vinculados al transporte
          </motion.h1>

          {/* Location subtitle — centered */}
          <motion.p
            variants={item}
            className="mt-3 text-sm md:text-base text-white/60 tracking-wide text-center"
            style={{
              fontFamily: "var(--font-space-mono)",
            }}
          >
          Seguridad · Calidad · Experiencia
          </motion.p>

          {/* CTA button — centered */}
          <motion.div variants={item} className="mt-6 flex justify-center">
            <motion.a
              href="#contacto"
              className="inline-flex items-center gap-3 bg-[#E30613] hover:bg-[#C00510] text-white font-semibold px-8 py-4 text-sm tracking-wide shadow-md hover:shadow-lg shadow-[#E30613]/30 transition-all duration-200 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Trabajemos Juntos
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent scroll-indicator-line" />
        <span
          className="text-[9px] tracking-[0.2em] text-white/25 uppercase"
          style={{ writingMode: "vertical-rl", fontFamily: "var(--font-space-mono)" }}
        >
          Scroll
        </span>
      </div>

      {/* Bottom accent border */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent z-10" />
    </section>
  )
}