import { Button, Card } from "react-bootstrap";

function PlanCard() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Plano bronze</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Praticidade para atender você com nosso plano mais acessível e completo.</Card.Subtitle>
      <Card.Text>
        R$ 20
      </Card.Text>
      <Button className="orange-button mb-4 w-100">
        Assine já
      </Button>
    </Card.Body>
  </Card>
  );
}

export default PlanCard;
