import React from 'react';
import { Button, Card, Col,CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, shortDescription, cost, _id } = product;
    return (
        <Col>
        <CardGroup>
            <Card style={{ width: '18rem', background: 'inherit' }} className="mb-3  m-auto">
            <Card.Header> <Card.Img variant="top" src={img} /></Card.Header>
               
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>
                    <Card.Text>
                        Price: {cost}
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer className="text-muted"><Link to={`/product/${_id}`}><Button variant="primary">Buy Now</Button></Link></Card.Footer>
            </Card>
            </CardGroup>
        </Col>
    );
};

export default Product;