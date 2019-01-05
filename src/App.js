import React, { Component } from 'react'
import Main from './pages';
import { BrowserRouter as Router } from 'react-router-dom';

import './app.scss'

class App extends Component {

  render(){
    return(
      <Router>
        <div className="app-container">
          <Main />
        </div>
      </Router>
    )
  }
}

export default App