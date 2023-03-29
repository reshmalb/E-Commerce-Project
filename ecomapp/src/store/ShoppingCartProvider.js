import ShoppingCartContext from "./ShoppingContext";
import { useReducer } from "react";

const defaultState= {
        cartItems:[]
    };

const cartReducer=((state,action)=>{
  
    if(action.type==="INCREASE"){
        let updatedItems;
        const existingItemIndex=state.cartItems.findIndex((item)=>
        item.id===action.item.id
        )
      const existingItem=state.cartItems[existingItemIndex];          
      console.log("id && item",existingItemIndex,existingItem)
         
          if(existingItem){
             const updatedItem={...existingItem,
                  quantity:existingItem.quantity+action.item.quantity                    
                   }
                   console.log(updatedItem)
            updatedItems=[...state.cartItems]
            updatedItems[existingItemIndex]=updatedItem;
            console.log("inside updateditems",updatedItems)

            }            
        
          else {
            updatedItems=state.cartItems.concat(action.item);
          }
          if(action.type ==='DECREASE'){
            console.log("id",action.id);
            const existingItemIndex = state.cartItems.findIndex((item)=>
                 item.id === action.id);
             const existingItem=state.cartItems[existingItemIndex];
             console.log("exitem",existingItem ,existingItemIndex)

            let updatedItems;
            if(existingItem){
            const updatedItem={...existingItem,
                 quantity:existingItem.quantity-1}
            updatedItems={...state.cartItems}
            updatedItems[existingItemIndex]=updatedItem;
            console.log("updateditems",updatedItems)

               return{
                      cartItems:updatedItems
                     }

          }
            else{
                return{
                       cartItems:state.items
                      }
                 }
      }
          return{
            cartItems:updatedItems
          }




          
    }    

      
   



    

    return defaultState;
})


const ShoppingCartProvider=(props)=>{
    const [cartElementState,dispatchCartItems]=useReducer
    (cartReducer,defaultState);

    const increaseCartQunatityHandler=(item)=>{
        console.log(item)
        dispatchCartItems({type:"INCREASE",item:item})
    }
    const decreaseCartQuantityHandler=(id)=>{
        dispatchCartItems({type:"DECREASE",actionId:id})


    }
 


    const cartItems={
        cartItems:cartElementState.cartItems,
        increaseCartItem:increaseCartQunatityHandler,
        decreaseCartItem:decreaseCartQuantityHandler
    }

    return (
        <ShoppingCartContext.Provider value={cartItems}>
                {props.children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;