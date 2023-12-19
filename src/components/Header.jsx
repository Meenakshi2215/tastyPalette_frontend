import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
   <Navbar style={{backgroundColor:"black"}} >
            <Container>
                <Navbar.Brand >
                    <Link to={'/'} style={{ textDecoration: "none", color: 'white', fontSize: '30px',fontWeight:"bolder" }}> <i style={{color:"white"}} class="fa-solid fa-utensils"></i>{' '}
                    The Tasty Palette</Link>
                    

                </Navbar.Brand>
                
            </Container>
        </Navbar>
    </>
  )
}

export default Header