"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// ─── Agrega aquí tus proveedores ───────────────────────────────────────────
// logo: ruta dentro de /public  (ej. "/logos/enami.svg")
// name: nombre de la empresa (se muestra como alt y debajo del logo)
const PROVIDERS = [
  { name: "Proveedor 1", logo: "/Logo-Enami.jpg" },
  { name: "Proveedor 2", logo: "/img-logo-cenizas.png" },
  { name: "Proveedor 3", logo: "/acf.png" },
  { name: "Proveedor 4", logo: "/altonorte.jpg" },
  { name: "Proveedor 5", logo: "/images-13.png" },
  // { name: "Proveedor 6", logo: null },
  // { name: "Proveedor 7", logo: null },
]
// ───────────────────────────────────────────────────────────────────────────

function ProviderCard({ name, logo }: { name: string; logo: string | null }) {
  return (
    <motion.div
      className="flex-shrink-0 w-44 h-24 mx-4 bg-white flex flex-col items-center justify-center gap-2 group cursor-pointer"
      whileHover={{ scale: 1.08, y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.25)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
    >
      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={120}
          height={48}
          style={{ width: "auto", height: "auto", maxHeight: "48px" }}
          className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      ) : (
        /* Placeholder — reemplaza con el logo real */
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M6.75 6.75h.008v.008H6.75V6.75z" />
            </svg>
          </div>
          <span className="text-zinc-600 text-[10px] tracking-widest uppercase font-mono">{name}</span>
        </div>
      )}
    </motion.div>
  )
}

export default function Providers() {
  return (
    <section className="bg-[#07111c] py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-6 h-px bg-accent" />
          <p
            className="text-zinc-500 text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            Proveedores Estratégicos
          </p>
        </div>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#07111c] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#07111c] to-transparent z-10 pointer-events-none" />

        {/* Scrolling strip */}
        <div className="flex marquee-track">
          {/* Duplicamos dos veces para el loop infinito */}
          {[...PROVIDERS, ...PROVIDERS].map((p, i) => (
            <ProviderCard key={i} name={p.name} logo={p.logo} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
