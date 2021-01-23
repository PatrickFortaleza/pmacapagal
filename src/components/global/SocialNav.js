import React from 'react'
import { PlaneIcon, YoutubeIcon, InstagramIcon, LinkedInIcon } from '../icons'

export default function SocialNav() {
  return (
    <ul className="SocialNav">
      <li><a href="mailto:ptmacapagal@gmail.com" target="blank_"><div className="svg-cont"><PlaneIcon /></div></a></li>
      <li><a href="https://www.youtube.com/channel/UCjGWX_M763oKVy-vIIsnrQg" target="blank_"><div className="svg-cont"><YoutubeIcon /></div></a></li>
      <li><a href="https://www.instagram.com/pmacapagal/" target="blank_"><div className="svg-cont"><InstagramIcon /></div></a></li>
      <li><a href="https://www.linkedin.com/in/patriciamacapagal" target="blank_"><div className="svg-cont"><LinkedInIcon /></div></a></li>
    </ul>
  )
}
