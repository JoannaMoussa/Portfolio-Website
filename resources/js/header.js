document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");

  function toggleMenuBtn() {
    for (i = 0; i < menuBtn.children.length; i++) {
      menuBtn.children[i].classList.toggle("opened");
    }
  }

  menuBtn.addEventListener("click", () => {
    toggleMenuBtn();
  });
});
