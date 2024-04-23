import interfacePlans from "../interfaces/plans";

export const bronze: interfacePlans = {
  name: 'Bronze',
  price: 15,
  description: 'Praticidade para atender você com nosso plano mais acessível e completo.',
};

export const silver: interfacePlans = {
  name: 'Prata',
  price: 35,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.',
};

export const gold: interfacePlans = {
  name: 'Ouro',
  price: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.',
};

export const diamond: interfacePlans = {
  name: 'Diamante',
  price: 100,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.',
};

const allObjects = [bronze, silver, gold, diamond];

export default allObjects;
