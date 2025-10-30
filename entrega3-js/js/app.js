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

formaValidation.js:// formValidation.js
import { aplicarMascaraCPF, aplicarMascaraTelefone, aplicarMascaraCEP, mostrarMensagem } from './utils.js';

export function inicializarValidacaoFormulario() {
  const form = document.getElementById('formCadastro');
  if (!form) return;

  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  // Máscaras
  cpf.addEventListener('input', e => e.target.value = aplicarMascaraCPF(e.target.value));
  telefone.addEventListener('input', e => e.target.value = aplicarMascaraTelefone(e.target.value));
  cep.addEventListener('input', e => e.target.value = aplicarMascaraCEP(e.target.value));

  // Validação do formulário
  form.addEventListener('submit', e => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();

    if (!nome || !email) {
      mostrarMensagem('Preencha todos os campos obrigatórios!', 'erro');
      return;
    }

    if (!email.includes('@')) {
      mostrarMensagem('E-mail inválido!', 'erro');
      return;
    }

    mostrarMensagem('Cadastro enviado com sucesso!');
    form.reset();
  });
}
