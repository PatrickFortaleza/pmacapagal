import React, { useRef, useState, useEffect } from 'react'
import Section from '../entity/Section'

export default function FilmStudyData(props) {
  const { credits, stills, currentTab } = props

  const creditsSection = useRef()
  const stillsSection = useRef()

  const setTab = () => {
    switch(currentTab){
      case 'credits': 
        stillsSection.current.classList.remove('active')
        creditsSection.current.classList.add('active')
        break
      case 'stills':
        creditsSection.current.classList.remove('active')
        stillsSection.current.classList.add('active')
        break
      default:
        stillsSection.current.classList.remove('active')
        creditsSection.current.classList.add('active')
        break
    }
  }

  useEffect(() => {
    setTab()
  }, [currentTab])

  return (
    <div className="FilmStudyData">
      <div ref={creditsSection} className="credits" id="credits">
        <ul>
          {
            credits 
            ? credits.map((c, index) => {
              return (
                <li key={index} className={c.role === 'Camera' ? 'Camera' : ''}>
                  <label><span>{c.role}: &nbsp;</span></label><p>{c.name}</p>
                </li>
              )
            })
            : null
          }
        </ul>
      </div>
      <div ref={stillsSection} className="stills" id="stills">
        <ul>
        {
          stills
          ? stills.map((s, index) => {
            return (
              <img src={s.url} alt={s.alt} />
            )
          })
          : null
        }
        </ul>
      </div>
    </div>
  )
}
