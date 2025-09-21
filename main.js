const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    toggle?.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Active link highlighting
    const sections = [...document.querySelectorAll('main section[id]')];
    const navLinks = [...document.querySelectorAll('.nav-menu a')];
    
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = sections[0]?.id;
      for (const s of sections) {
        if (s.offsetTop <= y) current = s.id;
      }
      navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${current}`));
    };
    
    document.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', onScroll);

    // Form validacion  handling para el form
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Real-time validacion
    function validateField(field) {
      const fieldContainer = field.closest('.field');
      const isValid = field.checkValidity();
      
      fieldContainer.classList.toggle('error', !isValid);
      return isValid;
    }

    // se agregar eventos  listeners de  real-time validacion
    [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
      field?.addEventListener('blur', () => validateField(field));
      field?.addEventListener('input', () => {
        if (field.closest('.field').classList.contains('error')) {
          validateField(field);
        }
      });
    });

    // Custom validation messages
    nameInput?.addEventListener('invalid', function() {
      if (this.validity.valueMissing) {
        this.setCustomValidity('Por favor, ingresa tu nombre.');
      } else if (this.validity.tooShort) {
        this.setCustomValidity('El nombre debe tener al menos 2 caracteres.');
      } else {
        this.setCustomValidity('');
      }
    });

    emailInput?.addEventListener('invalid', function() {
      if (this.validity.valueMissing) {
        this.setCustomValidity('Por favor, ingresa tu correo electrónico.');
      } else if (this.validity.typeMismatch) {
        this.setCustomValidity('Por favor, ingresa un correo electrónico válido.');
      } else {
        this.setCustomValidity('');
      }
    });

    subjectInput?.addEventListener('invalid', function() {
      if (this.validity.valueMissing) {
        this.setCustomValidity('Por favor, ingresa un asunto.');
      } else if (this.validity.tooShort) {
        this.setCustomValidity('El asunto debe tener al menos 3 caracteres.');
      } else {
        this.setCustomValidity('');
      }
    });

    messageInput?.addEventListener