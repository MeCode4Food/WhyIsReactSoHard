import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class SidebarRoute extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name,
      route: this.props.route
    }
  }
  render () {
    return (
      <div className='sidebar-route-container'>
        <Link to={this.state.route}>{this.state.name}</Link>
      </div>
    )
  }
}

SidebarRoute.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string
}

export default SidebarRoute
