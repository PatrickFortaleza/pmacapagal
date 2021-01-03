import React from 'react'
import Section from '../../entity/Section'
import NavFooter from './NavFooter';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
  const toggleMenu = props.toggle
  return (
    <div className={ toggleMenu ? "Navigation active" : "Navigation"}>
      <Section>
        <nav className="main">
          <ul>
            <li className="has-submenu">
              <button>FILM</button>
              <ul>
                <li><Link to="/film/shorts">SHORTS</Link></li>
                <li><Link to="/film/documentaries">DOCUMENTARIES</Link></li>
                <li><Link to="/film/personal">PERSONAL</Link></li>
              </ul>
            </li>
            <li><Link to="/photography">PHOTOGRAPHY</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/resume">RESUME</Link></li>
          </ul>
        </nav>
      </Section>
      <NavFooter />
    </div>
  )
}
