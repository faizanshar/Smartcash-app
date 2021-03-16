import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import {styles} from './Stylegudangpimpinan';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

class Gudangpimpinan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hapus: '',
      modalVisible: false,
      hapus: '',
      method: 'delete',
      loading: false,
      refresh: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getBarang();
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKENKUUOI', this.props.userToken.userReducer.token);
  }

  onRefreshControl() {
    this.setState({refresh: true});
    this.getBarang();
    // this.getKategori();
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
          this.props.navigation.navigate('Drawer1');
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
              <Text style={styles.txtgudang}>Gudang</Text>
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
                    <View style={styles.containerdata}>
                      <View style={styles.viewbarang}>
                        <Text style={styles.txtbarang}>{item.name}</Text>
                        <View style={styles.viewdiskon}>
                          <Text style={styles.txtdiskon}>{item.discount}%</Text>
                        </View>
                      </View>
                      <View style={styles.viewbrand}>
                        <Text style={styles.txtbrand}>{item.brand}</Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            marginLeft: 15,
                            color: 'gray',
                          }}>
                          Stock : {item.stock}
                        </Text>
                      </View>
                      <View style={styles.viewharga}>
                        {item.discount == 0 ? (
                          <Text style={styles.txthargadiskon}>Rp.0-,</Text>
                        ) : (
                          <Text style={styles.txthargadiskon}>
                            Rp.{item.price}
                          </Text>
                        )}
                        <Text style={styles.txtharga}>
                          Rp.{item.price - (item.discount / 100) * item.price}-,
                        </Text>
                      </View>

                      {/* <View style={styles.viewtouch}>
                    <TouchableOpacity
                      style={styles.touchhapus}
                      onPress={() => {
                        this.hapusBarang(item.id);
                      }}>
                      <Text style={styles.txthapus}>Hapus</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.touchupdate}
                      onPress={() =>
                        this.props.navigation.navigate('Ubahdatastaff', {
                          item: item,
                        })
                      }>
                      <Text style={styles.txtubah}>Ubah</Text>
                    </TouchableOpacity>
                  </View> */}
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
export default connect(mapStateToProps)(Gudangpimpinan);
