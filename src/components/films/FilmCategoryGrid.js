import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CubePreloader from '../entity/CubePreloader'
import {
  withRouter
} from "react-router-dom";

export default withRouter(function FilmCategoryGrid(props) {
  const [loaded, toggleLoad] = useState(() => { return null })
  const { films, location } = props
  const { pathname } = location 
  const baseDelay = 0.25

  const handleLoad = () => {
    setTimeout(() => {
      toggleLoad(true)
    }, 500)
  }

  useEffect(() => {
    toggleLoad(false)
  }, [pathname])


  useEffect(() => {
    return (() => toggleLoad(false) )
  }, [])


  return (
    <div className="FilmCategoryGrid">
      {
        loaded
        ? null
        : <CubePreloader />
      }
      <ul>
      {
        films.map((f, index) => {
          return (
            <li className={ loaded ? "FilmCategoryGrid__node animate" : "FilmCategoryGrid__node"} 
                key={index}
                style={{transitionDelay: `${((index + 1) * 0.125) + baseDelay}s`}}
              >
              <Link to={`/filmstudy/${f.slug}`}>
                <div className="node__wrap">
                  <img height="418" src={f.stills[0].url} alt={f.stills[0].alt} onLoad={ index === films.length - 1 ? handleLoad : undefined}
                    style={{ minHeight: `223px`}}
                  />
                  <div className="node__meta">
                    <div className="meta">
                      <p className="meta__title">{f.title}</p>
                      <p className="meta__category">{f.category}</p>
                      <p>{
                          f.credits.filter(fc => fc.role === `Director`)[0] ?
                          `dir. ${f.credits.filter(fc => fc.role === `Director`)[0].name}` :
                          `${f.credits[0].role}: ${f.credits[0].name}`
                         }
                      
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
})