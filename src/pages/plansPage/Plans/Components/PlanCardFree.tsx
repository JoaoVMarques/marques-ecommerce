import {
  Button, Card, Col, Container, ListGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import interfacePlans from '../interfaces/plans';
import check from '../../../../imgs/svgs/check.svg';
import sign from '../../../../imgs/svgs/sign.svg';

function PlanCardFree(props: { plan: interfacePlans }) {
  const { plan } = props;
  return (
    <Col className="mb-5 d-flex justify-content-center" lg={3} sm={6}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{ plan.name }</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{plan.description}</Card.Subtitle>
          <h2>Gratuito</h2>
          <Link to={`/subscribe/${plan.redirectWebsite}-plan`}>
            <Button className="orange-button mb-4 w-100">
              Assine já
            </Button>
          </Link>
          <ListGroup className="list-group-flush list-group-item-secondary list-border">
            { plan.benefits.map((name) => (
              <ListGroup.Item key={name}>
                <img src={check} alt="icone check" className="check-icon" />
                <span>{name}</span>
              </ListGroup.Item>))
            }
          </ListGroup>
          <Container className="mt-4">
            <img src={sign} alt="icone anuncio" width={20} className="me-2" />
            <span>{plan.maxAds} Anúncios</span>
          </Container>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PlanCardFree;
