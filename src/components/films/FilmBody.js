import React, { useEffect, useState } from 'react'
import { films } from '../../data/films'

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
    <div>
        <p>{ slug }</p>
        <p>{ filmstudy.title }</p>
    </div>
  )
}
