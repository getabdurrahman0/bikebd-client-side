import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css';

const Navigation = () => {

    const { user, logOut } = useAuth();
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        margin:"0 15px"
      };

    
    return (
        <Navbar className='sticky-top mb-1 shadow-sm py-2' expand="lg">
            <Container>
                <HashLink to='/home#home'>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={"https://www.bikebd.com/wp-content/uploads/2021/09/bikebd.com_logo.png"}
                            width="150"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </HashLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-bolder d-flex align-items-center">

                        <HashLink to='/home#home'>Home</HashLink>

                        <HashLink to='/explore#explore'>Explore More</HashLink>
                        <HashLink to='/home#review'>Review</HashLink>
                        <HashLink to='/home#testimonial'>AboutUs</HashLink>

                        {
                            user?.email ? <><Link to='/dashboard'>Dashboard</Link>

                            <div style={mystyle}>{user.displayName}
                            
                            </div> 
                                <Button onClick={logOut} className='ms-2' variant="danger">Logout</Button>    
                            </> :
                                <Link className='nbtn btn' to='/login'>SignIn</Link>
                               
                        }
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
};

export default Navigation;