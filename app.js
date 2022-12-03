navBtn = document.getElementById("nav-toggle");
navBtn.addEventListener("click", function () {
  navBtn.classList.toggle("active");
  navBtn.classList.toggle("fa-x");
  navBtn.classList.contains("active")
    ? (document.querySelector("nav").style.transform = "translateX(0)")
    : (document.querySelector("nav").style.transform = "translateX(1000px)");
});
