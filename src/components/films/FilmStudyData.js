import React, { useRef, useEffect } from 'react'
import SmartStill from './SmartStill'

export default function FilmStudyData(props) {
  const { credits, stills, currentTab } = props

  const creditsSection = useRef()
  const stillsSection = useRef()

  const setTab = () => {
    switch(currentTab){
      case 'credits': 
        stillsSection.current.classList.remove('active', 'animate')
        creditsSection.current.classList.add('active')
        setTimeout(() => {
          creditsSection.current.classList.add('animate')
        }, 200) 
        break
      case 'stills':
        creditsSection.current.classList.remove('active', 'animate')
        stillsSection.current.classList.add('active')
        setTimeout(() => {
          stillsSection.current.classList.add('animate')
        }, 200) 
        break
      default:
        stillsSection.current.classList.remove('active', 'animate')
        creditsSection.current.classList.add('active')
        setTimeout(() => {
          creditsSection.current.classList.add('animate')
        }, 200) 
        break
    }
  }

  useEffect(() => {
    setTab()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab])

  return (
    <div className="FilmStudyData" style={{marginBottom: `30px`}} >
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
              <li key={index}>
                <SmartStill src={s.medResUrl} alt={s.alt} hires={s.hiResUrl} />
              </li>
            )
          })
          : null
        }
        </ul>
      </div>
    </div>
  )
}
