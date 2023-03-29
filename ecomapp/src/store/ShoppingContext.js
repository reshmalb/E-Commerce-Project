import React from "react";

const ShoppingCartContext=React.createContext({
    cartItems:[],
    increaseCartItem:(item)=>{},
    decreaseCartItem:(id)=>{}
})

export default ShoppingCartContext;