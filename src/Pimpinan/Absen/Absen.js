import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  ToastAndroid,
  Modal,
} from 'react-native';
import {styles} from './Styleabsen';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

class Absen extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      data2: {},
      modalVisible: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getCodeall();
          // this.createCode()
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKENKUUOI', this.props.userToken.userReducer.token);
  }

  createCode() {
    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/absensi/code/create', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
      },
    })
      .then((responseJson) => responseJson.json())
      .then((responseJson) => {
        console.log('ini bulan', responseJson.data);
        // console.log(responseJson);
        // const {status} = responseJson;
        console.log('ini Dia', responseJson);
        if (responseJson) {
          // this.setState({
          //   data2: responseJson.data,
          //   refresh: false,
          //   loading2: false,
          //   modalVisible: true,
          // });
          ToastAndroid.show('Berhasil Mendapat Code!');
          
          // } else if (responseJson.status == 'failed') {
          //   ToastAndroid.show('Anda Sudah Mendapat Kode Hari Ini!', 1000);
          //   this.setState({modalVisible:false})
          // } else {
          //   console.log('ini else', responseJson);
          //   this.setState({loading2: false, refresh: false});
          //   ToastAndroid.show('Anda sudah minta kode hari ini!', 1000);
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({loading2: false, refresh: false});
        ToastAndroid.show('Anda sudah minta kode hari ini!', 1000);
      });
  }

  getCodeall() {
    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/absensi/code', {
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
        <ScrollView>
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
            <Text style={styles.txtgudang}>Absen</Text>
          </View>

          <TouchableOpacity
            style={styles.touch}
            onPress={() => this.createCode()}>
            <Text style={styles.txt}>Dapatkan kode</Text>
          </TouchableOpacity>

          {this.state.data.map((v, i) => {
            return (
              <View key={i} style={styles.containerdata2}>
                <View style={styles.viewwkt}>
                  <Text style={styles.txtwkt}>{v.created_at}</Text>
                </View>
                <View style={styles.viewkode}>
                  <Text style={styles.txtkode3}>{v.code}</Text>
                </View>
              </View>
            );
          })}

          <View style={{width: '100%', height: 40}}></View>
        </ScrollView>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.containermodal}>
            <View style={styles.viewmodal}>
              <Text style={styles.txtkode4}>Kode Hari Ini</Text>
              <Text style={styles.txtkode5}>{this.state.data2.code}</Text>
              <TouchableOpacity
                style={styles.touchtutup}
                onPress={() => this.setState({modalVisible: false})}>
                <Text style={styles.txtkode6}>Tutup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};
export default connect(mapStateToProps)(Absen);
