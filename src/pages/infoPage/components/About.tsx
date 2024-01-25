import { Container, Row } from 'react-bootstrap';
import slogan from './texts';

function About() {
  return (
    <Container>
      <Row>
        <h1 className="titleColor title-screen">Marques
          <span className="titleOrange"> e-commerce</span></h1>
      </Row>
      <Row lg="2">
        <p className='fs-6 lh-sm'>{slogan}</p>
      </Row>
    </Container>
  );
}

export default About;
