import React, { Component } from 'react'
import Header from '../../component/header'

class ContactContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      headerTitle: 'Contact'
    }
  }
  render () {
    return (
      <div className='contact-content-container'>
        <Header
          headerTitle={this.state.headerTitle}
        />
        <div className='contact-content'>
          Contact me at my github account
        </div>
      </div>
    )
  }
}

export default ContactContent
