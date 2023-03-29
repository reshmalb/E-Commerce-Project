import React,{useState} from "react";
import { Button,  Stack} from "react-bootstrap";




const CartItem=props=>{
    const [item,setItem]=useState(props.data)
    const quantity=item.quantity;
    
    
    return(
      
        <Stack direction="horizontal" 
        gap={2}
        className="d-flex align-items-center">
          <img src={item.imageUrl}
            style={{width:"125px",
            height:"75px",
            objectFit :"cover"}}>
          </img>
          <div className="me-auto">
             <div>   {item.title}{" "}{quantity>1 && 
                                  (<span className="text-muted" 
                                        style={{fontSize:".75rem"}}>
                                          x{item.quantity}
                                  </span> )}

          </div>
            <div className="text-muted"
                style={{fontSize:".75rem"}}>
                {item.price}
            </div>
            </div>
            <div className="text-muted"
                  style={{fontSize:".75rem"}} 
                   >{item.price* item.quantity}
            </div>
            
            <Button variant="outline-danger" size="sm">
                &times;
            </Button>
          
      </Stack>
    )
}
export default CartItem;