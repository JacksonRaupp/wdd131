function dataRodape() {
  const hoje = new Date();
  const anoatual = document.querySelector("#anoatual");
  const ultimaModificacao = document.querySelector("#ultimaModificacao");

  anoatual.textContent = `${hoje.getFullYear()}`;
  ultimaModificacao.textContent = document.lastModified;
}

dataRodape();
