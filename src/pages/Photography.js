import React from 'react'
import MasonryGrid from '../components/photography/MasonryGrid'
import Tabs from '../components/photography/Tabs'
import Section from '../components/entity/Section'


export default function Photography() {
  return (
    <div className="Photography">
      <Section>
        <Tabs/>
        <MasonryGrid />
      </Section>
    </div>
  )
}
