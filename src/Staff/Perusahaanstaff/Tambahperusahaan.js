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
    
      
      tambahPerusahaan = () => {
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
            // const {token, error} = response;
    
            // this.props.userLogin(token);
    
            console.log('ini response', response);
            if (response.status == 'success') {
             ToastAndroid.show('Berhasil menambah!',1000)
             this.props.navigation.replace('Drawer1')
            }else if(response.errors.name == 'The name field is required.'){
              ToastAndroid.show('Nama perusahaan kosong!')
            }
          })
          .catch((error) => {
            console.log(error);
            this.setState({loading: false});
            ToastAndroid.show('Error', 1000);
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
                        
                    <TextInput placeholder = {' nama'} style = {styles.inputnama} onChangeText = {(name) => this.setState({name})}/>
                    <TextInput placeholder = {' telpon'} style = {styles.inputtelpon} onChangeText = {(phone_number) => this.setState({phone_number})}/>   
                    <TextInput placeholder = {' alamat'} style = {styles.inputalamat} multiline = {true} onChangeText = {(address) => this.setState({address})}/>   
                    <TouchableOpacity style = {styles.touchadd} onPress = {() => this.tambahPerusahaan()}>
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