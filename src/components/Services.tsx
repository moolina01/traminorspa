

"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import ScrollReveal from "@/components/ui/ScrollReveal"
import SectionTitle from "@/components/ui/SectionTitle"

const SERVICES = [
  {
    title: "TRANSPORTE DE ÁCIDO SULFÚRICO",
    description:
      "Contamos con una flota de camiones equipados especialmente para el transporte de ácido, asegurando su seguridad y llegada a tiempo a su destino.",
    image: "/semirremolque.jpeg",
    alt: "Tracto y semirremolque cisterna",
  },
  {
    title: "TRANSPORTE DE MAQUINARIAS",
    description:
      "Ofrecemos flexibilidad en el traslado de maquinaria y equipos pesados, tanto dentro como fuera de la región.",
    image: "/trasnportado-maquina.jpeg",
    alt: "Cama baja transportando máquina",
  },
  {
    title: "TRANSPORTES DE MINERAL",
    description:
      "Brindamos soluciones adaptadas para el transporte de mineral, asegurando la integridad de la carga en todo momento.",
    image: "/minerales.jpeg",
    alt: "Transporte de mineral",
  },
]
 
export default function Services() {
  return (
    <section id="servicios" className="bg-cream noise-overlay py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16 lg:mb-20">
          <SectionTitle
            eyebrow="Lo que hacemos"
            title="Servicios"
            subtitle="Soluciones de transporte diseñadas para la exigencia de la industria minera del norte de Chile."
          />
        </ScrollReveal>
 
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <motion.article
                className="group relative bg-white overflow-hidden cursor-default h-full"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ boxShadow: "0 2px 20px 0 rgba(13,27,42,0.06)" }}
              >
                {/* Service image */}
                <div className="relative aspect-video bg-navy-800 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-950/60 via-navy-900/20 to-transparent group-hover:from-navy-950/40 transition-colors duration-500" />
                  {/* Corner number */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-4xl font-bold text-white/20 leading-none"
                      style={{ fontFamily: "var(--font-space-mono)" }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                </div>
 
                {/* Content */}
                <div className="p-6 md:p-7 flex flex-col gap-3">
                  <h3
                    className="text-lg font-bold text-ink group-hover:text-navy-900 transition-colors"
                    style={{ fontFamily: "var(--font-jakarta-sans)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed">
                    {service.description}
                  </p>
 
                  {/* CTA button */}
                  <div className="mt-3">
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 bg-accent text-white text-xs font-semibold px-5 py-2.5 tracking-wide hover:bg-accent-hover transition-colors"
                    >
                      VER MÁS
                    </a>
                  </div>
 
                  {/* Animated accent underline */}
                  <div className="mt-2 h-[2px] bg-sand overflow-hidden">
                    <div className="h-full w-0 bg-accent group-hover:w-full transition-all duration-[400ms] ease-out" />
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
 