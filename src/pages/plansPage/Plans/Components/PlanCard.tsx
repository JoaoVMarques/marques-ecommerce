import { Button, Card, Col, ListGroup } from "react-bootstrap";
import interfacePlans from "../interfaces/plans";
import PricePlan from "./PricePlan";
import check from "../../../../imgs/svgs/check.svg";


function PlanCard(props: { plan: interfacePlans }) {
  const { plan } = props
  return (
    <Col className="mb-5 d-flex justify-content-center" lg={3} sm={6}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{ plan.name }</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{plan.description}</Card.Subtitle>
          <PricePlan price={ plan.price } />
          <Button className="orange-button mb-4 w-100">
            Assine já
          </Button>
          <ListGroup className="list-group-flush ">
            { plan.benefits.map((name) => (
                <ListGroup.Item>
                  <img src={check} className="check-icon" />
                  <span>{name}</span>
                </ListGroup.Item> )) 
            }
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PlanCard;
