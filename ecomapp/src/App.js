import React,{useContext, useState} from 'react';
import  Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store'
import ShoppingCartProvider from './store/ShoppingCartProvider';
import {Redirect, Route, Switch} from "react-router-dom";
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import ContactUs from './pages/ContactUs';
import ProductDetails from './pages/ProductDetails';
import LoginPage from './pages/LoginPage';
import AuthContext from './store/AuthContext';
import './App.css'

const  App=()=> {
  const athctx=useContext(AuthContext);
  console.log("isloggedin",athctx.isLoggedin)
  

    
return (

 <ShoppingCartProvider>
  <div   className="layout">


  <Header/>
  <main  style={{width:"100%",height:"100%"}}><Switch>
  <Route path="/home" exact>  <Home/>  </Route>
   <Route path='/store'><Store/></Route> 
  <Route path="/store/:productid" ><ProductDetails/></Route>
  <Route path="/about"><About/></Route>
  <Route path="/contactus" ><ContactUs/></Route>
  <Route path='/login'> <LoginPage/></Route>
 
  <Route path="/logout"> <Home/></Route>

  </Switch>
  
  </main>

  <Footer/>

  </div>
  </ShoppingCartProvider>
 
 
)
                  

}

export default App;
