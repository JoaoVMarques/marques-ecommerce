import {
  Button,
  Col, Container, Image, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../imgs/ecommerce.png';
import { altImageEcommerce, slogan } from './texts';

function About() {
  return (
    <Container className='mb-5 p-3 p-sm-5'>
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
              <Link to="/plans">
                <Button className="pink-button mb-4 w-100">
                  <span className='fw-bold fs-4'>
                    Faça parte
                  </span>
                </Button>
              </Link>
            </Row>
          </Container>
        </Col>
        <Col sm={12} md={5}>
          <Image src={logo} alt={altImageEcommerce} className='w-100 justify-content-center'/>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
