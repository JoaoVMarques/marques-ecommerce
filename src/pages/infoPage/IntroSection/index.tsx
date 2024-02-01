import { Container, Row } from 'react-bootstrap';
import introObjects from './introObject';
import IconDescription from './IconDescription';

function Intro() {
  return (
    <Container className='section-background p-5'>
      <h2 className='text-center mb-5'>
        <span className="title-orange">Comprar </span>
        e
        <span className="title-orange"> vender </span>
        coisas nunca foi tão facil!
      </h2>

      <Container>
        <Row>
          { introObjects.map((intro) => (
            <IconDescription
              icon={ intro.icon }
              key={ intro.name }
              description={ intro.description } />
          ))
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Intro;
