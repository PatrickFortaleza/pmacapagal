import React from 'react'
import Section from '../entity/Section'
import SocialNav from './SocialNav'

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear()
  return (
    <footer className="Footer">
      <Section>
        <div className="Footer__flex">
          <div className="Footer__meta">
            <p className="mime">PATRICIA MACAPAGAL &copy; {year}</p>
          </div>
        <div className="vc">
          <SocialNav />
        </div>
        </div>
      </Section>
    </footer>
  )
}
