import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './text-content.scss'

class TextContent extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='text-content-container'>
        {children}
      </div>
    )
  }
}

TextContent.propTypes = {
  children: PropTypes.string
}

export default TextContent
