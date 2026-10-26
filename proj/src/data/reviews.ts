export interface Review {
  name: string;
  profile: string;
  when: string;
  meal: string;
  stars: number;
  text: string;
  tags: string[];
}

/**
 * Somente avaliações reais, transcritas dos prints enviados (preservando o texto original).
 * Para adicionar mais, acrescente um objeto aqui. Nada é sincronizado automaticamente com o Google.
 */
export const REVIEWS: Review[] = [
  {
    name: "Aline Anjos", profile: "4 avaliações · 2 fotos", when: "um mês atrás", meal: "R$ 80–100", stars: 5,
    text: "Primeira vez que fui por uma indicação da IA, e gostei muito do lanche, ponto da carne exatamente como pedimos, tomei um chá gelado da casa extremamente delicioso, estava com um pouco de pressa porque tinha um outro compromisso ali perto, e fiquei preocupada de demorar, mas pra nossa surpresa veio extremamente rápido pelo tanto de pessoas que tinha na casa. O ambiente é super agradável e bonito. Os garçons super solícitos, vale a pena conhecer. Acredito que dependendo do horário pode ser que você tenha que esperar um pouco pra lado de fora pela quantidade de pessoas que tinha quando saímos.",
    tags: ["Comida 5/5", "Serviço 5/5", "Ambiente 5/5"],
  },
  {
    name: "Isa!", profile: "Local Guide · 41 avaliações · 183 fotos", when: "Editado 5 meses atrás", meal: "Jantar · R$ 40–60", stars: 5,
    text: "Fomos numa quinta-feira à noite depois do trabalho e fomos atendidos pela Grazi, muito simpática a prestativa! Mas todos os funcionários foram mega educados, o que só melhorou a experiência que foi muito boa! Sorte que eu não trabalho tão perto porque se não viria toda semana 😍 os dois hambúrgueres estavam ótimo e a maionese deles também é maravilhosa! A batata frita básica mas bem feita, agradou e atendeu a necessidade… mas na próxima compraríamos um terceiro hambúrguer para compartilhar no lugar delas porque eles estavam divinos!",
    tags: ["Comida 5/5", "Serviço 5/5", "Ambiente 5/5", "2 pessoas", "Sem espera"],
  },
  {
    name: "Danielle Carvalho Rodrigues", profile: "5 avaliações · 3 fotos", when: "3 meses atrás", meal: "Jantar · R$ 60–80", stars: 5,
    text: "Comida maravilhosa e atendimento excepcional do Jeff e Eder! Amei, minha primeira vez na casa e com toda certeza voltarei mais vezes!!!",
    tags: ["Comida 5/5", "Serviço 5/5", "Ambiente 5/5", "Sem espera"],
  },
  {
    name: "Camila", profile: "Local Guide · 34 avaliações · 74 fotos", when: "5 meses atrás", meal: "Almoço · R$ 100–120", stars: 5,
    text: "Experiência surpreendente! Hambúrguer suculento, bem servido e delicioso. As batatas também são sequinhas e gostosas, recomendo o chimibacon. Fui bem atendida desde a entrada no estabelecimento até o momento de ir embora, o ambiente é descolado e agradável. Vale muito a visita!",
    tags: ["Comida 5/5", "Serviço 5/5", "Ambiente 5/5", "Sem espera"],
  },
  {
    name: "Rubens Campos", profile: "Local Guide · 384 avaliações · 819 fotos", when: "4 meses atrás", meal: "Almoço · R$ 80–100", stars: 5,
    text: "Ótima experiência no Pão com Carne. Atendimento top de toda a equipe e em especial o Vinicius e a Mis.\nA fila é sempre grande mas no meu caso deram preferência imediata como idosos.\nTodos os funcionários muito simpáticos e atenciosos.\nO hambúrguer tradicional estava uma delícia e no ponto certo.\nÚnico arrependimento foi ter pedido as batas com cheddar. Estavam boas mas Sinceramente nós preferimos as tradicionais.",
    tags: ["Comida 5/5", "Serviço 5/5", "Ambiente 5/5"],
  },
];
