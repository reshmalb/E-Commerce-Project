import React,{useState} from 'react';
import  Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store'
import Cart from './Components/CartButton/Cart';
import ShoppingCartProvider from './store/ShoppingCartProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import NavBar from './Components/Layout/NavBar';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Store1 from './pages/Store1';


const  App=()=> {

  
// {/* <BrowserRouter>
// <ShoppingCartProvider>
// <NavBar onShowCart={showCartHandler} />
// {/* <main> */}
//   {isCartShown&& <Cart isShown={isCartShown} onClose={hideCartHandler}/>} 

// </main>
    
return (
 <Router>
  <ShoppingCartProvider>
  <Header/>
  <Routes>
  <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
  <Route path="/store" element={<Store/>}/> 
  </Routes>
  <Footer/>
  
  </ShoppingCartProvider>
 
 
</Router>)
                  

}

export default App;
