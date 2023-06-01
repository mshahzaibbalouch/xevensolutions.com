import React from 'react';
import horizentalline from './img/horizentalline.png';
import { Col, Container, Row } from 'react-bootstrap';
import exprince_img from './img/Services/exprince.png'

function ChooseUs() {
    return (
        <div className='choose-us'>
            <div className="container padding-top text-center">
                <h3>Why Should You Choose Us?</h3>
                <img src={horizentalline} alt='Horizental Line Not Fond' />
                <div style={{ marginTop: '20px' }} className="content">
                    <p className='f-15'>Our technology experts think big, design smart, and develop fast. We’re ready to turn your big idea into a reality.</p>
                </div>
            </div>
            <Container>
                <Row>
                    <Col md='6'>
                        <div className='choose-img'>
                            <img src={exprince_img} />
                        </div>
                    </Col>
                    <Col md='6'>
                        <div className="padding-top choose-content">
                        <h3>Our Experience</h3>
                <img src={horizentalline} alt='Horizental Line Not Fond' />
                            <p className='padding-top'>
                                Our innovative software solutions are industry efficient
                                to tackle tech challenges across several industries. We offer
                                world-class software development solutions to clients in order
                                for them to produce real business value and increase their ROI,
                                from planning to designing and deploying. Our team of experienced
                                software engineers and consultants will provide a software solution
                                that satisfies all of your requirements. Utilizing the appropriate
                                tools, we will collaborate with you to increase sales and help you
                                expand more efficiently than before.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ChooseUs;