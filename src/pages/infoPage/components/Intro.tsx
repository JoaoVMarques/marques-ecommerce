import { Container, Row } from 'react-bootstrap';
import introObjects from './introObject';
import IconDescription from './IconDescription';

function Intro() {
  return (
    <Container className='gray-background min-vw-100 p-5'>
      <h2 className='text-center intro-text titlePurple'>
        <span className="title-orange">Comprar </span>
        e
        <span className="title-orange"> vender </span>
        coisas nunca foi tão facil!
      </h2>

      <Container>
        <Row>
          { introObjects.map((intro) => (
            <IconDescription icon={ intro.icon } description={ intro.description } />
          ))
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Intro;
