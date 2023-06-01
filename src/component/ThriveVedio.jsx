import React from 'react';
import horizentalline from './img/horizentalline.png';
import { Container } from 'react-bootstrap';

function ThriveVedio() {
  return (
    <div className='thrive padding-bottom padding-top'>
        <div className="container text-center padding-top">
                <h3>Tough Times Don’t Last. Tough Teams Do.</h3>
                <img src={horizentalline} className='m-v-img' alt='Horizental Line Not Fond' />
            </div>
            <Container>
            <iframe width="1100" height="600" src="https://www.youtube.com/embed/ZTyQi_jnn2o" title="Meet the team Leads-Xeven Solutions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Container>
    </div>
  )
}

export default ThriveVedio;