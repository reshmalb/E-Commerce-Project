import {Card,Button,Col,Row} from 'react-bootstrap';
import {ProductData} from '../Data/ProductData'
import React,{useContext, useState} from 'react';
import ShoppingCartContext from '../store/ShoppingContext';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import AuthContext from '../store/AuthContext';

async  function checkExistingCartDetails(email){
  try{
    const response= await fetch("https://crudcrud.com/api/d7181b044af945bc9494a7a2050b5996/loginDetails");
    const data=await response.json();
    const userDetails=data.filter((item)=> item.email===email)
    console.log("userdetails",userDetails)
    if(userDetails){
      console.log(userDetails[0]._id)
      return (userDetails[0]._id);
    }
    else{
      return null;
    }
  }catch(error){
    alert(error.message)
  }
    
  }

const Store=()=> {
    const [productItems,setProductItems]=useState(ProductData)
    const ctx=useContext(ShoppingCartContext);
    const authctx=useContext(AuthContext);
    
   console.log(authctx.email)



    const addItemToCartHandler=(item)=>{
       console.log(item);
         ctx.increaseCartItem({
               id:item.id,
               title:item.title,
               price:item.price,
               imageUrl:item.imageUrl[0],
               quantity:1
               });
    }

    const userId=checkExistingCartDetails(authctx.email);
   // const userId=userdetails[0]._id;
    console.log("userid",userId)
    let url;
    async function saveUserCartItems(item){

    if(userId){  
      url=
      `https://crudcrud.com/api/d7181b044af945bc9494a7a2050b5996/loginDetails/${userId}`;
      try{
        const response=await fetch(url,
        {
          method:'PUT',
            body  :JSON.stringify({
              cart:item.id            

            }),
            headers:{
              'Content-Type':'application/json'
            }

        })

      }catch(error){
        console.log(error)
      }
      }else{
       url='https://crudcrud.com/api/d7181b044af945bc9494a7a2050b5996/loginDetails';
       try{
        const response=await fetch(url,
        {
          method:'POST',
            body  :JSON.stringify({
              email:authctx.email,
              cart:item.id          

            }),
            headers:{
              'Content-Type':'application/json'
            }

        })

      }catch(error){
        console.log(error)
      }
      }
      
    }

  return (
    <>
    <h1> Music</h1>
      <Row md={2} xs={1} lg={2} 
        className="g-5 ms-5 me-5">
          {productItems.map((item)=>{
               return(   <Col key={item.id}>
                      <Card className='b-10'>
                          <Card.Img src={item.imageUrl[0]}
                            height="200px"
                            width="100px"
                            style={{objectFit:"cover"}} 
                          >
                          </Card.Img>
                          <Link  to={`/store/${item.id}`}> View Details</Link>

                          <Card.Body className='d-flex flex-column'>
                             <Card.Title
                             className='d-flex justify-content-between
                             align-items-baseline mb-4'>
                                <span className='fs-2'>{item.title}</span>
                                <span className='ms-2 text-muted'>${item.price}</span>
                             </Card.Title>
                             <div className="mt-auto">
                              <div>

                              </div>
                              <Button className='w-100' type="submit" onClick={addItemToCartHandler.bind(null,item)}>
                                +ADD TO CART
                              </Button>

                             </div>

                          </Card.Body>

                      </Card>
                  </Col>)
          })}
        

      </Row>
    </>
   
  );
}

export default Store;