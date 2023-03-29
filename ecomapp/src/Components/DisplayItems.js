import {Card,Button,Col,Row} from 'react-bootstrap';
import { ProductData } from './ProductData';
import React,{useState} from 'react';


const DisplayItems=()=> {
    const [productItems,setProductItems]=useState(ProductData)
  return (
    <>
    <h1> Music</h1>
      <Row md={2} xs={1} lg={2} 
        className="g-5 ms-5 me-5">
          {productItems.map((item)=>{
               return(   <Col key={item.id}>
                      <Card className='b-100'>
                          <Card.Img src={item.imageUrl}
                            height="300px"
                            width="10rem"
                            style={{objectFit:"cover"}}>
                          </Card.Img>
                          <Card.Body className='d-flex flex-column'>
                             <Card.Title
                             className='d-flex justify-content-between
                             align-items-baseline mb-4'>
                                <span className='fs-2'>{item.title}</span>
                                <span className='ms-2 text-muted'>${item.price}</span>
                             </Card.Title>
                             <div className="mt-auto">
                              <Button className='w-100'>
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

export default DisplayItems;