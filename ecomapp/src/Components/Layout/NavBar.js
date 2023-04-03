import React,{useContext, useState} from "react";
import { Nav,Navbar,Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingCartContext  from "../../store/ShoppingContext";
import CartButton from "../CartButton/CartButton";
import Cart from "../CartButton/Cart";
const NavBar=(props)=>{
    const ctx=useContext(ShoppingCartContext)
    const [isCartShown,setCartShown]=useState(false);
    const hideCartHandler=()=>{
      setCartShown(false)
    }
    const showCartHandler=()=>{
       setCartShown(true);
    }
  
    return(        
        <Navbar sticky="top" style={{height:"100px",color:"black",fontSize:"1.5rem"}}  className="bg-success shadow-sm-mb-3" >
        <Container>
        
         <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
            <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            <Nav.Link to="/contactus" as={NavLink}>Contact-Us</Nav.Link>
            <Nav.Link to="/login" as={NavLink}>Login</Nav.Link>
            <Nav.Link to="/logout" as={NavLink}>Logout</Nav.Link>




         </Nav>
         <CartButton onClick={showCartHandler}  />
          {isCartShown && <Cart  onClose={hideCartHandler} /> }
         </Container>
        </Navbar>
       
    )

}
export default NavBar;