import {
  Col, Container, Image, Row,
} from 'react-bootstrap';
import linkedin from '../../../../imgs/svgs/linkedin.svg';

function IconsSocialMedia() {
  return (
    <Container>
      <Row>
        <Col className='justify-content-center text-center'>
          <Image src={linkedin} width={30}/>
        </Col>
      </Row>
    </Container>
  );
}

export default IconsSocialMedia;
