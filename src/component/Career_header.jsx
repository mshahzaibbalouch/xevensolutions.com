import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import s_h_img from './img/career/career-banner-2.png';
import s_Title from './img/portfolio/PortfolioTitle.png';

function Career_header() {
    return (
        <div><div className='services-header'>
            <Container>
                <Row className='row-reletive'>
                    <Col md='4'>
                        <div className="services-header-text">
                            <div className="f-40">
                               
                                <div className='color-bule padding-top'>
                                CAREERS
                                </div>
                                <p className='padding-top'>Discover your next career move with one of the leading Tech Firms!</p>
                            </div>
                        </div>
                    </Col>
                    <Col md='2'>
                       
                    </Col>
                    <Col md='6'>
                        <div className='s-img'>
                            <img src={s_h_img} alt='' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default Career_header