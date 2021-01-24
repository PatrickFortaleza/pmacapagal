import React from 'react'
import Section from '../components/entity/Section'
import PageTitle from '../components/global/PageTitle'
import Info from '../components/contact/Info'

export default function Contact() {
  return (
    <div>
      <Section>
        <PageTitle title={`CONTACT`} />
        <Info/>
      </Section>
    </div>
  )
}
