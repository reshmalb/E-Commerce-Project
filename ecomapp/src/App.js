import React,{useState} from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import Store from './pages/Store'
import Cart from './Components/CartButton/Cart';
import ShoppingCartProvider from './store/ShoppingCartProvider';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import NavBar from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
const  App=()=> {
  const [isCartShown,setCartShown]=useState(false);
  const hideCartHandler=()=>{
    setCartShown(false)
  }
  const showCartHandler=()=>{
       setCartShown(true)
  }
  return (
<BrowserRouter>
<ShoppingCartProvider>
<NavBar onShowCart={showCartHandler} />
<main>
  {isCartShown&& <Cart isShown={isCartShown} onClose={hideCartHandler}/>} 

</main>
    
     <Footer/>
 <Routes>
  <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
  <Route path="/store" element={<Store/>}/> 
</Routes>
                  
    </ShoppingCartProvider>

    </BrowserRouter>

      
    
  );
}

export default App;
