---
name: html_architecture
description: >
  Arquitectura HTML5 semántica para Horizonte Agencia Creativa.
  Define la estructura de cada sección del sitio, el orden de carga de recursos,
  meta tags SEO y la jerarquía de componentes. Activar al construir o modificar
  la estructura HTML del sitio.
---

# SKILL: HTML Architecture — Horizonte Agencia Creativa

## Propósito
Definir la arquitectura HTML5 semántica completa del sitio, incluyendo estructura de secciones,
orden de carga de recursos, y patrones de accesibilidad.

## Pattern: Semantic Component Architecture
Cris, cariño, para esto vamos a usar un **Semantic Component Architecture Pattern**, porque es la forma más sexy de escalar esto — HTML5 puro con roles ARIA, jerarquía correcta y estructura que los motores de búsqueda aman.

---

## Estructura de Secciones

El sitio tiene las siguientes secciones en orden:

```
1. <head>           → Meta, fonts, CSS links
2. <nav>            → Navbar sticky con logo real SVG
3. <section#hero>   → Hero con collage pop + CTA principal
4. <section#manifiesto>  → El por qué de la agencia
5. <section#servicios>   → 6 servicios con iconos collage
6. <section#tarifario>   → Precios interactivos por tab
7. <section#proceso>     → Nuevo: Proceso de trabajo (3 pasos)
8. <section#contacto>    → Formulario de contacto + WhatsApp
9. <footer>         → Logo, links, copyright
```

## Recursos a Cargar en `<head>`

```html
<!-- ORDEN DE PRIORIDAD DE CARGA -->

<!-- 1. Critical: Preconnect para CDNs -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- 2. Favicon con logo Horizonte -->
<link rel="icon" type="image/svg+xml" href="./Referencias/logo-cuadro.svg">

<!-- 3. Meta SEO + Social (ver SKILL seo_performance) -->

<!-- 4. CSS propio (no Tailwind CDN) -->
<link rel="stylesheet" href="./styles/main.css">
<link rel="stylesheet" href="./styles/components.css">
<link rel="stylesheet" href="./styles/animations.css">

<!-- 5. Google Fonts (display=swap para no bloquear render) -->
<link href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;600;700&family=Montserrat:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

## Secciones Clave — Patrones HTML

### Navbar
```html
<nav id="navbar" role="navigation" aria-label="Navegación principal">
  <div class="nav__container">
    <a href="#hero" class="nav__logo" aria-label="Horizonte Agencia Creativa - Inicio">
      <img src="./Referencias/Logo-largo.svg" alt="Horizonte Agencia Creativa" 
           width="200" height="82" loading="eager">
    </a>
    <div class="nav__links" role="menubar">
      <a href="#manifiesto" role="menuitem">Manifiesto</a>
      <a href="#servicios" role="menuitem">Servicios</a>
      <a href="#tarifario" role="menuitem">Tarifario</a>
      <a href="#contacto" role="menuitem">Contacto</a>
      <button class="btn btn--primary" id="btn-cotizar">Hablemos</button>
    </div>
    <button class="nav__hamburger" id="nav-hamburger" 
            aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div id="mobile-menu" class="nav__mobile" role="menu" aria-hidden="true">
    <!-- Links móvil -->
  </div>
</nav>
```

### Hero Section
```html
<section id="hero" class="hero" aria-labelledby="hero-heading">
  <div class="hero__bg-texture" aria-hidden="true"></div>
  <div class="hero__container">
    <div class="hero__content">
      <span class="hero__badge">El Antídoto al Ruido Digital</span>
      <h1 id="hero-heading" class="hero__title">
        INTELIGENCIA<br>
        CON <em class="hero__title--accent">ALMA</em><br>
        <span class="hero__title--gold">CREATIVA</span>
      </h1>
      <p class="hero__description">...</p>
      <a href="#servicios" class="btn btn--hero" id="btn-hero-cta">
        TRASCIENDE CON NOSOTROS
        <svg><!-- arrow icon --></svg>
      </a>
    </div>
    <div class="hero__collage" aria-hidden="true">
      <!-- Elementos decorativos collage pop -->
    </div>
  </div>
</section>
```

### Servicios Grid
```html
<section id="servicios" class="services" aria-labelledby="services-heading">
  <div class="services__container">
    <header class="services__header">
      <h2 id="services-heading" class="services__title">TECLADO<br>CREATIVO</h2>
    </header>
    <div class="services__grid" role="list">
      <article class="service-card" role="listitem" 
               data-service="branding" 
               onclick="switchPricingTab('branding')">
        <!-- Contenido del servicio -->
      </article>
    </div>
  </div>
</section>
```

### Pricing Section
```html
<section id="tarifario" class="pricing" aria-labelledby="pricing-heading">
  <div class="pricing__container">
    <h2 id="pricing-heading">TARIFARIO <span>2026</span></h2>
    
    <!-- Tab navigation -->
    <div role="tablist" class="pricing__tabs" aria-label="Servicios y tarifas">
      <button role="tab" aria-selected="true" 
              aria-controls="panel-branding" id="tab-branding">
        # BRANDING
      </button>
      <!-- más tabs -->
    </div>
    
    <!-- Tab panels -->
    <div role="tabpanel" id="panel-branding" aria-labelledby="tab-branding">
      <!-- Tarjetas de precios -->
    </div>
  </div>
</section>
```

## Nuevas Secciones (No existentes en referencia)

### Sección Proceso (NUEVA)
```html
<section id="proceso" class="process" aria-labelledby="process-heading">
  <h2 id="process-heading">ASÍ TRABAJAMOS</h2>
  <div class="process__steps">
    <div class="process__step">
      <span class="process__number">01</span>
      <h3>BRIEF & ESTRATEGIA</h3>
      <p>Escuchamos tu visión...</p>
    </div>
    <div class="process__step">
      <span class="process__number">02</span>
      <h3>DISEÑO & PRODUCCIÓN</h3>
      <p>Creamos con alma...</p>
    </div>
    <div class="process__step">
      <span class="process__number">03</span>
      <h3>ENTREGA & SOPORTE</h3>
      <p>Garantizamos resultados...</p>
    </div>
  </div>
</section>
```

### Sección Contacto (NUEVA)
```html
<section id="contacto" class="contact" aria-labelledby="contact-heading">
  <h2 id="contact-heading">¿LISTO PARA TRASCENDER?</h2>
  <div class="contact__grid">
    <form class="contact__form" id="contact-form" novalidate>
      <!-- Campos del formulario -->
    </form>
    <div class="contact__info">
      <a href="https://wa.me/52XXXXXXXXX" class="btn btn--whatsapp">
        WhatsApp Directo
      </a>
      <address>
        <!-- Datos de contacto -->
      </address>
    </div>
  </div>
</section>
```

## Reglas de Accesibilidad
- Todos los `<img>` tienen `alt` descriptivo
- Botones tienen `aria-label` cuando no tienen texto visible
- Formularios tienen `<label>` asociado a cada `<input>`
- Tabs implementan el patrón WAI-ARIA Tabs
- Focus visible en todos los elementos interactivos
- Color contrast ratio mínimo 4.5:1 (WCAG AA)
