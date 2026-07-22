const Pricing = (() => {
  const PRICING_DATA = {
    branding: {
      title: "BRANDING",
      packages: [
        { name: "Identidad Esencial", price: "$5,000", subtitle: "Startups y Emprendedores", items: ["Diseño de logotipo", "Guía de colores y tipografías", "Reglas de uso del logotipo", "Entrega en Ai, PDF, JPG, PNG"] },
        { name: "Kit Avanzado", price: "$10,000", subtitle: "Identidad coherente en puntos clave", popular: true, items: ["Logotipo completo", "Manual de identidad de marca", "6 Aplicaciones visuales", "Entrega en formatos profesionales"] },
        { name: "Kit Pro / Rebranding", price: "$20,000", subtitle: "Solución integral para marcas sólidas", items: ["Logotipo o Rebranding completo", "Lineamientos y manual avanzado", "12 Aplicaciones visuales", "Ejemplos impresos y digitales"] }
      ]
    },
    grafico: {
      title: "DISEÑO GRÁFICO",
      packages: [
        { name: "Impresos Básicos", price: "$450 - $800", subtitle: "Papelería ágil y material publicitario", items: ["Tarjeta de presentación ($450)", "Volante o Flyer ($450)", "Infografía digital ($800)", "Lona Gran Formato ($500)"] },
        { name: "Kit Redes Sociales", price: "$1,500", subtitle: "Unifica la identidad de tu Fanpage", popular: true, items: ["Diseño de Portada oficial", "Foto de Perfil optimizada", "Marca de agua personalizada", "Plantillas editables"] },
        { name: "Animación y Otros", price: "$800 - $1,500", subtitle: "Dinamismo y piezas artísticas", items: ["Animación Gráfica 2D Simple ($800)", "Vectorización compleja ($1,000)", "Cartel con Ilustración"] }
      ]
    },
    web: {
      title: "DESARROLLO WEB",
      packages: [
        { name: "Sitio Web Esencial", price: "$3,500", subtitle: "De 1 a 5 páginas esenciales", items: ["Diseño One-Page / Multi-page básico", "Totalmente responsivo", "Renovación anual: $1,500 (Incluye dominio y hosting)"] },
        { name: "Sitio Avanzado", price: "$15,000", subtitle: "Funciones complejas", popular: true, items: ["Bases de datos, membresías o foros", "Comercio en línea complejo", "Renovación anual: $4,000 (Dominio y hosting)"] },
        { name: "Link Hub / Menú NFC", price: "$1,500 - $2,500", subtitle: "Soluciones rápidas con QR y NFC", items: ["Link Hub Personal ($1,500)", "Menú digital restaurante c/ NFC ($2,500)", "Currículum digital c/ llaveros NFC ($2,500)"] }
      ]
    },
    audiovisual: {
      title: "AUDIOVISUAL",
      packages: [
        { name: "Reel / Spot Básico", price: "$1,200 - $2,800", subtitle: "Optimizado para redes sociales", items: ["Edición de Reel sencillo c/ stock ($1,200)", "Reel con Grabación Profesional ($2,800)", "Guión, iluminación, micrófonos y cámaras"] },
        { name: "Promocional c/ Locución", price: "$4,500", subtitle: "Calidad cinematográfica de 30 segundos", popular: true, items: ["Grabación y edición con sonido profesional", "Locución comercial incluida", "Guión, iluminación y equipo pro"] },
        { name: "Video Corporativo", price: "$11,500", subtitle: "Hasta 3 min con personalización total", items: ["Producción integral corporativa", "Entrevistas y B-roll avanzado", "Crew completo de grabación"] }
      ]
    },
    streaming: {
      title: "STREAMING",
      packages: [
        { name: "Transmisión Esencial", price: "$6,000", subtitle: "Calidad HD a 1 plataforma", items: ["1 Operador técnico + 1 camarógrafo", "2 Cámaras profesionales", "Gráficos básicos (logo, nombre evento)"] },
        { name: "Transmisión Avanzada", price: "$18,000", subtitle: "Dinámica multi-cámara para eventos", popular: true, items: ["2 Camarógrafos + 1 operador", "3 Cámaras profesionales", "Transmisión simultánea + Overlays"] },
        { name: "Transmisión Pro", price: "$25,000", subtitle: "Calidad televisiva multisoporte", items: ["4 Cámaras (incluye móvil con estabilizador)", "Crew: 3 camarógrafos + 1 operador + 1 técnico", "Audio de respaldo y Overlays animados"] }
      ]
    },
    redes: {
      title: "REDES SOCIALES",
      packages: [
        { name: "Facebook - Esencial", price: "$6,000", subtitle: "Presencia constante y profesional", items: ["10 Publicaciones Estáticas", "2 Video Reels verticales (30 seg)", "1 Toma de stock (2 horas)", "$1,000 Presupuesto publicitario"] },
        { name: "Facebook - Avanzado", price: "$12,000", subtitle: "Para marcas que buscan crecer", popular: true, items: ["10 Publicaciones Estáticas", "4 Video Reels verticales (30 seg)", "2 Tomas de stock (4 horas total)", "Automatización + $2,000 pub."] },
        { name: "Facebook - Pro", price: "$22,500", subtitle: "Impacto total y producción audiovisual", items: ["Todo lo del paquete Avanzado", "1 Video Promocional (30s) c/ locución", "Gestión de cuenta avanzada", "$5,000 Presupuesto publicitario"] }
      ]
    }
  };

  let currentTab = 'branding';

  function init() {
    renderTab(currentTab);
  }

  function switchTab(tabKey) {
    currentTab = tabKey;
    document.querySelectorAll('.pricing-tab').forEach(btn => {
      btn.classList.toggle('pricing-tab--active', btn.dataset.tab === tabKey);
    });
    renderTab(tabKey);
  }

  function navigateToTab(tabKey) {
    switchTab(tabKey);
    const target = document.getElementById('tarifario');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function renderTab(tabKey) {
    const container = document.getElementById('pricing-cards-container');
    if (!container) return;
    const data = PRICING_DATA[tabKey];

    container.innerHTML = data.packages.map(pkg => `
      <div class="service-card ${pkg.popular ? 'border-pink' : ''}" style="${pkg.popular ? 'border-color: var(--color-pink-light);' : ''}">
        ${pkg.popular ? '<span style="background:var(--color-pink-light);color:#fff;padding:0.2rem 0.8rem;border-radius:999px;font-size:0.75rem;font-weight:bold;position:absolute;top:1rem;right:1rem;">POPULAR</span>' : ''}
        <h3 class="font-antonio" style="font-size:1.8rem;margin-bottom:0.5rem;">${pkg.name}</h3>
        <div style="font-size:2.2rem;font-weight:bold;font-family:var(--font-display);color:var(--color-gold-bright);">${pkg.price} <span style="font-size:0.9rem;color:#888;">MXN + IVA</span></div>
        <p style="color:#aaa;font-size:0.9rem;margin:1rem 0;">${pkg.subtitle}</p>
        <ul style="list-style:none;margin-bottom:2rem;font-size:0.95rem;color:#ddd;">
          ${pkg.items.map(item => `<li style="margin-bottom:0.5rem;">✓ ${item}</li>`).join('')}
        </ul>
        <a href="https://wa.me/523121331067?text=${encodeURIComponent('Hola Horizonte! Me interesa cotizar el paquete: ' + pkg.name)}" target="_blank" class="btn-whatsapp-nav" style="width:100%;justify-content:center;">COTIZAR POR WHATSAPP</a>
      </div>
    `).join('');
  }

  return { init, switchTab };
})();
