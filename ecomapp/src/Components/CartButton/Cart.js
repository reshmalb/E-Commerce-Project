import React, { useCallback, useContext, useEffect, useState } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import CartItem from "./CartItem";
import { cartElements } from "./CartElements";
import ShoppingCartContext from "../../store/ShoppingContext";
import AuthContext from "../../store/AuthContext";
import axios from "axios";


function addtoCloud(newCartItems){
  const id=localStorage.getItem('key');
  const newData={ 
    email:localStorage.getItem('email'),
    cartItems:newCartItems,
  }
  axios.put(`https://apicallsproject-7e177-default-rtdb.firebaseio.com/cartdetails/${id}.json`,newData)
  .then(response=>{
    console.log(response);
  }).catch(error=>{
    console.log(error.message)
  })

}





const Cart=(props)=>{

const [isShown,setIsShown]=useState(true)
const ctx=useContext(ShoppingCartContext)
const authctx=useContext(AuthContext)  
const [data,setData]=useState(ctx.cartItems)

const [userEmail,setEmail]=useState(authctx.email)   
const [userDetails,setUserDetails]=useState({})
const hasitems=data.length>0;
  const cartItemRemoveHandler=(id)=>{
    console.log("remove id",id)
     ctx.decreaseCartItem(id);
    //  const data=ctx.cartItems;
    //  addtoCloud(data);     
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
                title={item.title}
                    url={item.imageUrl}
                    quantity={item.quantity}
                    price={item.price}
                    data={item}
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
           {hasitems&&  <Button className="w-100  ">
                    Purchase
                  </Button> }
                </div>

              </Stack>

            </Offcanvas.Body>

     

      </Offcanvas>
      
      
     
        
      
    )


}
export default Cart;