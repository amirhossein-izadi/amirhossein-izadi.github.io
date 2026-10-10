"use client";

import { SITE } from "@/lib/constants";

const AI_BURST_COUNT = 18;

export function NavName() {
  const handleClick = () => {
    if (typeof window === "undefined") return;

    const elements: HTMLSpanElement[] = [];
    for (let index = 0; index < AI_BURST_COUNT; index += 1) {
      const element = document.createElement("span");
      element.textContent = "AI";
      element.className =
        "pointer-events-none fixed z-50 select-none font-serif text-sm font-semibold text-brand";
      element.style.left = `${Math.random() * window.innerWidth}px`;
      element.style.top = `${Math.random() * window.innerHeight}px`;
      element.style.animation = `float-ai ${1.8 + Math.random() * 1.4}s ease-out forwards`;
      document.body.appendChild(element);
      elements.push(element);
    }

    window.setTimeout(() => {
      elements.forEach((element) => element.remove());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1600);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title="Take me home"
      className="rounded-md font-serif text-base font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {SITE.name}
    </button>
  );
}
