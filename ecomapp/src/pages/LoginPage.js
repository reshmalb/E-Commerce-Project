import React,{useRef,useContext, useState, useCallback} from "react";
import { Container,Form,Button}from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import ShoppingCartContext from "../store/ShoppingContext";


const LoginPage=()=>{ 
  const authctx=useContext(AuthContext)
  const cartCtx=useContext(ShoppingCartContext)
    const  history=useHistory();
    const inputEmailref=useRef();
    const inputPasswordref=useRef();
    const [email,setEmail]=useState();
    const [userId,setUserId]=useState();



    const fetchCartDetails=(async()=>{
      try{
        const response=await fetch("https://crudcrud.com/api/9649fb4f1a9d4fdbba95b361f252ca1d/loginDetails",
        {
          method:'GET'
        });  
        const data=await response.json();
        console.log("data=",data)
        const isData=data.map((item)=> item.email===email)
        console.log("isdata=",isData)

        if(isData){
          cartCtx.addCartItems(data.cartItems);
          setUserId(isData._id)
        }
        else{
          try{
            const response=await fetch("https://crudcrud.com/api/9649fb4f1a9d4fdbba95b361f252ca1d/loginDetails/ ",{
              method:'POST',
              body:JSON.stringify({
                email:email,
                cartItems:[]
              })
            });  
            const data=await response.json();
              setUserId(data._id)
          }
          catch(error){
            alert(error.message)
          }
        }
      }catch(error){
        alert(error.message)
      }
     
     
  })
      
  
      
    
      async function login(userContext){
      
      try{    
       const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0an-iOy1im1Cjd3_OhzCjGooPUxdc7Es',
        {method:'POST',
          body:JSON.stringify({
            email:userContext.email,
            password:userContext.password,
            returnSecureToken:true
          }),
          headers:{
            'Content-Type':'application/json'
          }
        }
        )
        if(!response.ok){
          throw new Error("Authentication failed!!")
        }
        else{
          const data=await response.json();   
          //for autologout
          const expirationTime=new Date(new Date().getTime()+(+data.expiresIn*1000))
  
          //for crudcrud 
          let updatedEmail=userContext.email.replace('@','');
          updatedEmail=updatedEmail.replace('.','');
          setEmail(updatedEmail);        
          authctx.userLogin(updatedEmail, data.idToken,expirationTime)
          history.replace('/store')
        }
        
      }  
  
    catch(error){
         alert(error.message)
    }
  
    }
      








  const onSubmitHandler=(e)=>{
    e.preventDefault();
    const emailAddress=inputEmailref.current.value;  
    const password=inputPasswordref.current.value;
    const userContext={
      email:emailAddress,
      password:password
      
    }
    console.log("inside login")
  login(userContext) ;
  //fetchCartDetails();
 // authctx.setUserId(userId);
  }

 

      

    

    return(

        <Container >
        <Form  className= "row g-3 mr-4 bg-color-blue" onSubmit={onSubmitHandler} >
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
