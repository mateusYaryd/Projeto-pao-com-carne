"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Gotas, PALETTES } from "@/components/ui/Gotas";
import { Photo } from "@/components/ui/Photo";
import { WordReveal } from "@/components/ui/WordReveal";
import { MENU, type MenuCategory } from "@/data/menu";
import { IFOOD_URL } from "@/lib/config";
import { cn } from "@/lib/cn";

function Pane({ cat }: { cat: MenuCategory }) {
  return (
    <div role="tabpanel" id={`pane-${cat.id}`} aria-labelledby={`tab-${cat.id}`} className="grid animate-[fadeUp_.6s_var(--ease)_both] gap-10 md:grid-cols-[.8fr_1.2fr]">
      <div className="max-w-[380px]">
        <div className="-rotate-1 border-[3px] border-ink bg-mustard p-6 font-display text-[clamp(20px,2.6vw,32px)] leading-tight text-brand">
          {cat.title}
          {cat.note && <small className="mt-3 block font-body text-[15px] leading-snug text-ink">{cat.note}</small>}
        </div>
      </div>
      <div>
        {cat.items.map((it, i) => (
          <div
            key={it.name}
            style={{ animationDelay: `${i * 70}ms` }}
            className={cn(
              "animate-[fadeUp_.6s_var(--ease)_both] border-b-2 border-dotted border-ink py-4 transition-[padding] duration-300",
              it.photo && "grid grid-cols-[96px_1fr] items-start gap-4",
              cat.highlight ? "-mx-4 border-0 bg-mustard px-4" : "hover:pl-2.5",
            )}
          >
            {it.photo && (
              <div className="relative h-24 w-24 border-2 border-ink"><Photo name={it.photo} sizes="96px" alt={it.name} /></div>
            )}
            <div>
              <div className="flex items-baseline gap-3">
                <h3 className="flex-1 text-[clamp(20px,2.4vw,28px)]">{it.name}</h3>
                <span className="font-display text-[clamp(20px,2.4vw,28px)] text-brand">R$ {it.price}</span>
              </div>
              {it.description && <p className="mt-2 max-w-[60ch]">{it.description}</p>}
              {it.description && it.price >= 29 && <Button href={IFOOD_URL} small className="mt-3">Peça no iFood</Button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const cat = MENU.find((c) => c.id === active) ?? MENU[0];
  return (
    <section id="cardapio" className="relative overflow-clip bg-paper px-4 py-24 sm:px-14 md:py-32">
      <Gotas palette={PALETTES.light} maxAlpha={0.14} />
      <div className="relative z-10">
        <WordReveal text="Cardápio" className="text-[clamp(34px,6vw,84px)]" />
        <div role="tablist" aria-label="Categorias do cardápio" className="my-9 flex flex-wrap gap-2.5">
          {MENU.map((c) => (
            <button
              key={c.id}
              id={`tab-${c.id}`}
              role="tab"
              aria-selected={c.id === active}
              aria-controls={`pane-${c.id}`}
              onClick={() => setActive(c.id)}
              className={cn(
                "cursor-pointer rounded-[4px] border-2 border-ink px-4 py-2 font-body text-base font-semibold transition-colors hover:bg-mustard",
                c.id === active && "bg-ink text-cream hover:bg-ink",
              )}
            >
              {c.tab}
            </button>
          ))}
        </div>
        <Pane key={cat.id} cat={cat} />
        <p className="mt-5 max-w-[60ch] text-sm">Valores e itens conforme os cardápios enviados; confirme preços e disponibilidade antes de publicar.</p>
      </div>
    </section>
  );
}
