import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import {connect} from 'react-redux'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: true,
      email:'',
      password2:''
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        if (value !== null) {
          this.setState({token: value});
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
  }
  Login = () => {
    console.log('mulai Mengirim');

    const {email, password2} = this.state;
    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password2);

    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/login', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: `Bearer ${this.state.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        const {token, error} = response;

        this.props.userLogin(token);

        console.log('ini response', response);
        if (response.user.roles[0].pivot.role_id == 3) {
          ToastAndroid.show('Berhasil Masuk', 1000);
          AsyncStorage.setItem('token', token);
          // AsyncStorage.setItem('role', response.user.role.toString());

          this.props.navigation.replace('Drawer1');
          // AsyncStorage.setItem('token', token);
          // this.props.userLogin(token);

          this.setState({loading: false});
        }else if (response.user.roles[0].pivot.role_id == 4){
          ToastAndroid.show('Berhasil masuk',1000);
          AsyncStorage.setItem('token',token);
          this.props.navigation.navigate('Drawer2')
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
        <ScrollView style={{width: '100%'}}>
          <Image source={require('../Assets/uangku.png')} style={styles.img} />
          <Text style={styles.txtwelcome}>Selamat Datang!</Text>
          <View style={styles.view1}>
            <TextInput
              placeholder={' Email'}
              style={styles.input}
              keyboardType={'email-address'}
              onChangeText={(email) => this.setState({email})}
            />
            <Image
              source={require('../Assets/blackemail.png')}
              style={styles.imgemail}
            />
          </View>
          <View style={styles.view2}>
            <TextInput
              placeholder={' Password'}
              style={styles.input}
              secureTextEntry={this.state.password}
              onChangeText={(password2) => this.setState({password2})}
            />
            <TouchableOpacity
              style={styles.touchpassword}
              onPress={() => this.setState({password: !this.state.password})}>
              <Image
                source={
                  this.state.password
                    ? require('../Assets/invisible.png')
                    : require('../Assets/eye.png')
                }
                style={styles.imgeye}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.touchmasuk}
            onPress={() => this.Login()}>
            <Text style={styles.txtmasuk}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.txtforgot}>Forgot Password ?</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (token) => dispatch({type: 'TOKEN_USER', payload: token}),
  };
};

export default connect(null, mapDispatchToProps)(Login);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ebffeb',
    // justifyContent:'center'
  },
  txtwelcome: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
  },
  img: {
    width: '80%',
    height: 160,
    marginTop: 60,
    alignSelf: 'center',
  },
  view1: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 10,
    marginTop: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // margin:20
  },
  imgemail: {
    width: '11%',
    height: 30,
    marginRight: 15,
  },
  view2: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 10,
    marginTop: 30,
    alignSelf: 'center',
    margin: 20,
    flexDirection: 'row',
  },
  touchpassword: {
    width: '22%',
    height: 50,
    // backgroundColor: 'red',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgeye: {
    width: '60%',
    height: 30,
  },
  input: {
    width: '78%',
    height: 50,
    // backgroundColor: 'yellow',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  touchmasuk: {
    width: '80%',
    height: 50,
    backgroundColor: 'gray',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtmasuk: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  txtforgot: {
    fontSize: 13,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});