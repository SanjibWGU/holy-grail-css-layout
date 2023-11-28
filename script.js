function toggleNav() {
  const outGrid = document.querySelector(".outer-grid");
  // console.log(outGrid.classList);
  outGrid.classList.toggle("outer-grid-expanded");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}
