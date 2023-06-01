import React from 'react';
import TeamHeader from '../component/TeamHeader';
import TeamHeaderCard from '../component/TeamHeaderCard';
import Gallery from '../component/Gallery';
import TOGETHER from '../component/TOGETHER';
import Directors from '../component/Directors';

function Team() {
  return (
    <div>
        <TeamHeader />
        <TeamHeaderCard />
        <Directors/>
        <Gallery/>
        <TOGETHER/>
       
    </div>
  )
}

export default Team;