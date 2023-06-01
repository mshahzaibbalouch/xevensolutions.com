import React from 'react';
import horizentalline from './img/horizentalline.png';
import { Container, Row } from 'react-bootstrap';

function AboutUS() {
    return (
        <div>
            <div className="container text-center padding-top">
                <h3>About Us</h3>
                <img src={horizentalline} alt='Horizental Line Not Fond' />
            </div>
            <Container>
                <Row>
                    <p style={{lineHeight:'30px', fontSize:'16px', textAlign:'center' , color:'#5f727f'}}>We enable businesses to reach their full potential with our intelligent Digital Solutions. The aim is to revolutionize the technology landscape by assimilating it with Artificial Intelligence and Machine Learning. Xeven Solutions has a global outreach that is rapidly growing and expanding due to its rich portfolio of products and services. We chart a collaborative path to build digital solutions that meet the client’s expectations and exceed them as we always aim to add value to their businesses. Our primary focus is to build relationships and forge alliances with our clients because our success lies in their growth.</p>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUS;