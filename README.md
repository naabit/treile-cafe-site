# TREILE CAFÉ

Sitio experimental para una cafetería local de Pucón.
Proyecto en desarrollo orientado a explorar identidad visual, arquitectura web y posicionamiento SEO para negocios territoriales y turísticos.

## Estado del proyecto

Actualmente funciona como un prototipo navegable enfocado en:

- diseño responsive
- estructura editorial
- branding digital
- accesibilidad (buenas prácticas básicas)
- experimentación con contenido indexable

## Objetivo a futuro

Evolucionar hacia un experimento SEO enfocado en:

- búsquedas locales
- tráfico turístico
- performance web
- estrategias de visibilidad orgánica para pequeños negocios

## Stack

`HTML` · `CSS` · `JavaScript` · `GitHub Pages` · SEO técnico

## Estructura (páginas)

- `index.html`: portada / home
- `menu.html`: carta
- `blog.html`: listado editorial
- `post.html`: plantilla para entradas

Recursos estáticos en `assets/`.

## Desarrollo local

Como es un sitio estático, puedes abrir los `.html` directamente en el navegador. Para una mejor experiencia (rutas relativas, recarga, etc.), usa un servidor local:

- VS Code: extensión “Live Server”, luego “Go Live”
- Node (si lo tienes): `npx serve .`
- Python (si lo tienes): `python -m http.server 8080`

## Deploy

Pensado para publicarse con GitHub Pages.

Checklist sugerido:

- definir rama/carpeta de publicación (por ejemplo `main` / root)
- verificar rutas a `assets/` (evitar rutas absolutas)
- revisar que cada página tenga `title`, `meta description` y `lang="es"`
- validar `robots.txt` / `sitemap.xml` si se incorporan más páginas

## SEO y accesibilidad (mínimos recomendados)

- un solo `h1` por página y jerarquía consistente de encabezados
- imágenes con `alt` significativo
- contraste de color y estados de foco visibles
- `meta viewport` y tamaños de tipografía legibles
- enlaces con texto descriptivo (evitar “haz clic aquí”)
- performance: optimizar peso de imágenes y evitar JS innecesario

## Contenido

Si se publican entradas o cambios frecuentes, conviene definir:

- pauta editorial (temas, intención de búsqueda, estacionalidad turística)
- convenciones de URL (slugs) y nombres de archivos
- política de imágenes (formatos, tamaños y compresión)

## Contribución

PRs y sugerencias son bienvenidas. Idealmente incluye:

- captura o descripción del cambio visual
- verificación rápida en móvil y escritorio

---

Firmado por `naabit`.
