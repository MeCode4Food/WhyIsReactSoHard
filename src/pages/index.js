import React, { Component } from 'react'
// import Header from '../component/header'
import Navbar from '../component/navbar'
import { Route, Redirect, Switch } from 'react-router-dom'

import './main.scss'
import HomeContent from './home'
import AboutContent from './about'
import ContactContent from './contact'

class Main extends Component {
  render () {
    return (
      <div className='main-container'>
        <div className='main-sidebar'>
          <Navbar />
        </div>
        <div className='main-content'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/home' />} />
            <Route exact path='/home' component={HomeContent} />
            <Route exact path='/about' component={AboutContent} />
            <Route exact path='/contact' component={ContactContent} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Main
