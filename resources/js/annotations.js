document.addEventListener("DOMContentLoaded", () => {
  const annotate = RoughNotation.annotate;

  // collecting elements to be highlighted in pink
  const elementsToHighlightPink =
    document.getElementsByClassName("highlight-pink");

  for (let i = 0; i < elementsToHighlightPink.length; i++) {
    const pinkHighlight = annotate(elementsToHighlightPink[i], {
      type: "highlight",
      color: "var(--clr-accent-1)",
    });
    pinkHighlight.show();
  }
});
