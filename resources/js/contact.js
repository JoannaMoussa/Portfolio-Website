document.addEventListener("DOMContentLoaded", () => {
  //clipboard api
  const copyBtn = document.getElementById("copy-btn");

  copyBtn.addEventListener("click", () => {
    const email = copyBtn.getAttribute("data-email");
    navigator.clipboard.writeText(email).then(
      () => {
        //console.log("Async: Copying to clipboard was successful!");
        copyBtn.classList.add("success-opacity");
        copyBtn.classList.add("success-text");
        setTimeout(() => {
          copyBtn.classList.remove("success-opacity");
        }, 1000);
        setTimeout(() => {
          copyBtn.classList.remove("success-text");
        }, 1500);
      },
      (err) => {
        console.error("Async: Could not copy text: ", err);
      }
    );
  });

  // Contact section hover
  const annotate = RoughNotation.annotate;

  const mailContainer = document.getElementById("mail-cont");
  const emailText = document.getElementById("email-txt");
  const linkedinContainer = document.getElementById("linkedin-a-cont");
  const linkedinText = document.getElementById("linkedin-txt");

  // Create annotations
  const emailTextHighlight = annotate(emailText, {
    type: "highlight",
    color: "var(--clr-accent-1)",
  });

  const linkedinTextHighlight = annotate(linkedinText, {
    type: "highlight",
    color: "var(--clr-accent-1)",
  });

  // Show and hide the annotations
  mailContainer.addEventListener("mouseenter", () => {
    emailTextHighlight.show();
  });

  mailContainer.addEventListener("mouseleave", () => {
    emailTextHighlight.hide();
  });

  linkedinContainer.addEventListener("mouseenter", () => {
    linkedinTextHighlight.show();
  });

  linkedinContainer.addEventListener("mouseleave", () => {
    linkedinTextHighlight.hide();
  });
});
