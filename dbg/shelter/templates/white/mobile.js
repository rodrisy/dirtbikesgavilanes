const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const container = doc.querySelector(".container")


menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
  container.classList.add("container--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
  container.classList.remove("container--active");
});
