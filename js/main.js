// main.js - inicializa a SPA e a validação

import { loadPage } from './spa.js';
import { initFormValidation } from './formValidation.js';

function initSPA() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('href').substring(1);
      loadPage(page);
    });
  });

  // Carrega a página inicial automaticamente
  loadPage('inicio');
}

document.addEventListener('DOMContentLoaded', () => {
  initSPA();
  initFormValidation();
});
