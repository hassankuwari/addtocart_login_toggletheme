import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import cartLogo from "../Images/cart-fill.svg";
import {useDispatch, useSelector} from 'react-redux';
import { toggleTheTheme } from '../ReduxManager/action';

const MyNavbar = () => {
  const dispatch=useDispatch();

  const cartQty = useSelector((state)=>state.cartQuantity)///useSelector for add to cart

  const registeredId =useSelector((state)=>state.login)//// useSelector for log in id

  const handleToggle = () => {
    dispatch(toggleTheTheme()); // Dispatch the toggleTheme action
  };

  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container className='justify-content-between'>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="/cart" className='cart-logo'>
            <div className='cart-logo-container' data-cartcount={cartQty}>
                <img src={cartLogo} alt="" />
            </div>
            </Nav.Link>
            <Nav.Link href="/login">Signed In as: {registeredId} </Nav.Link>
          <Button variant="outline-info" onClick={handleToggle}>Toggle Theme</Button>{' '}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar
