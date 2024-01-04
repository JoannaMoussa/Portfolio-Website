document.addEventListener("DOMContentLoaded", () => {
  const annotate = RoughNotation.annotate;

  // pink highlight
  const elementsToHighlightPink = [];

  const greetingTitleMobile = document.getElementById("greeting-title-mobile");
  elementsToHighlightPink.push(greetingTitleMobile);
  const greetingTitleDesktop = document.getElementById(
    "greeting-title-desktop"
  );
  elementsToHighlightPink.push(greetingTitleDesktop);

  for (let i = 0; i < elementsToHighlightPink.length; i++) {
    const pinkHighlight = annotate(elementsToHighlightPink[i], {
      type: "highlight",
      color: "var(--clr-accent-1)",
    });
    pinkHighlight.show();
  }
});
