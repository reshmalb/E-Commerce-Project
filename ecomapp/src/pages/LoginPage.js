import React,{useRef,useContext} from "react";
import { Container,Form,Button}from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import AuthContext from "../store/AuthContext";


const LoginPage=()=>{ 
  const authctx=useContext(AuthContext)
    const  history=useHistory();
    const inputEmailref=useRef();
    const inputPasswordref=useRef();

  const onSubmitHandler=(e)=>{
    e.preventDefault();
    const emailAddress=inputEmailref.current.value;  
    const password=inputPasswordref.current.value;
    const userContext={
      email:emailAddress,
      password:password
      
    }
  login(userContext)
  history.push('/store')

  }
    
  
    async function login(userContext){
    
    try{    
     const response=await  fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0an-iOy1im1Cjd3_OhzCjGooPUxdc7Es',
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
        authctx.userLogin(data.idToken)
      }
      
    }  

  catch(error){
       alert(error.message)
  }

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
