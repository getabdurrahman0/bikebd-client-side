import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (


        
        
        <div>
            <Carousel>
                <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="https://images2.imgbox.com/39/49/YLShufKi_o.jpg"
                        alt="Nomand Paradise"
                     />

                    <Carousel.Caption>
                        <div>
                        <h3>Yamaha Motor Co., Ltd. is a Japanese manufacturer of motorcycles</h3>
                        <p>Yamaha Motor Co., Ltd. is a Japanese manufacturer of motorcycles, marine products such as boats and outboard motors, and other motorized products. The company was established in 1955 upon separation from Yamaha Corporation, and is headquartered in Iwata, Shizuoka, Japan.</p>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" 
                    src="https://images2.imgbox.com/19/37/ksy9VGWV_o.jpg" alt="Paradise"/>
                    <Carousel.Caption>
                        <div>
                        <h3>Ducati Motor Holding S.p.A. is the motorcycle-manufacturing division of Italian company Ducati</h3>
                        <p>Ducati Motor Holding S.p.A. is the motorcycle-manufacturing division of Italian company Ducati, headquartered in Bologna, Italy. The company is owned by Italian automotive manufacturer Lamborghini, through its German parent company Audi, itself owned by the Volkswagen Group</p>
                        </div>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images2.imgbox.com/76/28/YRg2Edf5_o.jpg"
                        alt="Paradise"
                    />
                    <Carousel.Caption>
                        <div>
                        <h3>Harley-Davidson, Inc., H-D, or Harley, is an American motorcycle manufacturer</h3>
                            <p>Harley-Davidson, Inc., H-D, or Harley, is an American motorcycle manufacturer founded in 1903 in Milwaukee, Wisconsin. Along with Indian, it was one of two major American motorcycle manufacturers to survive the Great Depression.</p>
                        </div>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Banner;