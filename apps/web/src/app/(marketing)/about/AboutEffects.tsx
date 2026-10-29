"use client";

import { useEffect } from "react";

/* Small client-only helpers for /about: scroll reveal, count-up numbers and carousel arrows.
   Content is fully rendered on the server; this only adds motion. */
export default function AboutEffects() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".ab");
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // carousel
    const track = root.querySelector<HTMLElement>("#ab-track");
    const prev = root.querySelector<HTMLButtonElement>("#ab-prev");
    const next = root.querySelector<HTMLButtonElement>("#ab-next");
    if (track && prev && next) {
      const step = () => {
        const card = track.querySelector<HTMLElement>(".fc");
        const gap = parseFloat(getComputedStyle(track).columnGap || "28") || 28;
        return card ? card.getBoundingClientRect().width + gap : 300;
      };
      const update = () => {
        prev.disabled = track.scrollLeft < 4;
        next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      };
      const onPrev = () => track.scrollBy({ left: -step(), behavior: reduce ? "auto" : "smooth" });
      const onNext = () => track.scrollBy({ left: step(), behavior: reduce ? "auto" : "smooth" });
      prev.addEventListener("click", onPrev);
      next.addEventListener("click", onNext);
      track.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      update();
      cleanups.push(() => {
        prev.removeEventListener("click", onPrev);
        next.removeEventListener("click", onNext);
        track.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      });
    }

    if (reduce || !("IntersectionObserver" in window)) {
      return () => cleanups.forEach((f) => f());
    }

    // reveal on scroll (only hide once JS is running)
    root.classList.add("js");
    const els = Array.from(root.querySelectorAll<HTMLElement>(".rv"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((e) => io.observe(e));

    // count-up
    const io2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io2.unobserve(e.target);
          const el = e.target as HTMLElement;
          const to = parseFloat(el.dataset.to || "0");
          const dec = Number(el.dataset.dec || 0);
          const pre = el.dataset.pre || "";
          let t0: number | null = null;
          const tick = (ts: number) => {
            if (t0 === null) t0 = ts;
            let k = Math.min(1, (ts - t0) / 1400);
            k = 1 - Math.pow(1 - k, 3);
            el.textContent = pre + (to * k).toFixed(dec);
            if (k < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 },
    );
    root.querySelectorAll<HTMLElement>(".cu").forEach((c) => io2.observe(c));

    cleanups.push(() => {
      io.disconnect();
      io2.disconnect();
      root.classList.remove("js");
    });
    return () => cleanups.forEach((f) => f());
  }, []);

  return null;
}
