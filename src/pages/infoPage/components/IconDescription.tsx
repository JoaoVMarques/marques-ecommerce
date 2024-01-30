import { Container, Image } from 'react-bootstrap';

function IconDescription(props: { logo: string, description: string }) {
  const { logo, description } = props;
  return (
    <Container>
      <Image src={logo} />
      <p>{description}</p>
    </Container>
  );
}

export default IconDescription;
