import React, { useState } from 'react'
import MasonryGrid from '../components/photography/MasonryGrid'
import Tabs from '../components/photography/Tabs'
import Section from '../components/entity/Section'
import PageTitle from '../components/global/PageTitle'


export default function Photography() {
  const [currentTab, toggleTab] = useState(() => { return 'all' })

  const handleTabToggle = (childData) => {
    toggleTab(childData)
  }

  return (
    <div className="Photography">
      <Section>
        <PageTitle z={true} title={`PHOTOGRAPHY`} />
        <Tabs handleTabToggle={handleTabToggle}/>
        <MasonryGrid currentTab={currentTab}/>
      </Section>
    </div>
  )
}
