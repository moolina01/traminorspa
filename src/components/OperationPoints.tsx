"use client"

import dynamic from "next/dynamic"
import ScrollReveal from "@/components/ui/ScrollReveal"

const POINTS = [
  { id: "barquito",   name: "Puerto Barquito",   city: "Huasco",       region: "Atacama",      lat: -28.4667, lng: -71.2167 },
  { id: "mejillones", name: "Puerto Mejillones",  city: "Mejillones",   region: "Antofagasta",  lat: -23.1000, lng: -70.4500 },
  { id: "interacid",  name: "Interacid",          city: "Mejillones",   region: "Antofagasta",  lat: -23.1300, lng: -70.4350 },
  { id: "altonorte",  name: "Altonorte",          city: "Antofagasta",  region: "Antofagasta",  lat: -23.5900, lng: -70.3800 },
]

const Map = dynamic(() => import("@/components/ui/LeafletMap"), { ssr: false })

export default function OperationPoints() {
  return (
    <section id="operaciones" className="bg-navy-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Lado izquierdo — texto + lista */}
          <ScrollReveal direction="left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-[#E30613]" />
              <span
                className="text-xs font-mono tracking-[0.2em] uppercase text-[#E30613]"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                Cobertura Operacional
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4"
              style={{ fontFamily: "var(--font-jakarta-sans)" }}
            >
              Puntos de <br />
              <span className="text-[#E30613]">Operación</span>
            </h2>

            <p className="text-zinc-400 text-[15px] leading-relaxed mb-10">
              Operamos en los principales puertos e instalaciones del norte de Chile, transportando ácido sulfúrico con los más altos estándares de seguridad.
            </p>

            {/* Lista de puntos */}
            <div className="flex flex-col gap-3">
              {POINTS.map((p, i) => (
                <div
                  key={p.id}
                  className="flex items-center gap-4 border-l-2 border-[#E30613]/30 pl-4 py-1 hover:border-[#E30613] transition-colors duration-300"
                >
                  <span
                    className="text-[#E30613] font-mono text-xs opacity-50"
                    style={{ fontFamily: "var(--font-space-mono)" }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-jakarta-sans)" }}>
                      {p.name}
                    </p>
                    <p className="text-zinc-500 text-xs">{p.city} — Región de {p.region}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Lado derecho — mapa */}
          <ScrollReveal direction="right">
            <div className="w-full h-[380px] overflow-hidden border border-white/8 shadow-2xl shadow-black/40">
              <Map points={POINTS} />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
