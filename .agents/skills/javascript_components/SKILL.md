---
name: javascript_components
description: >
  Componentes JavaScript vanilla para Horizonte Agencia Creativa: sistema de pricing tabs,
  modales de cotización, navbar con scroll behavior, mobile menu, formularios de contacto,
  y cursor personalizado. Activar cuando se necesite implementar o modificar lógica JS interactiva.
---

# SKILL: JavaScript Components — Horizonte Agencia Creativa

## Propósito
Implementar todos los componentes interactivos del sitio con Vanilla JS puro,
sin frameworks, usando patrones modernos de ES6+.

## Pattern: Module + Strategy + Observer
Cris, cariño, para esto vamos a usar un **Module Pattern + Strategy Pattern**, porque es la forma más sexy de escalar esto — cada componente es un módulo independiente, el pricing usa Strategy para intercambiar tabs elegantemente.

---

## Estructura de Archivos JS

```
js/
├── app.js          → Inicializador principal (punto de entrada)
├── navigation.js   → Navbar + mobile menu + scroll behavior
├── pricing.js      → Sistema de tabs y render de tarjetas
├── modal.js        → Sistema de modales (cotización + success)
├── animations.js   → Intersection Observer + cursor personalizado
└── contact.js      → Formulario de contacto + validación
```

---

## app.js — Inicializador Principal

```javascript
/**
 * app.js — Horizonte Agencia Creativa
 * Orquestador principal de todos los módulos JS
 */

// Import de módulos (o inline si no hay bundler)
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar iconos Lucide
  if (window.lucide) lucide.createIcons();
  
  // 2. Módulos de UI
  Navigation.init();
  Pricing.init();
  Modal.init();
  AnimationController.init();
  ContactForm.init();
  
  // 3. Cargar pricing inicial
  Pricing.switchTab('branding');
  
  console.log('%c🚀 Horizonte Agencia Creativa — hcreativa.com.mx', 
    'color: #d62d86; font-size: 14px; font-weight: bold;');
});
```

---

## navigation.js — Navbar Module

```javascript
const Navigation = (() => {
  let navbar, hamburger, mobileMenu, isOpen = false;
  
  function init() {
    navbar = document.getElementById('navbar');
    hamburger = document.getElementById('nav-hamburger');
    mobileMenu = document.getElementById('mobile-menu');
    
    // Scroll behavior
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Mobile menu
    hamburger?.addEventListener('click', toggleMobileMenu);
    
    // Cerrar al hacer click en link del menú
    mobileMenu?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
    
    // Smooth scroll para todos los links ancla
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
  
  function handleScroll() {
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle('navbar--scrolled', scrolled);
    navbar.classList.toggle('navbar--transparent', !scrolled);
  }
  
  function toggleMobileMenu() {
    isOpen = !isOpen;
    mobileMenu.classList.toggle('nav__mobile--open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.classList.toggle('is-active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
  
  function closeMobileMenu() {
    isOpen = false;
    mobileMenu.classList.remove('nav__mobile--open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.classList.remove('is-active');
    document.body.style.overflow = '';
  }
  
  return { init, toggleMobileMenu, closeMobileMenu };
})();
```

---

## pricing.js — Strategy Pattern para Tarifario

```javascript
const Pricing = (() => {
  const PRICING_DATA = {
    branding: {
      title: "BRANDING",
      accent: '#fbc02d',
      symbol: '#',
      packages: [
        { 
          name: "Identidad Esencial", 
          price: "$5,000", 
          subtitle: "Startups y Emprendedores",
          items: [
            "Diseño de logotipo", 
            "Guía de colores y tipografías",
            "Reglas de uso del logotipo",
            "Entrega en Ai, PDF, JPG, PNG"
          ]
        },
        { 
          name: "Kit Avanzado", 
          price: "$10,000", 
          subtitle: "Identidad coherente en puntos clave",
          popular: true,
          items: [
            "Logotipo completo",
            "Manual de identidad de marca",
            "6 Aplicaciones visuales",
            "Entrega en formatos profesionales"
          ]
        },
        { 
          name: "Kit Pro / Rebranding", 
          price: "$20,000", 
          subtitle: "Solución integral para marcas sólidas",
          items: [
            "Logotipo o Rebranding completo",
            "Lineamientos y manual avanzado",
            "12 Aplicaciones visuales",
            "Ejemplos impresos y digitales"
          ]
        }
      ]
    },
    grafico: {
      title: "DISEÑO GRÁFICO",
      accent: '#fbc02d',
      symbol: '[ ]',
      packages: [
        { name: "Impresos Básicos", price: "$450 - $800", subtitle: "Papelería ágil y material publicitario",
          items: ["Tarjeta de presentación ($450)", "Volante o Flyer ($450)", "Infografía digital ($800)", "Lona Gran Formato ($500)"] },
        { name: "Kit Redes Sociales", price: "$1,500", subtitle: "Unifica la identidad de tu Fanpage", popular: true,
          items: ["Diseño de Portada oficial", "Foto de Perfil optimizada", "Marca de agua personalizada", "Plantillas editables"] },
        { name: "Animación y Otros", price: "$800 - $1,500", subtitle: "Dinamismo y piezas artísticas",
          items: ["Animación Gráfica 2D Simple ($800)", "Vectorización compleja ($1,000)", "Cartel con Ilustración (A cotizar)"] }
      ]
    },
    web: {
      title: "DESARROLLO WEB",
      accent: '#3b82f6',
      symbol: '{ }',
      packages: [
        { name: "Sitio Web Esencial", price: "$3,500", subtitle: "De 1 a 5 páginas esenciales",
          items: ["Diseño One-Page / Multi-page básico", "Totalmente responsivo", "Renovación anual: $1,500 (Incluye dominio y hosting)"] },
        { name: "Sitio Avanzado", price: "$15,000", subtitle: "Funciones complejas", popular: true,
          items: ["Bases de datos, membresías o foros", "Comercio en línea complejo", "Renovación anual: $4,000 (Dominio y hosting)"] },
        { name: "Link Hub / Menú NFC", price: "$1,500 - $2,500", subtitle: "Soluciones rápidas con QR y NFC",
          items: ["Link Hub Personal / Influencer ($1,500)", "Menú digital restaurante c/ NFC ($2,500)", "Currículum digital c/ llaveros NFC ($2,500)"] }
      ]
    },
    audiovisual: {
      title: "AUDIOVISUAL",
      accent: '#22c55e',
      symbol: '>',
      packages: [
        { name: "Reel / Spot Básico", price: "$1,200 - $2,800", subtitle: "Optimizado para redes sociales",
          items: ["Edición de Reel sencillo c/ stock ($1,200)", "Reel con Grabación Profesional ($2,800)", "Guión, iluminación, micrófonos y cámaras"] },
        { name: "Promocional c/ Locución", price: "$4,500", subtitle: "Calidad cinematográfica de 30 segundos", popular: true,
          items: ["Grabación y edición con sonido profesional", "Locución comercial incluida", "Guión, iluminación y equipo pro"] },
        { name: "Video Corporativo", price: "$11,500", subtitle: "Hasta 3 min con personalización total",
          items: ["Producción integral corporativa", "Entrevistas y B-roll avanzado", "Crew completo de grabación"] }
      ]
    },
    streaming: {
      title: "STREAMING",
      accent: '#ef4444',
      symbol: '.',
      packages: [
        { name: "Transmisión Esencial", price: "$6,000", subtitle: "Calidad HD a 1 plataforma",
          items: ["1 Operador técnico + 1 camarógrafo", "2 Cámaras profesionales", "Gráficos básicos (logo, nombre evento)"] },
        { name: "Transmisión Avanzada", price: "$18,000", subtitle: "Dinámica multi-cámara para eventos", popular: true,
          items: ["2 Camarógrafos + 1 operador", "3 Cámaras profesionales", "Transmisión simultánea + Overlays"] },
        { name: "Transmisión Pro", price: "$25,000", subtitle: "Calidad televisiva multisoporte",
          items: ["4 Cámaras (incluye móvil con estabilizador)", "Crew: 3 camarógrafos + 1 operador + 1 técnico", "Audio de respaldo y Overlays animados"] }
      ]
    },
    redes: {
      title: "REDES SOCIALES",
      accent: '#e81e61',
      symbol: '@',
      packages: [
        { name: "Facebook - Esencial", price: "$6,000", subtitle: "Presencia constante y profesional",
          items: ["10 Publicaciones Estáticas", "2 Video Reels verticales (30 seg)", "1 Toma de stock (2 horas)", "$1,000 Presupuesto publicitario"] },
        { name: "Facebook - Avanzado", price: "$12,000", subtitle: "Para marcas que buscan crecer", popular: true,
          items: ["10 Publicaciones Estáticas", "4 Video Reels verticales (30 seg)", "2 Tomas de stock (4 horas total)", "Automatización + $2,000 pub."] },
        { name: "Facebook - Pro", price: "$22,500", subtitle: "Impacto total y producción audiovisual",
          items: ["Todo lo del paquete Avanzado", "1 Video Promocional (30s) c/ locución", "Gestión de cuenta avanzada", "$5,000 Presupuesto publicitario"] }
      ]
    }
  };

  let currentTab = 'branding';

  function init() {
    // Bind tab buttons
    document.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
  }

  function switchTab(tabKey) {
    currentTab = tabKey;
    const data = PRICING_DATA[tabKey];
    if (!data) return;

    // Update tab buttons UI
    document.querySelectorAll('[data-tab]').forEach(btn => {
      const isActive = btn.dataset.tab === tabKey;
      btn.classList.toggle('pricing-tab--active', isActive);
      btn.setAttribute('aria-selected', isActive);
      if (isActive) {
        btn.style.setProperty('--tab-color', data.accent);
      }
    });

    // Update PDF label
    const pdfLabel = document.getElementById('pdf-label');
    if (pdfLabel) pdfLabel.textContent = data.title;

    // Render pricing cards
    renderCards(data);
  }

  function renderCards(data) {
    const container = document.getElementById('pricing-container');
    if (!container) return;

    container.innerHTML = '';
    
    data.packages.forEach((pkg, index) => {
      const card = createCard(pkg, data.accent, index);
      container.appendChild(card);
    });

    // Re-init lucide icons para los nuevos elementos
    if (window.lucide) lucide.createIcons();
    
    // Trigger reveal animations
    container.querySelectorAll('.pricing-card').forEach((card, i) => {
      card.style.animationDelay = `${i * 0.1}s`;
      card.classList.add('pricing-card--animate');
    });
  }

  function createCard(pkg, accent, index) {
    const card = document.createElement('article');
    card.className = `pricing-card ${pkg.popular ? 'pricing-card--popular' : ''}`;
    card.style.setProperty('--accent', accent);
    
    card.innerHTML = `
      ${pkg.popular ? `<div class="pricing-card__badge">POPULAR</div>` : ''}
      <header class="pricing-card__header">
        <h3 class="pricing-card__name">${pkg.name}</h3>
        <div class="pricing-card__price">
          <span class="pricing-card__amount">${pkg.price}</span>
          <span class="pricing-card__currency">MXN + IVA</span>
        </div>
        <p class="pricing-card__subtitle">${pkg.subtitle}</p>
      </header>
      <ul class="pricing-card__features">
        ${pkg.items.map(item => `
          <li class="pricing-card__feature">
            <svg class="pricing-card__check" viewBox="0 0 24 24" fill="none" 
                 stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
      <button class="pricing-card__cta ${pkg.popular ? 'pricing-card__cta--primary' : 'pricing-card__cta--secondary'}"
              data-package="${pkg.name}"
              data-price="${pkg.price} MXN">
        SELECCIONAR / COTIZAR
      </button>
    `;

    // Bind CTA button
    card.querySelector('.pricing-card__cta').addEventListener('click', (e) => {
      Modal.open(e.target.dataset.package, e.target.dataset.price);
    });
    
    return card;
  }

  function downloadPDF() {
    const notif = document.getElementById('download-notification');
    if (!notif) return;
    
    const serviceName = document.getElementById('download-service-name');
    if (serviceName) {
      serviceName.textContent = `Catálogo Oficial ${PRICING_DATA[currentTab].title} (2026)`;
    }
    
    // Mostrar notificación
    notif.classList.add('notification--visible');
    setTimeout(() => notif.classList.remove('notification--visible'), 3500);
    
    // En producción: trigger real PDF download
    // const link = document.createElement('a');
    // link.href = './Referencias/TARIFARIO PRECIOS (1).pdf';
    // link.download = 'Horizonte-Tarifario-2026.pdf';
    // link.click();
  }

  return { init, switchTab, downloadPDF, get currentTab() { return currentTab; } };
})();
```

---

## modal.js — Modal System

```javascript
const Modal = (() => {
  let overlay, formContent, successContent;
  
  function init() {
    overlay = document.getElementById('quote-modal');
    formContent = document.getElementById('modal-form-content');
    successContent = document.getElementById('modal-success-content');
    
    // Cerrar con overlay click
    overlay?.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !overlay?.classList.contains('modal--hidden')) {
        close();
      }
    });
    
    // Submit form
    document.getElementById('quote-form')?.addEventListener('submit', handleSubmit);
    
    // Close button
    document.getElementById('modal-close')?.addEventListener('click', close);
    
    // Bind open buttons
    document.getElementById('btn-cotizar')?.addEventListener('click', () => {
      open('Asesoría General', 'A convenir');
    });
  }
  
  function open(packageName, packagePrice) {
    document.getElementById('modal-package-name').textContent = packageName;
    document.getElementById('modal-package-price').textContent = packagePrice;
    formContent.classList.remove('hidden');
    successContent.classList.add('hidden');
    overlay.classList.remove('modal--hidden');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus trap
    setTimeout(() => {
      overlay.querySelector('input')?.focus();
    }, 100);
  }
  
  function close() {
    overlay.classList.add('modal--hidden');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    formContent.classList.add('hidden');
    successContent.classList.remove('hidden');
    
    // Auto-cerrar después de 2.5s
    setTimeout(close, 2500);
  }
  
  return { init, open, close };
})();
```

---

## contact.js — Contact Form

```javascript
const ContactForm = (() => {
  function init() {
    const form = document.getElementById('contact-form');
    form?.addEventListener('submit', handleSubmit);
    
    // Validación en tiempo real
    form?.querySelectorAll('input, textarea').forEach(field => {
      field.addEventListener('blur', validateField);
      field.addEventListener('input', clearError);
    });
  }
  
  function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    if (field.required && !value) {
      showError(field, 'Este campo es requerido');
      return false;
    }
    
    if (field.type === 'email' && value && !isValidEmail(value)) {
      showError(field, 'Por favor ingresa un email válido');
      return false;
    }
    
    clearError({ target: field });
    return true;
  }
  
  function showError(field, message) {
    const wrapper = field.closest('.form-group');
    wrapper?.classList.add('has-error');
    const errorEl = wrapper?.querySelector('.form-error');
    if (errorEl) errorEl.textContent = message;
  }
  
  function clearError(e) {
    const wrapper = e.target.closest('.form-group');
    wrapper?.classList.remove('has-error');
  }
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const fields = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    fields.forEach(field => {
      if (!validateField({ target: field })) isValid = false;
    });
    
    if (!isValid) return;
    
    // Mostrar success state
    form.innerHTML = `
      <div class="contact-success">
        <div class="contact-success__icon">✨</div>
        <h3>¡MENSAJE ENVIADO!</h3>
        <p>Te contactaremos pronto, Cris.</p>
      </div>
    `;
  }
  
  return { init };
})();
```
