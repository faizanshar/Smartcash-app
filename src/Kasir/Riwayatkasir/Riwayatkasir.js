import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  RefreshControl,
} from 'react-native';
import {styles} from './Stylekasir';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

class Riwayatkasir extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      refresh: false,
    };
  }
  onRefreshControl() {
    this.setState({refresh: true});
    this.getData();
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getData();
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKEN', this.props.userToken.userReducer.token);
  }

  getData() {
    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/transaksi', {
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
        console.log('ini Dia', responseJson);
        if (responseJson.status == 'success') {
          this.setState({
            data: responseJson.data,
            refresh: false,
            loading: false,
          });
          //   this.setState({data2: responseJson, loading: false});

          // this.setState({loading: true});
          // console.log(responseJ);
        } else {
          console.log('ini else', responseJson);
          this.setState({refresh: false, loading: false});
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({refresh: false, loading: false});
      });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.loading !== false ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <LottieView
              source={require('../../Assets/21656-loading-basic.json')}
              autoPlay={true}
              style={styles.imgloadingscreen}
            />
            <Text style={{fontSize: 13, fontWeight: 'bold', marginTop: 150}}>
              Tunggu Sebentar...
            </Text>
          </View>
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refresh}
                onRefresh={() => this.onRefreshControl()}
              />
            }>
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
              <Text style={styles.txtprofil}>Riwayat</Text>
            </View>
            {this.state.data.length == 0 ? (
              <View>
                <LottieView
                  source={require('../../Assets/16656-empty-state.json')}
                  autoPlay={true}
                  style={styles.imgwait}
                />
                <Text style={styles.txtwait}>Data kosong</Text>
              </View>
            ) : (
              <View>
                {this.state.data.map((v, i) => {
                  return (
                    <TouchableOpacity
                      style={styles.containerdata}
                      key={i}
                      onPress={() =>
                        this.props.navigation.navigate('Detailriwayatkasir', {
                          item: v,
                        })
                      }>
                      <View style={styles.viewname}>
                        <View style={styles.viewkode}>
                          <Text style={styles.txtkode}>{v.transaksi_id}</Text>
                        </View>
                        <View style={styles.viewtgl}>
                          <Text style={styles.txttgl}>{v.created_at}</Text>
                        </View>
                      </View>
                      <View style={styles.viewtotal}>
                        <Text style={styles.txttotal}>Total</Text>
                        <Text style={styles.txttotal2}>Rp.{v.total}-,</Text>
                      </View>
                      <View style={styles.viewtotal}>
                        <Text style={styles.txttotal}>Dibayar</Text>
                        <Text style={styles.txttotal2}>Rp.{v.dibayar}-,</Text>
                      </View>
                      <View style={styles.viewtotal}>
                        <Text style={styles.txttotal}>Kembalian</Text>
                        <Text style={styles.txttotal2}>Rp.{v.kembalian}-,</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}

            <View style={{width: '100%', height: 40}}></View>
          </ScrollView>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};
export default connect(mapStateToProps)(Riwayatkasir);
