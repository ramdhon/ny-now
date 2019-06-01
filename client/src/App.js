import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'

import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    )
  }
}

export default App
