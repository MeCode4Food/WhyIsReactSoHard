import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './header.scss'

class Header extends Component {
  render () {
    return (
      <div className='header-container'>
        <div className='header-title'>{this.props.headerTitle}</div>
        {/* <br /> */}
        <div className='header-content'>{this.props.headerContent}</div>
      </div>
    )
  }
}

Header.propTypes = {
  headerTitle: PropTypes.string,
  headerContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node
  ])
}

export default Header
