import React from 'react';
import horizentalline from './img/horizentalline.png';
import flexibility from './img/Flexibility.png';
import empowerment from './img/empowerment.png';
import inclusivitty from './img/inclusivity-icon.png';
import discipline from './img/dicipline.png';
import growth from './img/growthmind.png';
import { Row, Col, Card } from 'react-bootstrap';

function Experts() {
  return (
    <div>
      <div className="expert padding-top">
        <div className="container text-center">
          
          <div className="padding-top text-center">
            <a href='#' className='btn btn-primary btn-w-h bg-blue hover-bg-blue f-15 w-20'>Values</a>
            <a href='#' className='btn btn-light btn-w-h bg-white hover-bg-blue f-15 w-20'>Industries</a>
            <a href='#' className='btn btn-light btn-w-h bg-white hover-bg-blue f-15 mb-3 mt-3 w-20'>Technologies</a>
          </div>
          <div style={{ marginTop: '20px' }} className="content">
            <p className='f-15'>We go the extra mile to ensure everyone feels safe, valued and motivated in the workspace</p>
          </div>
          <div className="padding-top">
            <Row>
              <Col>
                <div className="box-card over-flow-hidden hover-color-white box-card-1">
                  <img src={flexibility} alt='Horizental Line Not Fond' />
                  <p className='padding-top'>FLEXIBILITY</p>
                </div>

              </Col>
              <Col>
                <div className="box-card over-flow-hidden hover-color-white box-card-2">
                  <img src={empowerment} alt='Horizental Line Not Fond' />
                  <p className='padding-top'>EMPOWERMENT

                  </p>
                </div>

              </Col>
              <Col>
                <div className="box-card over-flow-hidden hover-color-white box-card-3">
                  <img src={inclusivitty} alt='Horizental Line Not Fond' />
                  <p className='padding-top'>INCLUSIVITY</p>
                </div>
              </Col>
              <Col>
                <div className="box-card over-flow-hidden hover-color-white box-card-4">
                  <img src={discipline} alt='Horizental Line Not Fond' />
                  <p className='padding-top'>DISCIPLINE</p>
                </div>
              </Col>
              <Col>
                <div className="box-card over-flow-hidden hover-color-white box-card-5">
                  <img src={growth} alt='Horizental Line Not Fond' />
                  <p className='padding-top'>GROWTH MINDSET</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="text-center padding-top team">
        <h3>Dedicated Team</h3>
        <img src={horizentalline} alt='Horizental Line Not Fond' />
        <p className='f-15'>
          Scale your in-house team by seamlessly hiring expert developers with Xeven recruiting<br /> capabilities
        </p>
        <div className="container padding-top f-15">
          <Row>
            <Col>
              <Card style={{ width: '16rem', height: '200px' }} className='card card-img1234 mb-5'>
                <span>1</span>
                <Card.Body className="card-Body card-body-1234">
                  <Card.Title className='color-bule'><img src='		https://www.xevensolutions.com/wp-content/uploads/2022/10/ms-headphone-alt.svg'/>TALK TO US</Card.Title>
                  <Card.Text className='color-black-hover'>
                  Share your vision and requirements with our team.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '16rem', height: '200px' }} className='card card-img1234 mb-5'>
                <span>2</span>
                <Card.Body className="card-Body card-body-1234">
                  <Card.Title className='color-bule'><img src='	https://www.xevensolutions.com/wp-content/uploads/2022/10/ms-face-smile-team.svg'/>SELECT THE TEAM</Card.Title>
                  <Card.Text className='color-black-hover'>
                  Select the best team suited to your project needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '16rem', height: '200px' }} className='card-img1234 mb-5'>
                <span>3</span>
                <Card.Body className="card-Body card-body-1234">
                  <Card.Title className='color-bule'><img src='		https://www.xevensolutions.com/wp-content/uploads/2022/10/ms-time-trial.svg'/>START A FREE TRIAL</Card.Title>
                  <Card.Text className='color-black-hover'>
                  Start your risk free trial period to test your team.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '16rem', height: '200px' }} className='card card-img1234 mb-5'>
                <span>4</span>
                <Card.Body className="card-Body card-body-1234">
                  <Card.Title className='color-bule'><img src='	https://www.xevensolutions.com/wp-content/uploads/2022/10/ms-magnet-start.svg'/>GET STARTED</Card.Title>
                  <Card.Text className='color-black-hover'>
                  Satisfied? Carry on with your Selected Team.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="padding-top text-center">
          <a href='#' className='btn btn-primary bg-blue hire-btn f-15'>Hire a Resource in 24 Hours</a>
        </div>
      </div>
    </div>
  )
}

export default Experts;