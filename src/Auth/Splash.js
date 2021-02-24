import React, {Component} from 'react';
import {Text, View} from 'react-native';
// import {Styles} from './Stylesplash';
// import AsyncStorage from '@react-native-community/async-storage'

// import Indux from './Indux';
// import Login from './Login'

export default class Splash extends Component {
  constructor() {
    super();
    (this.componentDidMount = function () {
     
  
      console.log(' Console Log Ini Dari componentDidMount');
      setTimeout(() => {
        // AsyncStorage.getItem('token').then((value) => {
        //   if (value !== null) {
        //     this.props.navigation.replace('Home2');
        //   } else {
        //     this.props.navigation.replace('Intro');
        //   }
        // })
        // .catch((err) => console.log(err));
        this.props.navigation.navigate('Login')
        // this.setState({
        //   role: false,
        // });
      }, 1000);
    }),
      (this.componentDidUpdate = function () {
        console.log(' Console Log Ini Dari componentDidUpdate');
      });
  }

  state = {
    role: true,
  };

  splash = () => {
    // if (this.state.role) {
    return (
      <View>
          <Text>Ini Splash</Text>
      </View>
    );
  };

  render() {
    // if (this.state.role) {
      return <View style={{flex: 1}}>{this.splash()}</View>;
    // } else {
      // this.props.navigation.navigate('Login')
      // return <View style={{flex: 1}}>{this.splash()}</View>; 
    // }
  }
}