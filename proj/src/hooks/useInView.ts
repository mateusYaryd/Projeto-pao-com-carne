"use client";
import { useEffect, useState, type RefObject } from "react";

/** Retorna true (uma única vez) quando o elemento entra na área visível. */
export function useInView<T extends Element>(
  ref: RefObject<T>,
  { threshold = 0.15, rootMargin = "0px 0px -6% 0px" } = {},
): boolean {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setSeen(true); return; }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold, rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold, rootMargin]);
  return seen;
}
