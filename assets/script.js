window.onload = function () {
  //remove preloader when page loaded
  document.getElementById("preloader").style.display = "none";
  // smooth scrolling on click on navbar
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
};

//navBar Toogle
function toggleNav() {
  document.getElementById("navbarCollapse").classList.toggle("collapse");
}

//darkmode toggle
function enableDarkMode() {
  document.documentElement.style.setProperty("--color-bg", "#2d3436");
  document.documentElement.style.setProperty("--color-fg", "#fff");
  document.querySelector(".navbar-brand.logo img").style.filter =
    "invert(100%)";
  document.getElementById("light-bulb-elem").src =
    "./assets/images/lightbulb-off-fill.svg";
  document.getElementById("light-bulb-elem").style.filter = "invert(100%)";
  localStorage.setItem("HANNAN_PORTFOLIO_THEME", "dark");
}
function enableLightMode() {
  document.documentElement.style.setProperty("--color-bg", "#fff");
  document.documentElement.style.setProperty("--color-fg", "#2d3436");
  document.querySelector(".navbar-brand.logo img").style.filter = "invert(0%)";
  document.getElementById("light-bulb-elem").src =
    "./assets/images/lightbulb-fill.svg";
  document.getElementById("light-bulb-elem").style.filter = "invert(0%)";
  localStorage.setItem("HANNAN_PORTFOLIO_THEME", "light");
}
function toggleTheme() {
  if (document.getElementById("light-bulb-elem").src.indexOf("off") > -1) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
}

console.log(localStorage.getItem("HANNAN_PORTFOLIO_THEME"))
if (localStorage.getItem("HANNAN_PORTFOLIO_THEME") === "dark") {
  enableDarkMode();
} else {
  enableLightMode();
}
