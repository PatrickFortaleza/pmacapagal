import React from 'react'

export default function CubePreloader() {
  return (
  <div className="cube__wrap">
    <div class="container__cube">
      <div class="cube">
        <div class="side side1"></div>
        <div class="side side2"></div>
        <div class="side side3"></div>
        <div class="side side4"></div>
        <div class="side side5"></div>
        <div class="side side6"></div>
      </div>
      <br/>
      <p style={{textAlign: `center`, whiteSpace: `no-wrap`, fontSize: `14px`}}>Loading</p>
    </div>
  </div>
  )
}
