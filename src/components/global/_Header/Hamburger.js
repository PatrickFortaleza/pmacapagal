import React, { useState, useEffect } from 'react'

export default function Hamburger(props) {
  const [toggleMenu, toggle] = useState(() => { return false })

  const setToggle = () => {
    toggle(toggleMenu => !toggleMenu )
  }

  // This will fire every time there is a change to toggleMenu state variable.
  useEffect(() => {
    props.willToggle(toggleMenu)
  }, [toggleMenu])  

  return (
    <button onClick={setToggle} id="icon" className={ toggleMenu ? 'icon active' : 'icon'}>
      <div className='hamburger'></div>
    </button>
  )
}
