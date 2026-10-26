"use client";
import { useEffect, useRef } from "react";

interface Blob { x: number; y: number; vx: number; vy: number; k: number; r: number; c: [number, number, number]; }

interface GotasProps {
  /** cores em hexadecimal (#RRGGBB) */
  palette: string[];
  /** opacidade máxima (0–1). Mantenha baixa para não competir com o conteúdo. */
  maxAlpha?: number;
}

const hexToRgb = (h: string): [number, number, number] => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)) as [number, number, number];

/**
 * Fundo de gotas que se fundem (metaballs). O campo é calculado em baixa resolução
 * e ampliado pelo navegador; um único laço por canvas, pausado fora da tela e
 * estático quando o usuário prefere menos movimento. O pai precisa ser `relative`.
 */
export function Gotas({ palette, maxAlpha = 0.16 }: GotasProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    const host = cv?.parentElement;
    const ctx = cv?.getContext("2d");
    if (!cv || !host || !ctx) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const low = (navigator.hardwareConcurrency || 4) <= 4 || innerWidth < 700;
    const N = low ? 4 : 6;
    const STEP = low ? 14 : 9;
    const rgb = palette.map(hexToRgb);
    let W = 0, H = 0, img: ImageData | null = null, blobs: Blob[] = [], raf = 0;

    const size = () => {
      const w = Math.max(8, Math.round(host.clientWidth / STEP));
      const h = Math.max(8, Math.round(host.clientHeight / STEP));
      if (w === W && h === H) return;
      if (blobs.length) blobs.forEach((o) => { o.x *= w / W; o.y *= h / H; o.r = Math.min(w, h) * o.k; });
      else blobs = Array.from({ length: N }, (_, i) => {
        const k = 0.16 + Math.random() * 0.14;
        return { x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.09, vy: (Math.random() - 0.5) * 0.09, k, r: Math.min(w, h) * k, c: rgb[i % rgb.length] };
      });
      W = w; H = h; cv.width = W; cv.height = H; img = ctx.createImageData(W, H);
    };

    const draw = () => {
      if (!img) return;
      const d = img.data;
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        let f = 0, r = 0, g = 0, b = 0;
        for (const o of blobs) {
          const dx = x - o.x, dy = y - o.y, k = (o.r * o.r) / (dx * dx + dy * dy + 1);
          f += k; r += o.c[0] * k; g += o.c[1] * k; b += o.c[2] * k;
        }
        let a = (f - 0.8) / 0.5; a = a < 0 ? 0 : a > 1 ? 1 : a; a = a * a * (3 - 2 * a);
        const p = (y * W + x) * 4;
        d[p] = r / f; d[p + 1] = g / f; d[p + 2] = b / f; d[p + 3] = a * maxAlpha * 255;
      }
      ctx.putImageData(img, 0, 0);
    };

    const loop = () => {
      for (const o of blobs) {
        o.x += o.vx; o.y += o.vy;
        if (o.x < 0 || o.x > W) o.vx *= -1;
        if (o.y < 0 || o.y > H) o.vy *= -1;
      }
      draw();
      raf = requestAnimationFrame(loop);
    };
    const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } };

    size(); draw();
    const ro = new ResizeObserver(() => { size(); draw(); });
    ro.observe(host);
    const io = new IntersectionObserver(([e]) => {
      if (reduce) return;
      if (e.isIntersecting) { if (!raf) loop(); } else stop();
    });
    io.observe(host);

    return () => { stop(); ro.disconnect(); io.disconnect(); };
  }, [palette, maxAlpha]);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full" />;
}

export const PALETTES: Record<"light" | "dark" | "red", string[]> = {
  light: ["#B3261E", "#F9C80E"],
  dark: ["#B3261E", "#F9C80E", "#7a1a14"],
  red: ["#4A1210", "#8E1B15"],
};
