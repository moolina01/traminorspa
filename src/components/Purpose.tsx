"use client"

import ScrollReveal from "@/components/ui/ScrollReveal"
import SectionTitle from "@/components/ui/SectionTitle"
import { PURPOSE_CARDS } from "@/lib/constants"

function ShieldIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    </svg>
  )
}

const icons = [ShieldIcon, TruckIcon]

export default function Purpose() {
  return (
    <section id="proposito" className="bg-sand noise-overlay relative py-24 lg:py-32">
      {/* Decorative center line with accent dot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-sand/0 border-l border-dashed border-steel/20" />
        <div className="w-2 h-2 rounded-full bg-accent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <ScrollReveal className="mb-16 lg:mb-20">
          <SectionTitle
            eyebrow="Quiénes somos"
            title="Propósito y Valores"
            subtitle="Cada kilómetro recorrido es una promesa cumplida."
            centered
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {PURPOSE_CARDS.map((card, i) => {
            const Icon = icons[i]
            return (
              <ScrollReveal key={card.title} delay={i * 0.15}>
                <div className="group relative bg-white border-l-4 border-accent p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Top right accent square */}
                  <div className="absolute top-0 right-0 w-10 h-10 bg-accent/5 group-hover:bg-accent/10 transition-colors" />

                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 text-accent mt-1">
                      <Icon />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3
                        className="text-xl font-bold text-ink"
                        style={{ fontFamily: "var(--font-jakarta-sans)" }}
                      >
                        {card.title}
                      </h3>
                      <p className="text-steel leading-relaxed text-[15px]">{card.body}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>

      {/* Franja decorativa inferior — rojo + negro */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col">
        <div className="h-[3px] bg-accent" />
        <div className="h-[2px] bg-[#111111]" />
      </div>
    </section>
  )
}
