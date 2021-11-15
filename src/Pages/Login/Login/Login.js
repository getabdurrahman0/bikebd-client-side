import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import'./Login.css';

const Login = () => {

    const { user, userLogin, error, loading, googleSignIn } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const [loginData, setLoginData] = useState({});

    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSubmit = e => {
        e.preventDefault();
        userLogin(loginData.email, loginData.password, location, history);
    }

    return (
        <div>
            <Navigation></Navigation>
            <Container className='mt-5'>

                    <div className="note my-4 p-4 w-50 rounded mx-auto justify-content-center align-items-center">
                        <h5>Please Note:</h5>
                        <p className="note-p">For testing purpose please type the email address: admin@admin.com and with password: 123456 </p></div>
                        
                <div className="login-bg my-4 p-4 w-50 rounded mx-auto justify-content-center align-items-center">
                {!loading ? <Form onSubmit={handleSubmit} style={{ maxWidth: '450px' }} className='m-auto '>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleonBlur} name='email' type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleonBlur} name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                    <div className='mt-3'>
                        <Form.Text className="text-muted m-auto" style={{ maxWidth: '450px' }}>
                            Don't have any account? <Link className='text-decoration-none ms-2 text-primary hdark fw-bolder' to='/register'>Register</Link> now.
                        </Form.Text>
                    </div>
                </Form> : <div className='text-center'><Spinner animation="grow" variant="info" /></div>}
                <div className='m-auto' style={{ maxWidth: '450px' }}>
                    <p>=============================</p>
                    <Button onClick={() => googleSignIn(location, history)} variant="warning">Google Sign in</Button>
                    {user?.email && <Alert variant='success'>
                        User Logged In Successfully
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

export default Login;