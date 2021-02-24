import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TextInput, TouchableOpacity, ToastAndroid, StatusBar, TouchableOpacityBase } from 'react-native'
import {styles} from './Styletambahperusahaan'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import { add } from 'react-native-reanimated';


class Tambahperusahaan extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            phone_number:'',
            address:''
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('token')
          .then((value) => {
            console.log('ini Value', value);
            if (value !== null) {
              this.setState({token: value, refresh: false});
                
            } else {
                this.props.navigation.navigate('Login');
            }
          })
          .catch((err) => console.log(err));
        console.log('ini TOKEN', this.props.userToken.userReducer.token);
      }
    
      
      Login = () => {
        console.log('mulai Mengirim');
    
        const {name,phone_number,address} = this.state;
        const formData = new FormData();
    
        formData.append('name', name);
        formData.append('phone_number', phone_number);
        formData.append('address', address);

    
        this.setState({loading: true});
        fetch('https://smartcash2.herokuapp.com/api/supplier/add', {
          method: 'POST',
          headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            Authorization: `Bearer ${this.state.token}`,
          },
          body: formData,
        })
          .then((response) => response.json())
          .then((response) => {
            const {token, error} = response;
    
            this.props.userLogin(token);
    
            console.log('ini response', response);
            if (response.user.roles[0].pivot.role_id == 3) {
              ToastAndroid.show('Berhasil Masuk', 1000);
              AsyncStorage.setItem('token', token);
              // AsyncStorage.setItem('role', response.user.role.toString());
    
              this.props.navigation.replace('Drawer1');
              // AsyncStorage.setItem('token', token);
              // this.props.userLogin(token);
    
              this.setState({loading: false});
            }else if (response.user.roles[0].pivot.role_id == 4){
              ToastAndroid.show('Berhasil masuk',1000);
              AsyncStorage.setItem('token',token);
              this.props.navigation.navigate('Drawer2')
            }
          })
          .catch((error) => {
            console.log(error);
            this.setState({loading: false});
            ToastAndroid.show('Email Atau Password Salah', 1000);
          });
      };
      
      
    render() {
        return (
            <View style = {styles.container}>
                <ScrollView>    

                    <StatusBar backgroundColor = {'gray'}/>
                    <View style = {styles.header}>
                        <TouchableOpacity style = {styles.touchback} onPress = {()=>this.props.navigation.goBack()}>
                            <Image source = {require('../../Assets/Whiteback.png')} style = {styles.imgback}/>
                        </TouchableOpacity>
                        <Text style = {styles.txtperusahaan}>Tambah perusahaan</Text>
                    </View>
                        
                    <TextInput placeholder = {' nama'} style = {styles.inputnama}/>
                    <TextInput placeholder = {' telpon'} style = {styles.inputtelpon}/>   
                    <TextInput placeholder = {' alamat'} style = {styles.inputalamat} multiline = {true}/>   
                    <TouchableOpacity style = {styles.touchadd}>
                        <Text style = {styles.txtadd}>Tambah</Text>
                    </TouchableOpacity>


                    <View style = {{width:'100%',height:40}}></View>
                </ScrollView>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      userToken: state,
    };
  };
export default connect(mapStateToProps)(Tambahperusahaan);