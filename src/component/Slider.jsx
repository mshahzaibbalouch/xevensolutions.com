import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './slider/bill.jpg';
import img2 from './slider/jeffy.jpg';
import img3 from './slider/moye.png';
import img4 from './slider/Artboard-17.png';
import img5 from './slider/Memore-logo.png';
import img6 from './slider/kate.png';
import aram from './slider/aram.png';

import Button from 'react-bootstrap';
import Modal from 'react-bootstrap';

import video1 from './slider/Irfan Referral by President of Join Treaty.mp4';
import video2 from './slider/Irfan referral by the president of Memore LLC.mp4';
import { Col, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';

function Slider() {
    const HendelSweet = () => {
        Swal.fire({
         
            html: '<iframe width="100%" height="90%" src="https://www.youtube.com/embed/sGqJ6EB9m0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        })
    }

    const HendelSweet2 = () => {
        Swal.fire({
           
       
            html: '<iframe width="100%" height="90%" src="https://www.youtube.com/embed/lLwC71XH_ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        })
    }
    return (

        <div>
            <Container className='margin-top bg-custum'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block slider-card-img w-20"
                            src={img1}
                            alt="Second slide"
                        />

                        <div className="slider-card-content">
                            <h3 className='color-bule padding-top f-Arial'>BILL KILPATRICK</h3>
                            <p>CEO</p>
                            <p>This is a stellar team! I have assigned new contracts to them for several years. A joy to work with. Smart people. Good people. Honest. Hard working. Excellent results.</p>
                            <img src={img4} className='w-20' alt='' />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block slider-card-img w-20"
                            src={img2}
                            alt="Second slide"
                        />

                        <div className="slider-card-content">
                            <h3 className='color-bule padding-top f-Arial'>JEFF MOYE</h3>
                            <p>Founder</p>
                            <p>The Xeven Solutions team has finished 2/3 of the project and completed every milestone so far. Their workflow is good; their members communicate regularly through Zoom, and they collaborate well with the client via GitHub, Jira, and Slack. They solve problems fast and deliver information on time.</p>
                            <img src={img3} className='w-20' alt='' />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a target='_blank' href='https://www.youtube.com/watch?v=lLwC71XH_ok' style={{ textDecoration: 'none' }}>
                            <img
                                className="d-block slider-card-img w-20"
                                src={img6}
                                alt="Second slide"
                            />
                        </a>
                        <span className='slider-card-icon' onClick={HendelSweet}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                            </svg>
                        </span>
                        <div className="slider-card-content">
                            <a href='https://www.youtube.com/watch?v=lLwC71XH_ok' className='t-d-n'>
                                <h3 className='color-bule padding-top f-Arial'>KATE CALLAHAN</h3>
                                <p style={{ color: 'GrayText' }}>President</p>
                            </a>
                            <p>The collaboration has been amazing. Flexible and accommodating of scope changes, the team is quick to accommodate requests and answer questions. They continue to deliver high-quality work at a competitive price.</p>
                            <img src={img5} className='w-20' alt='' />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a style={{ textDecoration: 'none' }}>
                            <img

                                className="d-block slider-card-img w-20"
                                src={aram}
                                alt="Second slide"

                            />

                        </a>
                        <span className='slider-card-icon' onClick={HendelSweet2}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                            </svg>
                        </span>
                        <div className="slider-card-content">
                            <a href='https://www.youtube.com/watch?v=sGqJ6EB9m0w' className='t-d-n'>
                                <h3 className='color-bule padding-top f-Arial'>ARAM SAFFARIAN </h3>
                                <p style={{ color: 'GrayText' }}>President of Treaty Health</p>
                            </a>
                            <p>Xeven Solutions has improved the client’s existing app. Xeven Solutions utilizes their expertise to deliver comprehensive, user-friendly solutions. Their team manages projects well and has excellent documentation processes and communication.</p>

                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default Slider;