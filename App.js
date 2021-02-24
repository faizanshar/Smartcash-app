import React, { Component } from 'react'
import { Text, View, } from 'react-native'
import Indux from './src/Auth/Indux'
import {Provider} from 'react-redux'
import store from './src/Store/Store'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Indux/>
      </Provider>
    )
  }
}
