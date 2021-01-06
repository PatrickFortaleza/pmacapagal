import React, { useEffect, useState } from 'react'
import { films } from '../../data/films'
import FilmEmbed from './FilmEmbed'

export default function FilmBody(props) {
  const { slug } = props
  const [filmstudy, updateFilm] = useState(() => { return null })
  let film

  useEffect(() => {
    film = films.filter( f => f.slug === slug)[0]
    updateFilm(film)
  }, [])

  useEffect(() => {
    film = films.filter( f => f.slug === slug)[0]
    updateFilm(film)
  }, [slug])

  let FilmEmbedProps = {
    embed: ``,
    thumbnail: ``,
    alt: ``,
  }

  if(filmstudy){
    FilmEmbedProps = {
      embed: filmstudy.embed,
      thumbnail: filmstudy.stills[0].url,
      alt: filmstudy.stills[0].alt,
    }
  }

  return (
    <div className="FilmBody">
      <FilmEmbed 
        commonProps={FilmEmbedProps}
      />
    </div>
  )
}
