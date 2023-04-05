import React,{useContext, useState} from "react";
import { Button,  Stack} from "react-bootstrap";
import ShoppingCartContext from "../../store/ShoppingContext";




const CartItem=props=>{
    
    const ctx=useContext(ShoppingCartContext)     
    const [item,setItem]=useState(props.data)
    console.log("inside cart item",item)
    const quantity=props.quantity;
  
    return(
      
        <Stack key={props.id} direction="horizontal" 
        gap={2}
        className="d-flex align-items-center">
          <img src={props.url}
            style={{width:"125px",
            height:"75px",
            objectFit :"cover"}}>
          </img>
          <div className="me-auto">
             <div>   {props.title}{" "}{props.quantity>1 && 
                                  (<span className="text-muted" 
                                        style={{fontSize:".75rem"}}>
                                          x{props.quantity}
                                  </span> )}

          </div>
            <div className="text-muted"
                style={{fontSize:".75rem"}}>
                {props.price}
            </div>
            </div>
            <div className="text-muted"
                  style={{fontSize:".75rem"}} 
                   >{props.price* props.quantity}
            </div>
            
            <Button variant="outline-danger" size="sm" onClick={props.onRemove}>
                &times;
            </Button>
          
      </Stack>
    )
}
export default CartItem;