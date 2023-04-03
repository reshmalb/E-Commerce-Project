import React from "react"
import classes from './Footer.module.css'
const Footer=()=>{
    return(
      <div className={classes.footer}>
      <p style={{fontSize:"18",
      fontStyle:"italics",
      fontWeight:"bolder"}}>The Generics &copy;</p>
      </div>
    )
}
export default Footer;