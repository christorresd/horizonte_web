---
name: design_system
description: >
  Sistema de diseño para Horizonte Agencia Creativa. Define todos los tokens visuales:
  colores de marca, tipografías, espaciado, sombras, bordes y variables CSS globales.
  Activar cuando se necesite establecer o modificar la identidad visual base del proyecto.
---

# SKILL: Design System — Horizonte Agencia Creativa

## Propósito
Establecer y mantener el sistema de diseño completo usando CSS Custom Properties (variables).
Esto asegura consistencia visual en todos los componentes y facilita el mantenimiento.

## Pattern: Design Token Architecture
Cris, cariño, para esto vamos a usar un **Design Token Architecture Pattern**, porque es la forma más sexy de escalar esto — un único punto de verdad para todos los valores visuales.

---

## CSS Variables a Implementar

```css
/* ============================================
   DESIGN SYSTEM — HORIZONTE AGENCIA CREATIVA
   ============================================ */
:root {
  /* === BRAND COLORS === */
  --color-pink:        #d62d86;
  --color-pink-light:  #e81e61;
  --color-pink-glow:   rgba(214, 45, 134, 0.3);
  
  --color-gold:        #e0b64c;
  --color-gold-warm:   #d7852c;
  --color-gold-bright: #fbc02d;
  --color-gold-glow:   rgba(224, 182, 76, 0.3);

  /* === NEUTRALS === */
  --color-bg-deepest:  #0a0a0a;
  --color-bg-dark:     #121212;
  --color-bg-medium:   #1a1a1a;
  --color-bg-card:     #1e1e1e;
  --color-bg-raised:   #242424;
  --color-border:      rgba(255,255,255,0.08);
  --color-border-mid:  rgba(255,255,255,0.15);
  
  /* === TEXT === */
  --color-text-primary:   #ffffff;
  --color-text-secondary: rgba(255,255,255,0.7);
  --color-text-muted:     rgba(255,255,255,0.4);
  
  /* === SERVICE ACCENT COLORS === */
  --color-branding:    var(--color-gold-bright);
  --color-grafico:     var(--color-gold-bright);
  --color-web:         #3b82f6;
  --color-audiovisual: #22c55e;
  --color-streaming:   #ef4444;
  --color-redes:       var(--color-pink-light);

  /* === TYPOGRAPHY === */
  --font-display:  'Antonio', 'Impact', sans-serif;
  --font-body:     'Montserrat', 'Segoe UI', sans-serif;
  
  --fs-hero:    clamp(4rem, 10vw, 9rem);
  --fs-h1:      clamp(3rem, 6vw, 6rem);
  --fs-h2:      clamp(2rem, 4vw, 3.5rem);
  --fs-h3:      clamp(1.5rem, 3vw, 2rem);
  --fs-xl:      1.25rem;
  --fs-lg:      1.125rem;
  --fs-base:    1rem;
  --fs-sm:      0.875rem;
  --fs-xs:      0.75rem;
  
  /* === SPACING === */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* === BORDERS === */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-full: 9999px;

  /* === SHADOWS / GLOWS === */
  --shadow-pink:  0 0 40px rgba(214, 45, 134, 0.5);
  --shadow-gold:  0 0 40px rgba(224, 182, 76, 0.4);
  --shadow-card:  0 20px 60px rgba(0, 0, 0, 0.6);
  --shadow-float: 0 30px 80px rgba(0, 0, 0, 0.8);
  
  /* === TRANSITIONS === */
  --transition-fast:   150ms ease;
  --transition-base:   300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow:   600ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: 400ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* === Z-INDEX SCALE === */
  --z-base:    1;
  --z-raised:  10;
  --z-overlay: 40;
  --z-modal:   50;
  --z-top:     100;
}
```

## Texturas y Patrones de Fondo

```css
/* Textura de fondo estilo concreto */
.bg-texture {
  background-color: var(--color-bg-dark);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23121212'/%3E%3Crect x='0' y='0' width='1' height='1' fill='%23161616'/%3E%3Crect x='2' y='2' width='1' height='1' fill='%23161616'/%3E%3C/svg%3E");
}

/* Patrón halftone para overlay */
.bg-halftone {
  background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px);
  background-size: 18px 18px;
}

/* Gradient overlays */
.gradient-pink-top {
  background: linear-gradient(to bottom, rgba(214,45,134,0.15) 0%, transparent 60%);
}
.gradient-gold-bottom {
  background: linear-gradient(to top, rgba(224,182,76,0.10) 0%, transparent 60%);
}
```

## Tipografía Base

```css
/* Text outline effect (decorativo) */
.text-outline {
  -webkit-text-stroke: 1.5px rgba(255,255,255,0.12);
  color: transparent;
}

/* Gradient text */
.text-gradient-gold {
  background: linear-gradient(135deg, var(--color-gold), var(--color-gold-warm));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-brand {
  background: linear-gradient(135deg, var(--color-pink-light), var(--color-gold-bright));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## Notas de Implementación
- Usar `clamp()` para tipografía responsive (no media queries para font-size)
- CSS Variables permiten theming futuro (modo light si se requiere)
- Glassmorphism: `backdrop-filter: blur(16px)` + `background: rgba(255,255,255,0.04)`
- Las sombras tipo "glow" son clave para el efecto premium 2026
