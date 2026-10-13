"use client";

import { useState } from "react";

import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AI_BURST_COUNT = 18;
const BURST_MS = 1600;

export function NavName() {
  const [bursting, setBursting] = useState(false);

  const handleClick = () => {
    if (typeof window === "undefined") return;

    setBursting(true);

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
      setBursting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, BURST_MS);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title="Take me home"
      className="rounded-md font-serif text-base font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {SITE.name.split(" ").map((word, wordIndex) => (
        <span key={word}>
          {wordIndex > 0 ? " " : ""}
          <span className={cn(bursting && "font-bold")}>{word.charAt(0)}</span>
          {word.slice(1)}
        </span>
      ))}
    </button>
  );
}
