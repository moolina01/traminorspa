import Image from "next/image"
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants"

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-accent hover:border-accent/40 transition-colors duration-200"
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <div className="inline-flex w-fit">
              <Image
                src="/logoresolucionalta.png"
                alt="Traminor SPA"
                height={64}
                width={64}
                className="h-16 w-auto object-contain"
              />
              <span className="flex flex-col leading-none hidden">
                <span
                  className="text-white font-extrabold text-base tracking-wide"
                  style={{ fontFamily: "var(--font-jakarta-sans), sans-serif" }}
                >
                  TRAMINOR
                </span>
                <span
                  className="text-white/50 font-normal text-[8px] tracking-[0.3em]"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  SPA
                </span>
              </span>
            </div>
            <p className="text-zinc-500 text-[13px] leading-relaxed max-w-[220px]">
              Transporte especializado de materiales peligrosos para la industria minera del norte de Chile.
            </p>
            {/* Social */}
            <div className="flex gap-2 mt-1">
              <SocialLink href="#" label="LinkedIn Traminor">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialLink>
              <SocialLink href="#" label="Instagram Traminor">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialLink>
              <SocialLink href="#" label="Facebook Traminor">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-white text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-jakarta-sans)" }}
            >
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-500 hover:text-white text-[13px] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-white text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-jakarta-sans)" }}
            >
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a
                    href="#servicios"
                    className="text-zinc-500 hover:text-white text-[13px] transition-colors duration-200"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-white text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-jakarta-sans)" }}
            >
              Contacto
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-zinc-500 text-[13px] leading-relaxed">{COMPANY.address}</li>
              <li className="flex flex-col gap-1">
                <a href="tel:+56982060730" className="text-zinc-500 hover:text-white text-[13px] transition-colors">
                  +56 9 82060730
                </a>
                <a href="tel:+56952089116" className="text-zinc-500 hover:text-white text-[13px] transition-colors">
                  +56 9 52089116
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="text-zinc-500 hover:text-white text-[13px] transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li className="text-zinc-600 text-[12px]">{COMPANY.hours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-[11px]">
            © {COMPANY.year} {COMPANY.name}. Todos los derechos reservados.
          </p>
          <p className="text-zinc-700 text-[11px] text-center sm:text-right">
            Empresa inscrita en el Registro Nacional de Transporte de Carga
          </p>
        </div>
      </div>
    </footer>
  )
}
