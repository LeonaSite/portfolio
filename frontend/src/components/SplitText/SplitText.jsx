import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SplitText = ({
  text = "",
  className = "",
  delay = 50,
  duration = 1,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    container.innerHTML = "";

    const elements = [];

    if (splitType === "words") {
      // =========================
      // WORD ANIMATION
      // =========================

      const words = text.trim().split(/\s+/);

      words.forEach((word, index) => {
        const span = document.createElement("span");

        span.textContent = word;
        span.style.display = "inline-block";

        if (index < words.length - 1) {
          span.style.marginRight = "0.25em";
        }

        container.appendChild(span);
        elements.push(span);
      });
    } else {
      // =========================
      // CHARACTER ANIMATION
      // KEEP WORDS TOGETHER
      // =========================

      const words = text.trim().split(/\s+/);

      words.forEach((word, wordIndex) => {
        // Word wrapper prevents the word from being split
        const wordWrapper = document.createElement("span");

        wordWrapper.style.display = "inline-block";
        wordWrapper.style.whiteSpace = "nowrap";

        [...word].forEach((char) => {
          const charSpan = document.createElement("span");

          charSpan.textContent = char;
          charSpan.style.display = "inline-block";

          wordWrapper.appendChild(charSpan);
          elements.push(charSpan);
        });

        // Space between words
        if (wordIndex < words.length - 1) {
          wordWrapper.style.marginRight = "0.25em";
        }

        container.appendChild(wordWrapper);
      });
    }

    // =========================
    // ANIMATION
    // =========================

    gsap.fromTo(elements, from, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      onComplete: onLetterAnimationComplete,
    });

    return () => {
      gsap.killTweensOf(elements);
    };
  }, [text, delay, duration, ease, splitType, onLetterAnimationComplete]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        overflow: "hidden",
      }}
    />
  );
};

export default SplitText;
