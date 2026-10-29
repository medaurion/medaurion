"use client";

import { useEffect } from "react";

/* Carousel arrows for /about. Content is fully server-rendered; this only adds button behaviour. */
export default function AboutEffects() {
  useEffect(() => {
    const track = document.getElementById("ab-trk");
    const prev = document.getElementById("ab-pv") as HTMLButtonElement | null;
    const next = document.getElementById("ab-nx") as HTMLButtonElement | null;
    if (!track || !prev || !next) return;

    const step = () => {
      const card = track.querySelector<HTMLElement>(".cd");
      const gap = parseFloat(getComputedStyle(track).columnGap || "28") || 28;
      return card ? card.offsetWidth + gap : 300;
    };
    const update = () => {
      prev.disabled = track.scrollLeft < 4;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    };
    const onPrev = () => track.scrollBy({ left: -step() });
    const onNext = () => track.scrollBy({ left: step() });

    prev.addEventListener("click", onPrev);
    next.addEventListener("click", onNext);
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      prev.removeEventListener("click", onPrev);
      next.removeEventListener("click", onNext);
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}
