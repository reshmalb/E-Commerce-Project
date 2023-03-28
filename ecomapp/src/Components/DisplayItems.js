import {Card,Button} from 'react-bootstrap';
import { ProductData } from './ProductData';
import React,{useState} from 'react';


function DisplayItems() {
    const [productItems,setProductItems]=useState(ProductData)
  return (
    <div>
        <h1 className='position-relative'>
             Music</h1>
        {productItems.map((item)=>(
            <div className="d-inline-flex p-5" >
             <Card
              style={{ width: '18rem' }}
              className="shadow p-3 mb-2 bg-body-tertiary rounded">
                 <Card.Img
                  variant="top" 
                  src={item.imageUrl}                 
                 />
                 <Card.Body>
                 <Card.Title>{item.title}</Card.Title>
                 <p> <Card.Text>{item.price} </Card.Text>
                 <Button variant="primary" >Add To Cart</Button> </p> 
                 </Card.Body>
                 </Card>
            </div>)
        
        )  }


    </div>
 
    
  
  );
}

export default DisplayItems;