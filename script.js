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
