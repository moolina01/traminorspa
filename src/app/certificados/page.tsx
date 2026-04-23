import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { CERTIFICATIONS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Certificaciones — Traminor SPA",
  description:
    "Certificaciones y estándares de calidad, seguridad y medio ambiente de Traminor SPA. ISO 9001, ISO 14001, ISO 45001 y Registro Nacional de Transporte de Carga.",
}

function DocumentPlaceholder() {
  return (
    <div className="relative w-full aspect-[3/4] bg-navy-900 border border-white/6 flex flex-col items-center justify-center gap-4 overflow-hidden">
      {/* Document lines decoration */}
      <div className="absolute inset-6 flex flex-col gap-2.5 opacity-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className={`h-px bg-white ${i === 0 ? "w-3/4" : i === 1 ? "w-1/2" : "w-full"}`} />
        ))}
      </div>
      {/* Icon */}
      <svg
        className="w-10 h-10 text-accent/40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
      <p
        className="text-zinc-600 text-[11px] tracking-widest uppercase text-center px-4"
        style={{ fontFamily: "var(--font-space-mono)" }}
      >
        Documento próximamente
      </p>
    </div>
  )
}

function CertCard({
  code,
  title,
  description,
  issuer,
  index,
}: {
  code: string
  title: string
  description: string
  issuer: string
  index: number
}) {
  return (
    <article className="group flex flex-col bg-[#0b1828] border border-white/6 hover:border-accent/30 transition-colors duration-300 overflow-hidden">
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-navy-800 overflow-hidden">
        <div className="h-full w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
      </div>

      {/* Document preview */}
      <div className="px-8 pt-8 pb-4">
        <DocumentPlaceholder />
      </div>

      {/* Info */}
      <div className="px-8 pb-8 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span
              className="text-accent text-[10px] font-bold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              {code}
            </span>
            <h3
              className="text-white font-bold text-base mt-1 leading-snug"
              style={{ fontFamily: "var(--font-jakarta-sans)" }}
            >
              {title}
            </h3>
          </div>
          <span className="text-zinc-700 text-[11px] font-mono mt-1 flex-shrink-0">0{index + 1}</span>
        </div>
        <p className="text-zinc-500 text-xs leading-relaxed">{description}</p>
        <div className="mt-auto pt-4 border-t border-white/5">
          <span className="text-zinc-600 text-[11px] tracking-wide">Emitido por: {issuer}</span>
        </div>
      </div>
    </article>
  )
}

const CERT_DETAILS: Record<string, { issuer: string }> = {
  "ISO 9001":  { issuer: "Bureau Veritas / TÜV" },
  "ISO 14001": { issuer: "Bureau Veritas / TÜV" },
  "ISO 45001": { issuer: "Bureau Veritas / TÜV" },
  "RNTC":      { issuer: "Ministerio de Transportes de Chile" },
}

export default function CertificadosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy-950">
        {/* Hero strip */}
        <div className="relative bg-[#07111c] pt-36 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_60%_50%,rgba(36,59,99,0.5),transparent)] pointer-events-none" />
          <div className="absolute right-[12%] inset-y-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <p
              className="text-accent text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              Autoridad y cumplimiento
            </p>
            <h1
              className="text-white text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl leading-tight"
              style={{ fontFamily: "var(--font-jakarta-sans)" }}
            >
              Certificaciones y<br />Estándares
            </h1>
            <p className="text-zinc-400 mt-5 text-base max-w-xl leading-relaxed">
              Operamos bajo los más estrictos estándares de seguridad y medioambientales de la industria minera.
              Todos nuestros procesos están certificados y auditados de forma permanente.
            </p>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-8 text-[12px]">
              <a href="/" className="text-zinc-600 hover:text-zinc-400 transition-colors">Inicio</a>
              <span className="text-zinc-700">/</span>
              <span className="text-zinc-400">Certificaciones</span>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <CertCard
                key={cert.code}
                index={i}
                code={cert.code}
                title={cert.title}
                description={cert.description}
                issuer={CERT_DETAILS[cert.code]?.issuer ?? "Organismo certificador"}
              />
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-16 pt-10 border-t border-white/6">
            <p className="text-zinc-500 text-sm max-w-xl leading-relaxed">
              Todas nuestras operaciones cumplen con la normativa vigente del Ministerio de Transportes
              de Chile y los protocolos de seguridad exigidos por las principales mineras del país.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
