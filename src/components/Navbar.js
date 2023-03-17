import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar () {
  return (
    <Navbar
      // collapseOnSelect
      // expand='lg'
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

// code for dropdown menu

{/* <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" style={{backgroundColor: 'black', color: 'white'}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Work
  </a>
  <ul 
    className="dropdown-menu border border-dark"
    style={{backgroundColor: '#2e2e2e', color: 'white'}}
    >
    <li className='rounded hoverEffect'><a className="dropdown-item whiteFont" href="#">Singlefile Technologies</a></li>
    <li className='rounded hoverEffect'><a className="dropdown-item whiteFont" href="#">IBM Whitewater</a></li>
    <li className='rounded hoverEffect'><a className="dropdown-item whiteFont" href="#">IBM Grassboots</a></li>
    <li className='rounded hoverEffect'><a className="dropdown-item whiteFont" href="#">Design Guide</a></li>
    <li className='rounded hoverEffect'><a className="dropdown-item whiteFont" href="#">Energy Report</a></li>
  </ul>
</li>  */}