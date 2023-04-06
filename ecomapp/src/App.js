import React,{useContext, useEffect, useState} from 'react';
import  Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store'
import ShoppingCartProvider from './store/ShoppingCartProvider';
import {Redirect, Route, Switch} from "react-router-dom";
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import ContactUs from './pages/ContactUs';
import LoginPage from './pages/LoginPage';
import AuthContext, { AuthorizationProvider } from './store/AuthContext';
import './App.css'
import ViewDetails from './pages/ViewDetails';

const  App=()=> {
  const athctx=useContext(AuthContext);
  useContext(()=>{

  },[athctx.isLoggedin])
  console.log("is loggedin",athctx.isLoggedin)
    
return (
<ShoppingCartProvider>

  <div   className="layout">
  <Header/>
  <main  style={{width:"100%",height:"100%"}}>
    <Switch>
  <Route path="/home" exact>  <Home/>  </Route>
  <Route path='/store' exact>
    {athctx.isLoggedin&& <Store/>}
    {!athctx.isLoggedin &&  <Redirect to='/login'/>}
  
  </Route> 
 {athctx.isLoggedin && <Route path="/store/:productid" ><ViewDetails/></Route>}
  <Route path="/about"><About/></Route>
  <Route path="/contactus" ><ContactUs/></Route>
 {!athctx.isLoggedin && <Route path='/login'> <LoginPage/></Route>}
 
 {athctx.isLoggedin&& <Route path="/logout"> <Home/></Route>}

  </Switch>
  
  </main>

  <Footer/>

  </div>
  </ShoppingCartProvider>
 
 
 
)
                  

}

export default App;
