import React, { Component } from 'react'

// A SECTION WRAPPER WITH NO VERTICAL PADDING
export class Section extends Component {
  render() {
    return (
      <section className="default v-no-padding">
        <div className="wrap">
            {this.props.children}
        </div>
      </section>
    )
  }
}

export default Section
