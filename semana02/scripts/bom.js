const input = document.querySelector("#capfav");
const botao = document.querySelector("button");
const lista = document.querySelector("#list");

botao.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    const item = document.createElement("li");
    const btnExcluir = document.createElement("button");

    item.textContent = input.value;
    input.value = "";
    btnExcluir.textContent = "❌";

    item.append(btnExcluir);
    lista.append(item);

    btnExcluir.addEventListener("click", function () {
      lista.removeChild(item);
    });
  }
  input.focus();
});
