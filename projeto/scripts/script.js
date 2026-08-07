function expandir() {
  const menu = document.querySelector("#menu");

  menu.classList.toggle("expandir");
  this.classList.toggle("expandir");
}

document.querySelector("#btn-hamburguer").addEventListener("click", expandir);

function dataRodape() {
  const anoAtual = document.querySelector("#anoAtual");

  anoAtual.textContent = `${new Date().getFullYear()}`;
}

dataRodape();
