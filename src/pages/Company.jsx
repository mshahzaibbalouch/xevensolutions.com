import React from 'react';
import CompanyHeader from '../component/CompanyHeader';
import horizentalline from '../component/img/horizentalline.png';
import Affiliate from '../component/Affiliate';
import Slider from '../component/Slider';
import AboutUS from '../component/AboutUS';
import Thrive from '../component/Thrive';
import VisionMision from '../component/VisionMision';
import ThriveVedio from '../component/ThriveVedio';
import WeValue from '../component/WeValue';
import Industries from '../component/Industries';

function Company() {
  return (
    <div>
      <CompanyHeader />
      <AboutUS />
      <VisionMision />
      <Thrive />
      <ThriveVedio />
      <WeValue />
      <Industries/>
      <div className="container padding-top text-center">
                <h2>What Our Clients Say</h2>
                <img src={horizentalline} alt='Horizental Line Not Fond' />
            </div>
      <Slider />
      <Affiliate />
      
    </div>
  )
}

export default Company