function isInViewport(element) {
  // returns true if the whole element is inside the viewport on the vertical axis.
  const rect = element.getBoundingClientRect();
  const html = document.documentElement;
  return (
    rect.top >= 0 && rect.bottom <= (window.innerHeight || html.clientHeight)
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const annotate = RoughNotation.annotate;

  // pink highlight annotation
  const elementsToHighlightPink =
    document.getElementsByClassName("highlight-pink");

  const pinkAnnotations = [];
  for (let i = 0; i < elementsToHighlightPink.length; i++) {
    const pinkHighlight = annotate(elementsToHighlightPink[i], {
      type: "highlight",
      color: "var(--clr-accent-1)",
      multiline: true,
    });
    pinkAnnotations.push(pinkHighlight);
  }

  // purple highlight annotation
  const elementsToHighlightPurple =
    document.getElementsByClassName("highlight-purple");

  const purpleAnnotations = [];
  for (let i = 0; i < elementsToHighlightPurple.length; i++) {
    const purpleHighlight = annotate(elementsToHighlightPurple[i], {
      type: "highlight",
      color: "var(--clr-accent-2)",
      multiline: true,
    });
    purpleAnnotations.push(purpleHighlight);
  }

  // bracket annotation
  const reactSkillsGrid = document.getElementById("annotate-bracket");
  const bracketAnnotation = annotate(reactSkillsGrid, {
    type: "bracket",
    color: "var(--clr-text)",
    brackets: "left",
  });

  const elementsToAnnotate = Array.from(elementsToHighlightPink).concat(
    Array.from(elementsToHighlightPurple),
    [reactSkillsGrid]
  );
  const annotations = pinkAnnotations.concat(purpleAnnotations, [
    bracketAnnotation,
  ]);
  const isShowing = Array(elementsToAnnotate.length).fill(false);

  // Initialization - same code on scroll event
  for (let i = 0; i < elementsToAnnotate.length; i++) {
    if (!isShowing[i] && isInViewport(elementsToAnnotate[i])) {
      isShowing[i] = true;
      setTimeout(() => {
        annotations[i].hide();
        annotations[i].show();
      }, 1100);
    }
  }

  document.addEventListener("scroll", () => {
    for (let i = 0; i < elementsToAnnotate.length; i++) {
      if (!isShowing[i] && isInViewport(elementsToAnnotate[i])) {
        isShowing[i] = true;
        setTimeout(() => {
          annotations[i].hide();
          annotations[i].show();
        }, 1100);
      }
    }
  });
});

// 2 problems
// on refresh, not all elements to annotate that are in viewport, get annotated
// on refresh, on mobile, if i press directly on projects in mobile menu, i go there but elements
// are not highlighted
