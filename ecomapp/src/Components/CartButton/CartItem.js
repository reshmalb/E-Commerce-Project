import React,{useState} from "react";
import { Button,  Stack} from "react-bootstrap";




const CartItem=props=>{
    const [item,setItem]=useState(props.data)
    
    return(
      
        <Stack direction="horizontal" 
        gap={2}
        className="d-flex align-items-center">
          <img src={item.imageUrl}
            style={{width:"125px",
            height:"75px",
            objectFit:"cover"}}>
          </img>
          <div className="me-auto">
            <div>
                {item.title}
            </div>
            <div>
                {item.price}
            </div>
            <div className="text-muted"
                  style={{fontSize:".75rem"}} 
                   >{item.price* item.quantity}
            </div>
            <Button variant="outline-danger" size="sm">
                &times;
            </Button>
          </div>
      </Stack>
    )
}
export default CartItem;