/* ---------- Nome do Produto ---------- */
function exibirOpcoes() {
  const produtos = [
    {
      id: "fc-1888",
      nome: "capacitor de fluxo",
      classificacaomedia: 4.5,
    },
    {
      id: "fc-2050",
      nome: "fios elétricos",
      classificacaomedia: 4.7,
    },
    {
      id: "fs-1987",
      nome: "circuitos de tempo",
      classificacaomedia: 3.5,
    },
    {
      id: "ac-2000",
      nome: "reator de baixa tensão",
      classificacaomedia: 3.9,
    },
    {
      id: "jj-1969",
      nome: "equalizador de distorção",
      classificacaomedia: 5.0,
    },
  ];

  produtos.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

  const seletorProdutos = document.querySelector("#produto");

  for (const produto of produtos) {
    const opcao = document.createElement("option");

    opcao.value = produto.id;
    opcao.textContent =
      produto.nome.charAt(0).toUpperCase() + produto.nome.slice(1);

    seletorProdutos.appendChild(opcao);
  }
}

exibirOpcoes();

/* ---------- Rodapé ---------- */
function dataRodape() {
  const anoAtual = document.querySelector("#anoAtual");
  const ultimaModificacao = document.querySelector("#ultimaModificacao");

  anoAtual.textContent = `${new Date().getFullYear()}`;
  ultimaModificacao.textContent = document.lastModified;
}

dataRodape();
