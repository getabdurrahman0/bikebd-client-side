import React from 'react';
import { Card, Col,CardGroup } from 'react-bootstrap';
import'./EachReview.css';

const EachReview = ({ review }) => {
    const { name, info, img } = review;
    return (
        <Col>
        <CardGroup>
        <div className="review-bg ">
        <Card style={{ width: '18rem', background: 'inherit' }} className="mb-3  m-auto">
                <div className="text-center">
                <Card.Img  className='rounded-circle w-50' variant="top" src={img} />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {info}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
            </CardGroup>
        </Col>
    );
};

export default EachReview;