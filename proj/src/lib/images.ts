export type ImgKey = keyof typeof IMG;

/** Todas as fotos reais ficam em /public/images. Alt descreve o que aparece na foto. */
export const IMG = {
  logo: { src: "/images/logo.jpg", alt: "Pão com Carne Hamburgueria" },
  burgerNaMao: { src: "/images/burger-na-mao.jpg", alt: "Hambúrguer com bacon e queijo derretido, segurado com a mão, com fritas ao fundo" },
  burgerCesta: { src: "/images/burger-cesta.jpg", alt: "Hambúrguer com cheddar, cebola e picles ao lado de fritas" },
  burgersDeCima: { src: "/images/burgers-de-cima.jpg", alt: "Quatro hambúrgueres em cestas com fritas, vistos de cima" },
  burgerCogumelos: { src: "/images/burger-cogumelos.jpg", alt: "Hambúrguer com molho cremoso, cogumelos e bacon" },
  entradas: { src: "/images/entradas.jpg", alt: "Fritas, nuggets e almofadas de queijo em cestas, com um copo de bebida" },
  cheesecake: { src: "/images/cheesecake.jpg", alt: "Fatia de cheesecake com calda de caramelo" },
  especial: { src: "/images/especial.jpg", alt: "Hambúrguer com molho laranja, bacon, cebola roxa, picles e queijo" },
  quarteirola: { src: "/images/quarteirola.jpg", alt: "Hambúrguer smash duplo com cheddar, picles e molho, segurado com as duas mãos" },
  chimibacon: { src: "/images/chimibacon.jpg", alt: "Hambúrguer com cheddar, cebola caramelizada, bacon e molho cremoso" },
  burgerCebolaBacon: { src: "/images/burger-cebola-bacon.jpg", alt: "Hambúrguer com cebola grelhada, bacon e queijo derretido com molho cremoso" },
  almofadasDeQueijo: { src: "/images/almofadas-de-queijo.jpg", alt: "Almofadas de queijo empanadas mergulhadas em molho de tomate" },
  ambiente: { src: "/images/ambiente.jpg", alt: "Interior da Pão com Carne: parede com a logo, bancada de madeira e banquetas" },
  meuMano: { src: "/images/meu-mano-chimichurri.jpg", alt: "Hambúrguer com maionese de chimichurri, tomate grelhado, bacon e queijo prato" },
  chimichickenJr: { src: "/images/chimichicken-jr.jpg", alt: "Sanduíche de frango empanado com alface e maionese verde" },
  doubleFake: { src: "/images/double-fake-smash.jpg", alt: "Hambúrguer smash duplo com cheddar e alface, servido com bolinhas empanadas" },
  batataDaCasa: { src: "/images/batata-da-casa.jpg", alt: "Batata frita com molho de queijo, bacon, parmesão e cebolinha" },
  burgerDuasMaos: { src: "/images/burger-duas-maos.jpg", alt: "Hambúrguer com cebola roxa, bacon e queijo cremoso segurado com as duas mãos" },
  doisBurgers: { src: "/images/dois-burgers.jpg", alt: "Dois hambúrgueres em uma cesta, com batata cheia de cheddar e bacon ao fundo" },
  heroPoster: { src: "/images/hero-poster.jpg", alt: "" },
} as const;
