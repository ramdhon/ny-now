import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './views/Home'
import MinJoy from './views/MinJoy'

import { Navbar, LinearLoading } from './components'

class Root extends Component {
  state = {
    search: ''
  }

  search = (search) => {
    this.setState({
      search
    })
  }

  render () {
    return (
      <Router>
        <Navbar search={this.search} />
        {
          this.props.isLoading &&
          <LinearLoading />
        }
  
        <Switch>
          <Route path="/" exact render={(props) => (<Home {...props} search={this.state.search} />)} />
          <Route path="/minjoy" component={MinJoy} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  const { isLoading } = state;

  return {
    isLoading: isLoading
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Root);