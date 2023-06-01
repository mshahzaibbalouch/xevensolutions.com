import React from 'react';
import horizentalline from './img/horizentalline.png';
import img1 from './awards/Good-thegem-person-thegem-person.png';
import img2 from './awards/clutch-logo-thegem-person-thegem-person.png';
import img3 from './awards/pakistan-thegem-person-thegem-person.png';
import img4 from './awards/pasha-thegem-person-thegem-person.png';
import img5 from './awards/pasha-thegem-person-thegem-person.png';
import img6 from './awards/top-app-thegem-person-thegem-person.png';
import img7 from './awards/top-dev-thegem-person-thegem-person.png';
import img8 from './awards/top-web-thegem-person-thegem-person.png';

import { Container, Carousel, Row } from 'react-bootstrap';

function Awards() {
  return (
    <div className='awards margin-top padding-top'>
      <div className="container text-center padding-top">
        <h3>Honors & Awards</h3>
        <img src={horizentalline} alt='Horizental Line Not Fond' />
      </div>
      <Container className='margin-top bg-custum'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block award-card-img"
              src={img1}
              alt="Second slide"
            />
            <img
              className="d-block award-card-img"
              src={img2}
              alt="Second slide"
            />
            <img
              className="d-block award-card-img"
              src={img3}
              alt="Second slide"
            />
            <img
              className="d-block award-card-img"
              src={img4}
              alt="Second slide"
            />
            <img
              className="d-block award-card-img w-20"
              src={img5}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block award-card-img"
              src={img6}
              alt="Second slide"
            />
            <img
              className="d-block award-card-img"
              src={img7}
              alt="Second slide"
            />
            <img
              className="d-block award-card-img"
              src={img8}
              alt="Second slide"
            />
            <img
              className="d-block award-card-img"
              src={img1}
              alt="Second slide"
            />
            <img
              className="d-block award-card-img w-20"
              src={img2}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}

export default Awards