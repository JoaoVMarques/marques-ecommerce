import { Container } from 'react-bootstrap';

function PricePlan(props: { price: number }) {
  const { price } = props;
  return (
    <Container>
      <span className="align-top fw-bold">
        R$
      </span>
      <span className="fw-bold fs-2">
        { price }
      </span>
      <span>
        /mês
      </span>
    </Container>
  );
}

export default PricePlan;
