import React, { useState } from 'react'
import Headshot from '../../images/assets/Patricia-0304.jpg'
import SocialNav from '../global/SocialNav'

export default function Bio() {
  const [loaded, toggleLoad] = useState(() => { return false })

  const handleLoad = () => {
    toggleLoad(bool => bool = true)
  }

  return (
    <div className="Bio">
      <div className="Bio__container">
        <span className={loaded ? `animated` : undefined}>
          <img src={Headshot} alt="Patricia Headshot" className={loaded ? `animated` : undefined } onLoad={handleLoad}/>
          <p>Patricia is currently in her second year of the Television and Video Production program at the British Columbia Institute of Technology. She completed a certificate from the Bachelors of Motion Picture Arts program at Capilano University. During her studies, she focused on developing her skill set in Cinematography and Sound Design. In her last semester, she is set to direct a short. </p>
          <br/> <br/>
          <p>When the opportunity arises, Patricia has been a part of small budget productions, as Director of Photography, First Camera Assistant and Stills Photographer.</p>
          <br/> <br/>
          <p>Patricia Macapagal is ready for new challenges and experiences.</p>
          <SocialNav />
        </span>
      </div>
    </div>
  )
}
