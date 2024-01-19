document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileNavCont = document.getElementById("mobile-nav-cont");
  const desktopNavCont = document.getElementById("desktop-nav-cont");
  const mobileMenuCont = document.getElementById("mobile-menu-cont");
  const mobileMenuAnchors = document.querySelectorAll(".m-menu__a");
  const desktopNavAnchors = document.querySelectorAll(".d-nav__a");
  const sectionElements = document.querySelectorAll(".section");

  const menuAnchors = Array.prototype.slice
    .call(mobileMenuAnchors)
    .concat(Array.prototype.slice.call(desktopNavAnchors));

  function highlightHeaderSection() {
    let currentSection = "top";

    if (Math.round(window.scrollY) === 0) {
      // top of page
      currentSection = "top";
    } else if (
      window.innerHeight + Math.round(window.scrollY) >=
      document.body.offsetHeight
    ) {
      // bottom of page
      currentSection = "contact";
    } else {
      sectionElements.forEach((sectionEl) => {
        if (window.scrollY >= sectionEl.offsetTop - 20) {
          currentSection = sectionEl.id;
        }
      });
    }

    menuAnchors.forEach((menuAnchor) => {
      if (menuAnchor.href.includes(currentSection)) {
        menuAnchor.classList.add("active");
      } else if (menuAnchor.classList.contains("active")) {
        menuAnchor.classList.remove("active");
      }
    });
  }

  function toggleMenuBtn() {
    for (i = 0; i < menuBtn.children.length; i++) {
      menuBtn.children[i].classList.toggle("opened");
    }
  }

  // on initialization, highlight current active anchor in nav bar
  highlightHeaderSection(true);

  // Initialization of box shadow for nav bar
  if (window.scrollY > 0) {
    desktopNavCont.classList.add("shadow");
    mobileNavCont.classList.add("shadow");
  }

  const stopEventBubblings = [menuBtn, mobileNavCont, mobileMenuCont];
  for (let i = 0; i < stopEventBubblings.length; i++) {
    stopEventBubblings[i].addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  // Handle click on hamburger menu btn
  menuBtn.addEventListener("click", () => {
    toggleMenuBtn();
    mobileNavCont.classList.toggle("opened");
    mobileMenuCont.classList.toggle("opened");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", () => {
    if (mobileMenuCont.classList.contains("opened")) {
      mobileNavCont.classList.remove("opened");
      mobileMenuCont.classList.remove("opened");
      for (i = 0; i < menuBtn.children.length; i++) {
        menuBtn.children[i].classList.remove("opened");
      }
    }
  });

  // Close mobile menu when clicking on a mobile menu anchor
  for (let i = 0; i < mobileMenuAnchors.length; i++) {
    mobileMenuAnchors[i].addEventListener("click", () => {
      mobileNavCont.classList.remove("opened");
      mobileMenuCont.classList.remove("opened");
      for (i = 0; i < menuBtn.children.length; i++) {
        menuBtn.children[i].classList.remove("opened");
      }
    });
  }

  document.addEventListener("scroll", () => {
    // Add box shadow for nav bar on scroll
    if (window.scrollY > 0) {
      desktopNavCont.classList.add("shadow");
      mobileNavCont.classList.add("shadow");
    } else {
      desktopNavCont.classList.remove("shadow");
      mobileNavCont.classList.remove("shadow");
    }

    // Highlight active anchor in nav bar and in mobile menu
    highlightHeaderSection();
  });
});
