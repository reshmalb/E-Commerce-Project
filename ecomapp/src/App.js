
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import  Container from 'react-bootstrap/Container';
import  Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import DisplayItems from './Components/DisplayItems';


const  App=()=> {
  return (
    <>
    <Navbar bg="success" expand="sm" variant="dark" >
       <Container>
       <Nav.Link href="#Home">Home</Nav.Link>
        <Nav.Link href="#Store">Link</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
        <Button>Cart</Button>
       </Container>
      </Navbar>
      <Card bg="Primary" variant="light" style={{width:"100%",height:"400%"}}>
          <Card.Text style={{fontStyle:"italic", fontSize:20,justifyContent:"center"}}>
           <h1> The Generics</h1> 
          </Card.Text>
      </Card>
<DisplayItems/>
    </>
    
     
    
  );
}

export default App;
