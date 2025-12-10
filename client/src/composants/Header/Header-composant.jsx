import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header-styles.css'

const Header = () => {
    return (
        <Navbar className='navbar' >
            <Container className='conteneur' >
                <div className='navbarTitre'>
                    <Navbar.Brand style={{ fontSize: "36px" }} className='navbarElement' href="/">L'Atlas du monde</Navbar.Brand>
                    <Nav.Item  >Par Gabriel Medina</Nav.Item>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className="zoneVide"></div>
                <Navbar.Collapse >
                    <Nav className='liens ms-auto' >
                        <Nav.Link className='navbarElement' href="/pays">Pays</Nav.Link>
                        <Nav.Link className='navbarElement' href="/langues">Languages</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header;