import React from 'react';
import horizentalline from '../component/img/horizentalline.png';
import Services_Header from '../component/Services_Header';
import Cards from '../component/Cards';
import ChooseUs from '../component/ChooseUs';
import Affiliate from '../component/Affiliate';
import Enterprises from '../component/Enterprises';
import Slider from '../component/Slider';


function Services() {
  return (
    <div>
        <Services_Header />
        <Cards Title='Innovation Meets Experience'/>
        <ChooseUs />
        <Affiliate/>
        <Enterprises />
        <div className="container padding-top text-center">
                <h2>What Our Clients Say</h2>
                <img src={horizentalline} alt='Horizental Line Not Fond' />
            </div>
        <Slider />
    </div>
  )
}

export default Services;