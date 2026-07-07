(function () {
  'use strict';

  // Mobile navigation
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  // Donation links — enable when URLs are set in data-donate-url
  document.querySelectorAll('[data-donate-url]').forEach(function (card) {
    var url = card.getAttribute('data-donate-url');
    if (url) {
      card.href = url;
      card.classList.remove('donate-card-disabled');
      card.removeAttribute('aria-disabled');
      card.style.pointerEvents = '';
      var status = card.querySelector('.donate-status');
      if (status) status.textContent = 'Donate now';
    }
  });

  // Contact form via Formspree
  var form = document.getElementById('contact-form');
  var formStatus = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (form.action.includes('YOUR_FORM_ID')) {
        formStatus.textContent = 'Form is not yet configured. Please set up Formspree (see README).';
        formStatus.className = 'form-status error';
        return;
      }

      formStatus.textContent = 'Sending...';
      formStatus.className = 'form-status';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            formStatus.textContent = 'Thank you! Your message has been sent.';
            formStatus.className = 'form-status success';
            form.reset();
          } else {
            return response.json().then(function (data) {
              throw new Error(data.error || 'Something went wrong.');
            });
          }
        })
        .catch(function (err) {
          formStatus.textContent = err.message || 'Failed to send. Please try again or call us directly.';
          formStatus.className = 'form-status error';
        });
    });
  }

  // Animate funding bars on scroll
  var fundingBars = document.querySelectorAll('.funding-bar');
  if (fundingBars.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.style.getPropertyValue('--pct');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    fundingBars.forEach(function (bar) {
      bar.style.width = '0%';
      observer.observe(bar);
    });
  }
})();
