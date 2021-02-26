import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, Modal, ToastAndroid } from 'react-native'
import {styles} from './Stylegudangstaff'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';


class Gudangstaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            hapus:'',
            modalVisible:false,
            hapus:'',
            method:'delete'
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('token')
          .then((value) => {
            console.log('ini Value', value);
            if (value !== null) {
              this.setState({token: value, refresh: false});
              this.getBarang()  
            } else {
                this.props.navigation.navigate('Login');
            }
          })
          .catch((err) => console.log(err));
        console.log('ini TOKENKUUOI', this.props.userToken.userReducer.token);
      }
    
      getBarang() {
        this.setState({loading: true});
        fetch('https://smartcash2.herokuapp.com/api/barang', {
          method: 'GET',
          headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
          },
        })
          .then((responseJson) => responseJson.json())
          .then((responseJson) => {
            console.log('ini Dia', responseJson);
            // console.log(responseJson);
            // const {status} = responseJson;
            console.log('ini Dia',responseJson);
            if (responseJson.status == 'success') {
              this.setState({
                data: responseJson.data,
                // refresh: false,
                // loading: false,
              });
            //   this.setState({data2: responseJson, loading: false});
    
              // this.setState({loading: true});
              // console.log(responseJ);
            } else {
              console.log('ini else', responseJson);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      hapusBarang = (id) => {
        console.log('mulai Mengirim');
    
        const {method} = this.state;
        const formData = new FormData();
    
        formData.append('_method', method);
        // formData.append('password', password2);
    
        this.setState({loading: true});
        fetch(`https://smartcash2.herokuapp.com/api/barang/delete/${id}`, {
          method: 'POST',
          headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
          },
          body: formData,
        })
          .then((response) => response.json())
          .then((response) => {
            // const {token, error} = response;
    
            // this.props.userLogin(token);
    
            console.log('ini response', response);
            if (response.status == 'success') {
              ToastAndroid.show('Berhasil Menghapus', 1000);
              this.props.navigation.navigate('Drawer1')
              this.setState({loading: false});
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

                    <View style = {styles.header}>
                        <TouchableOpacity style = {styles.touchback} onPress = {()=>this.props.navigation.goBack()}>
                            <Image source = {require('../../Assets/Whiteback.png')} style = {styles.imgback}/>
                        </TouchableOpacity>
                        <Text style = {styles.txtgudang}>Gudang</Text>
                    </View>


                    {this.state.data.map((item,index) => {
                        return(
                            <View style = {styles.containerdata}>
                                <View style = {styles.viewbarang}>
                                    <Text style = {styles.txtbarang}>{item.name}</Text>
                                    <View style = {styles.viewdiskon}>
                                        <Text style = {styles.txtdiskon}>{item.discount}%</Text>
                                    </View>
                                </View>
                                <View style = {styles.viewbrand}>
                                    <Text style = {styles.txtbrand}>{item.brand}</Text>
                                </View>
                                <View style = {styles.viewharga}>
                                    {item.discount == 0 ? (
                                      <Text style = {styles.txthargadiskon}>Rp.0-,</Text>
                                    ) : (
                                      <Text style = {styles.txthargadiskon}>Rp.{item.price}</Text>
                                    )}
                                    <Text style = {styles.txtharga}>Rp.{item.price - item.discount / 100 * item.price}-,</Text>
                                </View>

                                <View style = {styles.viewtouch}>
                                    <TouchableOpacity style = {styles.touchhapus} onPress={() => {this.hapusBarang(item.id)}}>
                                        <Text style = {styles.txthapus}>Hapus</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {styles.touchupdate} onPress = {()=>this.props.navigation.navigate("Ubahdatastaff",{item:item})}>
                                        <Text style = {styles.txtubah}>Ubah</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                    


                    <View style = {{width:'100%',height:30}}></View>
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
export default connect(mapStateToProps)(Gudangstaff);
                              


