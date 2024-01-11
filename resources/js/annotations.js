function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const annotate = RoughNotation.annotate;

  // pink highlight annotation
  const elementsToHighlightPink =
    document.getElementsByClassName("highlight-pink");

  for (let i = 0; i < elementsToHighlightPink.length; i++) {
    const pinkHighlight = annotate(elementsToHighlightPink[i], {
      type: "highlight",
      color: "var(--clr-accent-1)",
      multiline: true,
    });
    pinkHighlight.show();
  }

  // purple highlight annotation
  const elementsToHighlightPurple =
    document.getElementsByClassName("highlight-purple");

  for (let i = 0; i < elementsToHighlightPurple.length; i++) {
    const purpleHighlight = annotate(elementsToHighlightPurple[i], {
      type: "highlight",
      color: "var(--clr-accent-2)",
      multiline: true,
    });
    purpleHighlight.show();
  }

  // bracket annotation
  const reactSkillsGrid = document.getElementById("annotate-bracket");

  const bracketAnnotation = annotate(reactSkillsGrid, {
    type: "bracket",
    color: "var(--clr-text)",
    brackets: "left",
  });

  if (isInViewport(reactSkillsGrid)) {
    bracketAnnotation.hide();
    bracketAnnotation.show();
  }

  document.addEventListener("scroll", () => {
    if (!bracketAnnotation.isShowing() && isInViewport(reactSkillsGrid)) {
      bracketAnnotation.hide();
      bracketAnnotation.show();
    }
  });
});
