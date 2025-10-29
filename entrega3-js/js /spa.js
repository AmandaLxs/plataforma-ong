// spa.js
const pages = {
  inicio: `
    <section>
      <h1>ONG Esperança</h1>
      <p>Trabalhando por um futuro melhor para todos.</p>
      <img src="img/ong.jpg" alt="Equipe da ONG em ação social" width="600" />
    </section>

    <section>
      <h2>Missão, Visão e Valores</h2>
      <p><strong>Missão:</strong> Promover inclusão e desenvolvimento social.</p>
      <p><strong>Visão:</strong> Ser referência em impacto social no Brasil.</p>
      <p><strong>Valores:</strong> Solidariedade, Compromisso, Respeito.</p>
    </section>

    <section class="social-section">
      <h2>Siga nossas redes sociais 🌍</h2>
      <div class="social-links">
        <a href="https://www.instagram.com/" target="_blank">
          <img src="img/instagram.png" alt="Instagram" class="icon">
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src="img/facebook.png" alt="Facebook" class="icon">
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <img src="img/linkedin.png" alt="LinkedIn" class="icon">
        </a>
      </div>
    </section>
  `,

  projetos: `
    <section>
      <h1>Projetos Sociais</h1>
      <article>
        <h2>Projeto Criança Feliz</h2>
        <img src="img/projeto1.jpg" alt="Crianças em projeto social" width="500" />
        <p>Atividades educativas e culturais para crianças em situação de vulnerabilidade.</p>
      </article>

      <article>
        <h2>Doe Agora</h2>
        <p>Ajude-nos a continuar esse trabalho. Qualquer valor faz a diferença.</p>
        <p><strong>Chave PIX:</strong> doacoes@ongesperanca.org</p>
      </article>
    </section>
  `,

  cadastro: `
    <section>
      <h1>Cadastro de Voluntário</h1>
      <form id="formCadastro">
        <fieldset>
          <legend>Informações Pessoais</legend>

          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required>

          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required>

          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" placeholder="(11) 91234-5678" required>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>
          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" required>

          <label for="estado">Estado:</label>
          <select id="estado" name="estado" required>
            <option value="">Selecione</option>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
            <option value="MG">MG</option>
            <option value="RS">RS</option>
          </select>
        </fieldset>

        <button type="submit">Enviar Cadastro</button>
      </form>
      <div id="mensagem"></div>
    </section>
  `
};

// Função para trocar o conteúdo dinamicamente
export function loadPage(page) {
  const content = document.getElementById('content');
  content.innerHTML = pages[page] || pages.inicio;
}

export function loadPage(page) {
  const content = document.getElementById('content');
  content.innerHTML = pages[page] || pages.inicio;
}
