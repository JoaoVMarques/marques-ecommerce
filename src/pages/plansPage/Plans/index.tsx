import { Container, Row } from "react-bootstrap";
import PlanCard from "./Components/PlanCard";
import plansObject from './Components/plansObject'

function Plans() {
  return (
    <Container>
      <Row>
        { plansObject.map((plan) => (
          <PlanCard plan={plan} />
          ))
        }
      </Row>
    </Container>
  );
}

export default Plans;
