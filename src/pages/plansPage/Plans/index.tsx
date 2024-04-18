import { Col, Container, Row } from "react-bootstrap";
import PlanCard from "./Components/PlanCard";

function Plans() {
  return (
    <Container>
      <Row>
        <Col>
          <PlanCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Plans;
