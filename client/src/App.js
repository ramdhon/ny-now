import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { connect, Provider } from 'react-redux'
import store from './store'

import Home from './views/Home'
import MinJoy from './views/MinJoy'

import { Navbar, LinearLoading } from './components'

import RootCom from './Root';


// class Root extends Component {
//   state = {
//     search: ''
//   }

//   search = (search) => {
//     this.setState({
//       search
//     })
//   }

//   render () {
//     return (
//       <Router>
//         <Navbar search={this.search} />
//         {
//           this.props.isLoading &&
//           <LinearLoading />
//         }
  
//         <Switch>
//           <Route path="/" exact component={() => (<Home search={this.state.search} />)} />
//           <Route path="/minjoy" component={MinJoy} />
//         </Switch>
//       </Router>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   const { isLoading } = state;

//   return {
//     isLoading
//   }
// }

// connect(mapStateToProps)(Root);
// const RootCom = connect(mapStateToProps)(Root);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootCom />
      </Provider>
    )
  }
}

export default App;
