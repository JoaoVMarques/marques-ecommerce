import {
  Button,
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
              <p className='fs-6 lh-sm mb-5'>{slogan}</p>
            </Row>
            <Row className='grid gap-2 col-8 justify-content-center mx-auto'>
              <Button className="pink-button">
                <span className='fw-bold fs-4'>
                  Faça parte
                </span>
              </Button>
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
