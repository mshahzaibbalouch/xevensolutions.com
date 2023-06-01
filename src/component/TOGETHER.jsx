import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import exprince_img from './img/Team/achiev.png'

function TOGETHER() {
    return (
        <div>
            <div className='choose-us maargin-top'>

                <Container>
                    <Row>
                        <Col md='6'>
                            <div className='choose-img'>
                                <img src={exprince_img} alt='' style={{ height: "800px", width: '500px' }} />
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className="padding-top choose-content">
                                <h3 style={{color:'black'}}>ACHIEVING SUCCESS TOGETHER</h3>
                                <p className='padding-top'>
                                    At Xeven Solutions, you partner with
                                    a qualified team of expert software
                                    and business developers that are invested
                                    in delivering innovative technological
                                    solutions for your enterprise.
                                </p>
                                <ul type='square'>
                                    <li className='color-bule'><p className='color-black'>Provision of a clear roadmap outlining the strategy and system development process</p></li>
                                    <li>Research, design, and implementation of client’s request</li>
                                    <li>Testing and quality assurance procedures at every step of development</li>
                                    <li>Co-functioning with the client through constant communication</li>
                                    <li>Determining operational standards and procedures</li>
                                    <li>Update or upgrade existing software systems as per client’s request</li>
                                    <li>Working closely with other developers</li>
                                </ul>
                                <div className="padding-top text-left">
                                    <a href='/portfolio' className='btn btn-primary bg-blue hire-btn f-15'>Our Portfolio</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default TOGETHER