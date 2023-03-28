import React from "react";
import { Nav,Navbar,Container } from "react-bootstrap";
import CartButton from "../CartButton/CartButton";


const Header=(props)=>{

    return(
        
        <Navbar bg="success" expand="sm" variant="dark" >
        <Container>
        <Nav.Link href="#Home">Home</Nav.Link>
         <Nav.Link href="#Store">Link</Nav.Link>
         <Nav.Link href="#About">About</Nav.Link>
         <CartButton onClick={props.onShowCart}/>
        </Container>
       </Navbar>
       
    )

}
export default Header;