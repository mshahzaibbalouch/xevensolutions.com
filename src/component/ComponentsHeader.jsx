import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

function ComponentsHeader(props) {
  return (
    <div className='services-header'>
            <Container>
                <Row className='row-reletive'>
                    <Col md='4'>
                        <div className="services-header-text">
                            <div className="f-40">
                            {props.Header.color_white}
                                <div className='color-bule'>
                                {props.Header.color_blue}
                                </div>
                                <p>{props.Header.description}</p>
                            </div>
                        </div>
                    </Col>
                    <Col md='2'>
                        <div className="bg-image">
                            <img src={props.Header.bg_image} alt='' />
                        </div>
                    </Col>
                    <Col md='6'>
                    <div className='page-img'>
                            <img src={props.Header.s_image} className='page-header-img' style={{height:'775px', width:'665px'}} alt='' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default ComponentsHeader;