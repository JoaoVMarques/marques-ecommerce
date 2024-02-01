import { Col, Container, Image, Row } from "react-bootstrap";
import placeholder from '../../../imgs/placeholder-image.png'
import { securityText, sellerText } from "./imageTexts";

function ImageSection() {
  return (
    <Container className="mt-5">
      <Container className="mb-5">
        <Row>
          <Col sm={12} md={6}>
            <Image src={ placeholder } className="w-100"/>
          </Col>
          <Col sm={12} md={6} className="p-0 ps-3 d-flex align-items-center">
            <Container>
              <Row>
                <h2 className="font-weight-bold">Aqui a venda e compra é 100% segura e super simples de se efetuar</h2>
                <p>{ securityText }</p>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container>
      <Row>
          <Col sm={12} md={6} className="p-0 ps-3 d-flex align-items-center">
            <Container>
              <Row>
                <h2 className="font-weight-bold">Sempre mantendo controle de seu estoque</h2>
                <p>{ sellerText }</p>
              </Row>
            </Container>
          </Col>
          <Col sm={12} md={6}>
            <Image src={ placeholder } className="w-100"/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ImageSection;
