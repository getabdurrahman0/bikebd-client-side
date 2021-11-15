import React, { useEffect, useState } from 'react';
import { Container, Spinner, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import ProductModal from '../ProductModal/ProductModal';
import'./FullDiscription.css';

const FullDiscription = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [information, setInformation] = useState({});
    useEffect(() => {
        fetch(`https://hidden-beach-70560.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data?.img) {
                    setLoading(false);
                    setInformation(data);
                }
            })
    }, [id])
    const { name, img, fullDescription, cost } = information;
    
    return (
        <div style={{minHeight: '70vh'}}>
            <Navigation></Navigation>
            {loading ? <div className='text-center'><Spinner animation="grow" variant="info" /></div> :
                <Container>
<div className=" fulldis-bg my-4 p-4 w-80 rounded mx-auto justify-content-center align-items-center">
    
                        
                    <div className='m-auto mt-3' style={{ maxWidth: '800px' }}>
                        <img src={img} className='img-fluid' alt="" />
                    </div>
                    <div className="dis-footer">
                    <h1>{name}</h1>
                    <h4>Description:</h4>
                    <p>{fullDescription}</p>
                    <h3 className='my-3'>Price: {cost}</h3>
                    <div>
                        <Button variant="outline-danger" onClick={handleShow}>Place Order</Button>
                        <ProductModal show={show} handleClose={handleClose} information={information}></ProductModal>
                    </div>
                    </div>
                    

</div>
                </Container>}
            <Footer></Footer>
        </div>
    );
};

export default FullDiscription;