import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import s_h_img from './img/Team/team-main-banner-scaled.jpg';
import s_Title from './img/Team/OurTeamTitle.png';

function TeamHeader() {
    return (
        <div>
            <div className='team-header'>
                <Container>
                    <Row className='row-reletive'>
                        <Col md='4'>
                            <div className="services-header-text">

                                <div className="ff-40">
                                    WE ARE A TEAM
                                    <div className='color-bule'>
                                        OF EXPERTS.
                                    </div>
                                    <p className='padding-top'>We are conversation starters and trend-setters. Let’s discover, build and grow your digital business</p>
                                </div>
                            </div>
                        </Col>
                        <Col md='2'>
                            <div style={{ width: '90%' }} className="bg-image">
                                <img src={s_Title} alt='' />
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className='t-img'>
                            <img style={{ width: '135%' }} src={s_h_img} alt='' />
                                
                            </div>
                        </Col>
                        
                    </Row>
                        
                </Container>
            </div>
        </div>
    )
}

export default TeamHeader;