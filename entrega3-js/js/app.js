// app.js
import { inicializarValidacaoFormulario } from './formValidation.js';

// Carregar conteúdo de outras páginas sem recarregar
async function carregarPagina(pagina) {
  const main = document.getElementById('conteudo-principal');

  try {
    const response = await fetch(`${pagina}.html`);
    const html = await response.text();
    main.innerHTML = html;

    if (pagina === 'cadastro') inicializarValidacaoFormulario();

    // 🔹 Adiciona eventos aos links/botões dentro do conteúdo carregado
    document.querySelectorAll('[data-page]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const pagina = e.target.getAttribute('data-page');
        carregarPagina(pagina);
      });
    });

  } catch (erro) {
    main.innerHTML = '<p>Erro ao carregar página. Tente novamente.</p>';
  }
}

// Configura navegação inicial (menu do topo)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const pagina = e.target.getAttribute('data-page');
    carregarPagina(pagina);
  });
});

// Página inicial ao abrir
window.addEventListener('DOMContentLoaded', () => carregarPagina('home'));

