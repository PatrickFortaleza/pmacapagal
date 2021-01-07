import React, { useEffect, useState } from 'react'
import { films } from '../../data/films'
import FilmEmbed from './FilmEmbed'
import FilmStudyTabs from './FilmStudyTabs'
import FilmStudyData from './FilmStudyData'
import Section from '../../components/entity/Section'

export default function FilmBody(props) {
  const { slug } = props
  const [filmstudy, updateFilm] = useState(() => { return null })
  const [currentTab, toggleTab] = useState(() => { return 'credits' })

  useEffect(() => {
    updateFilm(films.filter( f => f.slug === slug)[0])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    updateFilm(films.filter( f => f.slug === slug)[0])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  const handleTabToggle = (childData) => {
    toggleTab(childData)
  }

  let FilmEmbedProps = {
    embed: ``,
    thumbnail: ``,
    alt: ``,
  }

  if(filmstudy){
    FilmEmbedProps = {
      embed: filmstudy.embed,
      thumbnail: filmstudy.stills[0].hiResUrl,
      alt: filmstudy.stills[0].alt,
    }
  }

  return (
    <div className="FilmBody">
      <FilmEmbed 
        commonProps={FilmEmbedProps}
      />
      <Section>
        <div className="FilmBody__title vc">
          <h1>{filmstudy ? filmstudy.title : ''}</h1>
        </div>
        <FilmStudyTabs handleTabToggle={handleTabToggle} />
        <FilmStudyData
          currentTab={currentTab} 
          credits={filmstudy ? filmstudy.credits : null} 
          stills={filmstudy ? filmstudy.stills : null}
        />
      </Section>
    </div>
  )
}
