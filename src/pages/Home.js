import React, { useState } from 'react'
import Section from '../components/entity/Section'
import Featured from '../components/films/Featured'
import CubePreloader from '../components/entity/CubePreloader'
import { films } from '../data/films'

export default function Home() {
  const featured = films.filter(f => { return f.featured === true })
  const [loaded, upLoadCounter] = useState(() => { return false })

  const incrementLoadCounter = () => {
    setTimeout(() => {
      upLoadCounter(true)
    }, 200)
  }

  return (
    <div>
      {
        loaded ? null : <CubePreloader />
      }
      <Section>
        {
          featured.map((f, index) => {
            return (
              <Featured 
                film={f} 
                key={index} 
                hasLoaded={loaded}
                baseDelay={(index + 1) * 0.25} 
                notifyLoad={index === featured.length - 1 ? incrementLoadCounter : false}
              />
            )
          })
        }
      </Section>
    </div>
  )
}
