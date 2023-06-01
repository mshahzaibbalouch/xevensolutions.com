import React from 'react';
import mobile_app from './img/mobile-app.png';
import ux from './img/ux.png';
import custom from './img/custom_softwear.png';
import team from './img/team.png';
import devops from './img/devops.png';
import quality from './img/qualty.png';
import al from './img/al-ms.png';
import { Row, Col, Card, Container } from 'react-bootstrap';

import horizentalline from './img/horizentalline.png';


function Cards(props) {
    return (
        <div className="cards">
            <div className="container padding-top mb-3 text-center">
                <h3>{props.Title}</h3>
                <img src={horizentalline} alt='Horizental Line Not Fond' />
                <Container>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <p className='text-center w-100' style={{ marginTop: '100px',marginBottom : '100px', fontSize: '20px' }}>
                                Whether you’re a Fortune 500 or a startup in stealth mode-Xeven Solutions
                                give creative, technical and business talent you need to succeed
                            </p>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            </div>
            <div className="container">
                <Row>
                    <Col>
                        <a href='/' style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '15rem', height: '350px' }} className='card mb-5'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='card-img' width="80" height="80" fill="currentColor" class="bi bi-search" viewBox="0 0 15 15">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </span>
                                <Card.Body className="card-Body">
                                    <Card.Title className='color-bule'>DISCOVERY WORKSHOP</Card.Title>
                                    <Card.Text>
                                        To ensure your solution creates an impact,
                                        we collaborate for a week of mind-mapping
                                        sessions to define your idea from a business
                                        and technical perspective
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a href='/' style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '15rem', height: '350px' }} className='card  mb-5'>
                                <span>
                                    <img src={ux} className='card-img' alt='' />
                                </span>
                                <Card.Body className="card-Body">
                                    <Card.Title className='color-bule'>UI/UX DESIGN</Card.Title>
                                    <Card.Text>
                                        We design the applications with one mantra
                                        “Retaining Your Users” that means,
                                        using the right design components and out
                                        of the box thinking for a great user experience
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a href='/' style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '15rem', height: '350px' }} className='card mb-5'>
                                <span>
                                    <img src={custom} className='card-img' alt='' />
                                </span>
                                <Card.Body className="card-Body">
                                    <Card.Title className='color-bule'>CUSTOM SOFTWARE</Card.Title>
                                    <Card.Text>
                                        Get in touch with our custom software development
                                        specialists for web and mobile app projects.
                                        Unleash the best strategies to add value to your solution
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a href='/' style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '15rem', height: '350px' }} className='card mb-5'>
                                <span>
                                    <img src={devops} className='card-img' alt='' />
                                </span>
                                <Card.Body className="card-Body">
                                    <Card.Title className='color-bule'>DEVOPS</Card.Title>
                                    <Card.Text>
                                        Streamline product development with our DevOps services.
                                        Unlock the true potential of AWS and Azure for your Cloud,
                                        Apps, Data, and Security
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>

            </div>
            <div className="container" style={{ marginTop: '50px' }}>
                <Row>
                    <Col>
                        <a href='/' style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '15rem', height: '350px' }} className='card mb-5'>
                                <span>
                                    <img src={team} className='card-img' alt='' />
                                </span>
                                <Card.Body className="card-Body">
                                    <Card.Title className='color-bule'>TEAM AUGMENTATION</Card.Title>
                                    <Card.Text>
                                        Want to build the solution fast? Scale your
                                        in-house development team with cost-efficient,
                                        experienced, and flexible technology staff augmentation
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a href='/' style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '15rem', height: '350px' }} className='card mb-5'>
                                <span>
                                    <img src={quality} className='card-img' alt='' />
                                </span>
                                <Card.Body className="card-Body">
                                    <Card.Title className='color-bule'>QUALITY ASSURANCE</Card.Title>
                                    <Card.Text>
                                        Authenticate your software with improved outcomes
                                        in terms of performance, integration, functionality,
                                        and usability with manual and automated testing
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a href='/' style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '15rem', height: '350px' }} className='card mb-5'>
                                <span>
                                    <img src={mobile_app} className='card-img' alt='' />
                                </span>
                                <Card.Body className="card-Body">
                                    <Card.Title className='color-bule'>MOBILE APPS</Card.Title>
                                    <Card.Text>
                                        The world is moving fast and to cater your needs,
                                        we have developed a wide range of products that
                                        can be customized and rebranded for your organization
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a href='/' style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '15rem', height: '350px' }} className='card mb-5'>
                                <span>
                                    <img src={al} className='card-img' alt='' />
                                </span>
                                <Card.Body className="card-Body">
                                    <Card.Title className='color-bule'>AI & ML</Card.Title>
                                    <Card.Text>
                                        With our mission to build solutions for the future,
                                        we know revolutionary ideas required emerging
                                        technologies like AI and ML to develop smart products
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default Cards;