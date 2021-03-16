import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import {styles} from './Stylemember';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import LottieView from 'lottie-react-native';
// import Member from '../Member/Member';

class Member extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      number: '',
      password: '',
      password_confirmation: '',
      address: '',
      role: '5',
      password1: true,
      password2: true,
      email2: ['The email has already been taken.'],
      address2: ['The address must be at least 6 characters.'],
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

  tambahMember = () => {
    console.log('mulai Mengirim');

    const {
      name,
      email,
      number,
      password,
      password_confirmation,
      address,
      role,
    } = this.state;
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('phone_number', number);
    formData.append('password', password);
    formData.append('password_confirmation', password_confirmation);
    formData.append('role', parseInt(role));
    console.log('INI CUY', formData);
    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/member/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        // const {token, error} = response;

        // this.props.userLogin(token);

        console.log('ini response', response);
        if (response.status == 'success') {
          ToastAndroid.show('Berhasil menambah!', 1000);
          this.props.navigation.replace('Drawer2');
          this.setState({loading: false});
        } else if (response.errors.email[0] == this.state.email2) {
          ToastAndroid.show('Email Sudah Digunakan', 1000);
          this.setState({loading: false});
        } else {
          ToastAndroid.show('Pastikan Form Terisi!', 1000);
          this.setState({loading: false});
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show(
          'Isi Form Dengan Benar atau alamat minimal 6 karakter!',
          1000,
        );
      });
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
            <Text style={styles.txtprofil}>Member</Text>
          </View>

          <TextInput
            placeholder={' Nama'}
            style={styles.input}
            autoCapitalize={'none'}
            onChangeText={(name) => this.setState({name})}
          />
          <TextInput
            placeholder={' Email'}
            style={styles.input2}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            onChangeText={(email) => this.setState({email})}
          />
          <TextInput
            placeholder={' Nomor'}
            style={styles.input2}
            keyboardType={'number-pad'}
            onChangeText={(number) => this.setState({number})}
          />
          <View style={styles.viewpassword}>
            <TextInput
              placeholder={' Password'}
              style={styles.inputpassword}
              secureTextEntry={this.state.password1}
              autoCapitalize={'none'}
              onChangeText={(password) => this.setState({password})}
            />
            <TouchableOpacity
              style={styles.touchpassword}
              onPress={() => this.setState({password1: !this.state.password1})}>
              <Image
                source={
                  this.state.password1
                    ? require('../../Assets/invisible.png')
                    : require('../../Assets/eye.png')
                }
                style={styles.imgpassword}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewpassword}>
            <TextInput
              placeholder={' Passwordconfirmation'}
              style={styles.inputpassword}
              secureTextEntry={this.state.password2}
              autoCapitalize={'none'}
              onChangeText={(password_confirmation) =>
                this.setState({password_confirmation})
              }
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
                style={styles.imgpassword}
              />
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder={' Alamat'}
            style={styles.input3}
            onChangeText={(address) => this.setState({address})}
          />

          <TouchableOpacity
            style={styles.touch}
            onPress={() => this.tambahMember()}>
            {this.state.loading == false ? (
              <Text style={styles.txt}>Kirim</Text>
            ) : (
              <LottieView
                source={require('../../Assets/21656-loading-basic.json')}
                autoPlay={true}
                style={{width: '40%', height: 50}}
              />
            )}
          </TouchableOpacity>

          <View style={{width: '100%', height: 50}}></View>
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
export default connect(mapStateToProps)(Member);
