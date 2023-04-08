import Footer from "../Components/Layout/Footer"
import React from "react"
import { Container,Row,Col} from "react-bootstrap"
import Division from "../Components/Layout/Division"
import classes from './Home.module.css'


const dummy_data=[{
  date:'JUL16',
  title:' DETROIT, MI',
  details:'DTE ENERGY MUSIC THEATRE'

},
{
  date:'JUL16',
  title:' DETROIT, MI',
  details:'DTE ENERGY MUSIC THEATRE'

},
{
  date:'JUL16',
  title:' DETROIT, MI',
  details:'DTE ENERGY MUSIC THEATRE'

},
{
  date:'JUL16',
  title:' DETROIT, MI',
  details:'DTE ENERGY MUSIC THEATRE'

},
{
  date:'JUL16',
  title:' DETROIT, MI',
  details:'DTE ENERGY MUSIC THEATRE'

},
{
  date:'JUL16',
  title:' DETROIT, MI',
  details:'DTE ENERGY MUSIC THEATRE'

},
{
  date:'JUL16',
  title:' DETROIT, MI',
  details:'DTE ENERGY MUSIC THEATRE'

},
];


export default function Home() {
return (
	<div style={{ display: 'block', padding: 30, textAlign :"center" , fontFamily:"cursive"}}>
	<h2> Tours</h2>
  {dummy_data.map((data)=>

(<Row style={{fontFamily:"fantasy", paddingLeft:150, paddingRight:150,marginTop:'.75rem'
  }}>
    
    

		<Col style={{
    borderBottom:"1px solid"
  
		
		}}>
		{data.date}
	</Col>
		<Col style={{
		 borderBottom:"1px solid"
		}}>
	{data.title}
	</Col>
		<Col style={{
		 borderBottom:"1px solid"
		}}>
		{data.details}
	</Col>

  <Col style={{
		 borderBottom:"1px solid"
		}}>
	<button style={{backgroundColor:"cyan"}}> Buy Tickets</button>	
	</Col>
	 </Row>)
  )}
	</div>
);
}
