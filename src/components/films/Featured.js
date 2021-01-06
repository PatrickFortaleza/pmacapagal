import React, { useEffect, useRef }from 'react'
import { Link } from 'react-router-dom';

export default function Featured(props) {
  const { film, hasLoaded, baseDelay } = props

  const sendLoadNotif = () => {
    if(props.notifyLoad === false) return null
    props.notifyLoad()
  }

  const featuredFilmRow = useRef()
  const filmTitle = useRef()

  useEffect(() => {
    if (hasLoaded === true) {
      featuredFilmRow.current.classList.add('animated')
      filmTitle.current.classList.add('animated') 
    }
  }, [hasLoaded])

  return (
    <Link to={`/filmstudy/${film.slug}`}>
      <div className="Featured">
        <ul ref={featuredFilmRow} className="Featured__film">
          {
            film.stills.slice(0,3).map((fs, index) => {
              return (
                <li 
                  key={index}
                  style={{transition: `opacity .2s ease-in-out ${((index + 1) * 0.125) + baseDelay}s`}}
                >
                  <img 
                    src={fs.url} 
                    alt={fs.alt} 
                    onLoad={index === 2 ? sendLoadNotif : undefined }
                  />
                </li>
              )
            })
          }
        </ul>
        <p 
          ref={filmTitle} 
          className="Featured__title"
          style={{transition: `opacity .2s ease-in-out ${(((3) * 0.125) + baseDelay) + 0.125}s`}}
        >{film.title}</p>
      </div>
    </Link>
  )
}
