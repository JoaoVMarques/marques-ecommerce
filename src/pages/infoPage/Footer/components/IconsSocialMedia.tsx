import {
  Col, Container, Image, Row,
} from 'react-bootstrap';
import linkedin from '../../../../imgs/svgs/linkedin.svg';

function IconsSocialMedia() {
  return (
    <Container>
      <Row>
        <Col className='justify-content-center text-center'>
          <a href='https://www.linkedin.com/in/joaomarquesdev/' target="_blank">
            <Image src={linkedin} width={30}/>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default IconsSocialMedia;
