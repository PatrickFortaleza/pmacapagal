import React from 'react'
import Section from '../components/entity/Section'
import Featured from '../components/films/Featured'
import { films } from '../data/films'

export default function Home() {
  console.log(films)
  const featured = films.filter(f => { return f.featured === true })
  console.log(featured)
  return (
    <div>
      <Section>
        {
          featured.map((f, index) => {
            return (
              <Featured film={f} key={index}/>
            )
          })
        }
      </Section>
    </div>
  )
}
