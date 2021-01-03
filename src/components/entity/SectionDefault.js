import React, { Component } from 'react'

// A SECTION WRAPPER WITH VERTICAL PADDING
export class SectionDefault extends Component {
  render() {
    return (
      <section className="default">
        <div className="wrap">
            {this.props.children}
        </div>
      </section>
    )
  }
}

export default SectionDefault
