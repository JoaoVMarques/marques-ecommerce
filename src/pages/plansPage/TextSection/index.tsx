import { Container, Row } from "react-bootstrap";

function TextSection() {
  return (
    <Container className="p-3 mt-5">
      <Row className="text-center">
        <h1>Faça seu negócio crescer com o <span className="title-orange">investimento</span> certo!</h1>
      </Row>
    </Container>
  );
}

export default TextSection;
