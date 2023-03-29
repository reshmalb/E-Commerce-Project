import React,{useState} from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Store } from './pages/Store';
import DisplayItems from './Components/DisplayItems';
import Header from './Components/Layout/Header';
import Cart from './Components/CartButton/Cart';
import ShoppingCartProvider from './store/ShoppingCartProvider';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import { Container } from 'react-bootstrap';
import {createBrowserRouter,RouterProvider, createRoutesFromElements} from 'react-router-dom'

// const routeDefinitions=createRoutesFromElements(
//  <Route>
//   <Route path="/" element={<Home/>}/>
//    <Route path="/about" element={<About/>}/>
//   <Route path="/store" element={<Store/>}/> 
// </Route> );

// const router=createBrowserRouter(routeDefinitions);


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
    {isCartShown&& <Cart isShown={isCartShown} onClose={hideCartHandler}/>} 
      <Header onShowCart={showCartHandler} />
     {/* <RouterProvider router={router}></RouterProvider> */}
 <Routes>
  <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
  <Route path="/store" element={<DisplayItems/>}/> 
</Routes>
                  
    </ShoppingCartProvider>

    </BrowserRouter>

      
    
  );
}

export default App;
