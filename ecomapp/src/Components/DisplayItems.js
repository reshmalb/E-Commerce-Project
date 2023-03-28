import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const productsArr = [ {    
    title: 'Colors',    
    price: 100,    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',    
    },    
    {    
    title: 'Black and white Colors',    
    price: 50,    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },    
    {    
    title: 'Yellow and Black Colors',    
    price: 70,    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {    
    title: 'Blue Color',
    price: 100,    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }   
    ];

function DisplayItems() {
  return (
   <Card style={{ width: '100%' ,height:'100%'}}>
    {productsArr.map((item)=>{
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={item.imageUrl}/>
          <Card.Body>
           <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.price}  </Card.Text>
        </Card.Body>

</Card>
})}

    </Card>
   

  
  );
}

export default DisplayItems;