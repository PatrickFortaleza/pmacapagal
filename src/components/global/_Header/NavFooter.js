import React from 'react'
import { PlaneIcon, YoutubeIcon, InstagramIcon } from '../../icons'
import Section from '../../entity/Section'
import { Link } from 'react-router-dom';

export default function NavFooter() {
  const date = new Date();
  const year = date.getFullYear()
  return (
    <Section>
      <div className="NavFooter">
        <ul>
          <li><a href="#"><div className="svg-cont"><PlaneIcon /></div></a></li>
          <li><a href="#"><div className="svg-cont"><YoutubeIcon /></div></a></li>
          <li><a href="#"><div className="svg-cont"><InstagramIcon /></div></a></li>
        </ul>
        <div className="NavFooter__meta">
          <p className="mime">PATRICIA MACAPAGAL &copy; {year}</p>
          <p className="mime"><a href="mailto:ptmacapagal@gmail.com">ptmacapagal@gmail.com</a></p>
          <p className="mime"><a href="tel:778-895-2507">778-895-2507</a></p>
        </div>
      </div>
    </Section>
  )
}
