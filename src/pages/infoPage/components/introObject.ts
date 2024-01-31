import clockIcon from '../../../imgs/svgs/clock.svg';
import supportIcon from '../../../imgs/svgs/support.svg';
import cartIcon from '../../../imgs/svgs/cart.svg';

export const clock = {
  icon: clockIcon,
  description: 'Sua loja disponível 24 horas por dia, todos os dias da semana.',
};

export const support = {
  icon: supportIcon,  
  description: 'Suporte ágil e prático a qualquer momento, garantindo sua total satisfação.',
};

export const cart = {
  icon: cartIcon,
  description: 'Compre e venda, oferecendo facilidade e rapidez em cada transação',
};

const allObjects = [clock, support, cart];

export default allObjects;
