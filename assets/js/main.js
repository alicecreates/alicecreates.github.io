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
// ============================================

// ============================================
// BREVO NEWSLETTER — no redirect
// ============================================
function subscribeToBrevo(e, form) {
  e.preventDefault();
  const btn = form.querySelector('button');
  const email = form.querySelector('input[name="EMAIL"]').value;
  if (!email) return;

  btn.textContent = '✓ Check your inbox!';
  btn.disabled = true;
  form.querySelector('input[type="email"]').value = '';

  // Submit silently in background via hidden iframe trick
  const iframe = document.createElement('iframe');
  iframe.name = 'brevo-iframe';
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  const hiddenForm = document.createElement('form');
  hiddenForm.method = 'POST';
  hiddenForm.action = 'https://aa3a7867.sibforms.com/serve/MUIFAAdb4r7BJII3JZtu8kp5LrrTSEnjbkNHLIj62GyrC4yh9KfFYygytwLblxwjfFi4goqt9huH2MBRudF_dFDN5mQwphHMkcofWQChGuGg3Car3IQwoyMmMoCJB0jpYECLzA0DJ5tZSYlfoPDte1Rmv6FhTxkRIsgkELpyin7iR5_SjhG_XnTMRnrRArI5Eh8xqfynTlfBcvST-g==';
  hiddenForm.target = 'brevo-iframe';
  hiddenForm.style.display = 'none';

  const emailInput = document.createElement('input');
  emailInput.name = 'EMAIL';
  emailInput.value = email;

  const checkInput = document.createElement('input');
  checkInput.name = 'email_address_check';
  checkInput.value = '';

  const localeInput = document.createElement('input');
  localeInput.name = 'locale';
  localeInput.value = 'en';

  hiddenForm.appendChild(emailInput);
  hiddenForm.appendChild(checkInput);
  hiddenForm.appendChild(localeInput);
  document.body.appendChild(hiddenForm);
  hiddenForm.submit();
}
