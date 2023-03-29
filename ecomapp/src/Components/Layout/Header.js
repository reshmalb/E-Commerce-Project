import React from "react";
import { Nav,Navbar,Container, NavLink } from "react-bootstrap";
import CartButton from "../CartButton/CartButton";
const NavBar=(props)=>{
    return(        
        <Navbar sticky="top" className="bg-white shadow-sm-mb-3" >
        <Container>
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to= "/">Home</Nav.Link>
         <Nav.Link as={NavLink} to= "/Store">Store</Nav.Link>
         <Nav.Link as={NavLink} to= "/About">About</Nav.Link>
         </Nav>
         <CartButton onClick={props.onShowCart}/>
        
      
        </Container>
       </Navbar>
       
    )

}
export default NavBar;