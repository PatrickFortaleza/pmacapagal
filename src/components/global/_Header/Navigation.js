import React, { useState, useEffect } from 'react'
import Section from '../../entity/Section'
import NavFooter from './NavFooter';
import { Link } from 'react-router-dom';
import { TriangleIcon } from '../../icons'

export default function Navigation(props) {
  const [toggleSubMenu, toggleSub] = useState(() => {return false})
  const [show, toggleShow] = useState(() => { return false })
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)

  const setHoverOn = () => {
    toggleSub(true)
    setTimeout(() => {
      toggleShow(true)
      return show
    }, 10)
  }

  const setHoverOff = () => {
    toggleShow(false)
    setTimeout(() => {
      toggleSub(false)
      return show
    }, 200)
  }

  const setClick = () => {
    toggleSub(true)
    setTimeout(() => {
      toggleShow(true)
    }, 10)
  }

  const handleResize = () => {
    setwindowWidth(window.innerWidth)
  }

  // On mount, add a event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    if(windowWidth < 969){toggleSub(true)}else{toggleSub(false)}
    // When we addEventListners we want to be wary of removing them once the component unmounts.
    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
