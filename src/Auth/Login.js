import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';
import CheckBox from '@react-native-community/checkbox';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: true,
      email: '',
      password2: '',
      loading: false,
      check:false
    };
  }
  // componentDidMount() {
  //   AsyncStorage.getItem('token')
  //     .then((value) => {
  //       if (value !== null) {
  //         this.setState({token: value});
  //       } else {
  //         this.props.navigation.navigate('Login');
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }
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
        console.log('ini RESPONN',response);
        console.log('ini ROLE',response.user.roles[0].pivot.role_id);
        const {token, error} = response;
        const {role_id} = response.user.roles[0].pivot
        const token_user = ['token',token]
        const role_user = ['role',JSON.stringify(role_id)]
        this.state.check
        ? AsyncStorage.multiSet([token_user, role_user]).catch((err) =>
        console.log(err),
        )
        : AsyncStorage.setItem('token', token).catch((err) =>
        console.log(err),
        );
        this.props.userLogin(token);
        // const {role} = response.user.roles[0].pivot.role_id
        // this.state.check ? 
        // AsyncStorage.multiSet(['token',token,'role',JSON.stringify(role)]).catch((error) => console.log(error)) :
        // AsyncStorage.setItem('token',token).catch((error) => console.log(error))

        // console.log('ini response', response);
        if (response.user.roles[0].pivot.role_id == 3) {
          ToastAndroid.show('Berhasil Masuk', 1000);
          
          this.props.navigation.replace('Drawer1');
          this.setState({loading: false});
        } else if (response.user.roles[0].pivot.role_id == 4) {
          ToastAndroid.show('Berhasil masuk', 1000);
          // AsyncStorage.setItem('token', token);
          this.props.navigation.navigate('Drawer2');
          this.setState({loading: false});
        } else if (response.user.roles[0].pivot.role_id == 5) {
          ToastAndroid.show('Berhasil masuk', 1000);
          // AsyncStorage.setItem('token', token);
          this.props.navigation.navigate('Screenmember');
          this.setState({loading: false});
        } else if (response.user.roles[0].pivot.role_id == 2) {
          ToastAndroid.show('Berhasil masuk', 1000);
          // AsyncStorage.setItem('token', token);
          this.props.navigation.navigate('Screenpimpinan');
          this.setState({loading: false});
        }
      }).catch((error) => {
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
              autoCapitalize={'none'}
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
              autoCapitalize={'none'}
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
          <View style = {styles.viewbox}>

            <CheckBox
              // disabled={false}
              value={this.state.check}
              onValueChange={() => this.setState({check:!this.state.check})}
            />
            <Text style = {{fontSize:14,fontWeight:'bold'}}>Remember me</Text>
          </View>
          <TouchableOpacity
            style={styles.touchmasuk}
            onPress={() => this.Login()}>
            {this.state.loading == false ? (
              <Text style={styles.txtmasuk}>Masuk</Text>
            ) : (
              <LottieView
                source={require('../Assets/6541-loading.json')}
                autoPlay={true}
                style={styles.imgloading}
              />
            )}

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
    backgroundColor: '#fff',
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
  viewbox: {
    width:'75%',
    height:50,
    // backgroundColor:'red',
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center'
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
    backgroundColor: '#696969',
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
  imgloading: {
    width: '30%',
    height: 60,
  },
});
