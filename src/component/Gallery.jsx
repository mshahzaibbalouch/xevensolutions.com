import React from 'react'
import img1 from './img/Team/gallery-img-1.jpg'
import img2 from './img/Team/gallery-img-2.jpg'
import img3 from './img/Team/gallery-img-3.jpg'
import img4 from './img/Team/gallery-img-4.jpg'
import img5 from './img/Team/gallery-img-5.jpg'
import img6 from './img/Team/gallery-img-6.jpg'
import img7 from './img/Team/gallery-img-7.jpg'
import img8 from './img/Team/gallery-img-8.jpg'
import img9 from './img/Team/gallery-img-9.jpg'
import img10 from './img/Team/gallery-img-10.jpg'
import img11 from './img/Team/gallery-img-11.jpg'
import img12 from './img/Team/gallery-img-12.jpg'
import img13 from './img/Team/gallery-img-13.jpg'
import img14 from './img/Team/gallery-img-14.jpg'
import img15 from './img/Team/IMAges-same-size-16.jpg'
import horizentalline from './img/horizentalline.png';

import { Container, Row, Col } from 'react-bootstrap'

function Gallery() {
    return (
        <div>
            <Container>
                <div style={{ textAlign: 'center' }} >
                    <h4 className='container' >Gallery</h4>
                    <img src={horizentalline} className='m-v-img' alt='Horizental Line Not Fond' />
                </div>

                <div className='gallery'>
                <Row className='padding-top'>
                    <Col md='4' >
                        <img style={{ height: '200px', width: "350px" }} className='thumbnail' src={img1} alt='' />
                    </Col>
                    <Col md='4'>
                        <img style={{ height: '200px', width: "350px" }} src={img2} alt='' />
                    </Col>
                    <Col md='4'>
                        <img style={{ height: '200px', width: "350px" }} src={img3} alt='' />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md='4'>
                        <img style={{ height: '200px', width: "350px" }} src={img4} alt='' />
                    </Col>
                    <Col md='4'>
                        <img style={{ height: '200px', width: "350px" }} src={img5} alt='' />
                    </Col>
                    <Col md='4'>
                        <img style={{ height: '200px', width: "350px" }} src={img6} alt='' />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md='4'>
                        <img style={{ height: '200px', width: "350px" }} src={img7} alt='' />
                    </Col>
                    <Col md='4'>
                        <img style={{ height: '200px', width: "350px" }} src={img8} alt='' />
                    </Col>
                    <Col md='4'>
                        <img style={{ height: '200px', width: "350px" }} src={img9} alt='' />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md='4'>
                        <img style={{ height: '200px', width: "350px" }} src={img10} alt='' />
                    </Col>
                    <Col md='4'>
                        <img style={{ height: '200px', width: "350px" }} src={img11} alt='' />
                    </Col>
                    <Col md='4'>
                        <img style={{ height: '200px', width: "350px" }} src={img12} alt='' />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md='4'>
                        <img style={{ height: '200px', width: "350px" }} src={img13} alt='' />
                    </Col>
                    <Col md='4'>
                        <img style={{ height: '200px', width: "350px" }} src={img14} alt='' />
                    </Col>
                    <Col md='4'>
                        <img style={{ height: '200px', width: "350px" }} src={img15} alt='' />
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    )
}

export default Gallery