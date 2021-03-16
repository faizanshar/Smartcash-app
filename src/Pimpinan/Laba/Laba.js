import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  StatusBar,
  RefreshControl,
} from 'react-native';
import {styles} from './Stylelaba';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

class Laba extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      data2: {},
      loading: false,
      refresh: false,
    };
  }
  onRefreshControl() {
    this.setState({refresh: true});
    this.getWeek();
    this.getMonth();
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getWeek();
          this.getMonth();
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKENKUUOI', this.props.userToken.userReducer.token);
  }

  getWeek() {
    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/labaWeek', {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
      },
    })
      .then((responseJson) => responseJson.json())
      .then((responseJson) => {
        console.log('ini ZAIMia', JSON.stringify(responseJson.data));
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
          this.setState({loading: false, refresh: false});
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({loading: false, refresh: false});
      });
  }
  getMonth() {
    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/labaMonth', {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
      },
    })
      .then((responseJson) => responseJson.json())
      .then((responseJson) => {
        console.log('ini bulan', JSON.stringify(responseJson.data));
        // console.log(responseJson);
        // const {status} = responseJson;
        console.log('ini Dia', responseJson);
        if (responseJson.status == 'success') {
          this.setState({
            data2: responseJson.data,
            refresh: false,
            loading: false,
          });
          //   this.setState({data2: responseJson, loading: false});

          // this.setState({loading: true});
          // console.log(responseJ);
        } else {
          console.log('ini else', responseJson);
          this.setState({loading: false, refresh: false});
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({loading: false, refresh: false});
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
            <StatusBar backgroundColor={'#696969'} barStyle={'light-content'} />
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.touchback}
                onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../../Assets/Whiteback.png')}
                  style={styles.imgback}
                />
              </TouchableOpacity>
              <Text style={styles.txtgudang}>Laba</Text>
            </View>

            <View style={styles.containerweek}>
              <Text style={styles.txt}>Minggu Ini</Text>
              <View style={styles.view1}>
                <Text style={styles.txt2}>Pemasukkan</Text>
                <Text style={styles.txt3}>
                  Rp.{this.state.data.pemasukan}-,
                </Text>
              </View>
              <View style={styles.view1}>
                <Text style={styles.txt2}>Pengeluaran</Text>
                <Text style={styles.txt4}>
                  -Rp.{this.state.data.pengeluaran}-,
                </Text>
              </View>
              {this.state.data.pemasukan >= this.state.data.pengeluaran ? (
                <View style={styles.view1}>
                  <Text style={styles.txt2}>Untung</Text>
                  <Text style={styles.txt3}>Rp.{this.state.data.laba}-,</Text>
                </View>
              ) : (
                <View style={styles.view1}>
                  <Text style={styles.txt2}>Rugi</Text>
                  <Text style={styles.txt4}>-Rp.{this.state.data.laba}-,</Text>
                </View>
              )}
            </View>

            <View style={styles.containerweek}>
              <Text style={styles.txt}>Bulan Ini</Text>
              <View style={styles.view1}>
                <Text style={styles.txt2}>Pemasukkan</Text>
                <Text style={styles.txt3}>
                  Rp.{this.state.data2.pemasukan}-,
                </Text>
              </View>
              <View style={styles.view1}>
                <Text style={styles.txt2}>Pengeluaran</Text>
                <Text style={styles.txt4}>
                  -Rp.{this.state.data2.pengeluaran}-,
                </Text>
              </View>
              {this.state.data2.pemasukan >= this.state.data2.pengeluaran ? (
                <View style={styles.view1}>
                  <Text style={styles.txt2}>Untung</Text>
                  <Text style={styles.txt3}>Rp.{this.state.data2.laba}-,</Text>
                </View>
              ) : (
                <View style={styles.view1}>
                  <Text style={styles.txt2}>Rugi</Text>
                  <Text style={styles.txt4}>-Rp.{this.state.data2.laba}-,</Text>
                </View>
              )}
            </View>

            <View style={{width: '100%', height: 50}}></View>
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
export default connect(mapStateToProps)(Laba);
