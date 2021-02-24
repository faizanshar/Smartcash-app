import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import {styles} from './Styleperusahaanstaff.js'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

class Pengaturanstaff extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('token')
          .then((value) => {
            console.log('ini Value', value);
            if (value !== null) {
              this.setState({token: value, refresh: false});
              this.getSupplier()  
            } else {
                this.props.navigation.navigate('Login');
            }
          })
          .catch((err) => console.log(err));
        console.log('ini TOKEN', this.props.userToken.userReducer.token);
      }

    
      getSupplier() {
        this.setState({loading: true});
        fetch('https://smartcash2.herokuapp.com/api/supplier', {
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
      
      
    render() {
        return (
            <View style = {styles.container}>
                <ScrollView>

                    <View style = {styles.header}>
                        <TouchableOpacity style = {styles.touchback} onPress = {()=>this.props.navigation.goBack()}>
                            <Image source = {require('../../Assets/Whiteback.png')} style = {styles.imgback}/>
                        </TouchableOpacity>
                        <View style = {styles.header2}>
                            <Text style = {styles.txtperusahaan}>Perusahaan</Text>
                            <TouchableOpacity style = {styles.touchadd} onPress = {()=>this.props.navigation.navigate('Tambahperusahaan')}>
                                <Image source = {require('../../Assets/Whiteadd.png')} style = {styles.imgadd}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                {this.state.data.map((item,index) => {
                    return(
                    <View style = {styles.viewdata} key = {index}>
                        
                        <View style = {styles.viewnama}>
                            <Text style = {styles.txtnama}>{item.name}</Text>
                        </View>
                        <View style = {styles.viewnomor}>
                            <Text style = {styles.txtnomor}>{item.phone_number}</Text>
                        </View>
                        
                        <View style = {styles.viewalamat}>
                            <View style = {styles.viewimgalamat}>
                                <Image source = {require('../../Assets/Blackaddress.png')} style = {styles.imgalamat}/>
                            </View>
                            <View style = {styles.viewtxtalamat}>
                                <Text style = {styles.txtalamat}>{item.address}</Text>
                            </View>
                        </View>

                        <View style = {styles.viewtouch}>
                            <TouchableOpacity style = {styles.touchhapus}>
                                <Text style = {styles.txthapus}>Hapus</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.touchubah}>
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
export default connect(mapStateToProps)(Pengaturanstaff);



