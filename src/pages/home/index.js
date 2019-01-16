import React, { Component } from 'react'
import Header from '../../component/header'
import TextContent from '../../component/text-content'

class HomeContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      headerTitle: 'CKのページへようこそ',
      headerContent: ''
    }
  }

  render () {
    return (
      <div className='home-content-container'>
        <Header
          headerTitle={this.state.headerTitle}
        />
        <TextContent>
          <p>This is CK's webpage.</p>
          <p>First of it's kind (in terms of personal satisfaction rate of at least 50%), yet definitely not the last of its kind.</p>

          <p>Do checkout the links on the left. Enjoy your stay!</p>
        </TextContent>
      </div>
    )
  }
}

export default HomeContent
