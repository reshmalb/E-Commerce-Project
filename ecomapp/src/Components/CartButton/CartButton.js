import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { cartElements } from './CartElements';

const  CartButton=(props)=> {
    const noOfCartElement=cartElements.length;
  return (
    <Button variant="primary" onClick={props.onClick}>
      Cart <Badge bg="secondary">{noOfCartElement}</Badge>
    </Button>
  );
}

export default CartButton;