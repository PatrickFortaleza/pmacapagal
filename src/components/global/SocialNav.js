import React from 'react'
import { PlaneIcon, YoutubeIcon, InstagramIcon } from '../icons'

export default function SocialNav() {
  return (
    <ul>
      <li><a href="#"><div className="svg-cont"><PlaneIcon /></div></a></li>
      <li><a href="#"><div className="svg-cont"><YoutubeIcon /></div></a></li>
      <li><a href="#"><div className="svg-cont"><InstagramIcon /></div></a></li>
    </ul>
  )
}
