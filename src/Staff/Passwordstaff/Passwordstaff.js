import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from './Stylepasswordstaff';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

class Passswordstaff extends Component {
  constructor() {
    super();
    this.state = {
      password: true,
      password2: true,
      password3: true,
      password_old: '',
      password_new: '',
      password_new_confirmation: '',
      method: 'patch',
      loading: false,
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKEN', this.props.userToken.userReducer.token);
  }

  ubahPassword = () => {
    console.log('mulai Mengirim');

    const {
      password_new,
      password_old,
      password_new_confirmation,
      method,
    } = this.state;
    const formData = new FormData();

    formData.append('password_old', password_old);
    formData.append('password_new', password_new);
    formData.append('password_new_confirmation', password_new_confirmation);
    formData.append('_method', method);

    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/password/update', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('ini response', response);
        if (response.status == 'success') {
          ToastAndroid.show('Berhasil Mengubah!', 1000);
          this.props.navigation.navigate('Drawer1');
          this.setState({loading: false});
        } else if (response.message == 'please check your password') {
          ToastAndroid.show('Password lama salah!', 1000);
          //   this.props.navigation.navigate('Drawer1')
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show('Silahkan cek ulang password baru!', 1000);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.touchback}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../Assets/Whiteback.png')}
                style={styles.imgback}
              />
            </TouchableOpacity>
            <Text style={styles.txtpassword}>Password</Text>
          </View>

          <View style={styles.viewpassword}>
            <TextInput
              placeholder={' Passwordlama'}
              style={styles.inputpassword}
              secureTextEntry={this.state.password}
              onChangeText={(password_old) => this.setState({password_old})}
            />
            <TouchableOpacity
              style={styles.touchpassword}
              onPress={() => this.setState({password: !this.state.password})}>
              <Image
                source={
                  this.state.password
                    ? require('../../Assets/invisible.png')
                    : require('../../Assets/eye.png')
                }
                style={styles.imgeye}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.viewpassword2}>
            <TextInput
              placeholder={' passwordbaru'}
              style={styles.inputpassword}
              secureTextEntry={this.state.password2}
              onChangeText={(password_new) => this.setState({password_new})}
            />
            <TouchableOpacity
              style={styles.touchpassword}
              onPress={() => this.setState({password2: !this.state.password2})}>
              <Image
                source={
                  this.state.password2
                    ? require('../../Assets/invisible.png')
                    : require('../../Assets/eye.png')
                }
                style={styles.imgeye}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.viewpassword2}>
            <TextInput
              placeholder={' confirmasipassword'}
              style={styles.inputpassword}
              secureTextEntry={this.state.password3}
              onChangeText={(password_new_confirmation) =>
                this.setState({password_new_confirmation})
              }
            />
            <TouchableOpacity
              style={styles.touchpassword}
              onPress={() => this.setState({password3: !this.state.password3})}>
              <Image
                source={
                  this.state.password3
                    ? require('../../Assets/invisible.png')
                    : require('../../Assets/eye.png')
                }
                style={styles.imgeye}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.touchubah}
            onPress={() => this.ubahPassword()}>
            {this.state.loading == false ? (
              <Text style={styles.txtubah}>Ubah</Text>
            ) : (
              <LottieView
                source={require('../../Assets/21656-loading-basic.json')}
                autoPlay={true}
                style={styles.imgloading}
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
export default connect(mapStateToProps)(Passswordstaff);
