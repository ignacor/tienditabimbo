import { CardImg } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const CardProduct = ({ item }) => {
  const container = {
    border:' 2px solid black',
    borderRadius:' 25px',
    width: '18rem'
  }
  const containercard = {
   backgroundColor :'#B5B5B5',
   border:' 2px solid #B5B5B5',
    borderRadius:' 25px',
  }
    return (
      
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text> </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Peso: {item.peso}</ListGroup.Item>
        <ListGroup.Item>Precio: ${item.priceP}</ListGroup.Item>
        <ListGroup.Item>Precio Colaboradores: ${item.priceE}</ListGroup.Item>
      </ListGroup>
      
    </Card>
    );
}

export default CardProduct