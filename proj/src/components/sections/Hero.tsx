import { Button } from "@/components/ui/Button";
import { HeroVideo } from "./HeroVideo";
import { IFOOD_URL, WHATSAPP_URL } from "@/lib/config";

/** Primeira dobra: vídeo em tela cheia (bloco normal do documento, não fixo), logo/menu no Header e três ações. */
export function Hero() {
  return (
    <header id="inicio" className="relative h-svh min-h-screen overflow-hidden bg-ink">
      <HeroVideo />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
      <div className="absolute bottom-6 left-4 right-[88px] z-10 flex flex-wrap gap-2 sm:bottom-8 sm:left-14 sm:gap-4">
        <Button href="#cardapio">Ver cardápio</Button>
        <Button href={IFOOD_URL} variant="dark">Peça no iFood</Button>
        <Button href={WHATSAPP_URL} variant="ghost">WhatsApp</Button>
      </div>
    </header>
  );
}
