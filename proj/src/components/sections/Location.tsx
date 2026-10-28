import { Button } from "@/components/ui/Button";
import { Gotas } from "@/components/ui/Gotas";
import { PALETTES } from "@/components/ui/gotas-palettes";
import { Reveal } from "@/components/ui/Reveal";
import { WordReveal } from "@/components/ui/WordReveal";
import { MAPS_DIRECTIONS_URL, MAPS_EMBED_URL, SITE } from "@/lib/config";

export function Location() {
  return (
    <section id="local" className="relative grid items-center gap-12 overflow-clip px-4 py-24 sm:px-14 md:grid-cols-[.8fr_1.2fr] md:py-32">
      <Gotas palette={PALETTES.light} maxAlpha={0.14} />
      <div className="relative z-10">
        <WordReveal text="Onde fica" className="text-[clamp(34px,6vw,84px)]" />
        <address className="my-6 text-[clamp(18px,2vw,24px)] not-italic">
          {SITE.address.map((l) => <span key={l} className="block">{l}</span>)}
        </address>
        <Button href={MAPS_DIRECTIONS_URL}>Como chegar</Button>
      </div>
      <Reveal className="relative z-10 aspect-square border-[3px] border-ink bg-paper shadow-hard-lg md:aspect-[4/3]">
        <iframe
          title="Localização da Pão com Carne no Google Maps"
          src={MAPS_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="block h-full w-full border-0"
        />
      </Reveal>
    </section>
  );
}
