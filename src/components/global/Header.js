import React from 'react'
import Section from '../entity/Section'
import Hamburger from './_Header/Hamburger'
import Navigation from './_Header/Navigation'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Section>
        <div className="pseudoHeader">
          <Link to="/" className="logo-container">
            <h1 className="logo">PATRICIA MACAPAGAL</h1>
            <h2 className="logo sub">DIRECTOR OF PHOTOGRAPHY</h2>
          </Link>
          <Hamburger />
          <Navigation />
        </div>
      </Section>
    </header>
  )
}
