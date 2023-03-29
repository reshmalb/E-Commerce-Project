import React from "react";
import { Nav,Navbar,Container } from "react-bootstrap";
import CartButton from "../CartButton/CartButton";


const Header=(props)=>{

    return(
        
        <Navbar sticky="top" className="bg-white shadow-sm-mb-3" >
        <Container>
          <Nav className="me-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
         <Nav.Link href="#Store">Link</Nav.Link>
         <Nav.Link href="#About">About</Nav.Link>
         </Nav>
         <CartButton onClick={props.onShowCart}/>
        
      
        </Container>
       </Navbar>
       
    )

}
export default Header;