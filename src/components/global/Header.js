import React from 'react'
import Section from '../entity/Section'
import Hamburger from './_Header/Hamburger'

export default function Header() {
  return (
    <header>
      <Section>
        <div className="pseudoHeader">
          <div className="logo">
            <h1 className="logo">PATRICIA MACAPAGAL</h1>
            <h2 className="logo sub">DIRECTOR OF PHOTOGRAPHY</h2>
          </div>
          <Hamburger />
        </div>
      </Section>
    </header>
  )
}
