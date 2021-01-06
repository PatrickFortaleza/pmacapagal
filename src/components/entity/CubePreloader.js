import React from 'react'

export default function CubePreloader() {
  return (
  <div className="cube__wrap">
    <div className="container__cube">
      <div className="cube">
        <div className="side side1"></div>
        <div className="side side2"></div>
        <div className="side side3"></div>
        <div className="side side4"></div>
        <div className="side side5"></div>
        <div className="side side6"></div>
      </div>
      <br/>
      <p style={{textAlign: `center`, whiteSpace: `no-wrap`, fontSize: `14px`}}>Loading</p>
    </div>
  </div>
  )
}
