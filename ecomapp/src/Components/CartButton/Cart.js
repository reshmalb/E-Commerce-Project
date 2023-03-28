import React from "react";
import { Button } from "react-bootstrap";
import { cartElements } from "./CartElements";

const Cart=props=>{
    const totalAmount=400;
    const hasitems=cartElements.length>0;

    const cartItems= <ul >
                      
                       {cartElements.map((item)=>
                       <div>
                                <li><p>{item.title}</p>
                                     <p>{item.quantity}</p>
                                     <p>{item.price}</p>  
                                       <Button variant="primary">Remove Item</Button>                 
                                </li>
                       </div>
                      

                        )}

    </ul> 
return(
    <div >
        <div>
        <button onClick={props.onClose}> x</button>        
        </div>
        <div>
       
                       <span>Item</span>
                        <span>Quantity</span>
                        <span>Price</span>
        </div>
    {cartItems}
    <div >
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
    </div>
    <div >
      
        {hasitems &&<button >
            Purchase
        </button>}

    </div>
</div>
)

}
export default Cart;