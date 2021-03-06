import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from './store'

import RootCom from './Root';

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
