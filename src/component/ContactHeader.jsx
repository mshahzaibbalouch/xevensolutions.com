import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import s_h_img from './img/contact/contact-banner.png';
import s_Title from './img/contact/ContactTitle.png';

function ContactHeader() {
    return (
        <div>
            <div className='services-header'>
                <Container>
                    <Row className='row-reletive'>
                        <Col md='4'>
                            <div className="services-header-text">

                                <div className="f-40">
                                    LET’S TALK
                                    <div className='color-bule'>
                                        BUSINESS
                                    </div>
                                    <p>
                                        Every project begins with an idea. Let’s discover, build and grow your digital business.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md='2'>
                            <div className="bg-image">
                                <img src={s_Title} alt='' />
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className='ss-img'>
                                <img src={s_h_img} alt='' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ContactHeader