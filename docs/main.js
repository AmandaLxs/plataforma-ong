import { carregarPagina } from "./spa.js";

function inicializarSPA() {
  carregarPagina(location.hash);

  window.addEventListener("hashchange", () => {
    carregarPagina(location.hash);
    inicializarForm();
  });
}

function inicializarForm() {
  const form = document.getElementById("form-contato");
  if (!form) return;

  const alerta = document.getElementById("alerta-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();

    if (!nome || !email.includes("@")) {
      alerta.innerHTML = `<div class="alert error">⚠️ Por favor, preencha nome e e-mail válidos.</div>`;
      return;
    }

    alerta.innerHTML = `<div class="alert success">✅ Mensagem enviada com sucesso!</div>`;
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  inicializarSPA();
  inicializarForm();
});
