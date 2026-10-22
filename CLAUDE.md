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
- Contacto: +1 809-535-3864 es la **línea de atención al cliente (llamadas, NO WhatsApp)**, según nota del cliente del 2026-10-19; el WhatsApp lo darán después. Formulario → cariocacallcenter@carioca.com.do. Dirección pendiente: la sección Ubicación usa provisionalmente "Santo Domingo, República Dominicana" (cambiar `query`/`q` del botón y del iframe en `#ubicacion`).
- Notas del cliente (2026-10-19): logo del menú siempre en rojo (también en la página de gracias); el botón flotante es de llamada (rojo) hasta que haya WhatsApp.
- Logo / colores / fotos: colores #ffffff, #ec2025, #262526. Logo = rectángulo rojo con "C" blanca + wordmark "Carioca" (SVG en `brand/svg/`, limpios en `site/img/logo*.svg`). Degradado rojo→negro de marca. Foto de agentes del mockup (probablemente de stock, baja resolución 948px). Tienen presentación y video de las instalaciones (no enviados).
- Dominio: no tienen para el proyecto (su email usa carioca.com.do). Lanzamiento deseado: **20 oct 2026**. Sin GA4/Meta Pixel.
- Archivos leídos: `carioca_details.txt` (colores + cuestionario), `Carioca/SVG/CariocaBrand-01…08.svg` (08 trae la foto embebida, 07 el degradado). `CariocaBrand.ai` no se abrió (mismo contenido que los SVG).

Estado: **demo 1 construido** en `site/` (landing ES/EN con toggle, gracias.html, Netlify Forms, SEO base con noindex mientras sea demo). Repo: `github.com/JAOCruz/carioca_web` (`main`). Netlify: por conectar.
Juan pidió (2026-10-19) no mostrar recuadros `[[PENDIENTE]]` en la página para presentarla al cliente: los pendientes van como comentario HTML y en la lista de preguntas.

Si falta algo, **no lo inventes** (ni clientes, ni cifras, ni testimonios, ni certificaciones). Deja un marcador visible `[[PENDIENTE: …]]` y anótalo en la lista "Preguntas para el cliente" al final de este archivo.

## Feedback del cliente — correo de Isailis a Laura (2026-10-21, pantallazos en el Escritorio de Juan)
Diseño y estructura aprobados en general. Cambios pedidos:
- Hero: otra foto más alusiva a call center; fondo blanco o degradado menos oscuro (blanco y rojo, colores del logo); logo de Carioca más grande; agregar "Inicio" en el menú (antes de Servicios) y "Sobre nosotros" antes de Contacto con breve resumen (texto lo envían ellos).
- Iconos de redes sociales (Instagram, Facebook, YouTube): enlaces los envían ellos. WhatsApp también lo envían (enlace en el botón flotante).
- Eyebrow del hero: "SERVICIOS DE OUTSOURCING". Lead: "…Reducimos tus costos operativos, mientras elevamos la calidad de tu servicio con el respaldo de 30 años de experiencia."
- Pilares + El reto: más interactivo, títulos/eyebrows más grandes, animación o imagen en la comparación.
- Servicios: título "Un contact center hecho a tu medida"; lead "Nos encargamos de la gestión operativa de su atención al cliente para que su equipo se enfoque en el núcleo estratégico del negocio". Agregar soluciones con breve descripción e imágenes: soporte back office, soporte vía correo / WhatsApp, inbound, outbound, reportería.
- 12 etapas: hover que cambie de color y despliegue una breve descripción de cada etapa (descripciones a redactar y validar).
- "Por qué Carioca": quitar "pequeño" (usar flexibilidad / adaptabilidad); encabezado más grande.
- Proceso lead: "Antes de implementar, nos reunimos contigo para definir el contrato, las especificaciones operacionales y las metas a corto y largo plazo."
- Contacto: evitar negro (ícono email negro → otro), imágenes más visuales, eyebrow más grande; mensaje "propuesta ajustada a sus necesidades".
- Footer: logo original rojo y blanco; fondo negro → degradado menos intenso.
- Ojo: mezclan "tu" y "su" en sus textos; definir uno (el sitio usa "tu").

**v2 aplicada (2026-10-22):** hero y sitio en blanco/rojo (sin fondos negros), logo más grande, menú con Inicio y Sobre nosotros, textos corregidos, 5 soluciones con foto, "El reto" con imagen y animación, etapas con descripción al pasar el cursor (en móvil siempre visibles), "pequeño" → flexibilidad, contacto con foto e íconos rojos, footer con degradado rosado y logo original, iconos de redes. Se mantuvo "tú".
Provisional hasta que el cliente envíe: fotos (Unsplash, ver `brand/CREDITOS-FOTOS.md`), texto de Sobre nosotros (armado con datos del cuestionario), descripciones de las 12 etapas (redactadas por Arcova, validar), enlaces de Instagram/Facebook/YouTube (`href="#"` con `data-pending`), WhatsApp y dirección.

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
- Validar descripciones de los 5 servicios y de las 12 etapas (redactadas por Arcova).
- Resumen para "Sobre nosotros" y enlaces de Instagram, Facebook y YouTube.
- Número de WhatsApp (el 809-535-3864 es la línea de atención, solo llamadas).
- Dirección exacta de la oficina (o enlace de Google Maps) para la sección Ubicación.
- Casos de éxito reales (cliente o sector, resultado, permiso para mencionarlos) y logos de clientes si se pueden mostrar.
- En "Escalabilidad" mencionaron "picos de demanda del mercado cervecero y de bebidas": ¿es su nicho principal o lo dejamos genérico? (en el demo quedó genérico).
- ¿Atienden en inglés (campañas bilingües)? Si sí, lo destacamos como servicio.
- Horarios de atención (¿24/7, extendido?), ubicación/ciudad de la oficina (para SEO local y mapa).
- Fotos reales del equipo/instalaciones y el video del centro. ¿La foto del mockup tiene licencia (stock)?
- Dominio a comprar o subdominio de carioca.com.do; GA4 cuando exista.
