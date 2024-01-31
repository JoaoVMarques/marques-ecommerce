import { Col, Container, Image, Row } from 'react-bootstrap';

function IconDescription(props: { icon: string, description: string }) {
  const { icon, description } = props;
  return (
    <Col>
      <Container>
        <Row className='justify-content-center text-center'>
          <Image src={icon} className='w-25 mb-2' />
          <p>{description}</p>
        </Row>
      </Container>
    </Col>
  );
}

export default IconDescription;
