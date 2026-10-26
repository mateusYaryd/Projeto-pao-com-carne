"use client";
import { useEffect, useRef, useState } from "react";
import { IMG } from "@/lib/images";

/**
 * Vídeo de fundo do hero: autoplay, mudo, em loop, sem controles nativos.
 * Pausa fora da tela, mantém o poster se falhar e oferece um botão de pausar/reproduzir
 * (também útil quando o navegador bloqueia o autoplay).
 */
export function HeroVideo({ src = "/videos/hero.mp4" }: { src?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => undefined);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { if (!userPaused.current) v.play().catch(() => undefined); }
      else v.pause();
    }, { threshold: 0.05 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { userPaused.current = false; v.play().catch(() => undefined); }
    else { userPaused.current = true; v.pause(); }
  };

  return (
    <>
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover object-center"
        src={src}
        poster={IMG.heroPoster.src}
        autoPlay muted loop playsInline preload="metadata"
        aria-hidden="true" tabIndex={-1}
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setFailed(true)}
      />
      {!failed && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
          className="absolute bottom-[92px] right-6 z-20 h-11 w-11 rounded-full border-2 border-cream bg-black/45 text-sm font-semibold text-cream backdrop-blur-md transition-colors hover:bg-black/70 sm:bottom-9 sm:right-[92px]"
        >
          {playing ? "❚❚" : "▶"}
        </button>
      )}
    </>
  );
}
