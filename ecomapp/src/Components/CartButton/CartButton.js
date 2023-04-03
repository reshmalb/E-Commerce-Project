import Button from 'react-bootstrap/Button';
import { cartElements } from './CartElements';
import CartIcon from './CartIcon';
import ShoppingCartContext from '../../store/ShoppingContext';
import { useContext } from 'react';

const  CartButton=(props)=> {
  const ctx=useContext(ShoppingCartContext)
  const numberOfCartItems  = ctx.cartItems.reduce((curNumber,item)=>{
    return curNumber+item.quantity;
},0);
  return (
    <Button style={{width:"3rem",height:"3rem",position:"relative",marginTop:0}}
    variant="outline-primary"
    className='rounded-circle'
    onClick={props.onClick}>
      <CartIcon/>
      <div className="rounded-circle bg-danger 
      d-flex justify-content-center align-items-center "
      style={{color:"white",
      width:"1.5rem",
      height:"1.5rem",
      position:"absolute",
      bottom:0,right:0, 
      transform:"translate(25%,25%)"}}>
        {numberOfCartItems}
      </div>
    </Button>
  );
}

export default CartButton;