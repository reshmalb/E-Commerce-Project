import ShoppingCartContext from "./ShoppingContext";
import { useReducer } from "react";
import axios from "axios";


function addtoCloud(newCartItems){
  const id=localStorage.getItem('key');
  const newemail=localStorage.getItem('email');
  const newData={ 
    email:newemail,
    cartItems:newCartItems,
  }
  axios.put(`https://apicallsproject-7e177-default-rtdb.firebaseio.com/cartdetails/${id}.json`,newData)
  .then(response=>{
    console.log(response);
  }).catch(error=>{
    console.log(error.message)
  })

}





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
         
          if(existingItem){
             const updatedItem={...existingItem,
                  quantity:existingItem.quantity+action.item.quantity                    
                   }
                   
            updatedItems=[...state.cartItems]
            updatedItems[existingItemIndex]=updatedItem;

            }            
        
          else {
            updatedItems=state.cartItems.concat(action.item);
          }
          addtoCloud(updatedItems);
          return{
            cartItems:updatedItems
          }
          
        }
 if(action.type ==="DECREASE"){

    const existingCartItemIndex = state.cartItems.findIndex((item)=>
    item.id===action.actionId);

  const existingCartItem = state.cartItems[existingCartItemIndex];

  let updatedItems;
  if(existingCartItem.quantity === 1){
      updatedItems=state.cartItems.filter(item=> item.id != action.actionId);
      }
     else{
      const updatedItem = {...existingCartItem,
                          quantity:existingCartItem.quantity-1}
      updatedItems=[...state.cartItems];
      updatedItems[existingCartItemIndex]=updatedItem;
  
       }

      
      addtoCloud(updatedItems);
       return{
        cartItems:updatedItems
      }

    } 
    if(action.type==="ADD_EXIST_ITEMS"){
      state.cartItems=[...action.item];
      let updatedItems=state.cartItems;
      console.log("updaated items  from cloud",updatedItems)
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