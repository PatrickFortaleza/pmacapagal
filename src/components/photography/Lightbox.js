import React, { useRef, useState } from 'react'
import { ExitIcon } from '../icons'
import CubePreloader from '../entity/CubePreloader'

export default function Lightbox({url, alt, toggle}) {
  const [loaded, toggleLoad] = useState(() => { return false })
  const img = useRef()

  const exitLightBox = (e) => {
    toggle(false)
  }

  const handleLoad = () => {
    toggleLoad(true)
  }

  const handleChildClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }
  return (
    <div className="LightBox" onClick={(e) => exitLightBox(e)}>
      <div className="lightBox__container">
        <div className="lightBox__header">
            <button onClick={(e) => exitLightBox(e)}><ExitIcon /></button>
        </div>
        <div className="lightBox__body">
          { loaded ? null : <CubePreloader /> }
          <div style={{height: `100%`}}>
            <img ref={img} src={url} alt={alt} onClick={(e) => handleChildClick(e)} onLoad={handleLoad}/>
          </div>
        </div>
      </div>
    </div>
  )
}
