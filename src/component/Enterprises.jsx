import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import horizentalline from './img/horizentalline.png';

function Enterprises() {
    return (
        <div className='enterprises'>
            <Container>
                <div className="padding-top enterprises-content">
                    <Row className='padding-top'>
                        <Col md='6'>
                            <h3 className='color-bule'>Start-Ups.</h3>
                            <h3>Growth Businesses.</h3>
                            <h3> Enterprises.</h3>
                            <img src={horizentalline} alt='' />
                        </Col>
                        <Col md='6'>
                            <p>We have the resources to serve businesses of all sizes.
                                A software firm with a global presence and quick expansion,
                                Xeven Solutions creates intelligent digital solutions for
                                your IT requirements. Our work ethic is highly customer-centric
                                and we employ a collaborative path with our clients.

                            </p>
                        </Col>
                    </Row>
                    <Row className='padding-top'>
                        <Col md='4'>
                            <Card style={{ width: '22rem', height:'320px' }} className='enterprises-card margin-bottom'>
                                <Card.Body>
                                    <Card.Title className='color-bule f-50'>01</Card.Title>
                                    <Card.Subtitle className="mb-2 f-40 text-muted">CONCEIVE
                                    </Card.Subtitle>
                                    <Card.Text className='padding-top'>
                                        Every project begins with an idea. We move forward confidently with aligned goals, clear concepts and precise execution.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md='4'>
                            <Card style={{ width: '22rem', height: '320px' }} className='enterprises-card margin-bottom'>
                                <Card.Body>
                                    <Card.Title className='color-bule f-50'>02</Card.Title>
                                    <Card.Subtitle className="mb-2 f-40 text-muted" style={{color:'black'}}>DEVELOP
                                    </Card.Subtitle>
                                    <Card.Text className='padding-top'>
                                        A committed team of specialists starts developing your solution to meet all outlined system requirements with clear goals and smooth DevOps.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md='4'>
                            <Card style={{ width: '22rem', height:'320px' }} className='enterprises-card margin-bottom'>
                                <Card.Body>
                                    <Card.Title className='color-bule f-50'>03</Card.Title>
                                    <Card.Subtitle className="mb-2 f-40 text-muted">MAINTAIN
                                    </Card.Subtitle>
                                    <Card.Text className='padding-top'>
                                        No project is left unattended even after deployment. Our QA team ensures on-going support and walks you through till the end.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Enterprises;