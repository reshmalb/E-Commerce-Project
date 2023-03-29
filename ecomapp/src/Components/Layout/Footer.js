import React from "react"
import { Container,Row,Col
 } from "react-bootstrap"
const Footer=()=>{
    return(
        <div className="main-footer" sticky="bottom">
            <div className="container">
                <div className="row">
                   <div className="col-md-3  col- sm-6"
                     style={{backgroundColor:"blue",
                        color:"Black",
                        marginBottom:0,
                        marginTop:"80%"}}>
                      <h4> The Generics</h4>

                   </div>
                </div>

            </div>

        </div>
    )
}
export default Footer;