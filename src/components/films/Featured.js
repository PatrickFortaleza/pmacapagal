import React from 'react'
import { Link } from 'react-router-dom';

export default function Featured() {
  return (
    <Link to="/filmstudy/the-midnight-sweethearts">
      <div className="Featured">
        <ul className="Featured__film">
          <li><img src="https://pmacapagal-assets.s3-us-west-2.amazonaws.com/themidnightsweethearts-01.png" alt=""/></li>
          <li><img src="https://pmacapagal-assets.s3-us-west-2.amazonaws.com/themidnightsweethearts-02.png" alt=""/></li>
          <li><img src="https://pmacapagal-assets.s3-us-west-2.amazonaws.com/themidnightsweethearts-03.png" alt=""/></li>
        </ul>
        <p className="Featured__title"><Link to="/filmstudy/the-midnight-sweethearts">The Midnight Sweethearts</Link></p>
      </div>
    </Link>
  )
}
