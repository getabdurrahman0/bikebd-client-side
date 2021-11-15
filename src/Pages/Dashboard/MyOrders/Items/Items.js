import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Items = ({ item, handleCancelOrder }) => {

    const { productImg, productName, productPrice } = item;
    return (
        <Container className='mt-3 p-3' style={{ backgroundColor: '#E8F6F3' }}>
            <Row>
                <Col sm='12' md='3'>
                    <img className='img-fluid' src={productImg} alt="" />
                </Col>
                <Col sm='12' md='6' className='pt-4'>
                    <h4>Product: {productName}</h4>
                    <h4>Price: {productPrice}</h4>
                    <Button onClick={() => handleCancelOrder(item._id)} variant="danger">Cancel Order</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Items;