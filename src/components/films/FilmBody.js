import React, { useEffect, useState } from 'react'
import { films } from '../../data/films'
import FilmEmbed from './FilmEmbed'

export default function FilmBody(props) {
  const [filmstudy, updateFilm] = useState(() => { return null })
  const { slug } = props
  let film

  useEffect(() => {
    film = films.filter( f => f.slug === slug)[0]
  }, [])

  useEffect(() => {
    film = films.filter( f => f.slug === slug)[0]
    updateFilm(film)
  }, [slug])

  return (
    <div className="FilmBody">
        <FilmEmbed />
    </div>
  )
}
