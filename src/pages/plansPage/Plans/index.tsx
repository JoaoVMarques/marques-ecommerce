import { Container, Row } from 'react-bootstrap';
import PlanCard from './Components/PlanCard';
import plansObject, { cobalto } from './Components/plansObject';

import PlanCardFree from './Components/PlanCardFree';

function Plans() {
  return (
    <Container>
      <Row>
        { plansObject.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
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
