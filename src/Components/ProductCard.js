import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = (props) => {
  return (
    <div>
 <Card className='ProductCard' style={{ width: '18rem',margin:'10px' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.details}
        </Card.Text>
        <Card.Text>
         Price : $ {props.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>    </div>
  )
}

export default ProductCard