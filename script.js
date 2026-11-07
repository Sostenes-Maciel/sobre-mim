const botaoTema = document.querySelector('#botao-tema');
const pagina = document.documentElement;

function atualizarBotao(temaClaro) {
  botaoTema.innerHTML = temaClaro
    ? '<span aria-hidden="true">☾</span> Tema escuro'
    : '<span aria-hidden="true">☼</span> Tema claro';
  botaoTema.setAttribute(
    'aria-label',
    temaClaro ? 'Ativar tema escuro' : 'Ativar tema claro'
  );
}

botaoTema.addEventListener('click', () => {
  const temaClaro = pagina.dataset.tema !== 'claro';
  pagina.dataset.tema = temaClaro ? 'claro' : 'escuro';
  atualizarBotao(temaClaro);
});

const projetosGrid = document.querySelector('#projetos-grid');

async function carregarProjetos() {
  try {
    const resposta = await fetch('https://api.github.com/users/Sostenes-Maciel/repos');

    if (!resposta.ok) {
      throw new Error('Não foi possível carregar os projetos.');
    }

    const projetos = (await resposta.json())
      .filter((projeto) => !projeto.private)
      .sort((a, b) => b.size - a.size)
      .slice(0, 6);
    projetosGrid.replaceChildren();

    if (projetos.length === 0) {
      projetosGrid.innerHTML = '<p class="projetos-status">Nenhum projeto encontrado.</p>';
      return;
    }

    projetos.forEach((projeto, indice) => {
      const card = document.createElement('article');
      card.className = 'projeto-card';

      const numero = document.createElement('span');
      numero.className = 'projeto-numero';
      numero.textContent = String(indice + 1).padStart(2, '0');

      const titulo = document.createElement('h3');
      titulo.textContent = projeto.name;

      const descricao = document.createElement('p');
      descricao.textContent = projeto.description || 'Projeto sem descrição.';

      const link = document.createElement('a');
      link.href = projeto.html_url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Ver projeto ↗';

      card.append(numero, titulo, descricao, link);
      projetosGrid.append(card);
    });
  } catch (erro) {
    projetosGrid.innerHTML =
      '<p class="projetos-status">Não foi possível carregar os projetos agora.</p>';
    console.error(erro);
  }
}

carregarProjetos();
