import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, TouchableOpacityBase } from 'react-native'
import {styles} from './Styleriwayatstaff'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

class Riwayatstaff extends Component {
    constructor(props){
        super(props);
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
              this.getRiwayat()  
            } else {
                this.props.navigation.navigate('Login');
            }
          })
          .catch((err) => console.log(err));
        console.log('ini TOKEN', this.props.userToken.userReducer.token);
      }

      getRiwayat() {
        this.setState({loading: true});
        fetch('https://smartcash2.herokuapp.com/api/pembelian', {
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
                        <Text style = {styles.txtriwayat}>Riwayat</Text>
                    </View>


                {this.state.data.map((item,index) => {
                    return(
                        <TouchableOpacity style = {styles.touchdata} key = {index}>
                            <View style = {styles.viewname}>
                                <View style = {styles.viewname1}>
                                    <Text style = {styles.txtname1}>{item.supplier.name}</Text>
                                </View>
                                <View style = {styles.viewname2}>
                                    <Text style = {styles.txtname2}>{item.supplier.created_at}</Text>
                                </View>
                            </View>
                            <View style = {styles.viewnomor}>
                                <Text style = {styles.txtnomor}>{item.supplier.phone_number}</Text>
                            </View>
                            <View style = {styles.viewaddress}>
                                <Image source = {require('../../Assets/Blackaddress.png')} style = {styles.imgaddress}/>
                                <Text style = {styles.txtaddress}>{item.supplier.address}</Text>
                            </View>
                            <View style = {styles.viewtotal}>
                                <Text style = {styles.txt}>Total :<Text style = {{color:'green'}}> Rp.{item.total}-,</Text></Text>
                                <Text style = {styles.txt}>Bayar :<Text style = {{color:'green'}}> Rp.{item.dibayar}-,</Text></Text>
                            </View>
                        </TouchableOpacity>

                    )
                })}


                    <View style = {{width:'100%',height:50}}></View>
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
export default connect(mapStateToProps)(Riwayatstaff);
