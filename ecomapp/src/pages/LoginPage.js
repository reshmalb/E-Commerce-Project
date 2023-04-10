import React,{useRef,useContext, useState, useCallback,useEffect} from "react";
import { Container,Form,Button}from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import axios from "axios";
import ShoppingCartContext from "../store/ShoppingContext";






const LoginPage=()=>{ 
  const authctx=useContext(AuthContext)
  const stx=useContext(ShoppingCartContext)

    const history=useHistory();
    const inputEmailref=useRef();
    const inputPasswordref=useRef();
    
    const [email,setEmail]=useState();
    const [userId,setUserId]=useState(); 

   
   
 


   








  const onSubmitHandler=(e)=>{
    e.preventDefault();
    const emailAddress=inputEmailref.current.value;  
    const password=inputPasswordref.current.value;
    setEmail(emailAddress)
    const userContext={
      email:emailAddress,
      password:password      
    }
    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0an-iOy1im1Cjd3_OhzCjGooPUxdc7Es",{
      email:emailAddress,
      password:password,
      returnSecureToken:true
    }).then(response=>{
      const data= response.data;      
          //for autologout
          const expirationTime=new Date(new Date().getTime()+(+data.expiresIn*1000))  
          
          authctx.userLogin(emailAddress, data.idToken,expirationTime)
          localStorage.setItem('email',emailAddress);  
          history.replace('/store')
    }).catch(error => {
      console.log(error);
    }) 
  }

 

      

    

    return(

        <Container >
        <Form  className= " bg-color-blue" onSubmit={onSubmitHandler} >
                 <Form.Group className="mb-2 ms-20 col-3" controlId="formBasicEmail">
                   <Form.Label>Email address</Form.Label>
                   <Form.Control type="email"  ref={inputEmailref} />
                  
                 </Form.Group>
           
                 <Form.Group className="mb-2 col-3" controlId="formBasicPassword">
                   <Form.Label>Password</Form.Label>
                   <Form.Control type="password" ref={inputPasswordref} />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
               
                 </Form.Group>
             <Button variant="primary"  type="submit" >
                Login
                 </Button>
             
                
            </Form>
          </Container>
    )

}

export default LoginPage;
