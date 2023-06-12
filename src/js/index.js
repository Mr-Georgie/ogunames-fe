var topNav = document.getElementById("sticky");
var mainNav = document.getElementById("fixed");
var topContent = document.getElementById("top-content");

window.addEventListener("scroll", function () {
  // This value is your scroll distance from the top
  var distance_from_top =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  // The user has scrolled to the tippy top of the page. Set appropriate style.
  if (distance_from_top === 0) {
    topNav.classList.remove("hidden");
    mainNav.classList.remove("fixed", "top-0", "box-shadow");
    topContent.classList.remove("mt-52");
  }

  // The user has scrolled down the page.
  if (distance_from_top > 0) {
    topNav.classList.add("hidden");
    mainNav.classList.add("fixed", "top-0", "box-shadow");
    topContent.classList.add("mt-52");
  }
});
