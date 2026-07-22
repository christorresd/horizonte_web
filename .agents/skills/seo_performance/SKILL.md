---
name: seo_performance
description: >
  SEO técnico, meta tags, Schema.org structured data, Open Graph, Twitter Cards
  y optimizaciones de Core Web Vitals para Horizonte Agencia Creativa.
  Activar cuando se necesite implementar o auditar el SEO y rendimiento del sitio.
---

# SKILL: SEO & Performance — Horizonte Agencia Creativa

## Propósito
Asegurar que el sitio sea indexable, tenga excelente presencia en redes sociales,
y cargue en menos de 2.5 segundos (LCP).

## Pattern: Progressive Enhancement SEO
Cris, cariño, para esto vamos a usar un **Progressive Enhancement SEO Pattern**, porque es la forma más sexy de escalar esto — el sitio funciona perfecto sin JS, y los motores de búsqueda lo aman desde el primer request.

---

## Meta Tags Completos (`<head>`)

```html
<!-- ============================================
     SEO & META TAGS — Horizonte Agencia Creativa
     ============================================ -->
     
<!-- Basic SEO -->
<title>Horizonte Agencia Creativa | Inteligencia con Alma Creativa | hcreativa.com.mx</title>
<meta name="description" content="Agencia creativa en México especializada en Branding, Diseño Gráfico, Desarrollo Web, Audiovisual, Streaming y Redes Sociales. Combatimos la irrelevancia digital con Collage Digital Pop.">
<meta name="keywords" content="agencia creativa, branding México, diseño gráfico, desarrollo web, streaming profesional, redes sociales, hcreativa">
<meta name="author" content="Horizonte Agencia Creativa">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://hcreativa.com.mx/">

<!-- Language -->
<meta name="language" content="es-MX">
<html lang="es-MX">

<!-- Open Graph (Facebook, WhatsApp, LinkedIn) -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://hcreativa.com.mx/">
<meta property="og:title" content="Horizonte Agencia Creativa — Inteligencia con Alma Creativa">
<meta property="og:description" content="Mezclamos la intuición humana con la precisión tecnológica. Branding, Diseño, Web, Audiovisual, Streaming y Redes Sociales con estilo Collage Digital Pop.">
<meta property="og:image" content="https://hcreativa.com.mx/assets/images/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="es_MX">
<meta property="og:site_name" content="Horizonte Agencia Creativa">

<!-- Twitter/X Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://hcreativa.com.mx/">
<meta name="twitter:title" content="Horizonte Agencia Creativa — Inteligencia con Alma Creativa">
<meta name="twitter:description" content="Combatimos la irrelevancia digital con Collage Digital Pop. Servicios creativos premium en México.">
<meta name="twitter:image" content="https://hcreativa.com.mx/assets/images/og-image.jpg">

<!-- Favicon Multi-formato -->
<link rel="icon" type="image/svg+xml" href="./Referencias/logo-cuadro.svg">
<link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="./assets/images/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="./assets/images/apple-touch-icon.png">
<link rel="manifest" href="./site.webmanifest">
<meta name="theme-color" content="#d62d86">

<!-- Viewport & Mobile -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

---

## Schema.org Structured Data

```html
<!-- Dentro del <body> o antes del </body> -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hcreativa.com.mx/#business",
  "name": "Horizonte Agencia Creativa",
  "alternateName": "H Creativa",
  "description": "Agencia creativa especializada en branding, diseño gráfico, desarrollo web, producción audiovisual, streaming profesional y gestión de redes sociales.",
  "url": "https://hcreativa.com.mx",
  "logo": "https://hcreativa.com.mx/Referencias/Logo-largo.svg",
  "image": "https://hcreativa.com.mx/assets/images/og-image.jpg",
  "telephone": "+52-XXX-XXX-XXXX",
  "email": "contacto@hcreativa.com.mx",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "MX",
    "addressRegion": "México"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "XX.XXXXX",
    "longitude": "-XX.XXXXX"
  },
  "priceRange": "$$$",
  "currenciesAccepted": "MXN",
  "openingHours": "Mo-Fr 09:00-18:00",
  "sameAs": [
    "https://www.facebook.com/hcreativa",
    "https://www.instagram.com/hcreativa"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios Creativos",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Branding",
          "description": "Identidad corporativa completa"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diseño Gráfico",
          "description": "Material gráfico digital e impreso"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Desarrollo Web",
          "description": "Sitios web y plataformas digitales"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Producción Audiovisual",
          "description": "Grabación y edición de video profesional"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Streaming Profesional",
          "description": "Transmisiones en vivo profesionales"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Redes Sociales",
          "description": "Gestión estratégica de redes sociales"
        }
      }
    ]
  }
}
</script>
```

---

## Core Web Vitals Optimizations

### LCP (Largest Contentful Paint) — Meta: < 2.5s

```html
<!-- Preload del logo (elemento LCP probable) -->
<link rel="preload" href="./Referencias/Logo-largo.svg" as="image">

<!-- Preload de la imagen hero si la hay -->
<link rel="preload" href="./assets/images/hero-bg.webp" as="image">

<!-- Preconnect a dominios externos críticos -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://unpkg.com">
```

### CSS Critical Inline

```html
<!-- CSS crítico inline para evitar FOUC -->
<style>
  /* Critical above-the-fold styles */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { 
    background: #121212; 
    color: #fff; 
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }
  .navbar { position: fixed; width: 100%; z-index: 40; }
  .hero { min-height: 100vh; display: flex; align-items: center; }
</style>

<!-- CSS no-crítico con media=print para carga async -->
<link rel="stylesheet" href="./styles/components.css" media="print" onload="this.media='all'">
<link rel="stylesheet" href="./styles/animations.css" media="print" onload="this.media='all'">
```

### Images Optimization

```html
<!-- Usar WebP con fallback, lazy loading para imágenes no-hero -->
<picture>
  <source srcset="./assets/images/hero-bg.webp" type="image/webp">
  <img src="./assets/images/hero-bg.jpg" 
       alt="Horizonte Agencia Creativa - Inteligencia con Alma Creativa"
       width="1920" height="1080"
       loading="eager"
       decoding="async">
</picture>

<!-- Imágenes de collage: lazy load con dimensiones -->
<img src="./Referencias/manos DiseñoGrafico.png"
     alt="Diseño Gráfico - Horizonte Agencia Creativa"
     width="400" height="400"
     loading="lazy"
     decoding="async">
```

### Web App Manifest

```json
// site.webmanifest
{
  "name": "Horizonte Agencia Creativa",
  "short_name": "H Creativa",
  "description": "Inteligencia con Alma Creativa",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#121212",
  "theme_color": "#d62d86",
  "icons": [
    {
      "src": "/assets/images/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/assets/images/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## Checklist de SEO

- [ ] Title tag único y descriptivo (50-60 chars)
- [ ] Meta description (150-160 chars) con CTA
- [ ] H1 único por página
- [ ] Jerarquía H1 → H2 → H3 correcta
- [ ] Alt text en todas las imágenes
- [ ] URLs semánticas con anclas descriptivas
- [ ] Canonical URL configurado
- [ ] Schema.org implementado
- [ ] Open Graph completo
- [ ] Favicon multi-formato
- [ ] LCP < 2.5s verificado
- [ ] No hay texto rojo sobre fondo rojo (contraste WCAG AA)
- [ ] Sitemap.xml generado
- [ ] robots.txt configurado
