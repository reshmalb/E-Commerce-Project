import React,{useState} from 'react';
import './App.css';

import Card from 'react-bootstrap/Card'
import DisplayItems from './Components/DisplayItems';
import Header from './Components/Layout/Header';
import Cart from './Components/CartButton/Cart';

const  App=()=> {
  const [isCartShown,setCartShown]=useState(false);
  const hideCArtHandler=()=>{
    setCartShown(false)
  }
  const showCartHandler=()=>{
    setCartShown(true)
  }
  return (
    <>
    {isCartShown && <Cart onClose={hideCArtHandler}/>}
     <Header onShowCart={showCartHandler} />
      <Card bg="Primary" variant="light" style={{width:"100%",height:"400%"}}>
          <Card.Text style={{fontStyle:"italic", fontSize:20,justifyContent:"center"}}>
           <header >
           <h1 className='display-1' container='fluid'> The Generics</h1> 
           </header>
          </Card.Text>
      </Card>
<DisplayItems/>
    </>
    
     
    
  );
}

export default App;
