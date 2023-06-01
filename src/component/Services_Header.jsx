import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import s_h_img from './img/Services/services-banner.png';
import s_Title from './img/Services/ServicesTitle.png';
function Services_Header() {
    return (
        <div className='services-header'>
            <Container>
                <Row className='row-reletive'>
                    <Col md='4'>
                        <div className="services-header-text">

                            <div className="f-40">
                                BESPOKE
                                <div className='color-bule'>
                                    BUSINESS
                                    SOLUTIONS
                                </div>


                                <p>We use the best tech stack to build innovative digital solutions to meet your business needs.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md='2'>
                        <div className="bg-image">
                            <img src={s_Title} alt='' />
                        </div>
                    </Col>
                    <Col md='6'>
                        <div className='s-img'>
                            <img src={s_h_img} alt='' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services_Header;