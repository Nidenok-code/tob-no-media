const linkTabs = document.querySelectorAll(".linkTab"),
  planetImages = document.querySelectorAll(".planetImage img"),
  aspects = document.querySelectorAll(".aspect"),
  bots = document.querySelectorAll(".bot"),
  btn = document.querySelector(".btns .isActive"),
  color = [
    "#419EBB",
    "#EDA249",
    "#6D2ED5",
    "#D14C32",
    "#D83A34",
    "#CD5120",
    "#1EC1A2",
    "#2D68F0",
  ];

let indexPlanet = 2;

linkTabs.forEach((e, i) => {
  e.addEventListener("click", () => {
    controler(planetImages, i, indexPlanet);
    controler(aspects, i, indexPlanet);
    controler(bots, i, indexPlanet);
    btn.style.backgroundColor = color[i];
    indexPlanet = i;
  });
});

function controler(elements, addI, removeI) {
  elements[removeI].classList.remove("isActive");
  elements[addI].classList.add("isActive");
}
