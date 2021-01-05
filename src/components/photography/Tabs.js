import React from 'react'

export default function Tabs() {
  return (
    <div className="Tabs">
      <form className="tabset">
        <input type="radio" name="tabset" id="tab1" />
        <label for="tab1">ALL</label>
        <input type="radio" name="tabset" id="tab2" />
        <label for="tab2">CONCERTS</label>
        <input type="radio" name="tabset" id="tab3" />
        <label for="tab3">CLIENTS</label>
        <input type="radio" name="tabset" id="tab4" />
        <label for="tab4">TRAVEL</label>
        <input type="radio" name="tabset" id="tab5" />
        <label for="tab5">PEOPLE</label>
      </form>
      <div className="tab-panel"></div>
    </div>
  )
}
