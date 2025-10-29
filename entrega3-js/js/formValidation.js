// formValidation.js
export function initFormValidation() {
  document.addEventListener('submit', (e) => {
    if (e.target.id === 'formCadastro') {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const cpf = document.getElementById('cpf').value.trim();
      const mensagem = document.getElementById('mensagem');

      // Validação simples
      if (nome === '' || email === '' || cpf === '') {
        mensagem.innerHTML = '<p class="alert erro">Por favor, preencha todos os campos obrigatórios.</p>';
        return;
      }

      if (!email.includes('@')) {
        mensagem.innerHTML = '<p class="alert erro">Digite um e-mail válido.</p>';
        return;
      }

      if (cpf.length !== 14) {
        mensagem.innerHTML = '<p class="alert erro">CPF inválido. Use o formato 000.000.000-00.</p>';
        return;
      }

      mensagem.innerHTML = '<p class="alert sucesso">Cadastro enviado com sucesso! 🎉</p>';
      e.target.reset();
    }
  });
}

