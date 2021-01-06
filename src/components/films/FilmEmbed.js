import React, { useState } from 'react'

export default function FilmEmbed() {
  const [play, setPlay] = useState(() => { return false })

  const url = play
    ? "https://www.youtube.com/embed/oZWyRJ40tdY?autoplay=1"
    : "https://www.youtube.com/embed/oZWyRJ40tdY"

  const togglePlay = () => {
    setPlay(true)
  }

  return (
    <div className="FilmEmbed">
      <iframe 
        // width="560" 
        // height="315" 
        src={url} 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <button onClick={togglePlay}>Play</button>
    </div>
  )
}
