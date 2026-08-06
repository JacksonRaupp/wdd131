// ---------- Ajuste dinâmico do Cabeçalho ----------
const menuHamburguer = document.querySelector("header button");

function expandirCabecalho() {
  const titulo = document.querySelector("header h1");
  const navegacao = document.querySelector("header nav");

  titulo.classList.toggle("expandir");
  navegacao.classList.toggle("expandir");
  menuHamburguer.classList.toggle("expandir");
}

menuHamburguer.addEventListener("click", expandirCabecalho);

// ---------- Criação do Álbum ----------
const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005-08-07",
    area: 11500,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/320x200/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Utah, Estados Unidos",
    consagracao: "1888-05-21",
    area: 74792,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/320x200/manti-temple-768192-wallpaper.jpg",
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Utah, Estados Unidos",
    consagracao: "2015-07-07",
    area: 96630,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/320x200/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020-05-02",
    area: 6861,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/320x200/yigo_guam_temple_3.jpg",
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Maryland, Estados Unidos",
    consagracao: "1974-11-19",
    area: 156558,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/320x200/washington_dc_temple-exterior-2.jpeg",
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986-01-10",
    area: 9600,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/320x200/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983-12-02",
    area: 116642,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/320x200/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    nomeDoTemplo: "Campinas, Brasil",
    localizacao: "Campinas, Brasil",
    consagracao: "1998-05-01",
    area: 48100,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/320x200/lds-temple-campinas-brazil-1021307-wallpaper.jpg",
  },
  {
    nomeDoTemplo: "São Paulo, Brasil",
    localizacao: "São Paulo, Brasil",
    consagracao: "1978-10-30",
    area: 59246,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/320x200/sao-paulo-brazil-temple-lds-246609-wallpaper.jpg",
  },
  {
    nomeDoTemplo: "Curitiba, Brasil",
    localizacao: "Curitiba, Brasil",
    consagracao: "2008-07-01",
    area: 27850,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/curitiba-brazil/320x200/curitiba-brazil-temple-lds-851185-wallpaper.jpg",
  },
];

function exibirImagens(templos) {
  const album = document.querySelector("main section");

  let imagens = "";

  for (const templo of templos) {
    imagens += `
      <figure>
        <figcaption>
          <h3>${templo.nomeDoTemplo}</h3>

          <br>

          <dl>
            <dt>Localização:</dt>
            <dd>${templo.localizacao}</dd>

            <dt>Dedicado:</dt>
            <dd>${templo.consagracao}</dd>

            <dt>Área:</dt>
            <dd>${templo.area} sq ft</dd>
        </dl>
        </figcaption>

        <img
          src="${templo.urlDaImagem}"
          alt="${templo.nomeDoTemplo}"
          width="320"
          loading="lazy"
          fetchpriority="low"
        />
      </figure>`;
  }

  album.innerHTML = imagens;
}

exibirImagens(templos);

// ---------- Filtro para seleção de imagens ----------
const dataDeCorte = "2000-01-01";
const areaDeCorte = 50000;

function selecaoDeFiltro(seletor, funcaoDoFiltro, templos) {
  const elemento = document.querySelector(seletor);

  elemento.addEventListener("click", () => {
    const resultado = templos.filter(funcaoDoFiltro);
    exibirImagens(resultado);
  });
}

function filtraAntigo(templo) {
  return new Date(templo.consagracao) < new Date(dataDeCorte);
}

function filtraNovo(templo) {
  return new Date(templo.consagracao) >= new Date(dataDeCorte);
}

function filtraGrande(templo) {
  return templo.area > areaDeCorte;
}

function filtraPequeno(templo) {
  return templo.area <= areaDeCorte;
}

document.querySelector("#principal").addEventListener("click", () => {
  exibirImagens(templos);
});

selecaoDeFiltro("#antigo", filtraAntigo, templos);
selecaoDeFiltro("#novo", filtraNovo, templos);
selecaoDeFiltro("#grande", filtraGrande, templos);
selecaoDeFiltro("#pequeno", filtraPequeno, templos);

// ---------- Horário Rodapé ----------
function dataRodape() {
  const hoje = new Date();
  const anoatual = document.querySelector("#anoatual");
  const ultimaModificacao = document.querySelector("#ultimaModificacao");

  anoatual.textContent = `${hoje.getFullYear()}`;
  ultimaModificacao.textContent = document.lastModified;
}

dataRodape();
