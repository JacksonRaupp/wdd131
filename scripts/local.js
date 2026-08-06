const anoatual = document.querySelector("#anoatual");
const hoje = new Date();
anoatual.textContent = `${hoje.getFullYear()}`;

const ultimaModificacao = document.querySelector("#ultimaModificacao");
ultimaModificacao.textContent = document.lastModified;

const temperaturaConst = 31;
const ventoConst = 6;
const unidTemp = " °C";
const unidVent = " km/h";

const temperatura = document.querySelector("#temperatura");
temperatura.textContent = temperaturaConst + unidTemp;

const vento = document.querySelector("#vento");
vento.textContent = ventoConst + unidVent;

function calcularSensacaoTermica(temperatura, vento) {
  return (
    13.12 +
    0.6215 * temperatura -
    11.37 * Math.pow(vento, 0.16) +
    0.3965 * temperatura * Math.pow(vento, 0.16)
  ).toFixed(1);
}

const sensacaoTermica = document.querySelector("#sensacaoTermica");

const sterm = calcularSensacaoTermica(temperaturaConst, ventoConst);

if (temperaturaConst <= 10 && ventoConst > 4.8) {
  sensacaoTermica.textContent = sterm + unidTemp;
} else {
  sensacaoTermica.textContent = "N/A";
}
