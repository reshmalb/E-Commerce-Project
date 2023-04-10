import React from "react";

const ShoppingCartContext=React.createContext({
    cartItems:[],
    addCartItems:(item)=>{},
    increaseCartItem:(item)=>{},
    decreaseCartItem:(id)=>{},    
})

export default ShoppingCartContext;