import React, {Component} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableOpacityBase,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './Styleprofilemember';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

class Profilemember extends Component {
  constructor() {
    super();
    this.state = {
      nama: '',
      alamat: '',
      method: 'patch',
      telpon: '',
      email: '',
      loading: false,
    };
  }
  componentDidMount() {
    console.log('INI DATA', this.props.route.params.item);
    const {item} = this.props.route.params;
    this.setState({
      nama: item.name,
      alamat: item.address,
      telpon: item.phone_number,
      email: item.email,
      //   uri: item.foto,
    });
    // this.getNasabah();
    console.log('INIADATOKEN', this.props.userToken.userReducer.token);
  }
  editProfile = () => {
    console.log('mulai Mengirim');

    const {nama, alamat, method} = this.state;
    const formData = new FormData();

    formData.append('name', nama);
    formData.append('address', alamat);
    formData.append('_method', method);
    // if (this.state.uri !== '' || this.state.fileName !== '') {
    //   formData.append('foto', {
    //     uri: this.state.uri,
    //     type: 'image/jpeg',
    //     name: this.state.fileName,
    //   });
    // }

    console.log('Ini data From Data', formData);
    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/profile/update', {
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
        if (response.status === 'success') {
          ToastAndroid.show('Berhasil Mengubah!', 1000);
          this.props.navigation.navigate('Drawer2');
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
                source={require('../Assets/Whiteback.png')}
                style={styles.imgback}
              />
            </TouchableOpacity>
            <Text style={styles.txtprofil}>Profile</Text>
          </View>

          <TouchableOpacity
            style={styles.viewimg}
            onPress={() =>
              this.props.navigation.navigate('Fotomember', {
                item: this.props.route.params.item.avatar,
              })
            }>
            <Image
              source={
                this.props.route.params.item.avatar
                  ? {uri: this.props.route.params.item.avatar}
                  : {
                      uri:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC',
                    }
              }
              style={styles.img}
            />
          </TouchableOpacity>

          <View style={styles.viewnama}>
            <View style={styles.viewicon}>
              <Image
                source={require('../Assets/Grayprofile.png')}
                style={styles.imgprofile}
              />
            </View>
            <TextInput
              placeholder={' nama'}
              style={styles.inputemail}
              multiline={true}
              value={this.state.nama}
              onChangeText={(input) => this.setState({nama: input})}
            />
          </View>

          <View style={styles.viewemail}>
            <View style={styles.viewicon}>
              <Image
                source={require('../Assets/grayemail.png')}
                style={styles.imgprofile}
              />
            </View>
            <TextInput
              placeholder={' email'}
              style={styles.inputemail}
              multiline={true}
              value={this.state.email}
            />
          </View>

          <View style={styles.viewemail}>
            <View style={styles.viewicon}>
              <Image
                source={require('../Assets/graycall.png')}
                style={styles.imgprofile}
              />
            </View>
            <TextInput
              placeholder={' telpon'}
              style={styles.inputemail}
              multiline={true}
              keyboardType={'number-pad'}
              value={this.state.telpon}
            />
          </View>

          <View style={styles.viewemail}>
            <View style={styles.viewicon}>
              <Image
                source={require('../Assets/graylokasi.png')}
                style={styles.imgprofile}
              />
            </View>
            <TextInput
              placeholder={' alamat'}
              style={styles.inputemail}
              multiline={true}
              value={this.state.alamat}
              onChangeText={(input) => this.setState({alamat: input})}
            />
          </View>

          <TouchableOpacity
            style={styles.touchedit}
            onPress={() => this.editProfile()}>
            {this.state.loading == false ? (
              <Text style={styles.txtedit}>Edit</Text>
            ) : (
              <LottieView
                source={require('../Assets/21656-loading-basic.json')}
                autoPlay={true}
                style={styles.imgloading}
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
export default connect(mapStateToProps)(Profilemember);
