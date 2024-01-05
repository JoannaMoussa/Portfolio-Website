document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileNavCont = document.getElementById("mobile-nav-cont");
  const mobileMenuCont = document.getElementById("mobile-menu-cont");

  function toggleMenuBtn() {
    for (i = 0; i < menuBtn.children.length; i++) {
      menuBtn.children[i].classList.toggle("opened");
    }
  }

  menuBtn.addEventListener("click", () => {
    toggleMenuBtn();
    mobileNavCont.classList.toggle("opened");
    mobileMenuCont.classList.toggle("opened");
  });

  // Add box shadow for nav on scroll
  const desktopNavCont = document.getElementById("desktop-nav-cont");

  if (window.scrollY > 0) {
    desktopNavCont.classList.add("shadow");
    mobileNavCont.classList.add("shadow");
  }

  document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      desktopNavCont.classList.add("shadow");
      mobileNavCont.classList.add("shadow");
    } else {
      desktopNavCont.classList.remove("shadow");
      mobileNavCont.classList.remove("shadow");
    }
  });
});
