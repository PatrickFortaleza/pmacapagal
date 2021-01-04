import React from 'react'
import { Link } from 'react-router-dom';

export default function Featured(props) {
  const { film } = props

  const sendLoadNotif = () => {
    console.log('last image loaded')
    if(props.notifyLoad === false) return null
    props.notifyLoad()
  }

  return (
    <Link to={`/filmstudy/${film.slug}`}>
      <div className="Featured">
        <ul className="Featured__film">
          {
            film.stills.slice(0,3).map((fs, index) => {
              return (
                <li key={index}><img src={fs.url} alt={fs.alt} onLoad={index === 2 ? sendLoadNotif : undefined }/></li>
              )
            })
          }
        </ul>
        <p className="Featured__title">{film.title}</p>
      </div>
    </Link>
  )
}
