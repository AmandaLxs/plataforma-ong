// formValidation.js
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
