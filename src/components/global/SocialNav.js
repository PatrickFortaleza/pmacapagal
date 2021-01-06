import React from 'react'
import { PlaneIcon, YoutubeIcon, InstagramIcon } from '../icons'

export default function SocialNav() {
  return (
    <ul className="SocialNav">
      <li><a href="mailto:ptmacapagal@gmail.com" target="blank_"><div className="svg-cont"><PlaneIcon /></div></a></li>
      <li><a href="https://www.instagram.com/pmacapagal/" target="blank_"><div className="svg-cont"><YoutubeIcon /></div></a></li>
      <li><a href="https://www.instagram.com/pmacapagal/" target="blank_"><div className="svg-cont"><InstagramIcon /></div></a></li>
    </ul>
  )
}
