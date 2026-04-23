"use client"

import { motion } from "framer-motion"
import ScrollReveal from "@/components/ui/ScrollReveal"
import SectionTitle from "@/components/ui/SectionTitle"
import { CERTIFICATIONS } from "@/lib/constants"

function ShieldBadge({ code }: { code: string }) {
  return (
    <div className="relative w-14 h-14 flex-shrink-0">
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
          d="M28 4L8 12V28C8 39.05 16.83 49.38 28 52C39.17 49.38 48 39.05 48 28V12L28 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-accent/40 group-hover:text-accent/80 transition-colors duration-300"
        />
        <path
          d="M28 4L8 12V28C8 39.05 16.83 49.38 28 52C39.17 49.38 48 39.05 48 28V12L28 4Z"
          fill="currentColor"
          className="text-accent/5 group-hover:text-accent/10 transition-colors duration-300"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-[9px] font-bold text-accent text-center leading-tight"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          {code}
        </span>
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certificaciones" className="relative bg-navy-950 py-24 lg:py-32 overflow-hidden">
      {/* Background depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(36,59,99,0.4),transparent)]" />

      {/* Diagonal accent stripe */}
      <div className="absolute inset-y-0 right-[15%] w-px bg-gradient-to-b from-transparent via-accent/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16 lg:mb-20">
          <SectionTitle
            eyebrow="Autoridad y cumplimiento"
            title="Certificaciones y Estándares"
            subtitle="Operamos bajo los más estrictos estándares de seguridad y medioambientales de la industria."
            light
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <ScrollReveal key={cert.code} delay={i * 0.12}>
              <motion.div
                className="group relative border border-white/8 bg-white/3 p-7 flex flex-col gap-5 hover:border-accent/40 hover:bg-white/5 transition-all duration-300"
                whileHover={{
                  boxShadow: "0 0 32px 0 rgba(226,96,61,0.12), 0 0 0 1px rgba(226,96,61,0.3)",
                }}
                transition={{ duration: 0.25 }}
              >
                <ShieldBadge code={cert.code} />
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-white font-bold text-base group-hover:text-accent transition-colors"
                    style={{ fontFamily: "var(--font-jakarta-sans)" }}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {cert.description}
                  </p>
                </div>
                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust statement */}
        <ScrollReveal delay={0.3} className="mt-16 text-center">
          <p className="text-zinc-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Todas nuestras operaciones cumplen con la normativa vigente del Ministerio de Transportes
            de Chile y los protocolos de seguridad exigidos por las principales mineras del país.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
