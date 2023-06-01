import React from 'react';
import video from './videos/Custom Software Development Company.mp4';
import ReactPlayer from 'react-player';
export default function Header() {
  return (
      <div>
        <ReactPlayer url={video} className='BackGroundVideo' controls={true} />
      </div>
  )
}
