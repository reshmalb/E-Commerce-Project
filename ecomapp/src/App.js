import React,{useContext, useState} from 'react';
import  Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store'
import ShoppingCartProvider from './store/ShoppingCartProvider';
import {Redirect, Route} from "react-router-dom";
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import ContactUs from './pages/ContactUs';
import ProductDetails from './pages/ProductDetails';
import LoginPage from './pages/LoginPage';
import AuthContext from './store/AuthContext';

const  App=()=> {
  const athctx=useContext(AuthContext);
  console.log("isloggedin",athctx.isLoggedin)
  

    
return (

  <ShoppingCartProvider>
  <Header/>
  <Route path="/">  <Home/>  </Route>
  {athctx.isLoggedin && <Route path='/store'><Store/></Route>}  
  {!athctx.isLoggedin &&  <Route path="/store" >
     <Redirect to='/login'></Redirect></Route> }
  
  
 
  <Route path="/store/:productid" ><ProductDetails/></Route>
  <Route path="/about"><About/></Route>
  <Route path="/contactus" ><ContactUs/></Route>
  {!athctx.isLoggedin && <Route path='/login'> <LoginPage/></Route>}
 
  <Route path="/logout"> <Home/></Route>

  


  <Footer/>
  
  </ShoppingCartProvider>
 
 
)
                  

}

export default App;
