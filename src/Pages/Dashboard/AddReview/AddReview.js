import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import'./AddReview.css';



const AddReview = () => {

    const { user } = useAuth();
    const [success, setSuccess] = useState(false);
    const [rating, setRating] = useState({ info: '', name: user.displayName, email: user.email, img: user.photoURL });
    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRating = { ...rating };
        newRating[field] = value;
        setRating(newRating);
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch('https://hidden-beach-70560.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rating)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
            })
    }

    return (
        <div className=" addreview-bg my-4 p-4 w-50 rounded mx-auto justify-content-center align-items-center">
            <Form onSubmit={handleSubmit} style={{ maxWidth: '450px' }} className='m-auto'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Say Something</Form.Label>
                    <Form.Control required onBlur={handleOnBlur} name='info' as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required onBlur={handleOnBlur} type="Text" name='name' placeholder="Enter Name" value={user.displayName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required onBlur={handleOnBlur} type="Text" email='email' placeholder="Enter email" value={user.email} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {success && <Alert variant='primary'>
                Review Successfylly Added...
            </Alert>}
        </div>
    );
};

export default AddReview;