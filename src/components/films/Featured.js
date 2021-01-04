import React from 'react'
import { Link } from 'react-router-dom';

export default function Featured(props) {
  const { film } = props
  return (
    <Link to={`/filmstudy/${film.slug}`}>
      <div className="Featured">
        <ul className="Featured__film">
          {
            film.stills.map((fs, index) => {
              return (
                <li key={index}><img src={fs.url} alt={fs.alt}/></li>
              )
            })
          }
        </ul>
        <p className="Featured__title">{film.title}</p>
      </div>
    </Link>
  )
}
