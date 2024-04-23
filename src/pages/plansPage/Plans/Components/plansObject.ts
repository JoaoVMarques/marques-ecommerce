import interfacePlans from "../interfaces/plans";

export const bronze: interfacePlans = {
  name: 'bronze',
  price: 15,
  description: 'Praticidade para atender você com nosso plano mais acessível e completo.',
};

export const silver: interfacePlans = {
  name: 'prata',
  price: 35,
  description: 'Suporte ágil e prático a qualquer momento, garantindo sua total satisfação.',
};

export const gold: interfacePlans = {
  name: 'ouro',
  price: 60,
  description: 'Compre e venda, oferecendo facilidade e rapidez em cada transação.',
};

export const diamond: interfacePlans = {
  name: 'diamante',
  price: 100,
  description: 'Compre e venda, oferecendo facilidade e rapidez em cada transação.',
};

const allObjects = [bronze, silver, gold, diamond];

export default allObjects;
