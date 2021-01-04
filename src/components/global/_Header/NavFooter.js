import React from 'react'
import Section from '../../entity/Section'
import SocialNav from '../SocialNav'

export default function NavFooter() {
  const date = new Date();
  const year = date.getFullYear()
  return (
    <Section>
      <div className="NavFooter">
        <SocialNav />
        <div className="NavFooter__meta">
          <p className="mime">PATRICIA MACAPAGAL &copy; {year}</p>
          <p className="mime"><a href="mailto:ptmacapagal@gmail.com">ptmacapagal@gmail.com</a></p>
          <p className="mime"><a href="tel:778-895-2507">778-895-2507</a></p>
        </div>
      </div>
    </Section>
  )
}
