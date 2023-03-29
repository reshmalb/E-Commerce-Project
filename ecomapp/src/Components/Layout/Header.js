import React from "react";
import { Nav,Navbar,Container, NavLink } from "react-bootstrap";
import CartButton from "../CartButton/CartButton";


const Header=(props)=>{

    return(
        
        <Navbar sticky="top" className="bg-white shadow-sm-mb-3" >
        <Container>
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to= "/">Home</Nav.Link>
         <Nav.Link as={NavLink} to= "/store">Store</Nav.Link>
         <Nav.Link as={NavLink} to= "/about">About</Nav.Link>
         </Nav>
         <CartButton onClick={props.onShowCart}/>
        
      
        </Container>
       </Navbar>
       
    )

}
export default Header;