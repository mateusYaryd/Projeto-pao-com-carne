# Pão com Carne — site (Next.js 14 · React 18 · TypeScript · Tailwind CSS)

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # verificação de tipos
npm run build && npm start
```

## Estrutura

```
public/images/…            fotos reais (JPEG otimizado)
public/videos/hero.mp4     vídeo do hero (sem marca-d'água, ~1 MB, sem áudio)
src/app/                   layout (fontes, metadata), página e globals.css (tokens de animação)
src/lib/config.ts          LINKS OFICIAIS: iFood, WhatsApp, mapa, endereço, navegação
src/lib/images.ts          catálogo de fotos + texto alternativo
src/data/menu.ts           cardápio (preços/descrições) e nomes dos destaques
src/data/reviews.ts        avaliações reais (adicione novas aqui)
src/data/history.ts        linha do tempo da história
src/hooks/                 useInView (entrada uma única vez), useActiveSection (menu)
src/components/ui/         Button, Photo, Reveal, WordReveal, Gotas (fundo metaballs)
src/components/layout/     Header, Footer, WhatsAppFloat
src/components/sections/   Hero, HeroVideo, History, Featured, Gallery, Menu, Reviews, Order, Location
```

## Para editar
- **Links de pedido/WhatsApp/mapa:** só em `src/lib/config.ts`.
- **Preços e itens:** `src/data/menu.ts` (os destaques usam o preço/descrição do cardápio).
- **Novas avaliações:** acrescente objetos em `src/data/reviews.ts` (somente textos reais). Com 3 ou mais, o carrossel horizontal por rolagem ativa sozinho.
- **Trocar o vídeo:** substitua `public/videos/hero.mp4` (use H.264, sem áudio) e, se quiser, `hero-poster.jpg`.

## Movimento e acessibilidade
- Entradas por `IntersectionObserver` (uma vez), palavra por palavra com transições CSS, máscara nas fotos.
- Fundo de gotas em Canvas: um laço por canvas, pausa fora da tela, estático com `prefers-reduced-motion`.
- O vídeo toca mesmo com "reduzir movimento" (loop de 5 s, mudo) e tem botão de pausar/reproduzir.
- Carrossel de avaliações: `sticky` + `translate3d`; em telas < 760 px vira fita com gesto horizontal.

## A conferir antes de publicar
- Associação foto ↔ lanche foi feita pela aparência (ver `src/data/menu.ts`, campo `photo`).
- Preços e itens vieram dos cardápios enviados; confirme com a loja.
- Os links (iFood, WhatsApp, mapa) devem ser testados no celular.
