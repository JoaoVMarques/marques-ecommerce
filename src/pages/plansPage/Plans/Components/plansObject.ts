import interfacePlans from "../interfaces/plans";

export const cobalto: interfacePlans = {
  name: 'Cobalto',
  price: 0,
  description: 'Praticidade para atender você com nosso plano mais acessível e completo.',
  benefits: [
    "Suporte prioritário"
  ]
}

export const bronze: interfacePlans = {
  name: 'Bronze',
  price: 15,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.',
  benefits: [
    "Suporte prioritário", "Nota de consumidor"
  ]
};

export const silver: interfacePlans = {
  name: 'Prata',
  price: 35,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.',
  benefits: [
    "Suporte prioritário", "Emissão de notas fiscais", "Atualização automática de pedidos de venda"
  ]
};

export const gold: interfacePlans = {
  name: 'Ouro',
  price: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.',
  benefits: [
    "Suporte 24 horas para membros.", "Emissão de notas fiscais", "Atualização automática de pedidos de venda",
  ]
};

export const diamond: interfacePlans = {
  name: 'Diamante',
  price: 100,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.',
  benefits: [
    "Suporte 24 horas prioritario para membros.", "Emissão de notas fiscais", "Atualização automática de pedidos de venda", "Integrações com outros e-commerces e marketplaces"
  ]
};

const allObjects = [bronze, silver, gold, diamond];

export default allObjects;
