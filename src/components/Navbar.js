import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';

export default function NavBar () {
  const router = useRouter();
  return (
    <Navbar className={`blackBackground sticky-top`} style={{ height: '3.5rem' }} variant='dark'>
      <Container className={``}>
        <Navbar.Brand>
          <Link href="/work" style={{textDecoration: 'none', color: 'white'}}>
            JESSE MOON
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav>
            <Link 
              className={'nav-link pb-1 ' + (router.pathname === '/work' ? 'active' : '')} 
              href='/work'
              >
              Work
            </Link>
            <Link className={'nav-link ' + (router.pathname === '/about' ? 'active' : '')} href='/about'>
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
