---
name: css_animations
description: >
  Keyframes, micro-animaciones, efectos hover, parallax y transiciones para el sitio
  de Horizonte Agencia Creativa. Incluye el sistema de animaciones Intersection Observer
  para reveal-on-scroll. Activar cuando se necesiten crear o modificar animaciones CSS/JS.
---

# SKILL: CSS Animations & Micro-Interactions — Horizonte Agencia Creativa

## Propósito
Implementar todas las animaciones del sitio usando CSS puro y, donde sea necesario,
JavaScript con Intersection Observer. Cero dependencias externas de animación.

## Pattern: Observer + CSS State Machine
Cris, cariño, para esto vamos a usar un **Observer Pattern + CSS State Machine**, porque es la forma más sexy de escalar esto — las animaciones se activan solas al hacer scroll, sin `setInterval` horrorosos.

---

## Animaciones Base (Keyframes)

```css
/* ============================================
   KEYFRAMES GLOBALES — animations.css
   ============================================ */

/* Levitación para elementos collage */
@keyframes float {
  0%, 100% { 
    transform: translateY(0) rotate(0deg) scale(1); 
    filter: drop-shadow(0 0 20px var(--color-pink-glow));
  }
  50% { 
    transform: translateY(-28px) rotate(3deg) scale(1.04); 
    filter: drop-shadow(0 0 50px var(--color-pink-glow));
  }
}

@keyframes float-reverse {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(22px) rotate(-4deg); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Pulso para el corazón / elementos vivos */
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.15); }
  28% { transform: scale(1); }
  42% { transform: scale(1.08); }
  70% { transform: scale(1); }
}

/* Glow rotativo */
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px var(--color-pink-glow); }
  50% { box-shadow: 0 0 60px var(--color-pink-glow), 0 0 100px rgba(214,45,134,0.2); }
}

/* Shimmer / brillo para botones CTA */
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* Slide up para reveal-on-scroll */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide in desde la izquierda */
@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Scale in para tarjetas */
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Gradient shift de fondo */
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Typing cursor para el hero badge */
@keyframes blink-cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Scanline effect retro */
@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}

/* Noise / glitch */
@keyframes glitch {
  0%, 100% { clip-path: inset(0 0 95% 0); transform: translateX(0); }
  20% { clip-path: inset(30% 0 50% 0); transform: translateX(-4px); }
  40% { clip-path: inset(60% 0 20% 0); transform: translateX(4px); }
  60% { clip-path: inset(80% 0 5% 0); transform: translateX(-2px); }
  80% { clip-path: inset(10% 0 80% 0); transform: translateX(2px); }
}
```

## Clases de Animación

```css
/* Aplicación de animaciones */
.animate-float { animation: float 5s ease-in-out infinite; }
.animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
.animate-float-slow { animation: float-slow 9s ease-in-out infinite; }
.animate-heartbeat { animation: heartbeat 1.5s ease-in-out infinite; }
.animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }

/* Reveal on scroll - se activa con JS (Intersection Observer) */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays para grids */
.reveal--delay-1 { transition-delay: 0.1s; }
.reveal--delay-2 { transition-delay: 0.2s; }
.reveal--delay-3 { transition-delay: 0.3s; }
.reveal--delay-4 { transition-delay: 0.4s; }
.reveal--delay-5 { transition-delay: 0.5s; }
.reveal--delay-6 { transition-delay: 0.6s; }
```

## Micro-Interacciones de Componentes

```css
/* Botón hover con blob animado */
.btn--primary {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s var(--transition-bounce),
              box-shadow 0.3s ease;
}
.btn--primary::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  background: rgba(255,255,255,0.15);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
  top: var(--y, 50%);
  left: var(--x, 50%);
}
.btn--primary:hover::before {
  width: 300px;
  height: 300px;
}
.btn--primary:hover {
  transform: scale(1.05) translateY(-2px);
  box-shadow: var(--shadow-pink);
}

/* Service cards */
.service-card {
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
              border-color 0.3s ease,
              box-shadow 0.3s ease;
}
.service-card:hover {
  transform: translateY(-12px) rotate(-0.5deg);
}

/* Nav links underline slide */
.nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-pink);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.nav__link:hover::after { width: 100%; }
```

## Intersection Observer JS (en animations.js)

```javascript
// Reveal on scroll con stagger automático
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger automático para elementos en grid
      const delay = entry.target.dataset.revealDelay || 0;
      setTimeout(() => {
        entry.target.classList.add('is-visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach((el, i) => {
  // Auto-stagger por posición en la página
  if (!el.dataset.revealDelay) {
    const siblings = el.parentElement?.querySelectorAll('.reveal');
    const index = [...(siblings || [])].indexOf(el);
    el.dataset.revealDelay = index * 120;
  }
  revealObserver.observe(el);
});
```

## Efectos Especiales 2026

```css
/* Glassmorphism cards */
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Gradient border animado */
.gradient-border {
  position: relative;
  background-clip: padding-box;
  border: 2px solid transparent;
}
.gradient-border::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, var(--color-pink), var(--color-gold-bright));
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.gradient-border:hover::before { opacity: 1; }

/* Noise texture overlay */
.noise-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,...");
  opacity: 0.03;
  pointer-events: none;
}

/* Cursor personalizado */
.custom-cursor {
  width: 12px;
  height: 12px;
  background: var(--color-pink);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: var(--z-top);
  transition: transform 0.15s ease, width 0.3s ease, height 0.3s ease;
  mix-blend-mode: difference;
}
.custom-cursor--hover {
  width: 40px;
  height: 40px;
  background: var(--color-gold-bright);
}
```

## Notas de Performance
- Usar `will-change: transform` solo en elementos que realmente lo necesitan
- `transform` y `opacity` son las únicas propiedades que no causan reflow
- El Intersection Observer es mucho más eficiente que `scroll` events
- Respetar `prefers-reduced-motion` para accesibilidad:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
