import React from 'react'
import ReactPlayer from 'react-player';
import horizentalline from './img/horizentalline.png';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './slider/bill.jpg';
import img2 from './slider/jeffy.jpg';
import video1 from './slider/Irfan Referral by President of Join Treaty.mp4'
import video2 from './slider/Irfan referral by the president of Memore LLC.mp4'
import { Col, Container, Row } from 'react-bootstrap';
function Success() {
    return (
        <div>
            <div className="container text-center">
                <h2>Success Stories</h2>
                <img src={horizentalline} alt='Horizental Line Not Fond' />
            </div>
        <Container className='padding-top bg-custum'>
         
            <div className="container">
            <Row>
            <Col md={5}>
            <img className='slider-card-img' src={img1} alt=''/>
            </Col>
            <Col md={7}>
            <h4 className='color-bule padding-top f-Arial'>Why Xeven Experts</h4>
            </Col>
            </Row> 
            </div>
         </Container> 
        </div>
    )
}

export default Success