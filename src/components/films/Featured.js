import React, { useEffect, useRef, useState }from 'react'
import { Link } from 'react-router-dom';

export default function Featured(props) {
  const [imgHeight, changeHeight] = useState(() => {return 0})
  const { film, hasLoaded, baseDelay } = props

  const sendLoadNotif = () => {
    if(props.notifyLoad === false) return null
    props.notifyLoad()
  }

  const featuredFilmRow = useRef()
  const filmTitle = useRef()
  const img = useRef()

  useEffect(() => {
    if (hasLoaded === true) {
      featuredFilmRow.current.classList.add('animated')
      filmTitle.current.classList.add('animated') 
    }
  }, [hasLoaded])

  const handleResize = () => {
    const elm = img.current
    changeHeight(h => h = elm.offsetHeight)
  }

  // On mount, add a event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    // When we addEventListners we want to be wary of removing them once the component unmounts.
    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Link to={`/filmstudy/${film.slug}`}>
      <div className="Featured">
        <ul ref={featuredFilmRow} className="Featured__film">
          {
            film.stills.slice(0,3).map((fs, index) => {
              return (
                <li 
                  key={index}
                  ref={img}
                  style={{
                    transition: `all .2s ease-in-out ${((index + 1) * 0.125) + baseDelay}s`,
                    width: `${imgHeight * 2.23}px`
                  }}
                >
                  <img
                    height="418" 
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
