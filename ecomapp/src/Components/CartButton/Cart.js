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
            <Offcanvas.Body>
              <Stack gap={3}>
                {cartElements.map((item)=>(
                  <CartItem key={item.id} data={item}>
                  </CartItem>
          

                )

                )}

              </Stack>

            </Offcanvas.Body>

        </Offcanvas.Header>

      </Offcanvas>
      
      
     
        
      
    )


}
export default Cart;