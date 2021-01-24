import React from 'react'
import Section from '../components/entity/Section'
import PageTitle from '../components/global/PageTitle'
import Resume_ from '../components/resume/Resume'

export default function Resume() {
  return (
    <div>
      <Section>
        <PageTitle title={`RESUME`} />
        <Resume_ />
      </Section>
    </div>
  )
}
