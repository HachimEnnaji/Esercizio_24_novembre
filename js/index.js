window.onscroll = function () {
  colorIt();
};
function colorIt() {
  if (document.documentElement.scrollTop > 400) {
    let change = document.querySelector(".container");
    let button = document.querySelector("ul li:last-child a");
    change.classList.add("changeColorway");
    button.style.backgroundColor = "#1a8917";
    button.style.transition = "650ms";
  } else {
    let change = document.querySelector(".container ");
    let button = document.querySelector("ul li:last-child a");
    change.classList.remove("changeColorway");
    button.style.backgroundColor = "#000000";
    button.style.transition = "650ms";
  }
}
