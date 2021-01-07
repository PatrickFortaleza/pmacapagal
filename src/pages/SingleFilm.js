import React from 'react'
import {
  withRouter
} from "react-router-dom";
import FilmBody from '../components/films/FilmBody'

export default withRouter(function SingleFilm(props) {
  const { match } = props;
  const slug = match.params.slug

  return (
    <div>
      <FilmBody slug={slug} />
    </div>
  )
})
