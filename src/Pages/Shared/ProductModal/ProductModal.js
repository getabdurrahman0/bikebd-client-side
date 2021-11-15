import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const ProductModal = ({ show, handleClose, information }) => {

    const [productData, setProductData] = useState({});
    const { name, img, cost } = information;
    const { user } = useAuth();

    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newproductData = { ...productData };
        newproductData[field] = value;
        setProductData(newproductData);
    }

    const handlePlaceOrder = e => {
        const product = {
            ...productData,
            email: user.email,
            productName: name,
            productImg: img,
            productPrice: cost
        }

        fetch('https://hidden-beach-70560.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    handleClose();
                    alert('Order Placed Successfully...')
                }
            })

        e.preventDefault();
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handlePlaceOrder} style={{ maxWidth: '450px' }} className='m-auto'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control disabled onBlur={handleonBlur} name='name' type="text" value={user?.displayName} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control disabled onBlur={handleonBlur} name='email' type="text" value={user?.email} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control required onBlur={handleonBlur} name='phone' type="text" placeholder="Enter Your Phone Number" />
                        </Form.Group>
                        <Button variant="primary" type='submit'>
                            Place Order
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProductModal;