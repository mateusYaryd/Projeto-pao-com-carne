import { Button } from "@/components/ui/Button";
import { Gotas } from "@/components/ui/Gotas";
import { PALETTES } from "@/components/ui/gotas-palettes";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { FEATURED_NAMES, findItem } from "@/data/menu";
import { IFOOD_URL } from "@/lib/config";

export function Featured() {
  const items = FEATURED_NAMES.map((n) => findItem(n)).filter((i): i is NonNullable<typeof i> => !!i && !!i.photo);
  return (
    <section aria-label="Destaques" className="relative overflow-clip px-4 py-24 sm:px-14 md:py-32">
      <Gotas palette={PALETTES.light} maxAlpha={0.14} />
      <div className="relative z-10">
        <WordReveal text="Os destaques" className="text-[clamp(34px,6vw,84px)]" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.name} as="article" delay={(i % 3) * 140} className="group flex flex-col border-[3px] border-ink bg-paper shadow-hard transition-shadow hover:shadow-[8px_14px_0_#B3261E]">
              <figure className="relative m-0 aspect-[4/5] overflow-hidden border-b-[3px] border-ink">
                <Photo name={it.photo!} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="transition-transform duration-700 group-hover:scale-105" />
              </figure>
              <div className="flex flex-1 flex-col items-start gap-2.5 p-5">
                <h3 className="text-[clamp(24px,2.4vw,34px)] text-brand">{it.name}</h3>
                <span className="-rotate-2 bg-mustard px-2.5 py-0.5 font-display text-lg">R$ {it.price}</span>
                <p className="m-0 flex-1">{it.description}</p>
                <Button href={IFOOD_URL} small>Peça no iFood</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
