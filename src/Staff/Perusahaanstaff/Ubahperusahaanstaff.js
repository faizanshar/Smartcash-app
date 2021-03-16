import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  StatusBar,
} from 'react-native';
import {styles} from './Styleubahperusahaanstaff';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';


class Ubahperusahaanstaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perusahaan: '',
      telpon: '',
      alamat: '',
      method: 'patch',
      loading: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          const {item} = this.props.route.params;
          this.setState({
            token: value,
            refresh: false,
            perusahaan: item.name,
            telpon: item.phone_number,
            alamat: item.address,
          });
          this.getKategori();
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKEN', this.props.userToken.userReducer.token);
    console.log('Ini Cuy', this.props.route.params.item);
  }

  editPerusahaan = () => {
    console.log('mulai Mengirim');
    console.log('ini Id', this.props.route.params.item.id);
    const {perusahaan, alamat, telpon, method} = this.state;
    const formData = new FormData();

    formData.append('name', perusahaan);
    formData.append('phone_number', telpon);
    formData.append('_method', method);
    formData.append('address', alamat);

    console.log('Ini data From Data', formData);
    this.setState({loading: true});
    fetch(
      `https://smartcash2.herokuapp.com/api/supplier/update/${this.props.route.params.item.id}`,
      {
        method: 'POST',
        headers: {
          // Accept:'application/json',
          Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
        },
        body: formData,
      },
    )
      .then((response) => response.json())
      .then((response) => {
        console.log('ini response', response);
        if (response.status === 'success') {
          ToastAndroid.show('Berhasil Mengubah!', 1000);
          this.props.navigation.navigate('Drawer1');
          this.setState({loading: false});
        } else {
          ToastAndroid.show('Gagal Membuat Permintaan,1000');
          this.setState({loading: false});
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show('Gagal Membuat Permintaan', 1000);
      });
    // ToastAndroid.show('Gagal Membuat Permintaan,1000');
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor={'gray'} />
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.touchback}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../Assets/Whiteback.png')}
                style={styles.imgback}
              />
            </TouchableOpacity>
            <Text style={styles.txtubah}>Ubah Perusahaan</Text>
          </View>

          <TextInput
            placeholder={' perusahaan'}
            style={styles.input}
            value={this.state.perusahaan}
            onChangeText={(input) => this.setState({perusahaan: input})}
          />
          <TextInput
            placeholder={' telpon'}
            style={styles.input2}
            value={this.state.telpon}
            onChangeText={(input) => this.setState({telpon: input})}
          />
          <TextInput
            placeholder={' alamat'}
            style={styles.input2}
            value={this.state.alamat}
            onChangeText={(input) => this.setState({alamat: input})}
          />
          <TouchableOpacity
            style={styles.touchubah}
            onPress={() => this.editPerusahaan()}>
            {this.state.loading == false ? (
              <Text style={styles.txtedit}>Ubah</Text>
            ) : (
              <LottieView
                source={require('../../Assets/21656-loading-basic.json')}
                autoPlay={true}
                style={{width: '40%', height: 50}}
              />
            )}
          </TouchableOpacity>

          <View style={{width: '100%', height: 40}}></View>
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
export default connect(mapStateToProps)(Ubahperusahaanstaff);
