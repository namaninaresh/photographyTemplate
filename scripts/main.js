

const menu = document.querySelectorAll(".toggler");
menu.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("menu-expanded");
  })
);