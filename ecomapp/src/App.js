import React,{useState} from 'react';
import  Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store'
import ShoppingCartProvider from './store/ShoppingCartProvider';
import {Route} from "react-router-dom";
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import ContactUs from './pages/ContactUs';
import ProductDetails from './pages/ProductDetails';
import LoginPage from './pages/LoginPage';


const  App=()=> {

  
// {/* <BrowserRouter>
// <ShoppingCartProvider>
// <NavBar onShowCart={showCartHandler} />
// {/* <main> */}
//   {isCartShown&& <Cart isShown={isCartShown} onClose={hideCartHandler}/>} 

// </main>
    
return (

  <ShoppingCartProvider>
  <Header/>
  <Route path="/">  <Home/>  </Route>
  <Route path="/store" exact> <Store/></Route>
  <Route path="/store/:productid" ><ProductDetails/></Route>
  <Route path="/about"><About/></Route>
  <Route path="/contactus" ><ContactUs/></Route>
  <Route path="/login"> <LoginPage/></Route>
  


  <Footer/>
  
  </ShoppingCartProvider>
 
 
)
                  

}

export default App;
