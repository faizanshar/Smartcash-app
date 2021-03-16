import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, StatusBar  } from 'react-native'
import {styles} from './Styledetailriwayatpembelianpimpinan'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

class Detailriwayatpembelianpimpinan extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        AsyncStorage.getItem('token')
          .then((value) => {
            console.log('ini Value', value);
            if (value !== null) {
              this.setState({token: value, refresh: false});
            //   this.getRiwayat()  
            } else {
                this.props.navigation.navigate('Login');
            }
          })
          .catch((err) => console.log(err));
        console.log('ini TOKEN', this.props.userToken.userReducer.token);
        console.log('INI DATA',this.props.route.params.item.detailPembelian);
      }
    render() {
        return (
            <View style = {styles.container}>
                <ScrollView>

                    <View style = {styles.header}>
                        <TouchableOpacity style = {styles.touchback} onPress = {()=>this.props.navigation.goBack()}>
                            <Image source = {require('../../Assets/Whiteback.png')} style = {styles.imgback}/>
                        </TouchableOpacity>
                        <Text style = {styles.txtriwayat}>Detail</Text>
                    </View>

                  
                  {this.props.route.params.item.detailPembelian.map((item,index) => {
                    return(
                      <View key = {index} style = {styles.containerdata}>
                        <View style = {styles.viewname}>
                          <Text style = {styles.txtname}>{item.barang.name}</Text>
                        </View>
                        <View style = {styles.viewstock}>
                          <Text style = {styles.txtstock}>Stock : {item.stock}</Text>
                          <Text style = {styles.txtstock}>Diskon : {item.barang.discount}%</Text>
                        </View>
                        <View style = {styles.viewuang}>
                          <Text style = {styles.txtuang}>Rp.{item.barang.price}-,</Text>
                        </View>
                      </View>
                    )
                  })}


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
export default connect(mapStateToProps)(Detailriwayatpembelianpimpinan);
