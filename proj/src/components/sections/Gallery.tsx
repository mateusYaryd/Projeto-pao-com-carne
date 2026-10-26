import { Gotas, PALETTES } from "@/components/ui/Gotas";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import type { ImgKey } from "@/lib/images";

interface Shot { photo: ImgKey; area: string; ratio: string; tag?: string }

const SHOTS: Shot[] = [
  { photo: "burgersDeCima", area: "md:col-start-1 md:row-start-2 md:row-span-2", ratio: "aspect-[4/5] md:aspect-auto md:min-h-[460px]", tag: "Sem frescura." },
  { photo: "burgerCogumelos", area: "md:col-start-2 md:row-start-2", ratio: "aspect-[4/5]" },
  { photo: "burgerCesta", area: "md:col-start-3 md:row-start-2", ratio: "aspect-[4/5]" },
  { photo: "burgerCebolaBacon", area: "md:col-start-2 md:col-span-2 md:row-start-3", ratio: "aspect-[16/10] md:aspect-[2/1]" },
  { photo: "burgerDuasMaos", area: "md:col-start-1 md:row-start-4", ratio: "aspect-[4/3] md:aspect-square" },
  { photo: "doisBurgers", area: "md:col-start-2 md:col-span-2 md:row-start-4", ratio: "aspect-[4/3] md:aspect-[2/1]" },
];

export function Gallery() {
  return (
    <section aria-label="Fotos" className="relative grid gap-5 overflow-clip bg-ink px-4 py-24 text-cream sm:px-14 md:grid-cols-[1.25fr_1fr_1fr] md:gap-10 md:py-32">
      <Gotas palette={PALETTES.dark} maxAlpha={0.4} />
      <WordReveal text="Direto da chapa" className="relative z-10 text-[clamp(34px,6vw,84px)] md:col-span-3" />
      {SHOTS.map((s, i) => (
        <Reveal key={s.photo} variant="mask" delay={(i % 3) * 120} className={`relative z-10 ${s.area}`}>
          <figure className={`relative m-0 h-full overflow-hidden border-[3px] border-mustard ${s.ratio}`}>
            <Photo name={s.photo} sizes="(max-width: 768px) 100vw, 40vw" />
            {s.tag && <span className="absolute bottom-3.5 left-3.5 -rotate-3 border-2 border-ink bg-mustard px-3.5 py-1.5 font-display text-lg text-brand">{s.tag}</span>}
          </figure>
        </Reveal>
      ))}
    </section>
  );
}
