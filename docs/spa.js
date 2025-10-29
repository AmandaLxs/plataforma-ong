// spa.js — controla as "páginas" do site

export const templates = {
  home: `
    <section>
      <h1>Bem-vinda(o) à ONG ADS 💙</h1>
      <p>Nosso propósito é transformar vidas por meio de projetos sociais em educação, saúde e inclusão.</p>
      <div class="cards">
        <article class="card">
          <img src="imagens/educacao.jpg" alt="Crianças estudando">
          <h3>Educação Pública</h3>
          <p>Projetos que melhoram a qualidade da educação pública e incentivam o aprendizado criativo.</p>
        </article>

        <article class="card">
          <img src="imagens/saude.jpg" alt="Profissionais de saúde">
          <h3>Clínica Social</h3>
          <p>Atendimento humanizado e acessível para comunidades em vulnerabilidade social.</p>
        </article>
      </div>
    </section>
  `,

  projetos: `
    <section>
      <h1>Projetos em Andamento 🚀</h1>
      <ul>
        <li>📚 Projeto Educação para Todos</li>
        <li>🩺 Mutirão de Saúde — Novembro</li>
        <li>🌱 Sustentabilidade nas Escolas</li>
      </ul>
    </section>
  `,

  contato: `
    <section>
      <h1>Entre em contato 💌</h1>
      <form id="form-contato" novalidate>
        <div class="form-group">
          <label for="nome">Nome</label>
          <input type="text" id="nome" name="nome" required placeholder="Seu nome completo">
        </div>

        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" required placeholder="seuemail@email.com">
        </div>

        <div class="form-group">
          <label for="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows="4" placeholder="Escreva sua mensagem"></textarea>
        </div>

        <button type="submit" class="btn">Enviar</button>
        <div id="alerta-form" aria-live="polite"></div>
      </form>

      <div class="social-section">
        <h2>Siga nossas redes sociais 🌍</h2>
        <p>Fique por dentro das campanhas, eventos e mutirões da ONG ADS:</p>
        <div class="social-links">
          <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
            <img src="imagens/instagram.png" alt="Instagram" class="icon">
          </a>
          <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
            <img src="imagens/facebook.png" alt="Facebook" class="icon">
          </a>
          <a href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn">
            <img src="imagens/linkedin.png" alt="LinkedIn" class="icon">
          </a>
        </div>
      </div>
    </section>
  `
};

// Função que carrega a "página" conforme o hash (#home, #projetos, etc.)
export function carregarPagina(hash) {
  const app = document.getElementById('app');
  const rota = hash.replace('#', '') || 'home';
  app.innerHTML = templates[rota] || `<h2>Página não encontrada</h2>`;
}
