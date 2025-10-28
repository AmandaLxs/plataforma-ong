// Máscara para CPF
document.getElementById('cpf').addEventListener('input', function (e) {
  e.target.value = e.target.value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
});

// Máscara para telefone
document.getElementById('telefone').addEventListener('input', function (e) {
  e.target.value = e.target.value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4,5})(\d{4})$/, '$1-$2');
});

// Máscara para CEP
document.getElementById('cep').addEventListener('input', function (e) {
  e.target.value = e.target.value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2');
});
