import React, { Component } from 'react'
import Header from '../../component/header'

class AboutContent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      headerTitle: 'This is an About page',
      headerContent: 'All about me.'
    }
  }

  render () {
    const url = 'https://github.com/MeCode4Food'

    return (
      <div className='about-content-container'>
        <Header
          headerTitle={this.state.headerTitle}
          headerContent={this.state.headerContent}
        />
        <div>Do check out my GitHub page <a href={url}>here</a>.</div>
      </div>
    )
  }
}

export default AboutContent
