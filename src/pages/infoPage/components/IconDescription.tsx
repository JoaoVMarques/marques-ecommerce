import { Container, Image } from 'react-bootstrap';

function IconDescription(props: { icon: string, description: string }) {
  const { icon, description } = props;
  return (
    <Container>
      <Image src={icon} />
      <p>{description}</p>
    </Container>
  );
}

export default IconDescription;
