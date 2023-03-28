
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import  Container from 'react-bootstrap/Container';
import  Nav from 'react-bootstrap/Nav';


const  App=()=> {
  return (
    <Navbar bg="Dark" expand="sm" variant="dark">
       <Container>
       <Nav.Link href="#Home">Home</Nav.Link>
        <Nav.Link href="#Store">Link</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>

       </Container>
      </Navbar>

    
  );
}

export default App;
