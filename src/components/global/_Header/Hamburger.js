import React, { useState, useEffect } from 'react'
import {
  withRouter
} from "react-router-dom";

export default withRouter(function Hamburger(props) {
  const [toggleMenu, toggle] = useState(() => { return false })
  const [currentPath, setCurrentPath] = useState(props.location.pathname);


  useEffect(() => {
    const { pathname } = props.location;
    setCurrentPath(pathname);
    setOff()
  }, [props.location.pathname]);

  const setOff = () => {
    toggle(false)
  }

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
})
