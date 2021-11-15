import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {

    const { registerUser, loading, user, error, googleSignIn } = useAuth();
    const [registerData, setRegisterData] = useState({});
    const location = useLocation();
    const history = useHistory();

    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('Your Password Did Not Match');
            return
        }
        registerUser(registerData.email, registerData.password, registerData.name, history)
        e.preventDefault();
    }

    return (
        <div>
            <Navigation></Navigation>
            <Container className='mt-5'>
                <div className="login-bg my-4 p-4 w-50 rounded mx-auto justify-content-center align-items-center">
                {!loading ? <Form onSubmit={handleSubmit} style={{ maxWidth: '450px' }} className='m-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required onBlur={handleonBlur} name='name' type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required onBlur={handleonBlur} name='email' type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required onBlur={handleonBlur} name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Re-enter your password</Form.Label>
                        <Form.Control required onBlur={handleonBlur} name='password2' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <div className='mt-3'>
                        <Form.Text className="text-muted m-auto" style={{ maxWidth: '450px' }}>
                            Already have an account? <Link className='text-decoration-none ms-2 text-primary hdark fw-bolder' to='/login'>Login</Link> now.
                        </Form.Text>
                    </div>
                </Form> : <div className='text-center'><Spinner animation="grow" variant="info" /></div>}
                <div className='m-auto' style={{ maxWidth: '450px' }}>
                    <p>=============================</p>
                    <Button onClick={() => googleSignIn(location, history)} variant="warning">Google Sign in</Button>
                    {user?.email && <Alert variant='success'>
                        User Signed Up Successfully
                    </Alert>}
                    {error && <Alert variant='danger'>
                        {error}
                    </Alert>}
                </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Register;