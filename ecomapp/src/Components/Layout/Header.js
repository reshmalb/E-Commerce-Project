import React,{useContext,useState} from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'
import CartButton from "../CartButton/CartButton";
import Cart from "../CartButton/Cart";
import ShoppingCartContext from "../../store/ShoppingContext";

const Header=()=>{
    const ctx=useContext(ShoppingCartContext)
    const [isCartShown,setCartShown]=useState(false);
    const hideCartHandler=()=>{
      setCartShown(false)
    }
    const showCartHandler=()=>{
       setCartShown(true);
    }
    return(
<nav className={classes.nav}>
    
{/* <div className={classes.rightSection}> */}
<nav className={classes.nav}>
<NavLink className={classes.links} to='/home'>Home</NavLink>
<NavLink className={classes.links} to="/store" >Store</NavLink>
<NavLink className={classes.links} to="/about">About</NavLink>
<NavLink className={classes.links} to="/contactus" >Contact-Us</NavLink>
 <NavLink className={classes.links} to="/login" >Login</NavLink>
<NavLink  className={classes.links}to="/logout" >Logout</NavLink>
</nav>
<div className={classes.rightSection}>

<CartButton onClick={showCartHandler}  />
          {isCartShown && <Cart  onClose={hideCartHandler} /> }
</div>

</nav>)

//    <div>
//    <NavBar/>
//    </div>
//     )
}
export default Header;