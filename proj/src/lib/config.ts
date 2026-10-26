export const SITE = {
  name: "Pão com Carne Hamburgueria",
  tagline: "Sem frescura. Com qualidade.",
  address: ["Rua Bandeira Paulista, 478", "Itaim Bibi, São Paulo — SP", "CEP 04532-002"],
} as const;

export const IFOOD_URL =
  "https://www.ifood.com.br/delivery/sao-paulo-sp/pao-com-carne-hamburgueria---itaim-bibi-itaim-bibi/7fc14644-0dfb-47b6-bc71-ad54b5409da8";

export const WHATSAPP_URL =
  "https://wa.me/5511945421719?text=" +
  encodeURIComponent("Olá! Acessei o site da Pão com Carne e gostaria de mais informações.");

export const INSTAGRAM_URL = "https://www.instagram.com/paocomcarne_hamburgueria/";

export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Rua%20Bandeira%20Paulista%2C%20478%2C%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004532-002";

export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Rua+Bandeira+Paulista,+478,+Itaim+Bibi,+S%C3%A3o+Paulo+-+SP,+04532-002&output=embed";

export const NAV_ITEMS = [
  { id: "historia", label: "História" },
  { id: "cardapio", label: "Cardápio" },
  { id: "avaliacoes", label: "Avaliações" },
  { id: "local", label: "Onde fica" },
] as const;
