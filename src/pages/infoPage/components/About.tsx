import {
  Col, Container, Image, Row,
} from 'react-bootstrap';
import slogan from './texts';
import logo from '../../../imgs/ecommerce.png';

function About() {
  return (
    <Container>
      <Row>
        <h1 className="titleColor title-screen">Marques
          <span className="titleOrange"> e-commerce</span></h1>
      </Row>
      <Row lg="2">
        <Col>
          <p className='fs-6 lh-sm'>{slogan}</p>
        </Col>
        <Col>
          <Image src={logo} className='w-75'/>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
