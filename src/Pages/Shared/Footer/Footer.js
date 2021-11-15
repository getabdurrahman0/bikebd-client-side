import React from 'react';
import'./Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> About the company</span>BikeBD.com is Bangladesh's leading bike search venture that helps users buy bikes that are right for them. Its website and app carry rich automotive content such as expert reviews, detailed specs and prices, comparisons as well as videos and pictures of all bikes brands and models available in Bangladesh. The company has tie-ups with many auto manufacturers, more than 4000 Bike dealers and numerous financial institutions to facilitate the purchase of vehicles.
          </p>

        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span> Street name and number</span> Sirajganj, Bangladesh</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p> (+88) 0140 000 000</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>office@company.com</p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h2><img alt="" src={"https://www.bikebd.com/wp-content/uploads/2021/09/bikebd.com_logo.png"}width="150" className="d-inline-block align-top"/></h2>
          <p className="menu">
            <a href="#home"> Home</a> |
            <a href="#testimonial"> About</a> |
            <a href="#review"> Review</a>
            
          </p>
          <p className="name"> BikeBD.com &copy; 2021</p>
        </div>
      </footer>
    );
};

export default Footer;