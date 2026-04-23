interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
  centered?: boolean
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
  centered = false,
}: SectionTitleProps) {
  const align = centered ? "items-center text-center" : "items-start"
  const titleColor = light ? "text-white" : "text-ink"
  const subColor = light ? "text-zinc-400" : "text-steel"
  const eyebrowColor = light ? "text-accent/80" : "text-accent"

  return (
    <div className={`flex flex-col gap-3 ${align}`}>
      {eyebrow && (
        <span
          className={`text-xs font-mono uppercase tracking-[0.2em] ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-4xl md:text-5xl font-display font-extrabold leading-tight ${titleColor}`}
        style={{ fontFamily: "var(--font-jakarta-sans)" }}
      >
        {title}
      </h2>
      <div className={`flex ${centered ? "justify-center" : ""}`}>
        <div className="h-[3px] w-12 bg-accent" />
      </div>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed max-w-xl mt-1 ${subColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
