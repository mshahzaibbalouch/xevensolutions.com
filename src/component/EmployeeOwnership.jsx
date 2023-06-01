import React from 'react'
import horizentalline from './img/horizentalline2.png';
import img1 from './img/career/why-jion.png'
import { Container, Row, Col } from 'react-bootstrap';
function EmployeeOwnership() {
    return (
        <div>
            <div className='text-center padding-top' >
                <h4 className='color-bule' >Employee Ownership – Fueling Our Innovation, Strengthening Your Career.</h4>
                <img src={horizentalline} alt='Horizental Line Not Fond' />
            </div>
            <div >
                    <Row>
                        <Col md='6'>
                            <div className='background text-left padding-top margin-top padding-left'>
                                <h4 className='color-bule' >Why Join Xeven Solutions?</h4>
                                <img src={horizentalline} alt='Horizental Line Not Fond' />
                                <p className='padding-top'>

                                  <font >XevenSolutions </font>always on the lookout
                                    for talented network engineers, programmers,
                                    client service specialists, and administrative
                                    staff. If you’re interested in working
                                    for an employee-owned company with
                                    exceptional opportunities, great benefits,
                                    and an entrepreneurial atmosphere.
                                    We put equal emphasis on challenge and
                                    reward, that celebrates the success of
                                    the team without overlooking the contributions
                                    of the individual, that never stops striving
                                    to be the best technology company it can be,
                                    then look no further than XevenSolutions.
                                    <p className='padding-top'>
                                        As part of the <font>XevenSolutions team</font>,
                                        you will grow professionally and maintain
                                        a perfect work-life balance that will
                                        transform your working style.
                                    </p>
                                </p>
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className='employ'>
                                <img src={img1} alt='' />
                            </div>
                        </Col>
                    </Row>
            </div>
        </div>
    )
}

export default EmployeeOwnership