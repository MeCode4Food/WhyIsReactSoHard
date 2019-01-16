import React, { Component } from 'react'
import _ from 'lodash'
import SidebarRoute from './helpers/sidebar-route'

import './sidebar.scss'

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'CK',
      routes: [
        {
          name: 'Home',
          route: '/home'
        },
        {
          name: 'About',
          route: '/about'
        },
        {
          name: 'Contact',
          route: '/contact'
        }
      ]
    }
  }
  render () {
    return (
      <div className='sidebar-container'>
        <div className='sidebar-title'>{this.state.title}</div>
        {
          _.map(this.state.routes, (route) => {
            return <SidebarRoute
              name={_.get(route, 'name')}
              route={_.get(route, 'route')}
            />
          })
        }
      </div>
    )
  }
}

export default Sidebar
