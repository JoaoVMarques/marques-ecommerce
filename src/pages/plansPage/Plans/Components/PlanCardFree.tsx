import { Button, Card, Col } from "react-bootstrap";
import interfacePlans from "../interfaces/plans";

function PlanCardFree(props: { plan: interfacePlans }) {
  const { plan } = props
  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{ plan.name }</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{plan.description}</Card.Subtitle>
          <h2>Gratuito</h2>
          <Button className="orange-button mb-4 w-100">
            Assine já
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PlanCardFree;
