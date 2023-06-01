import React from 'react'
import horizentalline from './img/horizentalline.png';

import img1 from './img/Services/affiliated-logo-2.png';
import img2 from './img/Services/affiliated-logo-3.png';
import img3 from './img/Services/affiliated-logo-4.png';
import img4 from './img/Services/affiliated-logo-5.png';
import img5 from './img/Services/colegio.png';
import img6 from './img/Services/bg-white.png';
import { Container, Carousel } from 'react-bootstrap';


function Affiliate() {
    return (
        <div>
            <div className='container padding-top text-center' >
                <h3>Affiliate Companies</h3>
                <img src={horizentalline} alt='Horizental Line Not Fond' />
            </div>
            <Container className='margin-top'>
                <Carousel>
                    <Carousel.Item>

                        <div className="text-center">
                            <img
                                className="d-block award-card-img"
                                src={img6}
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
                                src={img1}
                                alt="Second slide"
                            />
                            <img
                                className="d-block award-card-img"
                                src={img6}
                                alt="Second slide"
                            />
                        </div>



                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block award-card-img"
                            src={img6}
                            alt="Second slide"
                        />
                        <img
                            className="d-block award-card-img"
                            src={img4}
                            alt="Second slide"
                        />
                        <img
                            className="d-block award-card-img"
                            src={img5}
                            alt="Second slide"
                        />
                        <img
                            className="d-block award-card-img"
                            src={img1}
                            alt="Second slide"
                        />
                        <img
                            className="d-block award-card-img"
                            src={img6}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default Affiliate