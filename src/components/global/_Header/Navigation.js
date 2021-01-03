import React, { useState } from 'react'
import Section from '../../entity/Section'
import NavFooter from './NavFooter';
import { Link } from 'react-router-dom';
import { TriangleIcon } from '../../icons'

export default function Navigation(props) {
  const [toggleSubMenu, toggleSub] = useState(() => {return false})

  const setHoverOn = () => {
    toggleSub(true)
  }

  const setHoverOff = () => {
    toggleSub(false)
  }

  const setClick = () => {
    toggleSub(toggleSubMenu => !toggleSubMenu)
  }

  const toggleMenu = props.toggle;
  const baseDelay = 0.075;
  return (
    <div className={ toggleMenu ? "Navigation active" : "Navigation"}>
      <Section>
        <nav className="main">
          <ul>
            <li 
              className={ toggleSubMenu ? "has-submenu active" : "has-submenu"} style={{transitionDelay: `${baseDelay * 1}s`}}
              onMouseEnter={setHoverOn}
              onMouseLeave={setHoverOff}
            >
              <button onClick={setClick}>FILM <div className="svg-cont triangle"><TriangleIcon /></div></button>
              <ul className={toggleSubMenu ? 'active' : null}>
                <li style={{transitionDelay: `${baseDelay * 2}s`}}><Link to="/film/shorts">SHORTS</Link></li>
                <li style={{transitionDelay: `${baseDelay * 3}s`}}><Link to="/film/documentaries">DOCUMENTARIES</Link></li>
                <li style={{transitionDelay: `${baseDelay * 4}s`}}><Link to="/film/personal">PERSONAL</Link></li>
              </ul>
            </li>
            <li style={{transitionDelay: `${baseDelay * 5}s`}}><Link to="/photography">PHOTOGRAPHY</Link></li>
            <li style={{transitionDelay: `${baseDelay * 6}s`}}><Link to="/about">ABOUT</Link></li>
            <li style={{transitionDelay: `${baseDelay * 7}s`}}><Link to="/contact">CONTACT</Link></li>
            <li style={{transitionDelay: `${baseDelay * 8}s`}}><Link to="/resume">RESUME</Link></li>
          </ul>
        </nav>
      </Section>
      <NavFooter />
    </div>
  )
}
