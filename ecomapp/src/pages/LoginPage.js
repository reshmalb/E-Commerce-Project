import React,{useRef,useContext} from "react";
import { Container,Form,Button}from 'react-bootstrap'
import AuthContext from "../store/AuthContext";
import { useHistory } from "react-router-dom";


const LoginPage=()=>{

    const ctx=useContext(AuthContext);
    const history=useHistory();

      const inputEmailref=useRef();
      const inputPasswordref=useRef();

     const onSubmitHandler=(e)=>{
    e.preventDefault();
    const emailAddress=inputEmailref.current.value;
    const password=inputPasswordref.current.value;


  
     let url=   'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0an-iOy1im1Cjd3_OhzCjGooPUxdc7Es';
    
    fetch(url,
        {method:'POST',
          body:JSON.stringify({
            email:emailAddress,
            password:password,
            returnSecureToken:true
          }),
          headers:{
            'Content-Type':'application/json'
          }
        }
        ).then(res=>{      
              if(res.ok){
                return res.json()
          }
          else{
          return  res.json().then(data=>{
              //show error
          
              let errorMessage="Authentication failed"
              // if(data && data.error&& data.error.message){
              //   errorMessage=data.error.message;
              // }
              throw new Error(errorMessage);
            });
          }

        }).then((data)=>{
              console.log(data)//when successful request
              history.replace('/store')
              ctx.login(data.idToken)

        }).catch((error)=>{
          alert(error.message)

        })
     


}

    return(

        <Container >
        <Form  class= "row g-3 mr-4 bg-color-blue" onSubmit={onSubmitHandler} >
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
             <Button variant="primary" type="submit"  >
                Login
                 </Button>
             
                
            </Form>
          </Container>
    )

}

export default LoginPage;
