import React from 'react'
import flexibility from './img/company/life-style-white.png';
import empowerment from './img/company/estate-white.png';
import inclusivitty from './img/company/industrial-white.png';
import discipline from './img/company/education-white.png';
import growth from './img/company/finance-white.png';
import ecom from './img/company/commerce-white.png';
import { Row, Col } from 'react-bootstrap';
import horizentalline from './img/horizentalline.png';
function Industries() {
    return (
        <div className='color margin-top'>
            <div className="container text-center padding-top">
                <h5>WHO WE WORK WITH</h5>
                <h3>Industries</h3>
                <img src={horizentalline} alt='Horizental Line Not Fond' />
                <p style={{ lineHeight: '30px', fontSize: '16px', textAlign: 'center', color: '#5f727f' }} className='padding-top'>
                    Our innovative software solutions tackle specific tech challenges across several industries.
                </p>
            </div>
            <div className="container">
                <Row className=''>
                    <Col md='2'></Col>
                    <Col md='1'>
                        <div  style={{margin:'30px -150px'}} className="boox-card-we-value">
                            <img src={flexibility} alt='Horizental Line Not Fond' />
                            <p className='padding-top'>LIFESTYLE</p>
                        </div>

                    </Col>
                    <Col md='1'>
                        <div  style={{margin:'30px -90px'}} className="boox-card-we-value">
                            <img src={empowerment} alt='Horizental Line Not Fond' />
                            <p className='padding-top'>REAL ESTATE

                            </p>
                        </div>

                    </Col>
                    <Col md='1'>
                        <div style={{margin:'30px -40px'}} className="boox-card-we-value">
                            <img src={inclusivitty} alt='Horizental Line Not Fond' />
                            <p className='padding-top'>INDUSTRIAL</p>
                        </div>
                    </Col>
                    <Col md='1'>
                        <div  style={{margin:'30px 10px'}} className="boox-card-we-value">
                            <img src={discipline} alt='Horizental Line Not Fond' />
                            <p className='padding-top'>EDUCATION</p>
                        </div>
                    </Col>
                    <Col md='1'>
                        <div  style={{margin:'30px 60px'}} className="boox-card-we-value">
                            <img src={growth} alt='Horizental Line Not Fond' />
                            <p className='padding-top'>FINANCE</p>
                        </div>
                    </Col>
                    <Col md='1'>
                        <div  style={{margin:'30px 110px'}} className="boox-card-we-value">
                            <img src={inclusivitty} alt='Horizental Line Not Fond' />
                            <p className='padding-top'>HEALTH CARE</p>
                        </div>
                    </Col>
                    <Col md='1'>
                        <div  style={{margin:'30px 160px'}} className="boox-card-we-value">
                            <img src={ecom} alt='Horizental Line Not Fond' />
                            <p className='padding-top'>E-COMMERCE</p>
                        </div>
                    </Col>
                    <Col md='2'></Col>
                </Row>
            </div>
        </div>
    )
}

export default Industries