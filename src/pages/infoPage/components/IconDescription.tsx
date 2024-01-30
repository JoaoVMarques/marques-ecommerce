import { Col, Image } from 'react-bootstrap';

function IconDescription(props: { icon: string, description: string }) {
  const { icon, description } = props;
  return (
    <Col>
      <Image src={icon} />
      <p>{description}</p>
    </Col>
  );
}

export default IconDescription;
