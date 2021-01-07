import React from 'react'
import Section from '../entity/Section'
import PageTitle from '../global/PageTitle'
import FilmCategoryGrid from './FilmCategoryGrid'
import { films } from '../../data/films'

export default function FilmCategory(props) {
  const { category } = props;
  const filteredFilms = films.filter( f => { return f.categoryPlural === `${category}`})
  return (
    <div>
      <Section>
        <PageTitle title={category}/>
        <FilmCategoryGrid films={filteredFilms} />
      </Section>
    </div>
  )
}
