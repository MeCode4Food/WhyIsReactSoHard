import React, { Component } from 'react'
// import Header from '../component/header'
import Sidebar from '../component/sidebar'
import { Route, Switch, Redirect } from 'react-router-dom'

import './main.scss'
import HomeContent from './home'

class Main extends Component {
  render () {
    return (
      <div className='main-container'>
        <div className='main-sidebar'>
          <Sidebar />
        </div>
        <div className='main-content'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/home' />} />
            <Route exact path='/home' component={HomeContent} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Main
