import React, { useState, useEffect } from 'react'

export default function Tabs(props) {
  const [currentTab, toggleTab] = useState(() => { return 'all' })

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
        <input type="radio" name="tabset" id="tab1" value="all" defaultChecked/>
        <label htmlFor="tab1">ALL</label>
        <input type="radio" name="tabset" id="tab2" value="concerts"/>
        <label htmlFor="tab2">CONCERTS</label>
        <input type="radio" name="tabset" id="tab3" value="clients"/>
        <label htmlFor="tab3">CLIENTS</label>
        <input type="radio" name="tabset" id="tab4" value="travel"/>
        <label htmlFor="tab4">TRAVEL</label>
        <input type="radio" name="tabset" id="tab5" value="people" />
        <label htmlFor="tab5">PEOPLE</label>
      </form>
      <div className="tab-panel"></div>
    </div>
  )
}
