import React from 'react';
import Header from '../component/Header';
import HeroScetion from '../component/HeroSection';
import Trusted from '../component/trusted';
import Cards from '../component/Cards';
import Experts from '../component/Experts';
import Featured from '../component/Featured';
import Slider from '../component/Slider';
import Awards from '../component/Awards';
import FormValidetion from '../component/FormValidetion';




function Home() {
  return (
    <div>
      <Header />
      <HeroScetion />
      <Trusted />
      <Cards Title='Services We Offer' />
      <Experts />
      <Featured />
      <Slider />
      <Awards />
      <FormValidetion />
    </div>
  )
}

export default Home;