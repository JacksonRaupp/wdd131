const anoatual = document.querySelector("#anoatual");
const hoje = new Date();
anoatual.textContent = `${hoje.getFullYear()}`;

const ultimaModificacao = document.querySelector("#ultimaModificacao");
ultimaModificacao.textContent = document.lastModified;
