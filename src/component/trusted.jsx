import React from 'react';



// logo-images are importing
import kia_logo from './img/Kia.png';
import milat_logo from './img/millat.png';
import drive_logo from './img/Drive.png';
import innova_logo from './img/innova.png';
import redhand_logo from './img/redhanded-lg.png';
import yadha_logo from './img/yodha-lg.png';
import liaqault_logo from './img/liquid-logo.png';
import mobilehand_logo from './img/mobihealth-logo.png';
import hakeem_logo from './img/hakeem-lg.png';
import mediclime_logo from './img/mdiclinic-lg.png';

function Trusted() {
  return (
    <div className='trusted'>
      <div className="container">
        <div className="trusted-content">
          <div className="content">
            <p>Trusted by leaders and fast growing startups worldwide</p>
          </div>
        </div>

      </div>
      <div className="marquee">
        <marquee>
          <img src={kia_logo} className='marquee-img' alt="KIA LOGO NOT FOND" />
          <img src={milat_logo} className='marquee-img' alt="KIA LOGO NOT FOND" />
          <img src={drive_logo} className='marquee-img' alt="KIA LOGO NOT FOND" />
          <img src={innova_logo} className='marquee-img' alt="KIA LOGO NOT FOND" />
          <img src={mobilehand_logo} className='marquee-img' alt="KIA LOGO NOT FOND" />
          <img src={liaqault_logo} className='marquee-img' alt="KIA LOGO NOT FOND" />
          <img src={yadha_logo} className='marquee-img' alt="KIA LOGO NOT FOND" />
          <img src={redhand_logo} className='marquee-img' alt="KIA LOGO NOT FOND" />
          <img src={mediclime_logo} className='marquee-img' alt="KIA LOGO NOT FOND" />
          <img src={hakeem_logo} className='marquee-img' alt="KIA LOGO NOT FOND" />
        </marquee>
      </div>
    </div>
  )
}

export default Trusted