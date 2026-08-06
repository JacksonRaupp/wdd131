const hoje = new Date();
const anoatual = document.querySelector("#anoatual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");

anoatual.textContent = `${hoje.getFullYear()}`;
ultimaModificacao.textContent = document.lastModified;

const titulo = document.querySelector("header h1");
const navegacao = document.querySelector("header nav");
const menuHamburguer = document.querySelector("header button");

menuHamburguer.addEventListener("click", function () {
  titulo.classList.toggle("expandir");
  navegacao.classList.toggle("expandir");
  menuHamburguer.classList.toggle("expandir");
});
