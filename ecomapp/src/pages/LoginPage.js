import React,{useRef} from "react";
import { Container,Form,}from 'react-bootstrap'


const LoginPage=()=>{
      const inputEmailref=useRef();
      const inputPasswordref=useRef();
const onSubmitHandler=(e)=>{
    e.preventDefault();

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
                 {isLoading && <p>Sending request....</p>}
                
            </Form>
          </Container>
    )

}

export default LoginPage;
