import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import EachReview from './EachReview/EachReview';
import'./Review.css';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://hidden-beach-70560.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div className="review-bg" id="review">
            <Container className='py-5'>
                <h2>Customers Satisfication</h2>
                <Row className='my-5'>
                    {
                        reviews.map(review => <EachReview review={review} key={review._id}></EachReview>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Review;