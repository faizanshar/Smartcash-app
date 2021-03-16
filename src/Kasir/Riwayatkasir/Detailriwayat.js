import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  StatusBar,
} from 'react-native';
import {styles} from './Styledetail';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';


class Detailriwayat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    } 

    componentDidMount() {
        AsyncStorage.getItem('token')
          .then((value) => {
            console.log('ini Value', value);
            if (value !== null) {
              this.setState({token: value, refresh: false});
            //   this.getData();
            } else {
              this.props.navigation.navigate('Login');
            }
          })
          .catch((err) => console.log(err));
        console.log('ini TOKEN', this.props.userToken.userReducer.token);
        console.log('ini Data',this.props.route.params.item.detailTransaksi);
      }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          
          
          <StatusBar backgroundColor={'#696969'} />
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.touchback}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../Assets/Whiteback.png')}
                style={styles.imgback}
              />
            </TouchableOpacity>
            <Text style={styles.txtprofil}>Detail</Text>
          </View>
        
        {this.props.route.params.item.detailTransaksi.map((v,i) => {
            return(
                <View style = {styles.containerdata}>
                    <View style = {styles.viewname}>
                        <Text style = {styles.txtname}>{v.barang.name}</Text>
                    </View>
                    <View style = {styles.viewharga}>
                        <Text style = {styles.txtharga}>Harga</Text>
                        <Text style = {styles.txtprice}>Rp.{v.price}-,</Text>
                    </View>
                    <View style = {styles.viewharga}>
                        <Text style = {styles.txtharga}>Jumlah beli</Text>
                        <Text style = {styles.txtjumlah}>{v.quantity}</Text>
                    </View>
                    <View style = {styles.viewharga}>
                        <Text style = {styles.txtharga}>Total</Text>
                        <Text style = {styles.txtprice}>Rp.{v.total}-,</Text>
                    </View>
                    <View style = {styles.viewharga}>
                        <Text style = {styles.txtharga}>Diskon</Text>
                        <Text style = {styles.txtjumlah}>{v.barang.discount}%</Text>
                    </View>
                </View>
            )
        })}
        
            <View style = {{width:'100%',height:40}}></View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      userToken: state,
    };
  };
  export default connect(mapStateToProps)(Detailriwayat);