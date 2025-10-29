// Máscara para CPF
export function aplicarMascaraCPF(valor) {
  return valor
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

// Máscara para telefone
export function aplicarMascaraTelefone(valor) {
  return valor
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4,5})(\d{4})$/, '$1-$2');
}

// Máscara para CEP
export function aplicarMascaraCEP(valor) {
  return valor
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2');
}

// Exibir mensagens de sucesso/erro
export function mostrarMensagem(texto, tipo = 'sucesso') {
  const msg = document.getElementById('mensagem');
  msg.textContent = texto;
  msg.className = tipo === 'erro' ? 'alert erro' : 'alert sucesso';
  msg.style.display = 'block';
  setTimeout(() => (msg.style.display = 'none'), 3000);
}

