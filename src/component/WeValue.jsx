import React from 'react';
import flexibility from './img/company/Flexibility.png';
import empowerment from './img/company/Empowerment.png';
import inclusivitty from './img/company/Inclusivity.png';
import discipline from './img/company/Discipline.png';
import growth from './img/company/Growth-mindset.png';
import { Row, Col } from 'react-bootstrap';
import horizentalline from './img/horizentalline.png';

function WeValue() {
  return (
    <div>
        <div className="container text-center padding-top">
                <h3>What We Value</h3>
                <img src={horizentalline} alt='Horizental Line Not Fond' />
                <p style={{lineHeight:'30px', fontSize:'16px', textAlign:'center' , color:'#5f727f'}} className='padding-top'>We take pride in our inclusive and diverse company culture. We go the extra mile to ensure everyone feels safe,<br /> valued and motivated in the workspace. Our core values include.</p>
            </div>
        <div className="container">
        <Row>
            <Col md='1'></Col>
              <Col md='2'>
                <div className="box-card-we-value">
                  <img src={flexibility} alt='Horizental Line Not Fond' />
                  <p className='padding-top'>FLEXIBILITY</p>
                </div>

              </Col>
              <Col md='2'>
                <div className="box-card-we-value">
                  <img src={empowerment} alt='Horizental Line Not Fond' />
                  <p className='padding-top'>EMPOWERMENT

                  </p>
                </div>

              </Col>
              <Col md='2'>
                <div className="box-card-we-value">
                  <img src={inclusivitty} alt='Horizental Line Not Fond' />
                  <p className='padding-top'>INCLUSIVITY</p>
                </div>
              </Col>
              <Col md='2'>
                <div className="box-card-we-value">
                  <img src={discipline} alt='Horizental Line Not Fond' />
                  <p className='padding-top'>DISCIPLINE</p>
                </div>
              </Col>
              <Col md='2'>
                <div className="over-flow-hidden box-card-we-value">
                  <img src={growth} alt='Horizental Line Not Fond' />
                  <p className='padding-top'>GROWTH MINDSET</p>
                </div>
              </Col>
            </Row>
        </div>
    </div>
  )
}

export default WeValue;