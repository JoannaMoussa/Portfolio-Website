document.addEventListener("DOMContentLoaded", () => {
  const showMoreBtn = document.getElementById("show-more-btn");
  const showLessBtns = document.querySelectorAll(".edu__show-less-btn");
  const hiddenSection = document.getElementById("hidden-section");

  showMoreBtn.addEventListener("click", () => {
    showMoreBtn.classList.add("hide");
    hiddenSection.classList.add("opened");
  });

  for (let i = 0; i < showLessBtns.length; i++) {
    showLessBtns[i].addEventListener("click", () => {
      hiddenSection.classList.remove("opened");
      showMoreBtn.classList.remove("hide");
    });
  }
});
