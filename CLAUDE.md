# Carioca — sitio web (cliente de Arcova)

Cliente nuevo de Arcova: un **call center pequeño**. Proyecto de **US$650** por un sitio web **sencillo**.
Responde en español. Lee la skill `arcova-infra` (mapa general de Arcova y reglas de deploy).

## Detalles del cliente
**Fuente de verdad: los archivos que Juan va dejando en esta carpeta** (documentos, notas, PDFs, imágenes, logo, capturas, chats exportados). Al empezar cada sesión:
1. Lista la carpeta (`ls -R`, ignorando `site/`, `node_modules/` y `.git/`) y lee **todos** los archivos del cliente. Para PDF o Word usa la skill correspondiente, y mira las imágenes.
2. Resume aquí abajo lo que encontraste (sin copiar datos sensibles como contraseñas o cuentas bancarias) y di qué falta.
3. Si aparecen archivos nuevos o cambian, vuelve a leerlos antes de seguir: lo más reciente manda.

Resumen (lo actualiza la sesión, 2026-10-09):
- Nombre / marca: **Carioca S.R.L.** (Carioca Call Center). Contacto del cliente: Isailis Pujols (ipujols@carioca.com.do).
- Servicios: outsourcing de call center / contact center (un solo servicio). Beneficios que dieron: reducción de costos fijos (gasto fijo → variable), escalabilidad ante picos, tecnología de reporte y monitoreo en tiempo real, centro a la medida con recursos exclusivos y confidencialidad. Diferencial: centro pequeño = dedicación completa y privacidad; **30 años de experiencia** en contact centers. Proceso de 12 etapas (Planificación → Estandarización) tras reuniones previas de contrato y metas. Acción principal: contactar.
- Idiomas / mercado: sitio en **español e inglés**; sin límite geográfico.
- Contacto: WhatsApp +1 809-535-3864 (dado como "WhatsApp de contacto"; el campo "WhatsApp para la página" vino vacío). Formulario → cariocacallcenter@carioca.com.do. Sin dirección (no hay mapa).
- Logo / colores / fotos: colores #ffffff, #ec2025, #262526. Logo = rectángulo rojo con "C" blanca + wordmark "Carioca" (SVG en `brand/svg/`, limpios en `site/img/logo*.svg`). Degradado rojo→negro de marca. Foto de agentes del mockup (probablemente de stock, baja resolución 948px). Tienen presentación y video de las instalaciones (no enviados).
- Dominio: no tienen para el proyecto (su email usa carioca.com.do). Lanzamiento deseado: **20 oct 2026**. Sin GA4/Meta Pixel.
- Archivos leídos: `carioca_details.txt` (colores + cuestionario), `Carioca/SVG/CariocaBrand-01…08.svg` (08 trae la foto embebida, 07 el degradado). `CariocaBrand.ai` no se abrió (mismo contenido que los SVG).

Estado: **demo 1 construido** en `site/` (landing ES/EN con toggle, gracias.html, Netlify Forms, SEO base con noindex mientras sea demo). Repo: `github.com/JAOCruz/carioca_web` (`main`). Netlify: por conectar.

Si falta algo, **no lo inventes** (ni clientes, ni cifras, ni testimonios, ni certificaciones). Deja un marcador visible `[[PENDIENTE: …]]` y anótalo en la lista "Preguntas para el cliente" al final de este archivo.

## Alcance (US$650 = sencillo)
- **Una sola página (landing)** con anclas, más una página de Gracias del formulario. Secciones sugeridas: Hero (qué hacen + CTA), Servicios, Por qué nosotros / cómo trabajamos, Industrias o casos (solo si hay datos reales), Contacto (formulario + WhatsApp + mapa si tienen oficina), Footer.
- Bilingüe ES/EN solo si el cliente lo pide (los call centers en RD suelen atender en inglés; es probable que lo quieran).
- **Fuera del alcance** salvo que se cobre aparte: blog, CMS, portal de clientes, chatbot, integraciones con CRM, varias páginas por servicio, fotos o videos profesionales.
- Presupuesto de esfuerzo: unos pocos días de trabajo, no una semana. Si algo se sale del alcance, avisa a Juan antes de hacerlo.

## Calidad (estilo Arcova, versión ligera)
- Referencia de acabado: `~/Documents/W/arcova-web` (tipografía, espaciado, detalles), pero **sin 3D pesado**. Que se vea profesional, moderno y confiable: buena tipografía, jerarquía clara, animaciones sutiles al hacer scroll (fade/slide; respeta `prefers-reduced-motion`) y, como mucho, un solo detalle "wow" ligero en el hero (degradado animado, ondas de audio o líneas de llamada en SVG/canvas, contador). La skill `premium-3d-web` sirve como referencia de recetas; úsala con moderación.
- **Móvil primero**: la mayoría lo va a abrir en el teléfono. Sin scroll horizontal, botones grandes, botón flotante de WhatsApp.
- Rápido: HTML/CSS/JS estático, **sin build ni framework** (como arcova-web o melee-dominicana/site), imágenes WebP/AVIF optimizadas y fuentes de Google con `display=swap`. Objetivo: Lighthouse de 90 o más en móvil.
- SEO local y analytics con la skill `local-seo-analytics`: title y meta description, Open Graph con imagen, JSON-LD `LocalBusiness`, `sitemap.xml`, `robots.txt`, favicon, y GA4 con eventos de clic en WhatsApp y envío del formulario (cuando haya ID).
- Formulario: Netlify Forms, con honeypot antispam y página de gracias.
- Accesibilidad básica: contraste, `alt` en las imágenes, labels en los campos y navegación con teclado.
- Footer: "Sitio por Arcova" con link a https://arcovaco.com.

## Estructura
```
site/            ← todo lo que se publica (publish dir)
  index.html
  gracias.html
  css/ js/ img/
  sitemap.xml robots.txt
brand/           ← logo y material original del cliente (no se publica)
```

## Deploy
- Repo sugerido: `JAOCruz/carioca` (Juan lo crea). Netlify: proyecto nuevo con publish dir `site` y sin build command.
- Previews con `netlify deploy --dir site` (borrador). **Producción, push a `main` y conectar el dominio los decide Juan**; dale el comando exacto.
- Cuando quede creado, anota aquí y en la skill `arcova-infra` (tabla de proyectos): repo, Netlify site id y URL.

## Proceso
1. Con los detalles del cliente, propón en un mensaje corto la estructura de secciones, el tono y la paleta.
2. Construye y muestra capturas (desktop 1440 y móvil 390).
3. Haz una ronda de ajustes y luego un deploy preview para que Juan se lo enseñe al cliente.
4. Tras la aprobación, producción, dominio y verificación (SEO, formulario, analytics).

## Preguntas para el cliente
- Lista concreta de servicios (atención entrante, llamadas salientes/ventas, cobros, soporte técnico, chat/email/redes…) y cuál destacar.
- ¿El WhatsApp +1 809-535-3864 es el que debe ir en la página?
- Casos de éxito reales (cliente o sector, resultado, permiso para mencionarlos) y logos de clientes si se pueden mostrar.
- En "Escalabilidad" mencionaron "picos de demanda del mercado cervecero y de bebidas": ¿es su nicho principal o lo dejamos genérico? (en el demo quedó genérico).
- ¿Atienden en inglés (campañas bilingües)? Si sí, lo destacamos como servicio.
- Horarios de atención (¿24/7, extendido?), ubicación/ciudad de la oficina (para SEO local y mapa).
- Fotos reales del equipo/instalaciones y el video del centro. ¿La foto del mockup tiene licencia (stock)?
- Dominio a comprar o subdominio de carioca.com.do; GA4 cuando exista.
