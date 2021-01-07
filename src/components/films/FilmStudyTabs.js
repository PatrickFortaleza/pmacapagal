import React, { useState, useEffect } from 'react'

export default function Tabs(props) {
  const [currentTab, toggleTab] = useState(() => { return 'credits' })

  const handleFormChanged = (e) => {
    toggleTab(e.target.value)
  }

  // This will fire every time there is a change to toggleMenu state variable.
  useEffect(() => {
    props.handleTabToggle(currentTab)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab]) 

  return (
    <div className="Tabs">
      <form className="tabset" onChange={(e) => handleFormChanged(e)}>
        <input type="radio" name="tabset" id="tab1" value="credits" defaultChecked/>
        <label htmlFor="tab1">CREDITS</label>
        <input type="radio" name="tabset" id="tab2" value="stills"/>
        <label htmlFor="tab2">STILLS</label>
      </form>
      <div className="tab-panel"></div>
    </div>
  )
}