// ======================================================
// MENU HAMBÚRGUER
// ======================================================

function expandir() {
  const menu = document.querySelector("#menu");
  const botao = document.querySelector("#btn-hamburguer");

  if (!menu || !botao) {
    return;
  }

  const menuAberto = menu.classList.toggle("expandir");

  botao.classList.toggle("expandir");
  botao.setAttribute("aria-expanded", `${menuAberto}`);
}

const botaoHamburguer = document.querySelector("#btn-hamburguer");

if (botaoHamburguer) {
  botaoHamburguer.addEventListener("click", expandir);
}

// ======================================================
// ANO DO RODAPÉ
// ======================================================

function dataRodape() {
  const anoAtual = document.querySelector("#anoAtual");

  if (anoAtual) {
    anoAtual.textContent = String(new Date().getFullYear());
  }
}

dataRodape();

// ======================================================
// FORMULÁRIO DE CONTATO
// ======================================================

const formulario = document.querySelector("#form-contato");

function validarFormulario() {
  const camposObrigatorios = [
    {
      elemento: document.querySelector("#nome"),
      mensagem: "Informe seu nome.",
    },
    {
      elemento: document.querySelector("#cidade"),
      mensagem: "Informe sua cidade.",
    },
    {
      elemento: document.querySelector("#uf"),
      mensagem: "Informe sua UF.",
    },
  ];

  let formularioValido = true;

  camposObrigatorios.forEach((campo) => {
    if (!campo.elemento) {
      formularioValido = false;
      return;
    }

    campo.elemento.setCustomValidity("");

    if (campo.elemento.value.trim() === "") {
      campo.elemento.setCustomValidity(campo.mensagem);
      formularioValido = false;
    }
  });

  return formularioValido;
}

// ======================================================
// SALVAR CONTATO
// ======================================================

function salvarContato(evento) {
  evento.preventDefault();

  if (!formulario) {
    return;
  }

  if (!validarFormulario()) {
    formulario.reportValidity();
    return;
  }

  const campoNome = document.querySelector("#nome");
  const campoCidade = document.querySelector("#cidade");
  const campoUf = document.querySelector("#uf");
  const campoNecessidade = document.querySelector("#necessidade");

  const dadosContato = {
    nome: campoNome.value.trim(),
    cidade: campoCidade.value.trim(),
    uf: campoUf.value.trim().toUpperCase(),
    necessidade: campoNecessidade ? campoNecessidade.value.trim() : "",
  };

  localStorage.setItem("indsytoContato", JSON.stringify(dadosContato));

  window.location.href = "envio.html";
}

if (formulario) {
  formulario.addEventListener("submit", salvarContato);
}

// ======================================================
// RECUPERAR CONTATO
// ======================================================

function recuperarContato() {
  const dadosSalvos = localStorage.getItem("indsytoContato");

  if (!dadosSalvos) {
    return null;
  }

  try {
    return JSON.parse(dadosSalvos);
  } catch (erro) {
    localStorage.removeItem("indsytoContato");
    return null;
  }
}

// ======================================================
// WHATSAPP
// ======================================================

function montarMensagemWhatsApp(dados) {
  let mensagem = `Olá! Gostaria de conversar sobre uma solução de automação industrial.

Nome: ${dados.nome}
Cidade/UF: ${dados.cidade} - ${dados.uf}`;

  if (dados.necessidade) {
    mensagem += `

Necessidade:
${dados.necessidade}`;
  }

  return mensagem;
}

function configurarWhatsApp() {
  const linkWhatsApp = document.querySelector("#link-whatsapp");

  if (!linkWhatsApp) {
    return;
  }

  const dados = recuperarContato();

  if (!dados) {
    linkWhatsApp.removeAttribute("href");
    linkWhatsApp.setAttribute("aria-disabled", "true");
    return;
  }

  const mensagem = montarMensagemWhatsApp(dados);
  const mensagemCodificada = encodeURIComponent(mensagem);

  const urlWhatsApp = `https://wa.me/5565992967967?text=${mensagemCodificada}`;

  linkWhatsApp.href = urlWhatsApp;
  linkWhatsApp.target = "_blank";
  linkWhatsApp.rel = "noopener noreferrer";
}

configurarWhatsApp();
