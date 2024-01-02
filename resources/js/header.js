document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileHeaderCont = document.getElementById("mobile-nav-cont");
  const mobileMenuCont = document.getElementById("mobile-menu-cont");

  function toggleMenuBtn() {
    for (i = 0; i < menuBtn.children.length; i++) {
      menuBtn.children[i].classList.toggle("opened");
    }
  }

  menuBtn.addEventListener("click", () => {
    toggleMenuBtn();
    mobileHeaderCont.classList.toggle("opened");
    mobileMenuCont.classList.toggle("opened");
  });
});
