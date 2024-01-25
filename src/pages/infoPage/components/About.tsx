import {
  Button,
  Col, Container, Image, Row,
} from 'react-bootstrap';
import slogan from './texts';
import logo from '../../../imgs/ecommerce.png';

function About() {
  return (
    <Container className='mb-5'>
      <Row lg="2">
        <Col sm={12} md={7} className='d-flex align-items-center'>
          <Container>
            <Row>
              <h1 className="title-purple title-screen justify-content-center mb-3">Marques
                <span className="title-orange"> e-commerce</span></h1>
            </Row>
            <Row>
              <p className='fs-6 lh-sm mb-4 mb-md-5'>{slogan}</p>
            </Row>
            <Row className='grid gap-2 col-8 justify-content-center mx-auto'>
              <Button className="pink-button mb-4">
                <span className='fw-bold fs-4'>
                  Faça parte
                </span>
              </Button>
            </Row>
          </Container>
        </Col>
        <Col sm={12} md={5}>
          <Image src={logo} className='w-100 justify-content-center'/>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
