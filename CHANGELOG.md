# Changelog — FixedGap Web

Registro detallado de todo lo que se construye en la web.
Actualizar este fichero después de cada cambio importante.

---

## [/company/about — imagen oficina] — 2026-06-08
### Modificado
- Imagen final reemplazada: `about-team.jpg` → `oficina.jpeg`
- Ubicación: `/about/oficina.jpeg`

---

## [/product/dashboard — vídeo] — 2026-06-08
### Modificado
- Imagen del dashboard reemplazada por elemento de vídeo
- Vídeo: `/clinical/videoDashboard.mp4`
- Configuración: autoPlay, muted, loop, playsInline
- Aspect ratio 16/10 con objectFit: cover

---

## [Biomarcadores actualizados a 13] — 2026-06-08
### Modificado
- Todas las referencias de "12 hand biomarkers" cambiadas a "13 clinical biomarkers"
- Todas las referencias de "14 clinical biomarkers" cambiadas a "13 clinical biomarkers"
- Actualizado en Navbar: descripción de Biomarkers
- Actualizado en /company/about: texto de FixedGap V2
- Actualizado en archivos backup: SolutionV2Backup, SolutionV3Backup, SolutionV4Backup, SolutionWithAurora

---

## [Manifesto → Behind FixedGap] — 2026-06-08
### Modificado
- Renombrada ruta: `/company/manifesto` → `/company/behind-fixedgap`
- Renombrada carpeta: `src/app/company/manifesto/` → `src/app/company/behind-fixedgap/`
- Renombrado componente: `Manifesto.tsx` → `BehindFixedGap.tsx`
- Texto visible cambiado de "Manifesto" a "Behind FixedGap" en Navbar y Footer
- Label actualizado de "FixedGap Manifesto" a "Behind FixedGap"
- Carpeta de imágenes: `public/manifesto/` → `public/behind-fixedgap/`
- Función del componente: `ManifestoPage()` → `BehindFixedGapPage()`
- ID de sección: `#manifesto` → `#behind-fixedgap`

---

## [/pricing — eliminada sección Plans] — 2026-06-07
### Modificado
- Eliminadas las dos cards de precios (€30-50/mes por neurólogo y €20-30 por paciente)
- Eliminada la nota de GDPR compliance
- Mantenidos: Hero, Buyer vs User, y CTA final

---

## [/market — globo actualizado] — 2026-06-07
### Modificado
- Marcadores reducidos a España y Boston
- Madrid → Spain (coordenadas iguales)
- New York → Boston (lat: 42.3601, lng: -71.0589)
- Eliminados Alemania y Francia
- countryData actualizado con datos de Spain y Boston

---

## [/market — card interactiva por país] — 2026-06-07
### Modificado
- Globo ahora en layout dos columnas con card de datos a la derecha
- Al pinchar en un marcador aparece card con datos de ictus del país
- España y USA con datos reales verificables
- Alemania y Francia con "Coming soon"
- Botón "Back to globe" para cerrar la card
- Animación smooth al abrir la card

---

## [/science/references — tabla clinically grounded] — 2026-06-07
### Modificado
- Sección "Clinically grounded" reemplazada por tabla con búsqueda y filtros
- 6 referencias filtrables por tipo: Clinical burden, Epidemiology, Digital health, Rehabilitation
- Búsqueda en tiempo real por título, relevancia o autores
- Backup en page.backup2.tsx para revertir
### Para revertir
- `cp src/app/science/references/page.backup2.tsx src/app/science/references/page.tsx`

---

## [/science/references — Timeline validated (revertido)] — 2026-06-07
### Modificado
- Sección "Directly validated" reemplazada por Timeline_01
- 2 referencias con items expandibles y links a DOIs
- Backup en page.backup.tsx para revertir fácilmente
### Para revertir
- `cp src/app/science/references/page.backup.tsx src/app/science/references/page.tsx`

---

## [/science/validation — Roadmap Card] — 2026-06-07
### Modificado
- Sección "Where we are today" reemplazada por Roadmap Card
- 5 milestones: done x3, in-progress, planned
- Backup en page.backup.tsx para revertir fácilmente
### Para revertir
- `cp src/app/science/validation/page.backup.tsx src/app/science/validation/page.tsx`

---

## [/demo + navbar — video placeholder] — 2026-06-07
### Modificado
- Vídeos reemplazados por mensaje "Video not available yet"
- Aplicado en /demo page y en mega menú de Demo
- Placeholder con fondo oscuro (#141B2D) y texto claro

---

## [/company/team — carousel de perfiles] — 2026-06-07
### Modificado
- Grid de 6 cards reemplazado por carousel interactivo
- Componente TeamCarousel en /components/ui/TeamCarousel.tsx
- Foto grande + card con descripción + LinkedIn
- Responsive: desktop overlap, mobile stack
- 6 miembros: Álvaro, Mateo, Luis, Marco, Helene, José Antonio
- Navegación con flechas y dots indicadores
- Animaciones con framer-motion para transiciones suaves

---

## [Demo section + nuevo logo] — 2026-06-07
### Añadido
- Sección Demo en landing entre Traction y Solution
- Placeholder de vídeo — activar cuando esté public/videos/our-story.mp4
- CTA "See all videos" que lleva a /demo
- Header con label "See it in action", headline "Watch how FixedGap works."
- Video container con aspect-ratio 16/9 y botón de play placeholder
### Modificado
- Logo actualizado en Navbar y Footer
- Imagen: public/nuevologo.png
- Logo aparece junto al texto FixedGap en ambos sitios
- Navbar: logo 32x32px + texto "FixedGap"
- Footer: logo 28x28px + texto "FixedGap"

---

## [/investors — importado del repo anterior] — 2026-06-04
### Añadido
- Página /investors copiada del repo mpchachi/fixedgap
- Assets de /investors copiados a /public (frames, imágenes de equipo, sponsors)
- Dependencia recharts instalada para los dashboards
- Ruta fixedgap.com/investors se mantiene exactamente igual

---

## [Footer — email eliminado] — 2026-06-04
### Modificado
- Eliminado email hello@fixedgap.com del Footer
- Email no existe, se eliminó el link y el icono Mail

---

## [/market — fix contraste ratio mundial] — 2026-06-04
### Modificado
- Color del segundo ratio (3,367 mundial) cambiado de #1A1F3C a #98A2B3
- Mejor contraste sobre fondo oscuro (#141B2D)
- Ahora se lee correctamente el número

---

## [Contact — formulario simple] — 2026-06-04
### Modificado
- Email y Cal.com reemplazados por formulario simple
- Campos: nombre (requerido), email (requerido), teléfono (opcional), mensaje (opcional)
- Confirmación visual "✓ Message sent" al enviar
- Formulario en landing section (Contact.tsx) y página /contact
- Fondo oscuro (#0A0F1E) con inputs oscuros (#141B2D)
- Border focus azul brand (#1F4C9C)
- Estado local con useState, sin backend (por ahora)

---

## [/market — ratios pacientes/neurólogo] — 2026-06-04
### Añadido
- Nueva sección "The workforce gap" entre el globo y TAM/SAM/SOM
- 3 ratios en cards con fondo oscuro (#141B2D) y borde de color según severidad
- España: 1,015 pacientes/neurólogo (azul brand #1F4C9C)
- Mundial: 3,367 pacientes/neurólogo (gris oscuro #1A1F3C)
- Países bajos ingresos: 4,000,000 pacientes/profesional (rojo #A8261C)
- Headline: "There are not enough neurologists. There never will be."
- Contexto: "workforce shortage is structural and permanent"
- Animación Framer Motion con stagger

---

## [/science/evidence — ratios pacientes/neurólogo] — 2026-06-04
### Añadido
- Ratio España: 1,015 pacientes con secuelas por neurólogo en unidad de ictus
- Ratio mundial: 3,367 pacientes por neurólogo de ictus
- Fuentes: SEN (Sociedad Española de Neurología) October 2025, World Federation of Neurology Survey
- Cálculos: España (330,000 ÷ 325), Mundial (101M ÷ 30,000)
- Ambas stats añadidas antes de la última stat de 5.5M muertes
- Total: 7 estadísticas (antes 5)

---

## [/product/dashboard — cards actualizadas] — 2026-06-04
### Modificado
- 4 cards de "What's in the report" completamente actualizadas
- Card 1: CRI ahora menciona "three games" y "FMA-UE scale"
- Card 2: "Movement Quality" → "Hand Kinematics" con métricas específicas (pinch, reach, overshoot, rotation, SPARC)
- Card 3: "Session Breakdown" → "Inter-hand Asymmetry" con asymmetry index y recovery gap
- Card 4: "Adherence Tracking" → "Adherence & Consistency" con contexto clínico más específico
- Todas las cards ahora reflejan las métricas reales del catálogo

---

## [Pipeline — textos actualizados] — 2026-06-04
### Modificado
- Step 2: métricas actualizadas con catálogo real (pinch precision, reach accuracy, wrist rotation, smoothness)
- Step 2: añadida referencia "across three clinical games designed around FMA-UE items"
- Step 4: añadida referencia a "across all three games"
- Step 4: añadida mención explícita a "Inter-hand asymmetry is computed automatically"

---

## [Solution landing — métricas actualizadas] — 2026-06-04
### Modificado
- Array de métricas actualizado con IDs técnicos reales del catálogo
- 10 métricas CORE: M1 (pinch), M2 (hand opening), M4 (wrist ROM), M11 (SPARC), reach, overshoot, index extension, pronosup, asymmetry, recovery gap
- Texto descriptivo actualizado con referencia explícita a FMA-UE
- "Each movement maps directly to an item on the Fugl-Meyer Assessment scale"
- Grid de métricas ahora muestra las métricas reales del MVP

---

## [/science/validation — métricas actualizadas] — 2026-06-04
### Modificado
- scientificBasis actualizado con métricas reales del catálogo (M1, M2, M4, M11)
- 6 métricas: SPARC, ROM wrist, pinch precision, reach precision, asymmetry, pronosup speed
- currentStatus añade estado de correlación FMA-UE ρ≈0.92 (literature-based)
- Lenguaje clínico preciso alineado con FMA-UE items
- Énfasis en que las métricas mapean directamente a la escala FMA-UE
- Total: 5 estados (3 validated, 2 pending)

---

## [/product/experience — métricas actualizadas] — 2026-06-04
### Modificado
- Métricas de cada juego actualizadas con IDs técnicos reales (M1, M2, M4, M11)
- Descripciones clínicas revisadas con lenguaje preciso
- Orden de juegos actualizado: Pill Organizer → Light Switch → Water Jug
- Tag de Light Switch actualizado: "Finger Extension & Bilateral Asymmetry"
- Biomarcadores ahora incluyen referencias específicas del catálogo
- "Why it matters" mejorado con contexto clínico más específico

---

## [/product/biomarkers — métricas actualizadas] — 2026-06-04
### Modificado
- Categorías reorganizadas por juego: Pill Organizer, Light Switch, Water Jug, Derived Metrics
- Métricas actualizadas con IDs técnicos reales del catálogo (M1, M2, M4, M11, etc.)
- Solo métricas CORE incluidas — V2 y EXPL no aparecen en el MVP
- Badge MVP añadido a cada métrica (verde)
- Descripciones e insights actualizados con lenguaje clínico preciso
- Hero actualizado: ya no menciona "12 métricas" sino "Core biomarkers across three games"
- Total: 13 métricas CORE organizadas en 4 categorías por juego

---

## [/science/references — referencias reales] — 2026-06-04
### Modificado
- Todos los placeholders reemplazados por referencias reales
- 8 referencias con DOIs verificables
- Fuentes: GBD 2021/2024, AHA 2024, WSO 2025, PLOS ONE 2024, JMIR 2025, Lancet 2026, UCM 2011
- 2 marcadas como validated, 6 como grounded
- Referencias de validación del Fugl-Meyer Assessment (PLOS ONE 2024, UCM 2011)
- Referencias de epidemiología global del ictus (GBD 2021, WSO 2025, AHA 2024, Lancet 2026)
- Referencias de adherencia en salud digital (JMIR 2025, JMIR Rehab 2023)

---

## [SEO — headings invisibles landing] — 2026-06-02
### Añadido
- H2 y H3 SEO invisibles en todas las secciones de la landing
- Patrón sr-only — visibles para Google, invisibles para el visitante
- Secciones: Problem, Solution, Pipeline, Traction, Metrics, TeamPreview, Contact
- Constante srOnly reutilizable en cada fichero

---

## [Hero — H1 SEO invisible] — 2026-06-02
### Modificado
- H1 SEO invisible con sr-only pattern: "Post-Stroke Rehabilitation Monitoring. Zero Hardware."
- H2 visible mantiene el impacto emocional: "Your patients recover every day. You find out weeks later."
- Google indexa el H1, el visitante ve el H2
- H1 oculto con position absolute + clip para accesibilidad y SEO

---

## [/company/about — agradecimiento Bosch] — 2026-06-02
### Añadido
- Bloque de agradecimiento a Juan Antonio y Bosch
- Foto + texto + badge "Special thanks"
- Posicionado después de la primera imagen del hackathon (Phase 01)
- Animación Framer Motion con whileInView
- Imagen movida a public/sponsors/JuanAntonioBosch.jpg

---

## [/science/validation] — 2026-05-31
### Añadido
- Página /science/validation completa con 4 secciones
- Hero oscuro con headline "Built on evidence. Honest about where we are."
- Base científica con 5 biomarcadores validados en literatura:
  - Movement Smoothness (SPARC)
  - Hand Kinematics Panel (ρ=0.92 con FMA-UE)
  - MediaPipe para kinemática clínica
  - Gaze Asymmetry para hemispatial neglect
  - Maximum Phonation Time para control laríngeo
- Estado actual en 4 cards: 2 completadas (verde), 2 en progreso (amarillo)
- Plan de validación en 4 pasos: Clinical partner → IRB → Pilot study → Publication
- CTA para partners clínicos al final
- Todos los colores como variables COLORS
- Animaciones Framer Motion con stagger
- Honesto sobre fase actual — sin claims exagerados

---

## [Pipeline — responsive móvil] — 2026-05-31
### Modificado
- Panel derecho (SessionReportCard) oculto en móvil, visible solo en desktop (lg+)
- Pasos ocupan ancho completo en móvil (w-full)
- Tipografía adaptada con clamp: título activo 16px-22px, descripción 13px-15px
- Padding reducido en móvil: px-4 lg:px-6
- Headline más pequeña en móvil: text-3xl md:text-4xl lg:text-5xl
- Dots de progreso más grandes en móvil: 8px altura, 20px activo (antes 6px y 24px)
- Gap entre columnas: 8px móvil, 16px desktop
- Desktop (lg+) sin cambios — grid 1.4fr 1fr mantenido

---

## [Traction — responsive móvil] — 2026-05-31
### Modificado
- Padding reducido en móvil (py-12 md:py-24, antes py-24)
- Logos más pequeños en móvil con clamp (24px-36px, antes fijo 36px)
- Logos con maxWidth 100px (antes 120px)
- Carrusel más rápido (20s, antes 30s) y gap reducido a 40px
- Badge adaptado a pantalla pequeña con clamp (11px-13px)
- Padding del track reducido a 8px 24px (antes 16px 48px)

---

## [Hero — video de fondo añadido] — 2026-05-31
### Añadido
- Video de fondo en el Hero principal de la landing
- Video en /public/videos/videoNuevo.mp4
- Autoplay, muted, loop y responsive
- Overlay oscuro (opacity 50%) para legibilidad del texto

---

## [Traction — logo Cátedra Bosch añadido] — 2026-05-31
### Añadido
- Logo Cátedra Bosch al carrusel de partners
- Archivo: /logos/catedraBosch.jpeg

---

## [/product/experience — tres juegos] — 2026-05-31
### Modificado
- Reemplazado contenido de pesca por los 3 juegos reales
- The Water Jug — pronación/supinación de muñeca
- The Pill Organizer — pinch y motor fino
- The Light Switches — asimetría bilateral
- Zigzag layout con texto alternando izquierda/derecha
- Biomarker capturado + por qué importa por cada juego
- Placeholders para imágenes de los juegos
- Hero: "Three games. One clinical session."
- CTA final a /contact
### Pendiente
- Añadir capturas reales de cada juego cuando estén disponibles

---

## [Pipeline Step 1 — imagen keypoints] — 2026-05-31
### Modificado
- SVG animado reemplazado por foto real de mano con keypoints
- Imagen en /public/hand-keypoints.png
- Texto parpadeante "● 21 landmarks detected"
- Componente independiente en /components/ui/HandKeypoints.tsx
- Backup en PipelineBackup.tsx para revertir fácilmente
### Para revertir
- `cp src/components/sections/PipelineBackup.tsx src/components/sections/Pipeline.tsx`
- Borrar `src/components/ui/HandKeypoints.tsx`

---

## [Loading screen] — 2026-05-31
### Añadido
- Pantalla de carga con animación "Fixed Gap se cierra"
- Fixed en navy (#1A1F3C), Gap en azul brand (#1F4C9C)
- Bordes decorativos en forma de L en las esquinas de cada palabra:
  - Fixed: bordes L en esquinas superior e inferior izquierda
  - Gap: bordes L en esquinas superior e inferior derecha
- Bordes aparecen con escala animada a 0.5s
- El espacio entre palabras se cierra animado
- Fade out suave a los 2 segundos
- Añadido en layout.tsx como primer elemento
- Secuencia temporal:
  - 0.2s: "Fixed" y "Gap" aparecen desde lados opuestos
  - 0.5s: bordes decorativos aparecen con efecto de escala
  - 0.8s: el espacio entre ellas se cierra
  - 1.5s: fade out comienza
  - 2.0s: la web aparece

---

## [Contact — FAQs actualizados] — 2026-05-30
### Modificado
- Reemplazadas las 3 FAQs anteriores por 5 nuevas más completas:
  1. ¿Hardware/sensores necesarios?
  2. ¿Qué métricas clínicas captura?
  3. ¿Para clínica o uso doméstico?
  4. ¿Quién paga por FixedGap?
  5. ¿Qué condiciones soporta?
- Respuestas más detalladas y enfocadas en dudas clave de buyers

---

## [Navbar — Demo clickeable] — 2026-05-30
### Modificado
- Item "Demo" en navbar ahora es un link directo a /demo
- Sigue mostrando el mega menú al hacer hover
- Permite navegación directa con un clic

---

## [Contact landing — rediseño editorial] — 2026-05-30
### Modificado
- Eliminadas las cards con iconos
- Headline grande en blanco: "Let's talk." (clamp 3rem-6rem)
- Email en grande con hover azul (#1F4C9C)
- Botón "Book a 30-min call" alineado a la derecha
- Divider horizontal entre headline y contenido
- Fondo oscuro (#0A0F1E) estilo minimalista
- Layout fila en desktop, columna en móvil
- Estilo tipo Linear/Vercel con tipografía espaciada

---

## [Pipeline — pasos inactivos más grandes] — 2026-05-29
### Modificado
- Título pasos inactivos: 18px font-semibold (600)
- Número pasos inactivos: 56x56px centrado (antes 32px inline)
- Opacidad pasos inactivos: 0.55 (antes 0.35)
- Padding aumentado a 20px 24px para pasos inactivos
- Gap entre pasos: 8px (antes 4px)
- Pasos inactivos más visibles y fáciles de leer

---

## [/science/evidence] — 2026-05-29
### Modificado
- Sección de conclusión con fondo gris claro (#F7F9FC)
### Añadido
- Página /science/evidence con 5 estadísticas clínicas reales sobre el gap de rehabilitación
- Hero oscuro con headline "The rehabilitation system is failing stroke patients"
- Cada estadística con: número grande, label descriptivo, impacto (cursiva), fuente en badge
- Layout grid 1:3 (número grande | texto completo)
- Sección conclusión con headline + 2 párrafos + CTA a /contact
- Animaciones Framer Motion con stagger en cada estadística
- Navbar actualizado con nuevo item "The Evidence" en desplegable Science (icono BarChart3)
- Todos los colores como variables COLORS
### Fuentes citadas
- NCBI — Limb heaviness as a sensorimotor disorder
- Top Stroke Rehabil, 2024 — Differences in rehabilitation evaluation access
- Frontiers in Medicine, 2025 — Home-based exercise rehabilitation
- Frontiers in Neurology, 2025 — Adherence to rehabilitation exercise
- The Lancet Neurology, 2021 — GBD 2019 Stroke Collaborators

---

## [Solution — rediseño final dos partes] — 2026-05-29
### Modificado
- Rediseño completo de Solution.tsx con dos secciones independientes:
  - Parte 1 (fondo blanco): "One camera. Clinical-grade hand tracking"
    - Grid 2 columnas: texto + métricas (izquierda) + imagen hand tracking (derecha)
    - 8 métricas en grid 2x4 con bullets azules
    - Descripción de MediaPipe y 21 landmarks
  - Parte 2 (fondo beige): "Value for every stakeholder"
    - Grid 3 cards: For clinicians, For patients, For health systems
    - Cada card con 4 puntos de valor con bullets azules
- Backup guardado en SolutionV4Backup.tsx
- Colores actualizados: bg blanco, bgAlt beige, metricBg gris claro
- Animaciones Framer Motion: fade + slide desde izquierda/derecha
### Resuelto
- Imagen hand-tracking.jpg conectada correctamente desde /public/hand-tracking.jpg
- Parte 2 (Value proposition) con fondo azul oscuro (#0A0F1E)
- Cards de stakeholders con fondo blanco (#FFFFFF) sobre fondo azul oscuro
- Texto oscuro en cards para contraste sobre fondo blanco
- Bullets azules (#1F4C9C) sobre fondo blanco

---

## [/pricing] — 2026-05-28
### Añadido
- Página /pricing completa
- Sección Buyer vs User con cards diferenciadas
- Dos planes: clínicas (49-99€/mes) e insurers (20-30€/paciente)
- ROI callout en plan de aseguradoras
- Nota GDPR en footer de pricing
- CTA final a /contact
- Todos los colores como variables
- Componentes badge.tsx y border-trail.tsx añadidos a /components/ui

---

## [/demo — CTA añadido] — 2026-05-28
### Añadido
- Sección CTA final "Join the pilot"
- Link a /contact

---

## [Navbar — modal de video] — 2026-05-28
### Modificado
- Click en "Watch Video" abre modal fullscreen
- Video se muestra en grande con controles nativos (incluyendo fullscreen)
- Botón X para cerrar el modal
- Click fuera del video cierra el modal
- Video autoplay al abrir modal
- Link a página /demo completa debajo del video

---

## [/demo — video añadido] — 2026-05-28
### Modificado
- Video demo.mp4 añadido en sección "See it in action"
- Placeholder reemplazado por video real con controles
- Video responsive con aspect-ratio 16/9

---

## [Hero — revertido a diseño original] — 2026-05-28
### Modificado
- Hero restaurado al diseño centrado original
- Eliminado layout de dos columnas
- Texto centrado sin imagen a la derecha

---

## [Container Scroll Animation — componente añadido] — 2026-05-28
### Añadido
- Componente ContainerScroll en src/components/ui/container-scroll-animation.tsx
- Demo component HeroScrollDemo en src/components/ui/hero-scroll-demo.tsx
- Animación 3D de scroll con rotación y escala
- Responsive: diferente comportamiento móvil/desktop
- Imagen placeholder de Unsplash en demo
### Pendiente
- Integrar componente en una página si se necesita
- Customizar colores según brand FixedGap

---

## [Solution — color transition on scroll] — 2026-05-28
### Modificado
- Fondo transiciona de #E8E8E8 a #0A0F1E al entrar en la sección
- Color se mantiene mientras está en viewport
- Vuelve al color original al salir de la sección
- Solo el fondo cambia — cards se mantienen blancas
- Headline y label adaptan color al oscurecerse el fondo
- Usando useInView de react-intersection-observer

---

## [Traction — reposicionada] — 2026-05-28
### Modificado
- Sección Traction movida justo después de Problem (antes de Solution)
- Orden actualizado: Hero → Problem → Traction → Solution → Pipeline → Metrics → TeamPreview → Contact

---

## [/demo — ajustes] — 2026-05-28
### Modificado
- Fondo blanco en ambas secciones de vídeo
- Frases catchy añadidas debajo de cada placeholder

---

## [/demo] — 2026-05-28
### Añadido
- Página /demo con hero oscuro (#0A0F1E)
- Sección "Our Story" con placeholder de vídeo
- Sección "See it in action" con placeholder de vídeo
- Link "See all videos →" del navbar apunta correctamente a /demo
### Pendiente
- Sustituir placeholders por vídeos reales

---

## [/science/references] — 2026-05-27
### Añadido
- Página /science/references completa
- 6 referencias placeholder separadas en validated (3) y grounded (3)
- Nota de transparencia sobre fase de validación
- Tags verde/azul por tipo de evidencia (Directly validated / Clinically grounded)
- Hero oscuro con label "Research References"
- Componente ReferenceCard con número, título, autores, journal, año, relevancia y tag
- Iconos ExternalLink para DOIs (cuando no sean '#')
- Todos los colores como variables COLORS
- Responsive: max-w-5xl en secciones principales
### Pendiente
- Sustituir placeholders por referencias reales
- Añadir DOIs reales cuando estén confirmadas

---

## [/contact — contenido añadido] — 2026-05-27
### Añadido
- Sección "Who should reach out" con 3 perfiles (Neurologists & Clinicians, Investors, Partners & Researchers)
- FAQ rápido con 3 preguntas frecuentes
- Sección de ubicación con badge Harvard HSIL Top 20
- Iconos: Stethoscope, TrendingUp, FlaskConical de lucide-react
### Modificado
- Orden de secciones: Hero → Who should reach out → FAQ → Ubicación → Opciones de contacto

---

## [Solution — scroll narrativo con líneas curvas] — 2026-05-26
### Modificado
- Cards aparecen una a una al hacer scroll
- Líneas curvas SVG animadas entre cards (pathLength 0→1)
- Puntos al final de cada línea
- Puntos de la lista aparecen con delay secuencial
- Offsets verticales para romper la alineación
- Backup en SolutionV3Backup.tsx
### Instalado
- react-intersection-observer (ya estaba instalado)

---

## [Navbar — mega menú reposicionado] — 2026-05-26
### Modificado
- Panel desplegable centrado respecto al item del navbar usando `left: 50%` y `transform: translateX(-50%)`
- Aplicado tanto a mega menú de Demo como a Product/Company/Science
- Menos desplazamiento de cursor necesario para acceder a los links
- Mejor alineación visual con los items del menú

---

## [Traction — fondo blanco + carrusel centrado] — 2026-05-25
### Modificado
- Fondo cambiado a blanco (#FFFFFF, antes #0A0F1E)
- Fades de bordes actualizados a blanco (#FFFFFF)
- Padding simétrico en el track del carrusel: 16px 48px
- Gap entre logos aumentado: 64px (antes 48px)
- Badge actualizado para fondo claro: bg #EAF0FA, border #E8E0D0, texto #1A1F3C
- Label y headline actualizados: #1F4C9C y #1A1F3C

---

## [Pipeline — ajustes visuales] — 2026-05-25
### Modificado
- Header margin reducido de mb-10 a mb-6
- SessionReportCard más grande: minHeight 680px (antes 600px), padding 40px (antes 36px)
- CRI ring más grande: 96px (antes 80px), stroke 8px (antes 7px)
- Número del CRI: 44px (antes 36px), /100 ahora 18px
- Label "Clinical Recovery Index": 13px (antes 12px)
- Barras de progreso más gruesas: 6px (antes 4px), borderRadius 3px
- Móvil reposicionado: top 30% (antes 50%), transform -30% (antes -50%)

---

## [Solution — cards claras + animación secuencial] — 2026-05-25
### Modificado
- Cards blancas (#FFFFFF) con texto oscuro (#1A1F3C)
- Borders más suaves (#E8E0D0)
- Animación secuencial automática: 0s, 0.2s, 0.4s (delay index * 0.2)
- Cards aparecen con y: 32 (antes 24), más movimiento
- Líneas conectoras aparecen tras las cards: delay 0.4s y 0.6s
- Viewport margin -50px para activar antes
- Backgrounds de número e icono: #EAF0FA (antes #1A2035)

---

## [Traction — carrusel infinito] — 2026-05-25
### Modificado
- Grid estático reemplazado por carrusel infinito animado
- Logos con color (sin grayscale, opacity 0.85 → 1.0 en hover)
- 7 logos: AWS, Saturno, Ayuntamiento Madrid, RCC Harvard, UCM, Comunidad Madrid, Bosch
- Fades en los bordes para efecto de continuidad (120px gradient)
- Logos se duplican 3 veces para loop sin cortes
- Animación 30s linear infinite
### Implementado
- Keyframe scroll-logos con translateX(-100% / 3)
- Overflow hidden en la sección
- Fades left/right con z-index 10
- Logos altura 36px, maxWidth 120px
### Pendiente
- Añadir /logos/ayuntamiento-madrid.jpg si no existe

---

## [Solution — rediseño tres columnas] — 2026-05-25
### Añadido
- Nuevo diseño Solution con 3 columnas y flujo visual
- Líneas conectoras animadas entre columnas (pathLength animation)
- Cards oscuras con número, icono, título y puntos
- Copia de seguridad guardada en SolutionBackup.tsx
- Headline: "Zero hardware. Just a webcam."
- Subtítulos: "The experience", "The technology", "The outcome"
- 4 puntos clave por cada paso
### Implementado
- Animación stagger de las cards (delay incremental)
- Líneas SVG con strokeDasharray para efecto de dibujo
- Iconos lucide-react: Monitor, Activity, FileText
- Fondo oscuro #0A0F1E, cards #141B2D
### Pendiente
- Si no convence, restaurar con: cp SolutionBackup.tsx Solution.tsx

---

## [Traction — rediseño] — 2026-05-25
### Modificado
- Eliminados Bupa y Oakley Capital (quedan 4 partners)
- Fondo cambiado a azul oscuro #0A0F1E (antes beige)
- Logos en blanco con filtro CSS: brightness(0) invert(1) opacity(0.7)
- Grid 4 columnas en fila horizontal (antes 3 columnas)
- Badge Harvard con borde #2E3757 en vez de fondo sólido
- Cards oscuras #141B2D con border #1E2A40
- Texto headline en blanco, label en gris #6B7689

---

## [Pipeline — fases más grandes] — 2026-05-25
### Modificado
- Título paso activo: 22px font-bold (antes 18px)
- Descripción paso activo: 15px con line-height 1.7 (antes 1.6)
- Número del paso activo: 56x56px con fondo azul (antes texto simple)
- Columna izquierda ocupa 60% del grid (1.4fr vs 1fr)
- Borde activo más grueso: 4px (antes 3px)
- Gap entre pasos: 4px (antes 2px)
- Padding paso activo: 24px 28px
- Títulos inactivos: 17px (más grandes también)

---

## [Pipeline — más grande + móvil step 5] — 2026-05-25
### Modificado
- Todo el contenido del pipeline más grande
- SessionReportCard: minHeight 600px, padding 36px
- Tipografía aumentada: títulos 18px, descripciones 15px, métricas 14px/15px
- CRI ring más grande: 80px (antes 64px), número CRI 36px
- Step 5: móvil simulado iOS con notificación push
- Timing reducido: 300ms y 800ms (antes 800ms y 1600ms)
- Notch, hora 9:41, pantalla de bloqueo y home indicator
### Implementado
- Móvil simulado 260x520px con border #3A3A3C
- Pantalla de bloqueo con hora grande y notificación deslizada
- Icono FG en notificación, texto "CRI 78/100 · Tap to review"
- Animación spring de entrada del móvil completo

---

## [Problem — números animados] — 2026-05-25
### Modificado
- Números 13M y 795K cuentan hacia arriba al entrar en viewport
- El 0 aparece con efecto pop justo al finalizar el conteo
- Animación se dispara una sola vez (triggerOnce: true)
### Implementado
- Hook useCountUp personalizado para animación de conteo
- react-intersection-observer para detectar cuando la sección entra en viewport
- Efecto spring con framer-motion para el número 0
- Timing: números cuentan 2 segundos, luego el 0 aparece con delay de 1.5s

---

## [Pipeline — animación Step 5] — 2026-05-24
### Modificado
- Step 5: report vuela hacia arriba con animación Framer Motion
- Notificación de móvil aparece desde abajo al completar el vuelo
- Notificación estilo iOS con icono FG, título y CTA
- Partículas al dispararse el report (4 puntos que se dispersan)
- Secuencia temporal: 800ms espera → report vuela → 1600ms → notificación aparece
### Implementado
- Estados reportSent y showNotification para controlar la animación
- useEffect que dispara la secuencia cuando activeStep === 4
- Card del report con animate condicional (y: -120, scale: 0.85, opacity: 0)
- Notificación con spring animation desde abajo
- Diseño de notificación tipo iOS con icono FG, timestamp y CTA

---

## [Pipeline — scroll controlado paso a paso] — 2026-05-24
### Modificado
- Scroll hijacking: cada scroll avanza exactamente un paso
- Sección sticky a 100vh con position sticky
- Pasos colapsan/expanden con animación
- Indicador de progreso con dots en la parte inferior
- Flecha animada indicando scroll disponible
- Wrapper de 600vh en page.tsx para el sticky
- Efecto typing mantenido en valores del informe
### Implementado
- Sistema de scroll controlado con wheel event listener
- Debounce de 600ms para evitar scroll accidental
- Layout fullscreen con flex para centrar contenido
- Dots indicadores clickeables
- Pasos compactos que se expanden al activarse

---

## [/contact] — 2026-05-24
### Añadido
- Página /contact con hero oscuro
- Dos opciones: email directo + Book a call via Cal.com
- Cards limpias con icono, título y descripción
- Todos los colores como variables
### Pendiente
- Actualizar email real cuando esté definido
- Configurar Cal.com y actualizar el link

---

## [/market] — 2026-05-24
### Añadido
- Página /market completa
- Hero oscuro con headline
- Globo 3D interactivo con marcadores en Madrid, NY, Berlin, Paris
- TAM/SAM/SOM en tres cards con colores diferenciados
- Why now con 6 razones numeradas
- Business model con dos tiers de precio
- CTA final
- Todos los colores como variables
- Market añadido al navbar como link directo
- Market añadido al footer en la columna "More"
### Instalado
- @react-three/drei, @react-three/fiber, three, @types/three
### Componentes
- src/components/ui/3d-globe.tsx con globo 3D completo y marcadores interactivos

---

## [Inicialización] — 2026-05-23
### Añadido
- Proyecto Next.js 14 con App Router y TypeScript
- Tailwind CSS configurado con paleta de colores personalizada
- Estructura de carpetas completa (app, components/layout, components/sections, components/ui)
- Ficheros vacíos para todas las secciones y páginas
- README.md con documentación del proyecto
- PROGRESS.md con checklist de tareas
- CHANGELOG.md (este fichero)

## [Navbar con mega menú completo] — 2026-05-23
### Añadido
- Navbar fixed con mega menú desplegable estilo handle.com
- 4 grupos con mega menú: Product, Demo, Company, Science
- Cada item del mega menú incluye: título + descripción
- 2 links directos: Pricing, Contact
- Botón Book a Demo siempre visible (lado derecho)
- Menú hamburguesa responsive para móvil con acordeones
- Páginas /demo y /science creadas vacías
- Animación fadeIn para mega menús (opacity + translateY)
- Hover states: texto azul + fondo beige
### Pendiente
- Conectar links a anclas reales cuando las secciones estén construidas
- Añadir scroll behavior para cambio de sombra dinámica

## [Navbar — mejoras] — 2026-05-23
### Modificado
- Altura navbar aumentada a 80px (h-20)
- Logo escalado a text-2xl
- Items de menú escalados a text-base
- Botón Book a Demo escalado a px-6 py-3
- Desplegable Demo rediseñado con formato de thumbnails de vídeo
- Layout Demo: columna izquierda (texto) + columna derecha (2 thumbnails en grid)
- Dos placeholders de vídeo: "Our Story" y "See it in action"
- Thumbnails con overlay oscuro y botón "Watch Video"
- Padding-top del layout actualizado a pt-20
### Pendiente
- Sustituir placeholders por thumbnails reales cuando los vídeos estén listos
- Conectar botones Watch Video a los vídeos reales (modal o página dedicada)

## [Navbar — mega menú completo con iconos] — 2026-05-23
### Añadido
- Instalado lucide-react para iconos SVG
- Descripciones de grupo para cada mega menú (Product, Company, Science)
### Modificado
- Desplegables Product, Company y Science rediseñados con layout de 2 columnas
- Columna izquierda: título del grupo + descripción (w-48, border-r)
- Columna derecha: items con icono + título + descripción
- Iconos Lucide en cajas cuadradas con hover effect (border-brand-blue)
- Min-width de paneles aumentado a 600px
- Iconos implementados:
  - Product: Cpu, Activity, LayoutDashboard
  - Company: Users, BookOpen, GraduationCap
  - Science: FlaskConical, FileText
### Pendiente
- Ajustar iconos si no convencen visualmente (fácil de cambiar)

## [Problem section] — 2026-05-23
### Añadido
- Sección Problem con fondo blanco
- Label "THE PROBLEM" en azul uppercase
- Headline: "Every day, stroke patients recover without anyone watching."
- Subtext descriptivo del gap entre visitas clínicas
- Tres estadísticas con borde azul a la izquierda:
  - 13M strokes worldwide
  - 795K US/year
  - 0 daily monitoring tools at home
- Placeholder visual (rounded-2xl, bg-beige) reservado para gráfico futuro
- Responsive: grid de estadísticas 1 col móvil → 3 cols desktop
### Pendiente
- Añadir elemento visual real en el placeholder (gráfico, ilustración o animación)

## [Solution section] — 2026-05-23
### Añadido
- Sección Solution con fondo beige (#F5F0E8)
- Label "THE SOLUTION" en azul uppercase
- Headline: "Zero hardware. Just a webcam."
- Subtext descriptivo de la tecnología computer vision
- Tres cards: Hand (MVP activa), Face (Q3 2026), Gaze (Q4 2026)
- Card Hand activa: fondo blanco, borde azul grueso, badge "MVP"
- Cards Face y Gaze inactivas: fondo gris, opacity 0.7, badges con fechas
- Iconos Lucide: Hand, Smile, Eye
- Cada card incluye: icono, badge, título, descripción, 3 métricas con bullets
- Nota de disclaimer sobre roadmap
- Todos los colores definidos como variables COLORS al inicio del componente
- Responsive: grid 1 col móvil → 3 cols desktop
### Pendiente
- Ajustar fechas del roadmap cuando se confirmen (Q3/Q4 2026)

## [Solution — fix iconos] — 2026-05-23
### Modificado
- Sustituidos emojis (🖐 😐 👁) por iconos Lucide: Hand, Smile, Eye
- Iconos envueltos en cajas cuadradas (w-10 h-10, rounded-lg)
- Card activa: icono azul sobre fondo blanco
- Cards inactivas: iconos grisados (textInactive) sobre fondo gris con borde
- Estilo clínico consistente sin emojis

## [Solution — rediseño completo] — 2026-05-23
### Modificado
- Rediseño completo de la sección Solution
- Eliminadas las tres cards con iconos (Hand, Face, Gaze)
- Nuevo formato minimalista inspirado en handle.com
- Fondo oscuro navy (#1A1F3C) — contraste con Problem blanco
- Headline grande (text-6xl) con segunda línea en azul
- Párrafo descriptivo + línea destacada + CTA con flecha
- Todos los colores como variables COLORS al inicio del componente
- Max-width 4xl centrado
### Pendiente
- Ajustar colores si se decide cambiar la paleta

## [Pipeline section] — 2026-05-23
### Añadido
- Sección Pipeline con 5 pasos del CV pipeline
- Formato inspirado en runpulse.com
- Label "HOW IT WORKS" + headline + subtext
- Cinco pasos con número, icono Lucide, título y descripción:
  - 01: Camera captures (Camera)
  - 02: Computer vision processes (Cpu)
  - 03: ML models compute (Activity)
  - 04: Clinical Recovery Index (LayoutDashboard)
  - 05: Report delivered (Send)
- Separadores horizontales entre pasos (border-bottom)
- Números en cajas con fondo azul claro
- Iconos en cajas con fondo azul claro
- Todos los colores como variables COLORS
- Max-width 5xl, fondo blanco
### Pendiente
- Ajustar iconos si no convencen
- Añadir animación de entrada por scroll (opcional)

## [Estructura completa] — 2026-05-23
### Añadido
- page.tsx con todos los componentes importados en orden
- 10 componentes de sección vacíos (Hero, Problem, Solution, Pipeline, Demo, Traction, Metrics, Manifesto, Team, Contact)
- Footer vacío
- 5 páginas internas vacías (product, market, company, pricing, contact)
- Button y Card componentes UI base con variants y props
### Pendiente
- Construir cada sección con contenido y diseño real

## [Hero] — 2026-05-23
### Añadido
- Sección Hero con vídeo de fondo a pantalla completa
- Placeholder de vídeo (fondo navy) — sustituir por /public/videos/hero-bg.mp4 cuando esté listo
- Headline en dos colores: blanco + azul brand
- Badge "No Hardware Required"
- Subline descriptivo
- Dos CTAs: Book a Demo y Learn More
- Variante secondary-white añadida a Button.tsx
- Responsive: tamaño de texto adaptado (text-4xl móvil → text-7xl desktop)
### Pendiente
- Sustituir placeholder por vídeo real generado con IA
- Ajustar overlay opacity si el vídeo real lo requiere

## [Pipeline — animación completa] — 2026-05-23
### Añadido
- Sección Pipeline con layout dos columnas
- Pasos con IntersectionObserver — activo al hacer scroll
- Panel derecho sticky con informe clínico animado
- Framer Motion para animaciones de entrada progresivas
- CRI ring SVG animado
- Barras de progreso animadas para las 3 métricas MVP
- Badge "Sent to neurologist" en step 5
- Todos los colores como variables
### Instalado
- framer-motion

## [Traction section] — 2026-05-23
### Añadido
- Sección Traction con fondo beige
- Badge "Harvard HSIL Top 20 — Global Phase 2026"
- Grid 3 columnas con logos y contexto por partner
- Carpeta public/logos/ creada para añadir logos sin tocar código
- Logos en grayscale con hover a color
- Fallback a texto si no se encuentra el logo
- 6 partners: Harvard RCC, Bupa, Oakley Capital, AWS, SaturnoLabs, Bosch
- Logos reales añadidos y configurados correctamente

## [Metrics section] — 2026-05-24
### Añadido
- Sección Metrics con fondo azul muy oscuro #0A0F1E
- 5 métricas en grid horizontal con números grandes
- Divisores verticales entre métricas
- Todos los colores como variables
- Responsive grid: 2 cols móvil → 3 cols tablet → 5 cols desktop

## [Fix espacio vacío + mini Team CTA] — 2026-05-24
### Modificado
- Demo comentado en page.tsx — se activa cuando haya vídeo
- Añadido mini Team CTA entre Metrics y Contact

## [Contact section] — 2026-05-24
### Añadido
- Sección Contact con fondo navy oscuro
- Dos opciones: email directo + Book a call via Cal.com
- Cards con icono, título, descripción y CTA
- Todos los colores como variables
### Modificado
- Manifesto y Team comentados temporalmente — se activan cuando se construyan
- Contact va directamente después del mini Team CTA
### Pendiente
- Actualizar email real cuando esté definido
- Actualizar link de Cal.com cuando esté configurado

## [TeamPreview section] — 2026-05-24
### Añadido
- Sección TeamPreview con headline, descripción y 4 stats
- Stats: 6 co-founders, 3 universidades, 2 países, 50 países compitiendo
- Link a /company#team
- Todos los colores como variables
### Modificado
- Reemplazado mini CTA anterior por componente completo

## [Footer] — 2026-05-24
### Añadido
- Footer con fondo azul muy oscuro #0A0F1E
- Logo + tagline + email (hello@fixedgap.com)
- 3 columnas de links: Product, Company, More
- Columna Product: How it works, Biomarkers, Dashboard
- Columna Company: Team, Manifesto, Harvard HSIL
- Columna More: Science, Pricing, Contact, Book a Demo
- Divider horizontal + copyright + Privacy Policy + Terms
- Todos los colores como variables COLORS
- Hover states en links: transición de gris a blanco
- Grid responsive: 2 cols móvil → 5 cols desktop
### Pendiente
- Actualizar email real cuando esté definido
- Actualizar link Cal.com cuando esté configurado
- Crear páginas /privacy y /terms

## [Navbar — mega menú fix] — 2026-05-24
### Modificado
- Panel desplegable más ancho: min-width 640px (antes 480px)
- Padding ajustado a 24px 32px para formato horizontal
- Añadido puente invisible (12px altura) para evitar gap entre item y panel
- El panel ya no desaparece al mover el ratón hacia él
- Items más compactos verticalmente pero más anchos:
  - Título de item: text-base font-semibold
  - Descripción de item: text-sm
  - Padding de item: p-3 (menos que antes para reducir altura)
  - Icono: w-10 h-10 con iconos w-5 h-5
  - Layout horizontal: flex items-center (en vez de items-start)
- Columna izquierda más ancha (220px) con texto más grande:
  - Título: text-[15px] font-bold
  - Descripción: text-[13px]
- Gap entre columnas aumentado a gap-10 para mejor separación
- Panel Demo sin cambios (ya tenía buen tamaño con thumbnails)

## [/company — Team] — 2026-05-24
### Añadido
- Página /company con hero oscuro (#0A0F1E) y grid de 6 miembros del equipo
- Hero con label "THE TEAM", headline en dos líneas, y descripción sobre Harvard HSIL
- Grid responsive: 1 col móvil → 2 cols tablet → 3 cols desktop
- Cards por miembro: foto (240px altura) + nombre + rol + descripción + LinkedIn
- Solo se muestra LinkedIn si no es '#'
- 6 miembros: Álvaro, Mateo, Luis, Marco, Helene, José Antonio
- Carpeta public/team/ creada para las fotos
- Navbar y Footer incluidos
- Todos los colores como variables COLORS
- Cards con fondo gris claro (#F7F9FC) y borde beige
### Modificado
- Posicionamiento personalizado para cada foto (photoPosition)
- Foto de José corregida: jose.jpg → jal.jpg (nombre real del archivo)
### Pendiente
- Actualizar links de LinkedIn que están en '#' (Mateo, Luis, José Antonio)
- Añadir sección Harvard HSIL a la página

## [/company/manifesto] — 2026-05-24
### Añadido
- Página separada /company/manifesto con el texto completo del manifiesto
- Hero oscuro (#0A0F1E) con label "FixedGap Manifesto" y headline "Making the invisible measurable"
- Texto completo del manifiesto con formato editorial
- 3 imágenes intercaladas en el texto:
  - /manifesto/graficoexotico.jpg (visualización de datos de recuperación)
  - /manifesto/guanteexotic2.jpg (prototipo del guante de rehabilitación)
  - /manifesto/guantevaroexotic.jpg (equipo trabajando en el prototipo)
- Carpeta public/manifesto/ creada para las fotos del manifiesto
- Cita de Galileo con borde azul a la izquierda
- Párrafos destacados con font-weight 600/700 y color headline
- Todos los colores como variables MANIFESTO_COLORS
- Max-width 3xl para lectura óptima
- Navbar y Footer incluidos
### Modificado (2026-05-24)
- Imágenes del manifesto renombradas con nombres profesionales:
  - graficoexotico.jpg → recovery-data-visualization.jpg
  - guanteexotic2.jpg → rehabilitation-glove.jpg
  - guantevaroexotic.jpg → team-development.jpg
- Layout del manifesto rediseñado con texto e imágenes intercaladas:
  - 8 secciones con alternancia de fondos (blanco/gris claro)
  - Grid 2 columnas en desktop para texto + imagen lado a lado
  - Imágenes alternadas: derecha, izquierda, derecha
  - Cita de Galileo ampliada y centrada en sección propia
  - Mejor ritmo visual, menos pesado para lectura larga

## [/company — reestructuración] — 2026-05-24
### Modificado
- Separado /company en tres páginas independientes:
  - /company/about — historia Harvard HSIL, V1 (guante) y V2 (computer vision)
  - /company/team — equipo de 6 personas con fotos y roles
  - /company/manifesto — texto completo del manifiesto
- /company/page.tsx ahora redirige a /company/about
- Navbar actualizado con links correctos:
  - Our Story → /company/about
  - Team → /company/team
  - Manifesto → /company/manifesto
### Añadido
- Carpeta public/about/ para imágenes de la historia
- /company/about con 4 secciones:
  - Hero: "From a Hackathon Prototype to a New Vision"
  - Phase 01 — FixedGap V1: The Glove
  - The Turning Point
  - Phase 02 — FixedGap V2: Computer Vision
  - From Motion to Meaning
- 5 imágenes necesarias: about-1.jpeg, about-2.jpeg, about-3.jpeg, about-4.jpeg, about-team.jpg
### Modificado (2026-05-24)
- Layout de /company/about rediseñado con estructura dinámica:
  - Phase 01: Imagen grande (500px) con badge superpuesto + texto en 2 columnas
  - Turning Point: Grid asimétrico 3:2 (texto ocupa 3 cols, imagen 2 cols, altura 600px)
  - Phase 02: Grid 2 columnas con imagen sticky a la izquierda
  - Conclusión: Imagen ancha (500px) + texto centrado
  - Alternancia de fondos blanco/gris claro
  - Layouts variados (superpuesto, asimétrico, sticky, centrado)
- Imágenes subidas correctamente en public/about/

## [/product/experience] — 2026-05-24
### Añadido
- Página /product/experience completa
- Hero con headline "Rehabilitation that feels like a game"
- Sección "A session in 5 steps" con 5 fases numeradas:
  - 01: Open the game
  - 02: Cast the line
  - 03: A fish bites
  - 04: Complete the challenge
  - 05: Session complete
- Steps con badges numerados y separadores horizontales
- Placeholder para vídeo del juego (aspect-ratio 16/9)
- Sección "Clinical challenges" con 4 retos en cards:
  - Pinch Precision
  - Hand Opening
  - Finger Individuation
  - Sustained Phonation
- CTA final con Book a Demo
- Navbar actualizado: "How it works" → "Patient Experience"
- Todos los colores como variables COLORS
### Pendiente
- Sustituir placeholder por vídeo real del juego

## [/product/dashboard] — 2026-05-24
### Añadido
- Página /product/dashboard completa con animaciones
- Hero con texto rotando animado (5 frases: continuous recovery, daily biomarkers, objective progress, early deterioration, real-time data)
- Animación Framer Motion con spring transition
- Sección "What the neurologist sees" con grid 2 columnas (texto + placeholder imagen)
- Sección "What's in the report" con 4 cards:
  - Clinical Recovery Index
  - Movement Quality
  - Adherence Tracking
  - Session Breakdown
- CTA final oscuro con botón Book a Demo
- Componentes shadcn instalados:
  - Button component con variants
  - utils.ts con cn() helper
- Dependencias instaladas: @radix-ui/react-slot, class-variance-authority, clsx, tailwind-merge
- Todos los colores como variables COLORS
### Pendiente
- Sustituir placeholder por captura real del dashboard
- Actualizar link Book a Demo cuando Cal.com esté configurado

## [Fix links Navbar y Footer] — 2026-05-24
### Modificado
- Actualizados todos los links del Navbar que usaban anclas (#) por rutas de páginas:
  - Product: /product/how-it-works, /product/biomarkers, /product/dashboard
  - Science: /science/validation, /science/references
  - Company: /company/about, /company/team, /company/manifesto
- Actualizados los mismos links en el Footer
- Eliminado link "Harvard HSIL" del Footer, reemplazado por "Our Story"

## [/product/biomarkers] — 2026-05-24
### Añadido
- Página /product/biomarkers con 12 métricas en 4 categorías
- Hero oscuro con headline "Hand Rehabilitation Biomarkers"
- Layout 2 columnas: selector categorías (izquierda) + flashcards (derecha)
- 4 categorías con selector:
  - Kinematics (3 métricas)
  - Fine Motor Control (3 métricas)
  - Tone & Tremor (2 métricas)
  - Endurance & Fatigue (4 métricas)
- Cada card muestra: nombre, subtítulo, descripción + clinical insight
- Animación Framer Motion:
  - Fade in + slide from bottom al cambiar categoría
  - Stagger de 0.08s entre cards
  - Exit animation al cambiar
- Botones de categoría con estado activo (fondo azul claro + borde azul)
- Todos los colores como variables COLORS
### Pendiente
- Añadir tabla de rangos clínicos (semáforo verde/amarillo/rojo)
- Actualizar métricas cuando se definan definitivamente
- Añadir iconos por categoría (opcional)
