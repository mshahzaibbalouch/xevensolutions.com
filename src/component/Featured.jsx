import React from 'react';
import lms from './img/LMS-portfolio-thegem-portfolio-justified.webp';
import horizentalline from './img/horizentalline.png';
import { Col, Container, Row } from 'react-bootstrap';

function Featured() {
    return (
        <div className='featured margin-top'>
            <div className="container text-center padding-top">
                <h3>Featured Work</h3>
                <img src={horizentalline} alt='Horizental Line Not Fond' />
            </div>
            <Row className='padding-top' style={{width:'95% !important'}}>
                <Col md='5' lg='3'>
                    <a href='/' style={{ textDecoration: 'none' }}>
                        <div className="featured-card mb-5">
                            <div className="featured-card-header">
                                <img src={lms} alt='' />
                                <div className="featured-card-icon">
                                    <div className="card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="bi bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="card-icon-2">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                                                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-crad-body padding-top text-center">
                                <p>

                                    LEARNING MANAGEMENT SY...<br />
                                    <img src={horizentalline} alt='Horizental Line Not Fond' />
                                </p>

                            </div>
                        </div>

                    </a>
                </Col>
                <Col md='5' lg='3'>
                    <a href='/' style={{ textDecoration: 'none' }}>
                        <div className="featured-card mb-5">
                            <div className="featured-card-header">
                                <img src={lms} alt='' />
                                <div className="featured-card-icon">
                                    <div className="card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="bi bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="card-icon-2">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                                                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-crad-body padding-top text-center">
                                <p>

                                    LEARNING MANAGEMENT SY...<br />
                                    <img src={horizentalline} alt='Horizental Line Not Fond' />
                                </p>

                            </div>
                        </div>

                    </a>
                </Col>
                <Col  md='5' lg='3' style={{float:'right', marginRight:'-10px'}}>
                    <a href='/' style={{ textDecoration: 'none' }}>
                        <div className="featured-card mb-5">
                            <div className="featured-card-header">
                                <img src={lms} alt='' />
                                <div className="featured-card-icon">
                                    <div className="card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="bi bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="card-icon-2">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                                                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-crad-body padding-top text-center">
                                <p>

                                    LEARNING MANAGEMENT SY...<br />
                                    <img src={horizentalline} alt='Horizental Line Not Fond' />
                                </p>

                            </div>
                        </div>

                    </a>
                </Col>
                <Col  md='5' lg='3'>
                    <a href='/' style={{ textDecoration: 'none' }}>
                        <div className="featured-card mb-5">
                            <div className="featured-card-header">
                                <img src={lms} alt='' />
                                <div className="featured-card-icon">
                                    <div className="card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="bi bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="card-icon-2">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                                                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-crad-body padding-top text-center">
                                <p>

                                    LEARNING MANAGEMENT SY...<br />
                                    <img src={horizentalline} alt='Horizental Line Not Fond' />
                                </p>

                            </div>
                        </div>

                    </a>
                </Col>
            </Row>
            <div className="padding-top text-center">
            <a href='https://www.xevensolutions.com/portfolio/' className='btn btn-primary btn-w-h bg-blue hover-bg-blue f-15 w-20'>VIEW ALL</a>
           
          </div>
        </div>
    )
}

export default Featured;