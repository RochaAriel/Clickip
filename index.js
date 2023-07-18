let subMenu = document.getElementById("subMenu");
function clickmenu() {
  subMenu.classList.toggle("open-menu");
}


document.querySelectorAll(".card").forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    this.classList.add("hover");
  });

  card.addEventListener("mouseleave", function () {
    this.classList.remove("hover");
  });
});       