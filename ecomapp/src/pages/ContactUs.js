import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const ContactUs=()=>{  


    const [userName,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState()

    const URL="https://apicallsproject-7e177-default-rtdb.firebaseio.com/userdetails.json";
   
   const userChangeHandler=(e)=>{
    setUserName(e.target.value)
   }
  const emailChangeHandler=(e)=>{
    setEmail(e.target.value)
  }
  const phoneChangeHandler=(e)=>{
    setPhone(e.target.value)
  }



    const submithandler=(e)=>{
        e.preventDefault();
        const user={
          username:userName,
          email:email,
          phone:phone
        }
        addUserHandler(user)      
      
        setUserName('');
        setPhone('');
        setEmail('')
      
      }
      async function addUserHandler(user){
         const response=await   fetch(URL,{
          method:'POST',
          body:JSON.stringify(user),
          headers:{
            'Content-Type':'application/json'
          }
         })
         const data=await response.json();
      }


    




  return (
    <Form className="px-4 py-3" onSubmit={submithandler}>
        <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Username"
         value={userName} onChange={userChangeHandler}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={email} onChange={emailChangeHandler} />  
    </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Phone Number"
        value={phone} onChange={phoneChangeHandler} />
      </Form.Group>      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}


export default ContactUs;
