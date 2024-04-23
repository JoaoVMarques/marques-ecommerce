import { Button, Card, Col } from "react-bootstrap";

interface planObject {
  name: string,
  description: string,
}

function PlanCard(props: { plan: planObject }) {
  const { plan } = props
  return (
    <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{ plan.name }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{plan.description}</Card.Subtitle>
        <Card.Text>
          R$ 20
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
