import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import s_h_img from './img/portfolio/portfolio-banner.png';
import s_Title from './img/portfolio/PortfolioTitle.png';
function Portfolio_Header() {
    return (
        <div className='services-header'>
            <Container>
                <Row className='row-reletive'>
                    <Col md='4'>
                        <div className="services-header-text">
                            <div className="f-40">
                                HIGHLY CUSTOMIZABLE
                                <div className='color-bule'>
                                    SOFTWARE PRODUCTS
                                </div>
                                <p>We build custom digital solutions to meet our clients unique business needs</p>
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

export default Portfolio_Header