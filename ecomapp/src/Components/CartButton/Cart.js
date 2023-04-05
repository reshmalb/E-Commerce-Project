import React, { useContext, useEffect, useState } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import CartItem from "./CartItem";
import { cartElements } from "./CartElements";
import ShoppingCartContext from "../../store/ShoppingContext";




const Cart=(props)=>{
  const [isShown,setIsShown]=useState(true)
  const ctx=useContext(ShoppingCartContext)
  console.log("inside cart module",ctx.cartItems)
const data=ctx.cartItems;
const hasitem=data.length>0
  // const [cartElement,setCartElements]=useState(cartElements);
  const cartItemRemoveHandler=(id)=>{
    console.log("remove id",id)
     ctx.decreaseCartItem(id);
  }
    
    return(

       <Offcanvas show={isShown} placement="end" onHide={props.onClose}  >
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              Cart
            </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              
              <Stack gap={3}>
              <div className="text-muted"
                style={{fontSize:".9rem"}}>
              <span className="text-muted ms-2" gap={2}>Item</span>  
                  <span className="text-muted" >Price</span>   
                     <span className="text-muted">Quantity</span>
            </div>
            
                {ctx.cartItems.map((item)=> {return(
                <CartItem key={item.id}
                id={item.id}
                title={props.title}
                    url={item.imageUrl}
                    quantity={item.quantity}
                    price={item.price}
                   onRemove={cartItemRemoveHandler.bind(null,item.id)}/>
                 )}
                )   }
                <div className="ms-auto fw-bold fs-5">
                   Total Amount:{"            "}
                   {data.reduce((total,cartItem)=>
                    {return total+cartItem.price*cartItem.quantity;}
                   ,0)}
                </div>
                <div>
               {hasitem &&<Button className="w-100  ">
                    Purchase
                  </Button> }   
                </div>

              </Stack>

            </Offcanvas.Body>

     

      </Offcanvas>
      
      
     
        
      
    )


}
export default Cart;