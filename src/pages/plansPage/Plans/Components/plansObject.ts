import interfacePlans from '../interfaces/plans';

export const cobalt: interfacePlans = {
  name: 'Cobalto',
  price: 0,
  maxAds: 5,
  description: 'Praticidade para atender você com nosso plano mais acessível e completo.',
  benefits: [
    'Recursos base',
  ],
  redirectWebsite: 'cobalt',
};

export const bronze: interfacePlans = {
  name: 'Bronze',
  price: 15,
  maxAds: 10,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.',
  benefits: [
    'Suporte prioritário',
    'Nota de consumidor',
  ],
  redirectWebsite: 'bronze',
};

export const silver: interfacePlans = {
  name: 'Prata',
  price: 35,
  maxAds: 15,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.',
  benefits: [
    'Suporte prioritário',
    'Emissão de notas fiscais',
    'Atualização automática de pedidos de venda',
  ],
  redirectWebsite: 'silver',
};

export const gold: interfacePlans = {
  name: 'Ouro',
  price: 60,
  maxAds: 30,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.',
  benefits: [
    'Suporte 24 horas para membros.',
    'Emissão de notas fiscais',
    'Atualização automática de pedidos de venda',
  ],
  redirectWebsite: 'gold',
};

export const diamond: interfacePlans = {
  name: 'Diamante',
  price: 100,
  maxAds: 0,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum.',
  benefits: [
    'Suporte 24 horas prioritario para membros.',
    'Emissão de notas fiscais',
    'Atualização automática de pedidos de venda',
    'Integrações com outros e-commerces e marketplaces',
  ],
  redirectWebsite: 'diamond',
};

const allObjects = [bronze, silver, gold, diamond];

export default allObjects;
