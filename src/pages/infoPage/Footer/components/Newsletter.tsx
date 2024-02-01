import { Button, Col, Container, FormControl, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Newsletter() {
  return (
    <Container className='section-background p-5'>
      <Row className='mb-3'>
        <Col>
          <h2 className='text-center'>Assine nossa Newsletter</h2>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col md={3}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FormControl type="email" placeholder='seu@email.com' />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button className='w-75 orange-button'>
              <span>
                Assinar
              </span>
            </Button> 
          </Col>
      </Row>
    </Container>
  );
}

// xs={12} sm={4} lg={2} xl={3} xxl={2}
// xs={12} sm={5} lg={2} xl={3}  xxl={3}
// xs={12} sm={3} lg={2} xl={2} xxl={2}

export default Newsletter;
