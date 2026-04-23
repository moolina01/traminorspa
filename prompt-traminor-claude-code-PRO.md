# Prompt Inicial — Proyecto Traminor SPA (Claude Code)

Crea una landing page de nivel premium para **Traminor SPA**, una empresa de transporte de ácido sulfúrico y carga pesada ubicada en **Copiapó, Región de Atacama, Chile**. Esta empresa trabaja con la industria minera y necesita transmitir **confianza, seguridad, profesionalismo y cumplimiento normativo**.

---

## DIRECTRIZ DE DISEÑO — LEE ESTO ANTES DE ESCRIBIR CUALQUIER CÓDIGO

Esta NO es una landing page genérica. El diseño debe sentirse como si lo hubiera hecho una agencia de branding especializada en industria pesada. Antes de codear, internaliza esta dirección estética:

### Dirección Estética: "Industrial Refinado"
- **Tono visual:** La intersección entre la brutalidad del desierto de Atacama y la precisión ingenieril del transporte de materiales peligrosos. Piensa en acero pulido, concreto limpio, líneas de ingeniería.
- **Lo que alguien debe recordar:** La sensación de que esta empresa mueve ácido sulfúrico por el desierto más árido del mundo y lo hace con una seriedad absoluta.
- **Audiencia:** Un gerente de operaciones de una minera en Antofagasta que necesita confiar su carga más peligrosa a este proveedor. No es un consumidor casual — es un profesional evaluando riesgo.

### Principios de Diseño NO Negociables
1. **CERO estética genérica de AI** — nada de gradientes purple, cards con bordes redondeados idénticos, layouts simétricos predecibles, ni la típica landing de template. Si se ve como un template de Tailwind UI, está mal.
2. **Composición con carácter** — usar asimetría intencional, elementos que rompan el grid, superposiciones entre secciones, negative space generoso en las áreas correctas.
3. **Jerarquía visual dramática** — los headlines deben tener presencia física. Usar tamaños contrastantes (display grande vs body pequeño). No todo puede ser "medium" — necesita extremos.
4. **Textura y profundidad** — NO fondos planos sólidos en todas las secciones. Incorporar: noise/grain overlays sutiles, patterns geométricos inspirados en señalética industrial, sombras dramáticas en cards, líneas diagonales que evoquen rutas/caminos.
5. **Color con intención** — el rojo-anaranjado es un bisturí, no una brocha. Se usa quirúrgicamente en un botón CTA, una línea accent, un número destacado. El navy domina las secciones de autoridad. El blanco respira.

---

## Stack Técnico
- **Next.js 14+** con App Router
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** para animaciones (instalar como dependencia)
- Desplegable en **Vercel**
- Sin backend ni base de datos (landing page estática)
- Imágenes placeholder usando colores sólidos con overlays o gradientes (NO depender de URLs externas que se rompan — usar divs con background-color + texto descriptivo como placeholder, o SVGs generados)

---

## Tipografía (CRÍTICO — define el carácter del sitio)

NO usar Inter, Roboto, Arial, ni system fonts. Importar desde Google Fonts:

- **Display / Headlines:** `"Plus Jakarta Sans"` weight 800 o `"Outfit"` weight 700-900 — geométrica, moderna, con personalidad industrial
- **Body:** `"DM Sans"` weight 400-500 — limpia, legible, profesional sin ser genérica
- **Números/Stats:** `"Space Mono"` o `"JetBrains Mono"` — monospace para métricas y cifras, evoca datos técnicos e ingeniería
- Los headlines deben ser GRANDES. El hero title mínimo `text-5xl md:text-7xl lg:text-8xl`. Los stats en `text-6xl` monospace. Crear contraste real entre elementos.

---

## Paleta de Colores (coherente con el logo renovado)

Definir como CSS variables en globals.css y como extensión del theme de Tailwind:

```
--navy-950: #0d1b2a      (fondos oscuros hero/footer — el más profundo)
--navy-900: #1b2a4a      (secciones oscuras, navbar scroll)
--navy-800: #243b63      (hover states oscuros)
--accent:   #e2603d      (rojo-anaranjado cálido — EL acento del logo renovado)
--accent-hover: #c94e2e  (hover del acento)
--cream:    #faf8f5       (fondo principal — NO blanco puro, un off-white cálido)
--gray-100: #f0ede8       (fondos de secciones alternas)
--gray-600: #5a5a6e       (texto secundario)
--text:     #1a1a2e       (texto principal sobre fondos claros)
```

**REGLA:** El rojo-anaranjado aparece en MÁXIMO 3-4 elementos por viewport visible: un botón, una línea, un ícono, un número. Si hay más, se ve agresivo. El cliente explícitamente dijo que rojo+negro es "feo" — el accent es un destello, no un protagonista.

---

## Estructura de la Página

### 1. Navbar (navegación fija superior)
- Logo de Traminor a la izquierda — el logo real se proporcionará como archivo (`/public/logo.png`). El logo tiene el texto "Traminor SPA" con unas curvas dinámicas rojas. Se usará en formato cuadrado, sin fondo (transparente). Por ahora crear un SVG placeholder que diga "TRAMINOR" en el estilo de la marca. Los colores del logo se ajustarán: negro → blanco, rojo → rojo-anaranjado cálido (var --accent).
- Links de navegación: Inicio, Nosotros, Servicios, Certificaciones, Flota, Contacto
- Botón CTA destacado: "Solicitar Cotización" — con `bg-accent`, el ÚNICO elemento naranja en el navbar
- Menú hamburguesa responsive en mobile con animación de apertura (no un toggle feo)
- **Transición:** navbar transparente sobre el hero → fondo `navy-950/90 backdrop-blur-xl` al hacer scroll. Transición suave de 300ms.
- El navbar debe sentirse como flotar sobre el contenido, no como un bloque pegado

### 2. Hero Section (Portada) — EL MOMENTO DE IMPACTO
- Full viewport height (`min-h-screen`)
- Fondo: div con `bg-navy-950` + un pattern SVG sutil de líneas diagonales (evoca rutas en el desierto) + gradient overlay
- **La imagen NO debe ser oscura** — cuando se reemplace el placeholder, el overlay debe ser sutil (`bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent`)
- Layout del hero:
  - Esquina superior derecha: "TRAMINOR" en display font gigante, `text-8xl`, semi-transparente (`opacity-10 md:opacity-15`), como marca de agua — NO como texto legible, sino como elemento de diseño
  - Centro-izquierda del viewport: headline principal en blanco, máximo 2 líneas: **"Transporte especializado de ácido sulfúrico con los más altos estándares de seguridad"**
  - Debajo: sub-headline en `gray-400`: "Más de XX años conectando la industria minera de Atacama con el país"
  - Botón CTA: "Conozca nuestros servicios" — con accent color, tamaño generoso, hover con scale + glow sutil
  - Indicador de scroll en la parte inferior: línea vertical animada + "Desplazar" en texto pequeño rotado
- **Animación de entrada:** Los elementos del hero aparecen en stagger: primero el headline (slide-up + fade), luego sub-headline (200ms delay), luego botón (400ms delay). Usar Framer Motion.
- **Elemento diferenciador:** Una línea diagonal accent color que cruza parcialmente el hero como elemento gráfico decorativo

### 3. Nuestra Empresa
- **Layout asimétrico:** imagen que ocupa 55% del ancho en desktop, texto en el 45% restante, con overlap — la imagen se extiende ligeramente fuera de su columna
- Imagen placeholder: div con bg-navy-800 y texto "Foto: Camiones en puerto" 
- Texto institucional breve sobre la trayectoria de Traminor
- **Stats bar:** una franja que atraviesa horizontalmente con fondo `navy-950`, mostrando 3-4 métricas en fuente monospace grande:
  - `+15` Años de experiencia
  - `+50.000` Viajes realizados  
  - `+2M` Kilómetros recorridos
  - `99.8%` Entregas sin incidentes
- Los números en `Space Mono text-5xl text-accent`, las descripciones en `DM Sans text-sm text-gray-400`
- **Animación:** los números hacen count-up cuando entran al viewport

### 4. Nuestro Propósito (reemplaza Misión y Visión)
- Fondo `cream` o `gray-100` para contraste con sección anterior
- Diseño con 2 cards grandes lado a lado en desktop, stacked en mobile
- **Card de Propósito:**
  - Ícono: shield/escudo en accent
  - "Consolidar nuestra empresa a nivel Nacional, entregando servicios de excelencia con óptimos estándares de seguridad y calidad respetando el medio ambiente. Apoyándonos en nuestros modernos equipos y profesionales expertos en el rubro del transporte, entregando confianza y seguridad a nuestros clientes."
- **Card de Disponibilidad:**
  - Ícono: truck/mapa en accent
  - "Contamos con disponibilidad de destinos y equipos, además de conductores capacitados y con experiencia en el rubro para prestar servicios de calidad y bajo políticas de Seguridad y Medio Ambiente."
- Cards con `border-l-4 border-accent` como detalle lateral, sombra sutil, fondo blanco
- **Elemento gráfico:** entre las cards y el título de sección, una línea horizontal fina con un punto accent en el centro

### 5. Servicios
- Título de sección con headline grande + línea accent debajo
- Grid de 2x2 en desktop, stack en mobile
- Cada card de servicio tiene:
  - Imagen placeholder arriba (aspect-ratio 16/9, div con bg-navy-800)
  - Título en bold
  - Descripción de 2 líneas
  - Línea accent inferior que se anima (width 0 → 100%) en hover
- Servicios:
  - **Transporte de Ácido Sulfúrico** — "Equipo completo de tracto y semirremolque cisterna con protocolos de seguridad para materiales peligrosos"
  - **Transporte en Cama Baja** — "Traslado de maquinaria pesada y equipos sobredimensionados para operaciones mineras"
  - **Transporte de Carga General** — "Servicios de carga convencional con cobertura nacional"
  - **Logística Minera** — "Soluciones integrales de transporte para la cadena de suministro minero"
- **Hover:** la card se eleva ligeramente (`translateY(-4px)`), la imagen hace zoom sutil, la línea accent se llena

### 6. Certificaciones y Seguridad (SECCIÓN DE AUTORIDAD)
- Fondo `navy-950` — sección oscura que rompe el ritmo visual y transmite seriedad
- Título en blanco: "Certificaciones y Estándares" con sub-texto: "Operamos bajo los más estrictos estándares de seguridad y medioambientales"
- Grid de badges/shields:
  - ISO 9001 (Calidad)
  - ISO 14001 (Medio Ambiente)
  - ISO 45001 (Seguridad y Salud)
  - Registro Nacional de Transporte de Carga
- Cada badge: ícono de escudo/sello SVG con borde accent, nombre de la certificación, descripción de una línea
- **Efecto visual:** los badges tienen un glow sutil accent en hover, como si fueran sellos metálicos
- Esta sección es CLAVE — un gerente de minera mira esto antes que cualquier otra cosa

### 7. Nuestra Flota
- Volver a fondo claro (`cream`)
- Headline: "Flota Moderna y Especializada"
- Carousel horizontal o grid de 3 columnas con imágenes placeholder de equipos
- Tipos: Tracto-camiones, Semirremolques cisterna, Camas bajas
- Cada item con: imagen, nombre del equipo, specs breves
- Debajo: franja con datos — "XX unidades operativas | Mantenimiento preventivo permanente | Renovación constante de flota"

### 8. Contacto
- Layout dos columnas: formulario a la izquierda, info + mapa a la derecha
- Formulario: Nombre, Empresa, Email, Teléfono, Tipo de servicio (select dropdown), Mensaje
- Estilo del formulario: inputs con `border-b-2` estilo underline (no inputs con borde completo genéricos), focus state con accent color
- Botón enviar con accent color
- Info de contacto: dirección placeholder en Copiapó, teléfono, email, horarios
- Mapa: div placeholder con bg-navy-800 y texto "Google Maps embed" (se integrará después)
- **El formulario no necesita funcionalidad de envío — solo el HTML/UI**

### 9. Footer Profesional
- Fondo `navy-950`, el más oscuro
- Layout de 4 columnas en desktop:
  - **Col 1 — Marca:** Logo placeholder + descripción de una línea + RUT placeholder
  - **Col 2 — Navegación:** links a todas las secciones
  - **Col 3 — Servicios:** links a cada servicio
  - **Col 4 — Contacto:** dirección, teléfono, email
- Redes sociales: íconos SVG (LinkedIn, Instagram, Facebook)
- Separador fino `border-t border-navy-800`
- Línea inferior: "© 2026 Traminor SPA. Todos los derechos reservados." a la izquierda + "Empresa inscrita en el Registro Nacional de Transporte de Carga" a la derecha
- El footer debe sentirse como un cierre sólido, no como un afterthought

---

## Animaciones (Framer Motion)

- **Scroll reveal:** cada sección usa `motion.div` con `initial={{ opacity: 0, y: 40 }}` → `whileInView={{ opacity: 1, y: 0 }}` con `viewport={{ once: true }}`. Stagger children con 100-150ms de delay.
- **Hero:** entrada orquestada — elementos aparecen en secuencia (stagger 200ms)
- **Stats counter:** animación de count-up cuando los números entran al viewport
- **Cards hover:** `whileHover={{ y: -4 }}` con `transition={{ type: "spring", stiffness: 300 }}`
- **Navbar:** `motion.nav` con animatePresence para la transición de fondo
- **NO sobrecargar** — la elegancia está en la contención. Si todo se mueve, nada destaca. Máximo 2 tipos de animación por sección.

---

## Backgrounds y Texturas (CLAVE para evitar look genérico)

- **Hero:** Gradient overlay + pattern SVG de líneas diagonales finas (opacity 5%) evocando rutas
- **Secciones claras:** Fondo `cream` con noise/grain overlay CSS muy sutil (opacity 3-5%) para dar textura orgánica
- **Secciones oscuras (certs, footer):** `navy-950` con un radial gradient muy sutil en el centro para dar profundidad
- **Stats bar:** puede tener un pattern de puntos geométricos sutiles
- **NUNCA** dejar una sección con un `bg-white` o `bg-gray-50` plano sin textura — siempre algo que le dé vida

---

## Requisitos Técnicos
- Full responsive (mobile-first approach)
- SEO: meta tags, Open Graph tags, título "Traminor SPA — Transporte Especializado de Ácido Sulfúrico | Copiapó, Atacama"
- Performance: next/image con placeholder blur, lazy loading en secciones below the fold
- Accesibilidad: alt tags descriptivos, contraste WCAG AA, navegación por teclado, focus states visibles
- Smooth scroll entre secciones (`scroll-behavior: smooth` + scroll offset para compensar navbar fija)
- Favicon: generar un SVG simple con la T de Traminor en accent color

---

## Archivos a Crear
```
public/
  logo.png          (se proporcionará — crear placeholder SVG por ahora)
src/
  app/
    layout.tsx       (importar fonts, metadata, estructura base)
    page.tsx         (composición de todos los componentes)
    globals.css      (CSS variables, noise texture, base styles, scroll-behavior)
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx         (Nuestra Empresa + Stats)
    Purpose.tsx
    Services.tsx
    Certifications.tsx
    Fleet.tsx
    Contact.tsx
    Footer.tsx
    ui/
      SectionTitle.tsx   (componente reutilizable: título + línea accent + subtítulo)
      AnimatedCounter.tsx (count-up para stats)
      ScrollReveal.tsx   (wrapper de Framer Motion para scroll animations)
  lib/
    constants.ts     (TODOS los textos, datos, servicios centralizados — facilita edición posterior)
    fonts.ts         (configuración de Google Fonts con next/font)
```

---

## Notas Finales
- Todo el contenido en **español**
- El tono es **corporativo, técnico y confiable** — como el brochure de una empresa que mueve materiales peligrosos, no como una startup tech
- El cliente de Traminor es un profesional de minería evaluando riesgo — la web debe pasar ese filtro
- Las imágenes se reemplazarán, pero los placeholders deben verse profesionales (divs con color + texto descriptivo, NO imágenes rotas)
- Cada componente debe ser autocontenido y fácil de editar después
- Priorizar que el primer render se vea TERMINADO y profesional, no como un wireframe
