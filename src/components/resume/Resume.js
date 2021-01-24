import React, { useState, useEffect } from 'react'
import PageTitle from '../global/PageTitle'
import { Link } from 'react-router-dom';

export default function Resume_() {
  const [loaded, toggleLoad] = useState(() => { return false })
  const works = [
    {
      title: "The Midnight Sweethearts",
      slug: 'the-midnight-sweethearts',
      role: "Director of Photography",
      category: "short"
    },
    {
      title: "Risky Biscuits",
      slug: 'risky-biscuits',
      role: "Director of Photography",
      category: "short"
    },
    {
      title: "Bugged",
      role: "Production Designer",
      slug: 'bugged',
      category: "short"
    },
    {
      title: "Once More, From the Top",
      role: "Script Supervisor",
      slug: null,
      category: "short"
    },
    {
      title: "Specula",
      role: "Director",
      slug: 'specula',
      category: "short"
    },
    {
      title: "Immanuel Part II",
      role: "First Assistant Camera",
      slug: 'immanuel-part-2',
      category: "short"
    },
    {
      title: "Immanuel Part III",
      role: "Editor - Patricia Macapagal",
      slug: 'immanuel-part-3',
      category: "short"
    },
    {
      title: "Solstice – Design for Personal Protective Equipment",
      role: "Director & Director of Photography",
      slug: 'solstice--design-for-personal-protective-equipment',
      category: "documentary"
    },

  ]
  const baseDelay = .125

  const handleLoad = () => {
    toggleLoad(bool => bool = true)
  }

  useEffect(() => {
    handleLoad()
  }, []) 

  return (
    <div className={loaded ? "Resume animated" : "Resume"} >
      <PageTitle title={`SHORTS`} />
      <ul className="Resume__collection">
        {
          works.filter( w => { return w.category === "short"}).map((w, index) => {
            return (
              <li 
                key={index}
                style={{
                  transition: `all .2s ease-in-out ${((index + 1) * 0.125) + baseDelay}s`
                }}
              >
                { w.slug !== null ? 
                  <Link to={`/filmstudy/${w.slug}`}><h3>{w.title}</h3></Link>
                :
                  <h3>{w.title}</h3>
                }
                <p>{w.role}</p>
                <p>Patricia Macapagal</p>
              </li>
            )
          })
        }
      </ul>

      <PageTitle title={`DOCUMENTARY`} />
      <ul className="Resume__collection">
        {
          works.filter( w => { return w.category === "documentary"}).map((w, index) => {
            return (
              <li key={index}
                  style={{
                    transition: `all .2s ease-in-out ${((index + 1) * 0.125) + baseDelay}s`
                  }}
              >
                { w.slug !== null ? 
                  <Link to={`/filmstudy/${w.slug}`}><h3>{w.title}</h3></Link>
                :
                  <h3>{w.title}</h3>
                }
                <p>{w.role}</p>
                <p>Patricia Macapagal</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
