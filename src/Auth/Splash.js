import React, {Component} from 'react';
import {Text, View,Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

// import {Styles} from './Stylesplash';
// import AsyncStorage from '@react-native-community/async-storage'

// import Indux from './Indux';
// import Login from './Login'

class Splash extends Component {

componentDidMount(){
  setTimeout(() => {
    AsyncStorage.getItem('token').then((value) => {
      console.log('ini TOken',value);
      this.props.userLogin({token: value});
      if (value !== null) {
        AsyncStorage.getItem('role').then((v) => {
          console.log('ini role',v);
          if(JSON.parse(v) === 2 ){
            this.props.navigation.replace('Screenpimpinan')
          }else if (JSON.parse(v) === 5){
            this.props.navigation.replace('Screenmember')
          }else if (JSON.parse(v) === 4) {
            this.props.navigation.replace('Drawer2')
          }else if (JSON.parse(v) === 3) {
            this.props.navigation.replace('Drawer1')
          }else(
            this.props.navigation.replace('Login')
          )
          
        })
      } else {
        this.props.navigation.replace('Login');
      }
    })
    .catch((err) => console.log(err));
  }, 2000);
}

  // constructor() {
  //   super();
  //   (this.componentDidMount = function () {
     
  
  //     console.log(' Console Log Ini Dari componentDidMount');
  //     setTimeout(() => {
  //       AsyncStorage.getItem('token').then((value) => {
  //         if (value !== null) {
  //           AsyncStorage.getItem('role').then((v) => {
  //             if(v === 2 ){
  //               this.props.navigation.replace('Screenpimpinan')
  //             }else if (v === 5){
  //               this.props.navigation.replace('Screenmember')
  //             }else if (v === 4) {
  //               this.props.navigation.replace('Drawer2')
  //             }else if (v === 3) {
  //               this.props.navigation.replace('Drawer1')
  //             }
  //           })
  //         } else {
  //           this.props.navigation.replace('Login');
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //       // this.props.navigation.navigate('Login')
  //       this.setState({
  //         role: false,
  //       });
  //     }, 1000);
  //   }),
  //     (this.componentDidUpdate = function () {
  //       console.log(' Console Log Ini Dari componentDidUpdate');
  //     });
  // }

  // state = {
  //   role: true,
  // };

  splash = () => {
    // if (this.state.role) {
    return (
      <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
         <Image source = {require('../Assets/Mylogo2.png')} style = {{width:'50%',height:200,marginBottom:200}} />
         <Text style = {{fontSize:20,fontWeight:'bold',bottom:120}}>SmartCash</Text>
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
const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (token) => dispatch({type: 'TOKEN_SPLASH', payload: token}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
