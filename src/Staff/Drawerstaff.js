import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  ToastAndroid,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './Styledrawerstaff';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

class Drawerstaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      refresh: false,
      modalVisible: false,
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getStaff();
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKEN', this.props.userToken.userReducer.token);
  }

  getStaff() {
    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/profile', {
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
        if (responseJson) {
          this.setState({
            data: responseJson.data,
            refresh: false,
            // loading: false,
          });
          //   this.setState({data2: responseJson, loading: false});

          // this.setState({loading: true});
          // console.log(responseJ);
        } else {
          console.log('ini else', responseJson);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onRefreshControl() {
    this.setState({refresh: true});
    this.getStaff();
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
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refresh}
              onRefresh={() => this.onRefreshControl()}
            />
          }>
          <View style={styles.viewprofil}>
            <View style={styles.viewfoto}>
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
            <TouchableOpacity
              style={styles.touchclose}
              onPress={() => this.props.navigation.closeDrawer()}>
              <Image
                source={require('../Assets/Whitearrow.png')}
                style={styles.imgclose}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewtxt}>
            <Text style={styles.txtemail}>{this.state.data.email}</Text>
            <Text style={styles.txtnomor}>{this.state.data.phone_number}</Text>
          </View>

          <TouchableOpacity style={styles.touchabsen} onPress = {() => this.setState({modalVisible:true})}>
            <Text style={styles.txtabsen}>Absen</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch}
            onPress={() =>
              this.props.navigation.navigate('Profilestaff', {
                item: this.state.data,
              })
            }>
            <View style={styles.viewicon}>
              <Image
                source={require('../Assets/Grayprofile.png')}
                style={styles.imgprofile}
              />
            </View>
            <View style={styles.view}>
              <Text style={styles.txticonname}>profile</Text>
              {/* <Image source = {require('../Assets/Whitearrow.png')} style = {styles.imgarrow}/> */}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch2}
            onPress={() => this.props.navigation.navigate('Passwordstaff')}>
            <View style={styles.viewicon}>
              <Image
                source={require('../Assets/graykey.png')}
                style={styles.imgprofile}
              />
            </View>
            <View style={styles.view}>
              <Text style={styles.txticonname}>password</Text>
              {/* <Image source = {require('../Assets/Whitearrow.png')} style = {styles.imgarrow}/> */}
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touch2} onPress={() => this.logOut()}>
            <View style={styles.viewicon}>
              <Image
                source={require('../Assets/graylogout.png')}
                style={styles.imgprofile}
              />
            </View>
            <View style={styles.view}>
              <Text style={styles.txticonname}>Keluar</Text>
              {/* <Image source = {require('../Assets/Whitearrow.png')} style = {styles.imgarrow}/> */}
            </View>
          </TouchableOpacity>
        </ScrollView>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.containermodal}>
            <View style={styles.viewmodal}>
              <TextInput placeholder={' Kode'} style={styles.inputkode} />
              <View style={styles.viewtouch}>
                <TouchableOpacity style={styles.touchbatal} onPress = {() => this.setState({modalVisible:false})}>
                  <Text style={styles.txtemail}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchkirim}>
                  <Text style={styles.txtemail}>Check in</Text>
                </TouchableOpacity>
              </View>
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
export default connect(mapStateToProps)(Drawerstaff);
