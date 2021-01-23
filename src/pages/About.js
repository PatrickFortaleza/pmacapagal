import React from 'react'
import Section from '../components/entity/Section'
import PageTitle from '../components/global/PageTitle'
import Bio from '../components/about/Bio'
import Featured from '../components/about/Featured'

export default function About() {
  return (
    <div>
      <Section>
        <PageTitle title={`ABOUT ME`} />
        <Bio />
        <Featured />
      </Section>
    </div>
  )
}
