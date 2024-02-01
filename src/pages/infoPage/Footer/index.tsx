import { Container } from 'react-bootstrap';
import Newsletter from './components/Newsletter';
import IconsSocialMedia from './components/IconsSocialMedia';

function Footer() {
  return (
    <footer>
      <Container className='section-background p-5'>
        <Newsletter />
        <hr className='w-50 mx-auto' />
        <IconsSocialMedia />
      </Container>
    </footer>
  );
}

export default Footer;
