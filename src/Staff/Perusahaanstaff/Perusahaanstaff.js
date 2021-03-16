import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Modal,
  RefreshControl,
} from 'react-native';
import {styles} from './Styleperusahaanstaff.js';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

class Pengaturanstaff extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      method: 'delete',
      loading: false,
      refresh: false,
    };
  }
  onRefreshControl() {
    this.setState({refresh: true});
    this.getSupplier();
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getSupplier();
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

  hapusPerusahaan = (id) => {
    console.log('mulai Mengirim');

    const {method} = this.state;
    const formData = new FormData();

    formData.append('_method', method);
    // formData.append('password', password2);

    this.setState({loading: true});
    fetch(`https://smartcash2.herokuapp.com/api/supplier/delete/${id}`, {
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
          this.props.navigation.navigate('Drawer1');
          this.setState({loading: false});
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show('Gagal Menghapus', 1000);
      });
  };

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
              <View style={styles.header2}>
                <Text style={styles.txtperusahaan}>Perusahaan</Text>
                <TouchableOpacity
                  style={styles.touchadd}
                  onPress={() =>
                    this.props.navigation.navigate('Tambahperusahaan')
                  }>
                  <Image
                    source={require('../../Assets/Whiteadd.png')}
                    style={styles.imgadd}
                  />
                </TouchableOpacity>
              </View>
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
                    <View style={styles.viewdata} key={index}>
                      <View style={styles.viewnama}>
                        <Text style={styles.txtnama}>{item.name}</Text>
                      </View>
                      <View style={styles.viewnomor}>
                        <Text style={styles.txtnomor}>{item.phone_number}</Text>
                      </View>

                      <View style={styles.viewalamat}>
                        <View style={styles.viewimgalamat}>
                          <Image
                            source={require('../../Assets/Blackaddress.png')}
                            style={styles.imgalamat}
                          />
                        </View>
                        <View style={styles.viewtxtalamat}>
                          <Text style={styles.txtalamat}>{item.address}</Text>
                        </View>
                      </View>

                      <View style={styles.viewtouch}>
                        <TouchableOpacity
                          style={styles.touchhapus}
                          onPress={() => this.hapusPerusahaan(item.id)}>
                          <Text style={styles.txthapus}>Hapus</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.touchubah}
                          onPress={() =>
                            this.props.navigation.navigate(
                              'Ubahperusahaanstaff',
                              {
                                item: item,
                              },
                            )
                          }>
                          <Text style={styles.txtubah}>Ubah</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>
            )}

            <View style={{width: '100%', height: 30}}></View>
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
export default connect(mapStateToProps)(Pengaturanstaff);
