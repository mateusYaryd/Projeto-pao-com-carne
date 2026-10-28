import { Gotas } from "@/components/ui/Gotas";
import { PALETTES } from "@/components/ui/gotas-palettes";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { HISTORY_STEPS } from "@/data/history";

export function History() {
  return (
    <section id="historia" className="relative grid gap-12 overflow-clip px-4 py-24 sm:px-14 md:grid-cols-[1fr_1.1fr] md:py-32">
      <Gotas palette={PALETTES.light} maxAlpha={0.16} />
      <Reveal variant="mask" className="relative z-10 self-start md:max-w-[520px]">
        <figure className="relative m-0 aspect-[3/4] border-[3px] border-ink shadow-hard-lg">
          <Photo name="ambiente" sizes="(max-width: 768px) 100vw, 520px" />
          <figcaption className="absolute -left-3 bottom-6 -rotate-2 border-2 border-ink bg-mustard px-3.5 py-1.5 font-display text-[15px]">
            O ambiente da casa
          </figcaption>
        </figure>
      </Reveal>
      <div className="relative z-10">
        <WordReveal text="Da portinha à referência" className="mb-10 text-[clamp(34px,6vw,84px)]" />
        <ol className="m-0 list-none border-l-4 border-brand p-0">
          {HISTORY_STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 140} className="relative pb-8 pl-6 before:absolute before:-left-3 before:top-1.5 before:h-5 before:w-5 before:rounded-full before:border-[3px] before:border-brand before:bg-mustard before:content-['']">
              <b className="mb-1.5 block font-display text-[clamp(20px,2.4vw,30px)] font-normal leading-tight text-brand">{s.title}</b>
              {s.text}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
