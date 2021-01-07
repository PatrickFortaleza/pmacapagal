import React from 'react'
import FilmCategory from '../components/films/FilmCategory'
import {
  withRouter
} from "react-router-dom";

export default withRouter(function FilmCat(props) {
  const { match } = props;
  const category = match.params.category

  return (
    <div>
      <FilmCategory category={category} />
    </div>
  )
})
