import React, { useState } from 'react'

export default function Hamburger() {
  const [toggleMenu, toggle] = useState(() => { return false })

  const setToggle = () => {
    toggle(!toggleMenu)
  }

  return (
    <button onClick={setToggle} id="icon" className={ toggleMenu ? 'icon active' : 'icon'}>
      <div className='hamburger'></div>
    </button>
  )
}
