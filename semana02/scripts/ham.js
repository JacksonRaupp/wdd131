const hamBtn = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

hamBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamBtn.classList.toggle("open");
});
