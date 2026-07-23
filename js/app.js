document.addEventListener('DOMContentLoaded', () => {
  // Navigation scroll behavior
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  });

  // Intersection Observer for dynamic animations & interactive counters
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // Trigger Animated Number Counter if stat elements exist inside
        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach(counter => {
          if (!counter.dataset.animated) {
            counter.dataset.animated = "true";
            animateCounter(counter);
          }
        });
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || 0);
    const duration = 1800; // ms
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * target;

      el.textContent = current.toFixed(decimals);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toFixed(decimals);
      }
    }

    requestAnimationFrame(update);
  }

  revealElements.forEach(el => revealObserver.observe(el));

  // Dynamic Typewriter / Word Swapper Engine for Hero Title
  const dynamicWordEl = document.getElementById('dynamic-word');
  if (dynamicWordEl) {
    const words = ['creativa'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        charIndex--;
        dynamicWordEl.textContent = currentWord.substring(0, charIndex);
      } else {
        charIndex++;
        dynamicWordEl.textContent = currentWord.substring(0, charIndex);
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentWord.length) {
        speed = 7500; // Pausa elegante de 7.5s con la palabra completa leíble
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 800; // Pausa sutil antes de volver a escribir
      }

      setTimeout(typeEffect, speed);
    }

    // Iniciar rotación limpia
    dynamicWordEl.textContent = '';
    typeEffect();
  }

  // Global Synaptic Neural Background Canvas Engine (Option 1)
  const canvas = document.getElementById('neural-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height, particles;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    }

    function initParticles() {
      particles = [];
      // Cantidad óptima de nodos neuronales interconectados (1 por cada 15000px)
      const particleCount = Math.min(75, Math.floor((width * height) / 15000));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2 + 1.2
        });
      }
    }

    function animateNeural() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#fbc02d';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          
          if (Math.abs(dx) > 180 || Math.abs(dy) > 180) continue;
          
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(232, 30, 97, ${(1 - dist / 180) * 0.75})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateNeural);
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();
    animateNeural();
  }

  // Initialize Pricing
  if (typeof Pricing !== 'undefined') {
    Pricing.init();
  }
});
