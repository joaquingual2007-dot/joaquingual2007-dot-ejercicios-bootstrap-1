// ============================================================
// JAVASCRIPT DEL PORTFOLIO · COMPONENTES E INTERACCIÓN
// Joaquín Gutiérrez · 2.º DAW (MEDAC Sevilla Este)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------
  // 1. Selector de modo claro / oscuro (data-bs-theme)
  // ------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const htmlElement = document.documentElement;

  // Obtener tema almacenado o preferencia del sistema
  const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem('portfolio-theme');
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setTheme = (theme) => {
    htmlElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    if (themeIcon && themeToggleBtn) {
      if (theme === 'dark') {
        themeIcon.className = 'bi bi-sun-fill';
        themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo claro');
      } else {
        themeIcon.className = 'bi bi-moon-stars-fill';
        themeToggleBtn.setAttribute('aria-label', 'Cambiar a modo oscuro');
      }
    }
  };

  // Inicializar tema al cargar
  setTheme(getPreferredTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-bs-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    });
  }

  // ------------------------------------------------------------
  // 2. Inicialización de Tooltips de Bootstrap 5.3
  // ------------------------------------------------------------
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));

  // ------------------------------------------------------------
  // 3. Validación accesible del formulario de contacto
  // ------------------------------------------------------------
  const contactForm = document.querySelector('.needs-validation');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        // Poner foco en el primer campo inválido para accesibilidad por teclado
        const firstInvalid = contactForm.querySelector(':invalid');
        if (firstInvalid) {
          firstInvalid.focus();
        }
      } else {
        contactForm.classList.remove('was-validated');
        contactForm.reset();
        if (formSuccessAlert) {
          formSuccessAlert.classList.remove('d-none');
          formSuccessAlert.focus();
        }
      }
    });
  }

});
