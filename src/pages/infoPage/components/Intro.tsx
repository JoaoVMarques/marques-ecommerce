import { Container } from 'react-bootstrap';
import introObjects from './introObject';
import IconDescription from './IconDescription';

function Intro() {
  return (
    <Container className='gray-background min-vw-100 p-0'>
      <h2 className='text-center intro-text titlePurple'>
        <span className="title-orange">Comprar </span>
        e
        <span className="title-orange"> vender </span>
        coisas nunca foi tão facil!
      </h2>

      { introObjects.map((intro) => (
        <IconDescription icon={ intro.icon } description={ intro.description } />
      ))
      }
    </Container>
  );
}

export default Intro;
