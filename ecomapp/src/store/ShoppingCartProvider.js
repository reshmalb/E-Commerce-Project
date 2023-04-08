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
      // console.log("id && item",existingItemIndex,existingItem)
         
          if(existingItem){
             const updatedItem={...existingItem,
                  quantity:existingItem.quantity+action.item.quantity                    
                   }
                   console.log(updatedItem)
            updatedItems=[...state.cartItems]
            updatedItems[existingItemIndex]=updatedItem;
            // console.log("inside updateditems",updatedItems)

            }            
        
          else {
            updatedItems=state.cartItems.concat(action.item);
          }
          return{
            cartItems:updatedItems
          }
          
        }
 if(action.type ==="DECREASE"){
    // console.log("inside remove item id=",action.actionId)    

    const existingCartItemIndex = state.cartItems.findIndex((item)=>
    item.id===action.actionId);
    // console.log("Existing cartitem index=",existingCartItemIndex)

  const existingCartItem = state.cartItems[existingCartItemIndex];
  // console.log("Existing cartitem=",existingCartItem)

  //const updatedTotalMount = state.price-existingCartItem.price;
  let updatedItems;
  if(existingCartItem.quantity === 1){
      updatedItems=state.cartItems.filter(item=> item.id != action.actionId);
      }
     else{
      const updatedItem = {...existingCartItem,
                          quantity:existingCartItem.quantity-1}
  // console.log("updated cartitem=",updatedItem)

      updatedItems=[...state.cartItems];
      updatedItems[existingCartItemIndex]=updatedItem;
  
       }
       return{
        cartItems:updatedItems
      }

    } 
    if(action.type==="ADD_EXIST_ITEMS"){
      let updatedItems=state.cartItems.concat(action.item);
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
   const  addExistingCartItemsHandler=(item)=>{
        dispatchCartItems({type:"ADD_EXIST_ITEMS",item:item})
   }



    const cartItems={
        cartItems:cartElementState.cartItems,
        increaseCartItem:increaseCartQunatityHandler,
        decreaseCartItem:decreaseCartQuantityHandler,
        addCartItems:addExistingCartItemsHandler
      
    }

    return (
        <ShoppingCartContext.Provider value={cartItems}>
                {props.children}
             
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;