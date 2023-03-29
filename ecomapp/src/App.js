import React,{useState} from 'react';
import './App.css';

import DisplayItems from './Components/DisplayItems';
import Header from './Components/Layout/Header';
import Cart from './Components/CartButton/Cart';
import ShoppingCartProvider from './store/ShoppingCartProvider';

const  App=()=> {
  const [isCartShown,setCartShown]=useState(false);
  const hideCartHandler=()=>{
    setCartShown(false)
  }
  const showCartHandler=()=>{
       setCartShown(true)
  }
  return (
<ShoppingCartProvider>
    {isCartShown&& <Cart isShown={isCartShown} onClose={hideCartHandler}/>} 
          <Header onShowCart={showCartHandler} />
     {/* <main className="position-absolute top-50 start-0 translate-middle">
       <h1> The Generics</h1>
     </main> */}         
      
     <DisplayItems/>
    </ShoppingCartProvider>
    
     
    
  );
}

export default App;
