import React, { useState, useEffect } from 'react'
import Section from '../entity/Section'
import Hamburger from './_Header/Hamburger'
import Navigation from './_Header/Navigation'
import { Link } from 'react-router-dom';

export default function Header() {
  const [toggleMenu, toggle] = useState(() => { return false })
  const [windowYOffset, setWindowY] = useState(() => { return window.pageYOffset })

  const handleScroll = () => {
    setWindowY(window.pageYOffset)
  }

  const willToggle = (childData) => {
    toggle(childData)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={windowYOffset === 0? null : "active" }>
      <Section>
        <div className="pseudoHeader">
          <Link to="/" className="logo-container">
            <h1 className="logo">PATRICIA MACAPAGAL</h1>
            <h2 className="logo sub">DIRECTOR OF PHOTOGRAPHY</h2>
          </Link>
          <Hamburger willToggle={willToggle}/>
          <Navigation toggle={toggleMenu}/>
        </div>
      </Section>
    </header>
  )
}
