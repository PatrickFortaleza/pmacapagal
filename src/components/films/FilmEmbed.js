import React, { useState } from 'react'
import { PlayIcon } from '../icons'

export default function FilmEmbed(props) {
  const { alt, embed, thumbnail } = props.commonProps
  const [play, setPlay] = useState(() => { return false })

  const url = play
    ? `https://www.youtube.com/embed/${embed}?autoplay=1`
    : `https://www.youtube.com/embed/${embed}`

  const togglePlay = () => {
    setPlay(true)
  }

  return (
    <div className="FilmEmbed">
      <button className={play ? "EmbedOverlay active" :"EmbedOverlay"} onClick={togglePlay}>
          <div className="play__icon">
            <PlayIcon />
          </div>
          <img src={thumbnail ? thumbnail : ''} alt={alt ? alt: ''} />
      </button>
      <iframe 
        src={ url } 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}
