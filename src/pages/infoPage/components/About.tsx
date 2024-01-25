import {
  Col, Container, Image, Row,
} from 'react-bootstrap';
import slogan from './texts';
import logo from '../../../imgs/ecommerce.png';

function About() {
  return (
    <Container>
      <Row lg="2">
        <Col className='d-flex align-items-center'>
          <Container>
            <Row>
              <h1 className="titleColor title-screen">Marques
                <span className="titleOrange"> e-commerce</span></h1>
            </Row>
            <Row>
              <p className='fs-6 lh-sm'>{slogan}</p>
            </Row>
          </Container>
        </Col>
        <Col>
          <Image src={logo} className='w-75'/>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
