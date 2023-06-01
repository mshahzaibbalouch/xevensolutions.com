import React from 'react';
import horizentalline from './img/horizentalline.png';
import img1 from './img/company/we-were-scaled.jpg';
import img2 from './img/company/we-are.jpg'
import img3 from './img/company/we-are-going.jpg'
import CountUp from 'react-countup';
import { Row, Col, Container } from 'react-bootstrap';
const Thrive = ({ image, title, description }) => {
    return (
        <div className='thrive padding-top'>
            <div className="container text-center padding-top">
                <h3>We Thrive On Innovation</h3>
                <img src={horizentalline} alt='Horizental Line Not Fond' />
                <p style={{ lineHeight: '30px', fontSize: '16px', textAlign: 'center', color: '#5f727f' }}>Transforming your ideas into reality</p>
            </div>
            <div className="padding-top">
                <div class="card flex-row">
                    <img class="card-img-left example-card-img-responsive" alt='' className='card-img-left-right' src={img1} />
                    <div class="card-body container text-left">
                        <h4 className='container' style={{ textAlign: 'left' }}>Where We’ve Been</h4>
                        <img src={horizentalline} className='m-v-img' alt='Horizental Line Not Fond' />
                        <p class="card-text">Xeven Solutions began with very humble beginnings. Our team may have only been a handful initially, but it was a skillful and talented bunch. After our pilot project, a custom app 5 years ago, we have never looked back.
                            <br></br>

                            Since then our team, skillset and expertise kept growing and evolving enabling us to create innovative digital solutions for other entrepreneurs and businesses.</p>
                    </div>
                </div>
                <div class="card flex-row">
                    <div class="card-body container text-left">
                        <h4 className='container' style={{ textAlign: 'left' }}>Where We’ve Been</h4>
                        <img src={horizentalline} className='m-v-img' alt='Horizental Line Not Fond' />
                        <p class="card-text">

                            Only 5 years in and Xeven Solutions has expanded into a thriving company of 100+ employees and 4 global offices covering a wide spectrum of tech and marketing services to meet evolving business needs. We have developed AI solutions for various industries including healthcare, education, real estate, finance and more.

                            Today we have qualified subject matter experts equipped with meeting client challenges and bring innovative ideas and creativity to the table.

                        </p>

                    </div>

                    <img class="card-img-left example-card-img-responsive" className='card-img-left-right' alt='' src={img2} />
                </div>
                <div>
                    <Container className='container-countup text-center'>
                        <Row>
                            <Col md='1'>
                                <h1><CountUp end={4} duration={5} /></h1>
                                <p>GLOBAL OFFICES</p>
                            </Col>
                            <Col md='1'>
                                <h1><CountUp end={5} duration={5} />+</h1>
                                <p>YEARS IN BUSINESS</p>
                            </Col>
                            <Col md='2'>
                                <h1><CountUp end={500} duration={5} />+</h1>
                                <p>PROJECTS<br></br> COMPLETED </p>
                            </Col>
                            <Col md='1'>
                                <h1><CountUp end={100} duration={5} />+</h1>
                                <p>CLIENTS SERVED</p>
                            </Col>
                        </Row>
                    </Container>


                </div>
                <div class="card flex-row"><img class="card-img-left example-card-img-responsive" alt='' className='card-img-left-right' src={img3} />
                    <div class="card-body container text-left">
                        <h4 className='container' style={{ textAlign: 'left' }}>Where We’ve Been</h4>
                        <img src={horizentalline} className='m-v-img' alt='Horizental Line Not Fond' />
                        <p class="card-text">
                            We keep up with the pace of emerging technology to serve our clients with sustainable and futuristic digital solutions. Using AI-powered tools and the latest in cloud technology we’re able to inspire entrepreneurs to invest in the digital transformation journey with intelligent and dynamic software solutions.

                            Xeven Solutions-Shaping Technology for the Future


                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Thrive;