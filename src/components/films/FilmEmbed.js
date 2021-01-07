import React, { useState } from 'react'
import { PlayIcon } from '../icons'
import CubePreloader from '../entity/CubePreloader'

export default function FilmEmbed(props) {
  const { alt, embed, thumbnail } = props.commonProps
  const [play, setPlay] = useState(() => { return false })
  const [loaded, upLoadCounter] = useState(() => { return false })

  const url = play
    ? `https://www.youtube.com/embed/${embed}?autoplay=1`
    : `https://www.youtube.com/embed/${embed}`

  const togglePlay = () => {
    setPlay(true)
  }

  const toggleLoad = () => {
    upLoadCounter(true)
  }

  return (
    <div className="FilmEmbed">
      <button className={play ? "EmbedOverlay active" :"EmbedOverlay"} onClick={togglePlay}>
          {
            loaded 
            ? undefined
            : <CubePreloader />
          }
          <div className="play__icon">
            <PlayIcon />
          </div>
          <img src={thumbnail ? thumbnail : ''} alt={alt ? alt: ''} className={ loaded ? `animate` : `` } onLoad={toggleLoad}/>
      </button>
      <iframe
        title={ alt } 
        src={ url }
        width="1600" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}
