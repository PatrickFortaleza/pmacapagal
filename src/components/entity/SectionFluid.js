import React, { Component } from 'react'

// A SECTION (NO WRAPPER) WITH VERTICAL PADDING
export class SectionFluid extends Component {
  render() {
    return (
      <section className="full">
        {this.props.children}
      </section>
    )
  }
}

export default SectionFluid
