import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

function Header() {
  return (
    <>
     <Navbar bg="primary" data-bs-theme="dark" style={{}}>
        <Container>
          <Navbar.Brand href="/"><MdOutlineProductionQuantityLimits style={{width:"10%",height:"28px"}}/>X<strong className='text-info'>in</strong>Store</Navbar.Brand>
          <Nav className="me-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">         
        </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header