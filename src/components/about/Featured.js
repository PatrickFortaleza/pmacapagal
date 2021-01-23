import React from 'react'
import PageTitle from '../global/PageTitle'
import { Link } from 'react-router-dom';
import { films } from '../../data/films'

export default function Featured() {
  const featuredFilms = films.filter( f => { return f.featured === true } ).slice(0,3)
  const baseDelay = 0.125

  return (
    <div className="FeaturedSection">
      <PageTitle title={`Featured Works`}/>

      <div className="Featured__grid">
        {
          featuredFilms.map((f, index) => {
            return (
              <Link to={`/filmstudy/${f.slug}`} key={index}>
                <div className="Featured">
                  <ul className="Featured__film">
                    {
                      f.stills.slice(0,1).map((fs, index) => {
                        return (
                          <li 
                            key={index}
                            style={{
                              transition: `opacity .2s ease-in-out ${((index + 1) * 0.125) + baseDelay}s`,
                            }}
                          >
                            <img
                              height="418" 
                              src={fs.url} 
                              alt={fs.alt} 
                            />
                          </li>
                        )
                      })
                    }
                  </ul>
                  <p 
                    className="Featured__title"
                    style={{transition: `opacity .2s ease-in-out ${(((3) * 0.125) + baseDelay) + 0.125}s`}}
                  >{f.title}</p>
                </div>
              </Link> 
            )
          })

        }
      </div>
    </div>
  )
}
