import React from 'react'
import { Col , Row } from 'react-bootstrap';

function CompanyHeader() {
  return (
    <div className='companyHeader'>
        <div className="conpany-header">
        <Row>
          <Col>
          <div className="companyHeader-1-col">
          <div className="container f-40">
          <h1>
          XEVEN
          </h1>
          <h1><b className='color-bule'>SOLUTIONS</b></h1>
          <p className='padding-top'>We think big, we innovate and we<br /> design smart digital solutions.</p>
          </div>
          </div>
          </Col>
          <Col>
          <iframe width="110%" style={{marginLeft:'-10%'}} height="520" src="https://www.youtube.com/embed/wiRox1dDMaY" title="Xeven Solutions _ Our Environment" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
        </Row>
        </div>
    </div>
  )
}

export default CompanyHeader;