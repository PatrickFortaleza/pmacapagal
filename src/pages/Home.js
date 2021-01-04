import React, { useState, useEffect } from 'react'
import Section from '../components/entity/Section'
import Featured from '../components/films/Featured'
import CubePreloader from '../components/entity/CubePreloader'
import { films } from '../data/films'

export default function Home() {
  const featured = films.filter(f => { return f.featured === true })
  const [loaded, upLoadCounter] = useState(() => { return false })

  const incrementLoadCounter = () => {
    console.log('load notif sent to home')
    upLoadCounter(true)
  }

  useEffect(() => {
    if(loaded === true){
      console.log('all has loaded')
    }
  }, [loaded])
  

  return (
    <div>
      {
        loaded ? null : <CubePreloader />
      }
      <Section>
        {
          featured.map((f, index) => {
            return (
              <Featured film={f} key={index} notifyLoad={index === featured.length - 1 ? incrementLoadCounter : false}/>
            )
          })
        }
      </Section>
    </div>
  )
}
