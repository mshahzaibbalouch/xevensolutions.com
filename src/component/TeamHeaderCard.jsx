import React from 'react';
import horizentalline from './img/horizentalline.png';
import img1 from './img/Team/collabration-scaled.jpg';
import img2 from './img/Team/allocation.png';
import img3 from './img/Team/connection.png';
import img4 from './img/Team/communication-png.png';
import img5 from './img/Team/adaptation-png.png';
import { Col, Container, Row } from 'react-bootstrap';

function TeamHeaderCard() {
    return (
        <div className='team-header-card'>
            <div className="card hover-none flex-row">
                <img className="card-img-left example-card-img-responsive card-img-left-right" alt='' src={img1} />
                <div className="card-body container text-left">
                    <h4 className='container' style={{ textAlign: 'left' }}>Collaborative Team Effort</h4>
                    <img src={horizentalline} className='m-v-img' alt='Horizental Line Not Fond' />
                    <p className="card-text">Xeven Solutions houses a team of visionary professionals that involve the client at every step of development and decision making.
                    </p>
                    <div className="icon-team-header-card container ">
                        <Row>
                        
                            <Col md='6'>
                                <img src={img2} className='m-v-img border-img' alt='Horizental Line Not Fond' />
                                <div className='allocation '>
                                    <h3 className="card-text">
                                        ALLOCATION
                                    </h3>
                                    <p className='padding-toop'>
                                        A team of experts is reserved for and allocated to the client from start to finish.
                                    </p>
                                </div>


                            </Col>
                          
                            <Col md='6'>
                            <img src={img3} className='m-v-img' alt='Horizental Line Not Fond' />

                               <div className='allocation '>
                               <h3 className="card-text">
                                    CONNECTION
                                </h3>
                                <p className='padding-toop'>A seamless and supportive relationship with the client.</p>
                               </div>
                            </Col>
                        </Row>
                        <Row>

                            <Col md='6'>
                            <img src={img4} className='m-v-img' alt='Horizental Line Not Fond' />
                                
                                <div className='allocation '>
                                <h3 className="card-text">
                                    COMMUNICATION
                                </h3>
                                <p className='padding-toop'>A quick and professional tech and development consult is provided upon request for offhand queries.</p>
                                </div>
                            </Col>
                            
                            <Col md='6'>
                            <img src={img5} className='m-v-img  border-img' alt='Horizental Line Not Fond' />

                              <div className='allocation '>
                              <h3 className="card-text">
                                    ADAPTATION
                                </h3>
                                <p className='padding-toop'>
                                    Accommodating and flexible to client’s needs.
                                </p>
                              </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamHeaderCard;