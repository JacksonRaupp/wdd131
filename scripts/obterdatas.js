const courseTitle = document.querySelector("#course-title");

courseTitle.innerHTML = "WDD131 – Fundamentos da Web Dinâmica - Jackson Raupp";

const anoatual = document.querySelector("#anoatual");

const hoje = new Date();

anoatual.innerHTML = `${hoje.getFullYear()}`;

const ultimaModificacao = document.querySelector("#ultimaModificacao");

ultimaModificacao.innerHTML = document.lastModified;
