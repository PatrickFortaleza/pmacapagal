import React from 'react'
import SocialNav from '../global/SocialNav'

export default function Info() {
  return (
    <div className="Info">
      <ul className="Info__list">
        <li>
          <div className="col">
            <p>Direct Contact</p>
          </div>
          <div className="col">
            <p><a href="mailto:ptmacapagal@gmail.com">ptmacapagal@gmail.com</a></p>
            <p><a href="tel:7788952507">+1 &nbsp;778 895 2507</a></p>
          </div>
        </li>

        <li>
          <div className="col">
            <p>Social</p>
          </div>
          <div className="col">
            <SocialNav />
          </div>
        </li>

      </ul>
    </div>
  )
}
