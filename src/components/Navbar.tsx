"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { NAV_LINKS } from "@/lib/constants"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Si estamos fuera de la home page, los links de ancla van a /#seccion
  function resolveHref(href: string) {
    if (href.startsWith("#") && pathname !== "/") return `/${href}`
    return href
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      animate={{
        backgroundColor: scrolled ? "rgba(13,27,42,0.92)" : "rgba(13,27,42,0)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex items-center justify-between">
        {/* Logo */}
        <a href={resolveHref("#inicio")} className="flex-shrink-0 flex items-center gap-3 ml-4 lg:ml-8">
          <Image
            src="/logoresolucionalta.png"
            alt=""
            height={160}
            width={160}
            className="h-[88px] w-auto object-contain"
            priority
          />
          {/* <span className="flex flex-col leading-none">
            <span
              className="font-extrabold text-lg tracking-wide"
              style={{ color: "rgb(190,30,35)", fontFamily: "var(--font-jakarta-sans), sans-serif" }}
            >
              TRAMINOR
            </span>
            <span
              className="text-[#111111] font-semibold text-[9px] tracking-[0.3em]"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              SPA
            </span>
          </span> */}
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={resolveHref(link.href)}
                className="text-sm text-white/60 hover:text-white transition-all duration-200 tracking-wide hover:tracking-widest"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex">
          <a
            href={resolveHref("#contacto")}
            className="inline-flex items-center gap-2 bg-[#E30613] hover:bg-[#C00510] text-white font-semibold transition-colors duration-200 text-xs px-3 py-2 lg:text-sm lg:px-6 lg:py-2.5"
          >
            <span className="hidden sm:inline">Trabajemos Juntos</span>
            <span className="sm:hidden">Contacto</span>
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 text-white"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <motion.span
            className="block h-px w-6 bg-current"
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block h-px w-6 bg-current"
            animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block h-px w-6 bg-current"
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-navy-950/97 backdrop-blur-xl border-t border-white/5 lg:hidden"
          >
            <ul className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={resolveHref(link.href)}
                    onClick={() => setOpen(false)}
                    className="text-base text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            <motion.li
  initial={{ opacity: 0, x: -16 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: NAV_LINKS.length * 0.06 }}
>
  <a
    href={resolveHref("#contacto")}
    onClick={() => setOpen(false)}
    className="inline-block bg-[#E30613] hover:bg-[#C00510] text-white text-sm font-semibold px-6 py-3 transition-colors"
  >
    Solicitar cotización
  </a>
</motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
