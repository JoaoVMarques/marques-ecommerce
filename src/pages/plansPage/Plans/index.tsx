import { Container, Row } from "react-bootstrap";
import PlanCard from "./Components/PlanCard";
import plansObject from './Components/plansObject';
import { cobalto } from './Components/plansObject';
import PlanCardFree from "./Components/PlanCardFree";

function Plans() {
  return (
    <Container>
      <Row>
        { plansObject.map((plan) => (
          <PlanCard plan={plan} />
          ))
        }
      </Row>
      <Row>
        <PlanCardFree plan={ cobalto }/>
      </Row>
    </Container>
  );
}

export default Plans;
