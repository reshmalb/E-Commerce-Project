import {Card,Button,Col,Row} from 'react-bootstrap';
import {ProductData} from '../Data/ProductData'
import React,{useContext, useState} from 'react';
import ShoppingCartContext from '../store/ShoppingContext';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";



const Store=()=> {
    const [productItems,setProductItems]=useState(ProductData)
    const ctx=useContext(ShoppingCartContext);

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