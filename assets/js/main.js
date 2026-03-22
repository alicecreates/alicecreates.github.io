// ============================================
// NAV TOGGLE (mobile)
// ============================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// ============================================
// ACTIVE NAV LINK
// ============================================
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
    link.classList.add('active');
  }
});

// ============================================
// NEWSLETTER FORM (Formspree or static)
// ============================================
// Newsletter forms now submit directly to Brevo

// ============================================
// CONTACT FORM
// ============================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Replace YOUR_FORMSPREE_ID with your Formspree form ID
    // Sign up free at formspree.io
    const action = contactForm.getAttribute('action');
    if (action && action.includes('formspree')) {
      try {
        const res = await fetch(action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          btn.textContent = 'Sent!';
          contactForm.reset();
        } else {
          throw new Error('Form error');
        }
      } catch {
        btn.textContent = 'Error — try again';
        btn.disabled = false;
      }
    } else {
      // Demo mode
      setTimeout(() => {
        btn.textContent = 'Message sent!';
        contactForm.reset();
      }, 1000);
    }
  });
}

// ============================================
// FADE IN ON SCROLL
// ============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ============================================
// BOOK COVER HOVER TILT
// ============================================
document.querySelectorAll('.book-cover, .book-cover-placeholder').forEach(cover => {
  cover.addEventListener('mousemove', e => {
    const rect = cover.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -10;
    cover.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) translateY(-4px)`;
  });
  cover.addEventListener('mouseleave', () => {
    cover.style.transform = '';
  });
});
