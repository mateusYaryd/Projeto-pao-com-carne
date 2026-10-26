import type { ImgKey } from "@/lib/images";

export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  photo?: ImgKey;
}
export interface MenuCategory {
  id: string;
  tab: string;
  title: string;
  note?: string;
  highlight?: boolean;
  items: MenuItem[];
}

/** Itens e preços transcritos dos cardápios enviados. Confirme valores antes de publicar. */
export const MENU: MenuCategory[] = [
  {
    id: "smash", tab: "Smashs", title: "Burgers Smash",
    note: "*Para tostar nosso pão, utilizamos parte de gordura suína. Em caso de restrição, por favor nos avise!",
    items: [
      { name: "Double Fake Smash", price: 37, photo: "doubleFake", description: "Pão branco, 2 smashs de carne bovina de 90g, cheddar, alface, cebola e molho fake." },
      { name: "Quarteirola", price: 37, photo: "quarteirola", description: "Pão com gergelim, 2 smashs de carne bovina de 90g, queijo cheddar e prato, cebola, picles e molho quarteirola." },
    ],
  },
  {
    id: "burgers", tab: "Burgers 180g", title: "Burgers 180g",
    items: [
      { name: "Cheese Bacon", price: 40, description: "180g de carne bovina, queijo, bacon e cebola caramelizada." },
      { name: "Cheese Burger", price: 32, description: "180g de carne bovina e queijo." },
      { name: "Cheese Salada", price: 36, description: "180g de carne bovina, queijo, alface e tomate." },
      { name: "Hambúrguer", price: 29, description: "180g de carne bovina." },
      { name: "Especial", price: 42, photo: "especial", description: "180g de carne bovina, pão de batata, maionese de páprica, cebola roxa, bacon, american cheese e picles." },
    ],
  },
  {
    id: "chimichurri", tab: "Família Chimichurri", title: "Família Chimichurri", highlight: true,
    note: "Maionese de chimichurri em cada um deles.",
    items: [
      { name: "Chimichicken Jr.", price: 36, photo: "chimichickenJr", description: "Pão de gergelim, empanado de frango de aproximadamente 100g, maionese de chimichurri e alface slice." },
      { name: "Meu Mano Chimichurri", price: 42, photo: "meuMano", description: "180g de carne bovina, pão de gergelim, queijo prato, maionese de chimichurri, bacon, cebola e tomate grelhado." },
      { name: "Chimibacon", price: 42, photo: "chimibacon", description: "Antigo “Especial 8 anos”. Pão de gergelim, carne 180g, cheddar, maionese de chimichurri, cebola caramelizada e bacon em cubos." },
    ],
  },
  {
    id: "vegetariano", tab: "Vegetariano", title: "Vegetariano",
    items: [{ name: "Pão sem Carne", price: 41, description: "Burger vegetal à base de soja, pão de gergelim, american cheese, sweet picles, cebola picada, tomate, alface e molho especial." }],
  },
  {
    id: "entradas", tab: "Entradas", title: "Entradas",
    items: [
      { name: "Fritas grande", price: 24 },
      { name: "Fritas pequena", price: 16 },
      { name: "Batata da Casa", price: 39, photo: "batataDaCasa", description: "Molho de queijo feito por nós, bacon picado, parmesão e cebolinha." },
      { name: "Nuggets", price: 27, description: "10 unidades. Acompanha maionese." },
      { name: "Almofadas de queijo gouda", price: 35, photo: "almofadasDeQueijo", description: "10 unidades. Acompanha molho caseiro de tomate." },
    ],
  },
  {
    id: "extras", tab: "Extras", title: "Extras",
    note: "Maionese livre! Na loja, querendo mais, é só pedir.",
    items: [
      { name: "Bacon", price: 7 }, { name: "Salada", price: 5 }, { name: "Cebola caramelizada", price: 3 },
      { name: "Picles", price: 3 }, { name: "Molho fake", price: 5 }, { name: "Cebola roxa", price: 3 },
      { name: "Tomate grelhado", price: 4 }, { name: "Queijo extra", price: 5 }, { name: "Cebola grelhada", price: 4 },
    ],
  },
];

/** Destaques: referenciam itens do cardápio pelo nome (preço e descrição vêm de lá). */
export const FEATURED_NAMES = [
  "Double Fake Smash", "Quarteirola", "Especial", "Meu Mano Chimichurri", "Chimichicken Jr.", "Chimibacon",
] as const;

export function findItem(name: string): MenuItem | undefined {
  for (const c of MENU) for (const i of c.items) if (i.name === name) return i;
  return undefined;
}
