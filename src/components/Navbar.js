import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      className={`blackBackground`}
      style={{ height: '3.5rem' }}
      variant='dark'
    >
      <Container>
        <Navbar.Brand href='#home'>GENUINE JESSE</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav>
            {/* <Nav.Link className={styles.bgBlackTextWhite} href='#home'>
              Home
            </Nav.Link> */}
            <Nav.Link className={`blackBackground`} href='/work'>
              Work
            </Nav.Link>
            <Nav.Link className={`blackBackground`} href='/about'>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
