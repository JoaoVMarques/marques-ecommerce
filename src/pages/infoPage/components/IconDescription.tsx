import { Col, Container, Image, Row } from 'react-bootstrap';

function IconDescription(props: { icon: string, description: string }) {
  const { icon, description } = props;
  return (
    <Col lg={4} md={4}>
      <Container>
        <Row className='justify-content-center text-center'>
          <Image src={icon} className='icon-intro mb-2' />
          <p className='mb-md-0 mb-5'>{description}</p>
        </Row>
      </Container>
    </Col>
  );
}

export default IconDescription;
