import React, { useState } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import CartItem from "./CartItem";
import { cartElements } from "./CartElements";




const Cart=(props)=>{
  const [isShown,setIsShown]=useState(true)
  const [cartElement,setCartElements]=useState(cartElements);
    
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
            
                {cartElements.map((item)=>(
                  <CartItem key={item.id} data={item}>
                  </CartItem> )
                )}
                <div className="ms-auto fw-bold fs-5">
                   Total Amount:{""}
                   {cartElements.reduce((total,cartItem)=>{
                    return total+cartItem.price*cartItem.quantity;
                   },0)}
                </div>

              </Stack>

            </Offcanvas.Body>

     

      </Offcanvas>
      
      
     
        
      
    )


}
export default Cart;