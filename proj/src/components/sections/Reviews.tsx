"use client";
import { useEffect, useRef } from "react";
import { WordReveal } from "@/components/ui/WordReveal";
import { REVIEWS, type Review } from "@/data/reviews";

function ReviewCard({ r }: { r: Review }) {
  return (
    <article className="flex w-[clamp(290px,30vw,430px)] flex-none snap-start flex-col gap-3.5 border-[3px] border-mustard bg-cream p-6 text-ink shadow-[8px_8px_0_#B3261E] transition-transform duration-500 hover:-translate-y-1.5">
      <header className="flex items-center gap-3.5">
        <div className="grid h-12 w-12 flex-none place-items-center rounded-full bg-brand font-display text-[22px] text-cream" aria-hidden="true">{r.name[0]}</div>
        <div>
          <b className="block text-[19px]">{r.name}</b>
          <small className="opacity-75">{r.profile}</small>
        </div>
      </header>
      <div className="text-xl tracking-[2px] text-[#C98F00]" aria-label={`${r.stars} de 5 estrelas`}>
        {"★".repeat(r.stars)}
        <span className="ml-2 text-sm tracking-normal text-ink/75">{r.when}</span>
      </div>
      <div className="-mt-1.5 text-sm opacity-75">{r.meal}</div>
      <p className="m-0 whitespace-pre-line text-[15.5px] leading-relaxed">{r.text}</p>
      <ul className="mt-auto flex list-none flex-wrap gap-2 border-t-2 border-dotted border-ink p-0 pt-3">
        {r.tags.map((t) => <li key={t} className="bg-mustard px-2.5 py-1 text-sm font-semibold">{t}</li>)}
      </ul>
      <div className="text-[13px] opacity-70">Avaliação de cliente</div>
    </article>
  );
}

/**
 * Galeria horizontal controlada pela rolagem: o painel fica `sticky` enquanto a fita
 * é deslocada com translate3d proporcionalmente ao progresso. O percurso é calculado
 * pela largura real da fita. Em telas pequenas, com poucas avaliações ou com
 * "reduzir movimento", vira uma fita rolável por gesto.
 */
export function Reviews() {
  const track = useRef<HTMLDivElement>(null);
  const palco = useRef<HTMLDivElement>(null);
  const fita = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = track.current, p = palco.current, f = fita.current, b = bar.current;
    if (!t || !p || !f || !b) return;
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    let sticky = false, travel = 0, raf = 0, listening = false;

    const update = () => {
      raf = 0;
      if (!sticky) return;
      const prog = Math.min(1, Math.max(0, -t.getBoundingClientRect().top / Math.max(1, travel)));
      f.style.transform = `translate3d(${-prog * travel}px,0,0)`;
      b.style.transform = `scaleX(${prog})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const layout = () => {
      sticky = REVIEWS.length >= 3 && !mq.matches && innerWidth > 760;
      t.classList.toggle("is-sticky", sticky);
      if (!sticky) { t.style.height = ""; f.style.transform = ""; return; }
      const pad = parseFloat(getComputedStyle(f).paddingRight) || 0;
      travel = Math.max(0, f.scrollWidth - p.clientWidth + pad);
      t.style.height = `${p.offsetHeight + travel}px`;
      update();
    };

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !listening) { addEventListener("scroll", onScroll, { passive: true }); listening = true; update(); }
      else if (!e.isIntersecting && listening) { removeEventListener("scroll", onScroll); listening = false; }
    }, { rootMargin: "200px" });
    io.observe(t);
    const ro = new ResizeObserver(layout);
    ro.observe(p);
    addEventListener("resize", layout);
    layout();

    return () => {
      io.disconnect(); ro.disconnect();
      removeEventListener("scroll", onScroll); removeEventListener("resize", layout);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="avaliacoes" className="bg-ink text-cream">
      <div ref={track} className="rev-track">
        <div ref={palco} className="rev-palco">
          <div className="px-4 sm:px-14">
            <WordReveal text="Quem prova, recomenda." className="text-[clamp(34px,5vw,68px)]" />
            <p className="mt-3.5 max-w-[46ch] opacity-85">Experiências reais de quem já sentou à mesa com a gente.</p>
            <p aria-hidden="true" className="mt-4 text-[15px] font-semibold text-mustard">
              <span className="hint-dk">Continue rolando para ver mais</span>
              <span className="hint-mb">Deslize para o lado para ver mais</span> →
            </p>
          </div>
          <div ref={fita} className={`rev-fita ${REVIEWS.length < 3 ? "justify-center" : ""}`}>
            {REVIEWS.map((r) => <ReviewCard key={r.name} r={r} />)}
          </div>
          <i ref={bar} aria-hidden="true" className="rev-bar mx-4 block h-1 origin-left scale-x-0 bg-mustard sm:mx-14" />
        </div>
      </div>
    </section>
  );
}
