window.onscroll = function () {
  colorIt();
};
let change = document.querySelector(".container");
let button = document.querySelector("ul li:last-child a");
function colorIt() {
  if (document.documentElement.scrollTop > 400) {
    change.classList.add("changeColorway");
    button.style.backgroundColor = "#1a8917";
    button.style.transition = "650ms";
  } else {
    change.classList.remove("changeColorway");
    button.style.backgroundColor = "#000000";
    button.style.transition = "650ms";
  }
}
