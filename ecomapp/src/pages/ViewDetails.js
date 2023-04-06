import React ,{Fragment,useState}from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../Data/ProductData";
import classes from './ViewDetails.module.css'

 import Division from "../Components/Layout/Division";

const ViewDetails=()=>{
const params=useParams()
const data=ProductData.filter((item)=>item.id===params.productid)
const [displayImage,setDisplayImage]=useState(data[0].imageUrl[0])

const imageChangeHandler=(img)=>{
    setDisplayImage(img)
    console.log("image",img)

}

console.log("inside view",data)
console.log(data[0].imageUrl)


return(
   <>    <div className={classes.leftSection}>
              <div className={classes.div}>1
            <img src={data[0].imageUrl[0]} onClick={imageChangeHandler.bind(null,data[0].imageUrl[0])} ></img>
          </div>
          <div className={classes.div} >2
          <img src={data[0].imageUrl[1]}onClick={imageChangeHandler.bind(null,data[0].imageUrl[1])} ></img>

          </div>
          
          <div className={classes.div}>3
          <img src={data[0].imageUrl[2]} onClick={imageChangeHandler.bind(null,data[0].imageUrl[2])}></img>

          </div>
          <div className={classes.div}  >4
          <img src={data[0].imageUrl[3]} onClick={imageChangeHandler.bind(null,data[0].imageUrl[3])}></img>
          </div>
          </div>
          <div className={classes.rightSection}>
                <h4>{data[0].title}</h4>
                <div className={classes.div}>
                  <img src={displayImage} ></img>
                      
                    </div>
          </div>
       </>

)
}
export default ViewDetails;