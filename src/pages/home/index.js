import React, { Component } from 'react'
import Header from '../../component/header'

class HomeContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      headerTitle: 'Welcome to my page!',
      headerContent: ''
    }
  }

  render () {
    return (
      <div className='home-content-container'>
        <Header
          headerTitle={this.state.headerTitle}
        />
        This is Home
      </div>
    )
  }
}

export default HomeContent
