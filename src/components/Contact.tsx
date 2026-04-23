"use client"

import ScrollReveal from "@/components/ui/ScrollReveal"
import SectionTitle from "@/components/ui/SectionTitle"
import { COMPANY } from "@/lib/constants"

const EMAIL = COMPANY.email
const MAILTO = `mailto:${EMAIL}?subject=Propuesta%20de%20Contrato%20-%20Traminor%20SPA`

function ContactInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 border border-white/10 flex items-center justify-center text-accent">
        {icon}
      </div>
      <div>
        <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">{label}</div>
        <div className="text-white/85 text-sm leading-relaxed">{value}</div>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contacto" className="relative bg-navy-950 py-24 lg:py-32 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16 lg:mb-20">
          <SectionTitle
            eyebrow="Dónde estamos"
            title="Contacto y Ubicación"
            subtitle="Déjanos tu mensaje y te responderemos a la brevedad."
            light
          />
        </ScrollReveal>

        {/* Main card */}
        <div className="overflow-hidden" style={{ boxShadow: "0 32px 80px 0 rgba(0,0,0,0.45)" }}>
          <div className="grid lg:grid-cols-[63%_37%]">

            {/* ── Mapa ── */}
            <ScrollReveal className="relative">
              {/* Address badge over the map */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-navy-950/80 backdrop-blur-sm px-5 py-3 flex items-center gap-3 border-b border-white/5">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-white/70 text-xs tracking-wider font-mono uppercase">
                  Rahue #1660, Paipote — Copiapó, Región de Atacama
                </span>
              </div>

              <iframe
                title="Ubicación Traminor SPA — Rahue 1660, Paipote, Copiapó"
                src="https://maps.google.com/maps?q=Rahue+1660,Paipote,Copiap%C3%B3,Chile&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: "580px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </ScrollReveal>

            {/* ── Info de contacto ── */}
            <ScrollReveal
              delay={0.15}
              className="flex flex-col justify-between bg-[#0b1828] px-10 py-12 lg:px-12 lg:py-14"
            >
              <div className="flex flex-col gap-10">
                {/* Header */}
                <div>
                  <div className="w-8 h-[2px] bg-accent mb-4" />
                  <h3
                    className="text-white font-bold text-2xl leading-snug"
                    style={{ fontFamily: "var(--font-jakarta-sans)" }}
                  >
                    Información de<br />contacto
                  </h3>
                </div>

                {/* Data */}
                <div className="flex flex-col gap-8">
                  <ContactInfo
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    }
                    label="Dirección"
                    value="Rahue #1660, Paipote — Copiapó, Chile"
                  />
                  <ContactInfo
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    }
                    label="Teléfono"
                    value={COMPANY.phone}
                  />
                  <ContactInfo
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    }
                    label="Contacto"
                    value={COMPANY.contactName}
                  />
                  <ContactInfo
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    }
                    label="Correo"
                    value={COMPANY.email}
                  />
                  <ContactInfo
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    }
                    label="Horarios"
                    value={COMPANY.hours}
                  />
                </div>
              </div>

              {/* CTA email */}
              <div className="mt-12 pt-8 border-t border-white/8">
                <p className="text-white/35 text-xs tracking-wider uppercase mb-4">¿Necesita un proveedor confiable?</p>
                <a
                  href={MAILTO}
                  className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white font-medium px-8 py-4 text-sm transition-colors duration-200"
                >
                  Trabajemos Juntos
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  )
}
