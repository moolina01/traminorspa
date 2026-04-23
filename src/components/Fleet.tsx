"use client"

import { motion } from "framer-motion"
import ScrollReveal from "@/components/ui/ScrollReveal"
import SectionTitle from "@/components/ui/SectionTitle"
import { FLEET_ITEMS } from "@/lib/constants"

export default function Fleet() {
  return (
    <section id="flota" className="bg-cream noise-overlay py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16 lg:mb-20">
          <SectionTitle
            eyebrow="Equipamiento"
            title="Flota Moderna y Especializada"
            subtitle="Unidades de última generación con mantenimiento preventivo permanente."
          />
        </ScrollReveal>

        {/* Fleet grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {FLEET_ITEMS.map((unit, i) => (
            <ScrollReveal key={unit.type} delay={i * 0.12}>
              <motion.article
                className="group bg-white overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                style={{ boxShadow: "0 2px 20px 0 rgba(13,27,42,0.07)" }}
              >
                {/* Image placeholder */}
                <div className="relative bg-navy-900 aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-950/70 to-navy-800/30 group-hover:from-navy-950/50 transition-colors duration-500" />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Placeholder icon */}
                    <svg className="w-20 h-20 text-white/8" fill="none" viewBox="0 0 80 48" stroke="currentColor" strokeWidth={1}>
                      <rect x="2" y="18" width="60" height="24" rx="2" />
                      <rect x="52" y="8" width="24" height="34" rx="2" />
                      <circle cx="18" cy="42" r="6" />
                      <circle cx="62" cy="42" r="6" />
                      <line x1="2" y1="30" x2="62" y2="30" />
                    </svg>
                  </motion.div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white/25 text-[10px] font-mono tracking-wider uppercase">
                      {unit.placeholder}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col gap-2">
                  <h3
                    className="font-bold text-ink text-base"
                    style={{ fontFamily: "var(--font-jakarta-sans)" }}
                  >
                    {unit.type}
                  </h3>
                  <p
                    className="text-xs text-steel font-mono tracking-wide"
                    style={{ fontFamily: "var(--font-space-mono)" }}
                  >
                    {unit.specs}
                  </p>
                  <div className="mt-2 h-px w-full bg-sand group-hover:bg-gradient-to-r group-hover:from-accent/50 group-hover:to-transparent transition-all duration-500" />
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        {/* Fleet stats strip */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14 bg-navy-950 px-8 py-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
            {[
              ["XX", "Unidades operativas"],
              ["Mantenimiento preventivo", "permanente"],
              ["Renovación constante", "de flota"],
            ].map(([main, sub], i) => (
              <div key={i} className="flex flex-col gap-1">
                <span
                  className="text-accent font-bold text-lg"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  {main}
                </span>
                <span className="text-zinc-500 text-xs tracking-wider uppercase">{sub}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
