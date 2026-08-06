let umCurso = {
  codigo: "WDD131",
  nome: "Fundamentos da Web Dinâmica",
  creditos: 2,
  secoes: [
    { secao: "001", matriculado: 95, instrutor: "John Doe" },
    { secao: "002", matriculado: 80, instrutor: "Jane Doe" },
  ],
};

function definirInformacoesCurso(curso) {
  document.querySelector("#nomeDoCurso").textContent =
    `${curso.codigo} - ${curso.nome}`;
}

function exibirSecoes(secoes) {
  const tbody = document.querySelector("#secoes tbody");

  let linhas = "";

  for (const secao of secoes) {
    linhas += `
        <tr>
            <td>${secao.secao}</td>
            <td>${secao.matriculado}</td>
            <td>${secao.instrutor}</td>
        </tr>`;
  }

  tbody.innerHTML = linhas;
}

definirInformacoesCurso(umCurso);
exibirSecoes(umCurso.secoes);
