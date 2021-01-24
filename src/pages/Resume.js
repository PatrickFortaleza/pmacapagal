import React from 'react'
import Section from '../components/entity/Section'
import PageTitle from '../components/global/PageTitle'
import Works from '../components/resume/Works'

export default function Resume() {
  return (
    <div>
      <Section>
        <PageTitle title={`RESUME`} />
        <Works />
      </Section>
    </div>
  )
}
