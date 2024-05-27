import { Col, Container, Row } from 'react-bootstrap';
import registerLogo from '../../imgs/register-logo.png';

function RegisterPage() {
  return (
    <>
      <Container className='d-flex justify-content-center'>
        <Row>
          <Col>
            <img
              className='white-secondary-backgroud w-100 p-5'
              src={registerLogo}
              alt="logo de registro ecommerce" />
          </Col>
          <Col>
            <h2>asd</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RegisterPage;
