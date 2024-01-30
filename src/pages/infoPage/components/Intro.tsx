import { Container } from 'react-bootstrap';
import clock from '../../../imgs/svgs/clock.svg';
import IconDescription from './IconDescription';

const description = 'sua loja aberta 24 horas por dia, toda semana';

function Intro() {
  return (
    <Container className='gray-background min-vw-100 p-0'>
      <h2 className='text-center intro-text titlePurple'>
        <span className="title-orange">Comprar </span>
        e
        <span className="title-orange"> vender </span>
        coisas nunca foi tão facil!
      </h2>

      <IconDescription logo={ clock } description={ description } />
    </Container>
  );
}

export default Intro;
