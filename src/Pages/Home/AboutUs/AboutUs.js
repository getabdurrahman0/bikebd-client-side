import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import'./AboutUs.css';

const AboutUs = () => {
    return (
        <div id='testimonial' className="tastimo">
            <div className="text-center aboutTitile"><h2>About BikeBD</h2></div>
            <Container>
                <Row>
                    <Col md='6' sm='12'>
                        <h2>Our Reputation Speaks</h2>
                        <h1 className='mcolor '>for Itself</h1>
                        <div>
                            <p>BikeBD.com is Bangladesh's leading bike search venture that helps users buy bikes that are right for them. Its website and app carry rich automotive content such as expert reviews, detailed specs and prices, comparisons as well as videos and pictures of all bikes brands and models available in Bangladesh. The company has tie-ups with many auto manufacturers, more than 4000 Bike dealers and numerous financial institutions to facilitate the purchase of vehicles.</p>
                        </div>
                    </Col>
                    <Col md='6' sm='12'>
                        <img className='img-fluid' src="https://images2.imgbox.com/f9/1c/79ENNkCe_o.jpg" alt="" />
                        

                       
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;