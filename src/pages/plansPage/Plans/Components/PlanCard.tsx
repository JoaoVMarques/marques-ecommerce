import { Button, Card, Col } from "react-bootstrap";
import interfacePlans from "../interfaces/plans";



function PlanCard(props: { plan: interfacePlans }) {
  const { plan } = props
  return (
    <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{ plan.name }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{plan.description}</Card.Subtitle>
        <Card.Text>
          <h3>
            R$ { plan.price }
          </h3>
        </Card.Text>
        <Button className="orange-button mb-4 w-100">
          Assine já
        </Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default PlanCard;
