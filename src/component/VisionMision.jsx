import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import horizentalline from './img/horizentalline.png';

function VisionMision() {
  return (
    <div className='v-m'>
      <Row>
        <Col md='5' style={{ marginTop: '100px', marginLeft: '50px' }}>
          <Card style={{ width: '35rem', height: '320px' }} className='enterprises-card margin-bottom'>
            <Card.Body>
              <Card.Title className='container' style={{ textAlign: 'left' }}>
                <h3>Mission</h3>
                <img src={horizentalline} className='m-v-img' alt='Horizental Line Not Fond' />
              </Card.Title>
              <Card.Text className='padding-top text-left container'>
              We aim to pursue groundbreaking innovations that will reform the technology landscape of today and tomorrow. We believe our solutions will pave the way for a better and faster exchange of information. We seek to impact the lives of millions for a brighter future.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md='5' style={{ marginTop: '100px', marginLeft: '70px' }}>
          <Card style={{ width: '35rem', height: '320px' }} className='enterprises-card margin-bottom'>
            <Card.Body className='container text-left'>
            <Card.Title style={{ textAlign: 'left' }}>
                <h3>Vision</h3>
                <img src={horizentalline} className='m-v-img' alt='Horizental Line Not Fond' />
              </Card.Title>
              <Card.Text className='padding-top container'>
              We thrive on excellence and determination to provide high-quality products and services to our clients. We are Shaping technology for the future.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </div>
  )
}

export default VisionMision;