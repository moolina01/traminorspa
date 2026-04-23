import type { Metadata } from "next"
import { jakartaSans, dmSans, spaceMono } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Traminor SPA — Transporte Especializado de Ácido Sulfúrico | Copiapó, Atacama",
  description:
    "Empresa líder en transporte de ácido sulfúrico y carga pesada para la industria minera en la Región de Atacama, Chile. Más de 15 años de experiencia, certificaciones ISO y flota moderna.",
  keywords: [
    "transporte ácido sulfúrico",
    "carga pesada Atacama",
    "logística minera Copiapó",
    "transporte materiales peligrosos Chile",
    "Traminor SPA",
  ],
  openGraph: {
    title: "Traminor SPA — Transporte Especializado de Ácido Sulfúrico",
    description:
      "Transporte de materiales peligrosos y carga pesada para la industria minera de Atacama. Seguridad, cumplimiento normativo y flota moderna.",
    siteName: "Traminor SPA",
    locale: "es_CL",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${jakartaSans.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
