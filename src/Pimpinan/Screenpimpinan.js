import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import {styles} from './Stylescreenpimpinan';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

class Screenpimpinan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: false,
      refresh: false,
    };
  }
  onRefreshControl() {
    this.setState({refresh: true});
    this.getProfile();
    // this.ShowCurrentDate();
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          //   this.ShowCurrentDate()
          this.getProfile();
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKEN', this.props.userToken.userReducer.token);
  }
  getProfile() {
    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/profile', {
      method: 'GET',
      headers: {
        // 'Content-Type':   'application/json',
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
  logOut() {
    console.log('Keluar');

    fetch('https://smartcash2.herokuapp.com/api/logout', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
      },
      // body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('ini response', response);
        if (response) {
          ToastAndroid.show('Behasil Keluar', 1000);
          this.props.navigation.replace('Login');
          AsyncStorage.multiRemove(['token', 'role']);
        } else {
          alert('Gagal Keluar');
        }
      })
      .catch((error) => console.log('Error', error));
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.loading !== false ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <LottieView
              source={require('../Assets/21656-loading-basic.json')}
              autoPlay={true}
              style={styles.imgloadingscreen}
            />
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                marginTop: 150,
                color: '#fff',
              }}>
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
            <StatusBar backgroundColor={'#696969'} />

            <View style={styles.header}>
              <TouchableOpacity
                style={styles.touchkeluar}
                onPress={() => this.logOut()}>
                <Image
                  source={require('../Assets/login.png')}
                  style={styles.imgkeluar}
                />
              </TouchableOpacity>
              <View style={styles.view2}>
                <View
                  style={{width: '70%', height: 60, justifyContent: 'center'}}>
                  <Text style={styles.txtemail}>{this.state.data.email}</Text>
                  <Text style={styles.txtnomor}>
                    {this.state.data.phone_number}
                  </Text>
                </View>
                <View style={styles.viewimg}>
                  <Image
                    source={
                      this.state.data.avatar
                        ? {uri: this.state.data.avatar}
                        : {
                            uri:
                              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC',
                          }
                    }
                    style={styles.imgfoto}
                  />
                </View>
              </View>
            </View>

            <View style={styles.viewtouch}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() =>
                  this.props.navigation.navigate('Profilepimpinan', {
                    item: this.state.data,
                  })
                }>
                <Image
                  source={require('../Assets/profile2.png')}
                  style={styles.img}
                />
                <Text style={styles.txt}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touch}
                onPress={() =>
                  this.props.navigation.navigate('Gudangpimpinan')
                }>
                <Image
                  source={require('../Assets/warehouse.png')}
                  style={styles.img}
                />
                <Text style={styles.txt}>Gudang</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewtouch2}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() =>
                  this.props.navigation.navigate('Riwayatpembelianpimpinan')
                }>
                <Image
                  source={require('../Assets/blackhistory.png')}
                  style={styles.img}
                />
                <Text style={styles.txt}>Riwayat Pembelian</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touch}
                onPress={() =>
                  this.props.navigation.navigate('Perusahaanpimpinan')
                }>
                <Image
                  source={require('../Assets/Blackcompany.png')}
                  style={styles.img}
                />
                <Text style={styles.txt}>Perusahaan</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewtouch2}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() =>
                  this.props.navigation.navigate('Riwayattransaksipimpinan')
                }>
                <Image
                  source={require('../Assets/blackhistory.png')}
                  style={styles.img}
                />
                <Text style={styles.txt}>Riwayat Transaksi</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touch}
                onPress={() =>
                  this.props.navigation.navigate('Memberpimpinan')
                }>
                <Image
                  source={require('../Assets/Member.png')}
                  style={styles.img}
                />
                <Text style={styles.txt}>Member</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewtouch2}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() =>
                  this.props.navigation.navigate('Keuanganpimpinan')
                }>
                <Image
                  source={require('../Assets/dollar.png')}
                  style={styles.img}
                />
                <Text style={styles.txt}>Keuangan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => this.props.navigation.navigate('Laba')}>
                <Image
                  source={require('../Assets/loss.png')}
                  style={styles.img}
                />
                <Text style={styles.txt}>Laba</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewtouch2}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() =>
                  this.props.navigation.navigate('Karyawan')
                }>
                <Image
                  source={require('../Assets/blackhistory.png')}
                  style={styles.img}
                />
                <Text style={styles.txt}>Karyawan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touch}
                onPress={() =>
                  this.props.navigation.navigate('Absen')
                }>
                <Image
                  source={require('../Assets/Member.png')}
                  style={styles.img}
                />
                <Text style={styles.txt}>Absensi</Text>
              </TouchableOpacity>
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
export default connect(mapStateToProps)(Screenpimpinan);
