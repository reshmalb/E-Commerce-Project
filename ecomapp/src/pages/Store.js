import {Card,Button,Col,Row} from 'react-bootstrap';
import {ProductData} from '../Data/ProductData'
import React,{useContext, useState,useEffect,useCallback} from 'react';
import ShoppingCartContext from '../store/ShoppingContext';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import AuthContext from '../store/AuthContext';
import axios from 'axios';


const getUserDataByEmail=async (email)=>{
  try{
    const response=await axios.get('https://apicallsproject-7e177-default-rtdb.firebaseio.com/cartdetails.json')
    //.then(response => {
      const data = response.data;      
       return data;
    //  })
    } catch(error )
     {
      console.log(error);
   // });
     }
}

const getEmailKey = (response,email) => {
  if (response) {
    const [key, value] = Object.entries(response).find(([key, value]) => value.email === email);
    return key;
  }
  return null;
}



const  createNewData=async(cartData)=>{
    try{
      const response= await  axios.post('https://apicallsproject-7e177-default-rtdb.firebaseio.com/cartdetails.json', cartData)
      const data=response.data;
      return data;
    }catch(error){
      console.log(error.message)
    }



//   return  axios.post('https://apicallsproject-7e177-default-rtdb.firebaseio.com/cartdetails.json', cartData)
//   .then(response => {
//    const data = response.data; 
//    return data;
//   //  localStorage.setItem('key',response.data.name)
//   // console.log("////",data)         
//   //  setUserData({ key: response.data.name, data: cartData});
   
//    })
//    .catch(error => {
// console.log(error);
//  })
} 

 

const Store=()=> {
  const ctx=useContext(ShoppingCartContext);
    const authctx=useContext(AuthContext);  
    const [productItems,setProductItems]=useState(ProductData)
    const [email,setEmail]=useState(localStorage.getItem('email'))
 // const [userData, setUserData] = useState(null);
 const [response,setResponse]=useState(null)





 useEffect(()=>{
   const responseData= getUserDataByEmail(email)
   setResponse(responseData)
   const emailKey=getEmailKey(response,email)
   if(emailKey){
    localStorage.setItem('key',emailKey)
   }
   else{
             const cartData={
              email:email
               }
     const newData=createNewData(cartData)
     setResponse(newData);
     const newEmailkey=getEmailKey(response,email)
     if(newEmailkey){
      localStorage.setItem('key',newEmailkey)
     }

   }

 },[])




   /// useEffect(()=>{     
      
    //   //.then(data => {
    //    console.log("data=",data)

    //    const dataItem =data.find((item,index) => item[index].email === email);
    //    console.log("dataitem",dataItem)
    // if (dataItem) {
    //   // do something with the data item
    //   localStorage.setItem('key',dataItem[0])  
    //                  setUserData(data[0].cartItems)   
    //                 const arr=data[0].cartItems
    //                 if(arr.length>0){
    //                   ctx.addCartItems(arr)
    //                 }
    // } else {
    //   // create new data if not found      
    //   const cartData = {
    //     email: email
    //     };

    //     createNewData(cartData).then(data=>{
    //       localStorage.setItem('key',data.name)
    //       console.log("////",data)         
    //      setUserData({ key: data.name, data: cartData});


    //     }).catch(error=>{
    //       console.log(error.message)
    //     })
    //   }
    // })},[])
    //             // for(const key in data){
                //             if(data[key].email===email){     
                //                   console.log("key=",key) 
                //                         localStorage.setItem('key',key)  
                //                         setUserData(data[key].cartItems)   
                //                         const arr=data[key].cartItems
                //                         console.log("array",arr)
                //                         if(arr.length>0 ){
                //                          ctx.addCartItems(arr)
                //                         }
                //                         return;                        
                //                        }   
                        
                //     }
                //     const existingkey=localStorage.getItem('key')            
                //     if(existingkey===null||existingkey===undefined){
         
                //           const cartData = {
                //             email: email
             
                //        };
                //  axios.post('https://apicallsproject-7e177-default-rtdb.firebaseio.com/cartdetails.json', cartData)
                //    .then(response => {
                //     const data = response.data; 
                //     localStorage.setItem('key',response.data.name)
                //    console.log("////",data)         
                //     setUserData({ key: response.data.name, data: cartData});
                    
                //     })
                //     .catch(error => {
                // console.log(error);
                //   })} 
                    
                         
                // })},[])          








    
    const addItemToCartHandler=(item)=>{
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