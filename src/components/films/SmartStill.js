import React, { useState } from 'react'
import Lightbox from '../photography/Lightbox'

export default function SmartStill({ src, alt, hires }) {
  const [activeLightBox, toggleLightBox] = useState(() => { return false })

  const handleToggleLightBox = () => {
    toggleLightBox(true)
  }

  const handleToggleOffLightBox = (childData) => {
    toggleLightBox(childData)
  }

  return (
    <div className="SmartStill">
      { activeLightBox ? <Lightbox toggle={handleToggleOffLightBox} url={hires} alt={alt} /> : null }
      <img
        onClick={handleToggleLightBox} 
        src={src}
        alt={alt}
      />      
    </div>
  )
}
