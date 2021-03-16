import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableOpacityBase,
  RefreshControl,
} from 'react-native';
import {styles} from './Styleriwayatpembelianpimpinan';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {map} from 'lodash';
import LottieView from 'lottie-react-native';

class Riwayatpembelianpimpinan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      months: [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
      ],
      date: '',
      month: '',
      year: '',
      All: '',
      loading: false,
      refresh: false,
    };
  }
  ShowCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    this.setState({date: date, month: month, year: year});
  };

  //  all = () => {
  //    this.setState({All:this.getMonth()})
  //  }

  getMonth = () => {
    return this.state.months
      .filter((item, index) => this.state.month == index + 1)
      .map((v, i) => {
        return this.state.date + ' ' + v + ' ' + this.state.year;
      });
    // <View>
    //     {this.state.months.filter((item,index) => this.state.month == index+1).map((item,index) => {
    //         return(
    //             <View style = {styles.viewwaktu}>
    //                 <Text style = {styles.txtdate}>{this.state.date}</Text>
    //                 <Text style = {styles.txtmonth}>{item}</Text>
    //                 <Text style = {styles.txtyear}>{this.state.year}</Text>
    //             </View>
    //         )
    //     })}
    // </View>
  };
  onRefreshControl() {
    this.setState({refresh: true});
    this.getRiwayat();
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getRiwayat(), this.ShowCurrentDate();
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
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.touchback}
                onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../../Assets/Whiteback.png')}
                  style={styles.imgback}
                />
              </TouchableOpacity>
              <Text style={styles.txtriwayat}>Riwayat</Text>
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
                {this.state.data.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={styles.touchdata}
                      key={index}
                      onPress={() =>
                        this.props.navigation.navigate('Detailriwayatpembelianpimpinan', {
                          item: item,
                        })
                      }>
                      <View style={styles.viewname}>
                        <View style={styles.viewname1}>
                          <Text style={styles.txtname1}>Pt hisa</Text>
                        </View>
                        <View style={styles.viewname2}>
                          <Text style={styles.txtname2}>{item.created_at}</Text>
                        </View>
                      </View>
                      <View style={styles.viewnomor}>
                        <Text style={styles.txtnomor}>0128373213</Text>
                      </View>
                      <View style={styles.viewaddress}>
                        <Image
                          source={require('../../Assets/Blackaddress.png')}
                          style={styles.imgaddress}
                        />
                        <Text style={styles.txtaddress}>depok</Text>
                      </View>
                      <View style={styles.viewtotal}>
                        <Text style={styles.txt}>
                          Total :
                          <Text style={{color: 'green'}}>
                            {' '}
                            Rp.{item.total}-,
                          </Text>
                        </Text>
                        <Text style={styles.txt}>
                          Bayar :
                          <Text style={{color: 'green'}}>
                            {' '}
                            Rp.{item.dibayar}-,
                          </Text>
                        </Text>
                        {/* <Text>{this.getMonth()}</Text> */}
                      </View>

                      {/* <View style={styles.viewtouch}>
                        {item.created_at == this.getMonth() ? (
                          <TouchableOpacity style={styles.touchhapus}>
                            <Text style={styles.txthapus}>Hapus</Text>
                          </TouchableOpacity>
                        ) : (
                          <View></View>
                        )}
                      </View> */}
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}

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
export default connect(mapStateToProps)(Riwayatpembelianpimpinan);
