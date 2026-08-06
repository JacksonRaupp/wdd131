/* ---------- Contador ---------- */
function contador() {
  const contador = document.querySelector("#contador");

  let totalAvaliacoes = Number(localStorage.getItem("totalAvaliacoes")) || 0;

  totalAvaliacoes++;

  localStorage.setItem("totalAvaliacoes", totalAvaliacoes);

  contador.textContent = totalAvaliacoes;
}

contador();

/* ---------- Voltar ---------- */
function voltar() {
  const voltar = document.querySelector("#voltar");

  voltar.addEventListener("click", function () {
    window.location.href = "formulario.html";
  });
}

voltar();

/* ---------- Rodapé ---------- */
function dataRodape() {
  const anoAtual = document.querySelector("#anoAtual");
  const ultimaModificacao = document.querySelector("#ultimaModificacao");

  anoAtual.textContent = `${new Date().getFullYear()}`;
  ultimaModificacao.textContent = document.lastModified;
}

dataRodape();
