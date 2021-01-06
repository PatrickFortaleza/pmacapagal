import React, { Component } from 'react'
// Global Components
import Header from './global/Header'
import Footer from './global/Footer'
// React Router Dom - For Defining Pages and Paths.
import {Route, Switch, withRouter} from 'react-router-dom'
// Import Page Templates
import Home from '../pages/Home'
import FilmCat from '../pages/FilmCat'
import SingleFilm from '../pages/SingleFilm'
import Photography from '../pages/Photography'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'


export class Interface extends Component {
  render() {
    return (
      <div className="Interface">
        <Header />
        <main>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/film/:category" component={withRouter(FilmCat)} />
            <Route path="/filmstudy/:slug" component={withRouter(SingleFilm)} />
            <Route path="/photography" component={Photography} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Interface
