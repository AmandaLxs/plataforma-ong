// formValidation.js - validação simples de formulário

export function initFormValidation() {
  document.addEventListener('submit', (e) => {
    if (e.target.id === 'formCadastro') {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const cpf = document.getElementById('cpf').value.trim();
      const mensagem = document.getElementById('mensagem');
      mensagem.innerHTML = '';

      if (!nome || !email || !cpf) {
        mensagem.innerHTML = '<p class="alert erro">⚠️ Preencha todos os campos obrigatórios.</p>';
        return;
      }

      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
        mensagem.innerHTML = '<p class="alert erro">📧 Digite um e-mail válido.</p>';
        return;
      }

      if (!/^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$/.test(cpf)) {
        mensagem.innerHTML = '<p class="alert erro">🧾 CPF inválido. Use o formato 000.000.000-00.</p>';
        return;
      }

      mensagem.innerHTML = '<p class="alert sucesso">✅ Cadastro enviado com sucesso!</p>';
      e.target.reset();
    }
  });
}
