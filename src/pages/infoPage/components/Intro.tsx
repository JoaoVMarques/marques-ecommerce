import { Container } from 'react-bootstrap';

function Intro() {
  return (
    <Container className='gray-background min-vw-100 p-0'>
      <h2 className='text-center intro-text titlePurple'>
        <span className="title-orange">Comprar </span>
        e
        <span className="title-orange"> vender </span>
        coisas nunca foi tão facil!</h2>
    </Container>
  );
}

export default Intro;
