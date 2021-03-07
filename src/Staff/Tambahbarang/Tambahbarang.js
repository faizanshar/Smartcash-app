import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import {styles} from './Styletambahbarang';
import {Picker} from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import LottieView from 'lottie-react-native';

// import {RNCamera} from 'react-native-camera';
// import {Picker} from '@react-native-community/picker';

class Tambahbarang extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      modalVisible2: false,
      barcode: '',
      price: '',
      stock: '',
      barcode2: ['The selected barcode is invalid.'],
      data: [],
      refresh: false,
      method: 'delete',
      modalVisible3: false,
      stock2: '',
      price2: '',
      method2: 'patch',
      id: '',
      modalVisible4: false,
      data2: [],
      supplier_id: '1',
      dibayar: '',
      modalVisible5: false,
      data3: {},
      data4: {},
    };
  }

  onRefreshControl() {
    this.setState({refresh: true});
    this.getData();
    this.getPerusahaan();
  }

  onSuccess = (e) => {
    ToastAndroid.show(e.data, 1000);
    this.setState({barcode: e.data, modalVisible2: false});
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  setModalVisible2 = (visible) => {
    this.setState({modalVisible2: visible});
  };
  setModalVisible3 = (visible, item) => {
    console.log('ini oi', item.item.id);

    this.setState({modalVisible3: visible});
    this.setState({stock2: `${item.item.stock}`});
    this.setState({price2: `${item.item.price}`});
    this.setState({id: `${item.item.id}`});
    console.log('ini uy', this.state.stock2);
    console.log('ini u2', this.state.price2);
  };
  setModalVisible4 = (visible) => {
    this.setState({modalVisible4: visible});
  };

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getData();
          this.getPerusahaan();
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKEN', this.props.userToken.userReducer.token);
    console.log('Ini supplier', this.props.route.params);
  }

  tambahData = () => {
    console.log('mulai Mengirim');
    const {stock, price, barcode} = this.state;
    const formData = new FormData();

    formData.append('stock', parseInt(stock));
    formData.append('price', parseInt(price));
    formData.append('barcode', barcode);

    console.log('Ini data From Data', formData);
    this.setState({loading: true});
    fetch(`https://smartcash2.herokuapp.com/api/pembelian/add`, {
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
          ToastAndroid.show('Berhasil Menambah!', 1000);
          this.setState({modalVisible: false});
          this.setState({loading: false, barcode: '', stock: '', price: ''});
        } else if (response.errors.barcode[0] == this.state.barcode2) {
          ToastAndroid.show('Barcode Tidak Ada!', 1000);
          this.setState({
            modalVisible: false,
            barcode: '',
            stock: '',
            price: '',
          });
        }
        // else {
        //   ToastAndroid.show('Gagal Membuat Permintaan,1000');
        //   // this.setState({loading: false});
        //   this.setState({modalVisible:false})

        // }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show('Pastikan Form Terisi!', 1000);
        this.setState({modalVisible: false, barcode: '', stock: '', price: ''});
      });
    // ToastAndroid.show('Gagal Membuat Permintaan,1000');
  };

  kirimData = () => {
    console.log('mulai Mengirim');
    const {supplier_id, dibayar} = this.state;
    const formData = new FormData();

    formData.append('supplier_id', parseInt(supplier_id));
    formData.append('dibayar', parseInt(dibayar));

    console.log('Ini data From Data', formData);
    this.setState({loading: true});
    fetch(`https://smartcash2.herokuapp.com/api/pembelian/selesai`, {
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
          ToastAndroid.show('Berhasil Menambah!', 1000);
          this.setState({modalVisible4: false});
          this.setState({loading: false, supplier_id: '', price2: ''});
          this.setState({
            data3: response.data,
            modalVisible5: true,
          });
        } else if (response.message == 'fail your money is not enough') {
          ToastAndroid.show('Uang Tidak Cukup!', 1000);
          this.setState({modalVisible4: false, supplier_id: '', price2: ''});
        }
        // else {
        //   ToastAndroid.show('Gagal Membuat Permintaan,1000');
        //   // this.setState({loading: false});
        //   this.setState({modalVisible:false})

        // }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show('Pastikan Form Terisi!', 1000);
        this.setState({modalVisible4: false, supplier_id: '', price2: ''});
      });
    // ToastAndroid.show('Gagal Membuat Permintaan,1000');
  };

  getPerusahaan() {
    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/supplier', {
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
            data2: responseJson.data,
            refresh: false,
            // loading: false,
          });
          //   this.setState({data2: responseJson, loading: false});

          // this.setState({loading: true});
          // console.log(responseJ);
        } else {
          console.log('ini else', responseJson);
          this.setState({refresh: false});
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({refresh: false});
      });
  }

  getData() {
    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/pembelian/detail', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
      },
    })
      .then((responseJson) => responseJson.json())
      .then((responseJson) => {
        console.log('ini Dia', responseJson);
        if (responseJson.status == 'success') {
          this.setState({
            data: responseJson.data,
            refresh: false,
            // loading: false,
          });
        } else {
          console.log('ini else', responseJson);
          this.setState({refresh: false});
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({refresh: false});
      });
  }

  hapusData = (id) => {
    console.log('mulai Mengirim');

    const {method} = this.state;
    const formData = new FormData();

    formData.append('_method', method);
    // formData.append('password', password2);

    this.setState({loading: true});
    fetch(
      `https://smartcash2.herokuapp.com/api/pembelian/detail/delete/${id}`,
      {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
        },
        body: formData,
      },
    )
      .then((response) => response.json())
      .then((response) => {
        // const {token, error} = response;

        // this.props.userLogin(token);

        console.log('ini response', response);
        if (response.status == 'success') {
          ToastAndroid.show('Berhasil Menghapus', 1000);
          this.setState({loading: false});
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show('Error!', 1000);
      });
  };

  editBarang = (id) => {
    console.log('mulai Mengirim');
    // console.log('ini Id',this.props.route.params.item.id);
    const {price2, stock2, method2} = this.state;
    const formData = new FormData();

    formData.append('_method', method2);
    formData.append('price', price2);
    formData.append('stock', stock2);

    console.log('Ini data From Data', formData);
    this.setState({loading: true});
    fetch(`https://smartcash2.herokuapp.com/api/pembelian/detail/${id}`, {
      method: 'POST',
      headers: {
        // Accept:'application/json',
        Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('ini response', response);
        if (response.status === 'success') {
          ToastAndroid.show('Berhasil Mengubah!', 1000);
          this.setState({
            loading: false,
            modalVisible3: false,
            price2: '',
            stock2: '',
            refresh: false,
            id: '',
          });
        } else {
          ToastAndroid.show('Gagal Membuat Permintaan,1000');
          this.setState({loading: false});
          this.setState({
            modalVisible3: false,
            price2: '',
            stock2: '',
            refresh: false,
            id: '',
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show('Gagal Membuat Permintaan', 1000);
        this.setState({
          modalVisible3: false,
          price2: '',
          stock2: '',
          refresh: false,
          id: '',
        });
      });
    // ToastAndroid.show('Gagal Membuat Permintaan,1000');
  };
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
            <Text style={styles.txttambah}>Tambah barang</Text>
            <TouchableOpacity
              style={styles.touchbarang}
              onPress={() => this.props.navigation.navigate('Barang')}>
              <Image
                source={require('../../Assets/Whiteplus.png')}
                style={styles.imgplus2}
              />
            </TouchableOpacity>
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
              <View style={styles.containerdata2}>
                <View style={styles.touchhapus}>
                  {/* <Text>Hapus</Text> */}
                </View>
                <View style={styles.touchedit}>
                  <View style={styles.viewbarang}>
                    <Text style={styles.txtbarang2}>Barang</Text>
                  </View>
                  <View style={styles.viewjumlah}>
                    <Text style={styles.txtstock}>Jumlah</Text>
                  </View>
                  <View style={styles.viewharga}>
                    <Text style={styles.txtstock}>Harga</Text>
                  </View>
                </View>
              </View>

              {this.state.data.map((v, i) => {
                return (
                  <View style={styles.containerdata} key={i}>
                    <TouchableOpacity
                      style={styles.touchhapus}
                      onPress={() => this.hapusData(v.id)}>
                      <Image
                        source={require('../../Assets/sampahku.png')}
                        style={styles.imgsampah}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.touchedit}
                      onPress={() => this.setModalVisible3(true, {item: v})}>
                      <View style={styles.viewbarang}>
                        <Text style={styles.txtbarang2}>{v.barang.name}</Text>
                      </View>
                      <View style={styles.viewjumlah}>
                        <Text style={styles.txtstock}>{v.stock}</Text>
                      </View>
                      <View style={styles.viewharga}>
                        <Text style={styles.txtprice}>Rp.{v.price}-,</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}

              <TouchableOpacity
                style={styles.touchselesai}
                onPress={() => this.setState({modalVisible4: true})}>
                <Text style={styles.txtbayar}>Bayar</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={{width: '100%', height: 40}}></View>
        </ScrollView>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.containermodal}>
            <View style={styles.viewmodal}>
              <View style={styles.viewbarcode}>
                <TextInput
                  style={styles.inputbarcode}
                  value={this.state.barcode}
                  onChangeText={(input) => this.setState({barcode: input})}
                  keyboardType={'number-pad'}
                />
                <TouchableOpacity
                  style={styles.touchbarcode}
                  onPress={() => this.setModalVisible2(true)}>
                  <Image
                    source={require('../../Assets/barcode.png')}
                    style={styles.imgbarcode}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.viewharga2}>
                <View style={styles.viewtxtharga}>
                  <Text style={styles.txtrp2}>Rp.</Text>
                </View>
                <TextInput
                  style={styles.inputharga2}
                  keyboardType={'number-pad'}
                  onChangeText={(price) => this.setState({price})}
                />
              </View>
              <TextInput
                placeholder={' Jumlah'}
                keyboardType={'number-pad'}
                style={styles.inputstock}
                onChangeText={(stock) => this.setState({stock})}
              />
              <View style={styles.viewtouch}>
                <TouchableOpacity
                  style={styles.touch}
                  onPress={() =>
                    this.setState({
                      modalVisible: false,
                      price: '',
                      barcode: '',
                      stock: '',
                    })
                  }>
                  <Text style={styles.txttouch}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touch2}
                  onPress={() => this.tambahData()}>
                  <Text style={styles.txttouch}>Tambah</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible2}>
          <QRCodeScanner
            onRead={this.onSuccess}
            showMarker={true}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            containerStyle={{backgroundColor: 'rgba(0,0,0,0.5)'}}
            topContent={
              <TouchableOpacity
                style={styles.touchclose}
                onPress={() => this.setState({modalVisible2: false})}>
                <Image
                  source={require('../../Assets/blackarow.png')}
                  style={styles.imgblackarrow}
                />
              </TouchableOpacity>
            }
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable}>
                {/* <Text  style={styles.buttonText}>OK. Got it!</Text> */}
              </TouchableOpacity>
            }
          />
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible3}>
          <View style={styles.containermodal}>
            <View style={styles.viewmodal2}>
              <View style={styles.viewharga2}>
                <View style={styles.viewtxtharga}>
                  <Text style={styles.txtrp2}>Rp.</Text>
                </View>
                <TextInput
                  style={styles.inputharga2}
                  keyboardType={'number-pad'}
                  onChangeText={(input) => this.setState({price2: input})}
                  value={this.state.price2}
                />
              </View>
              <TextInput
                placeholder={' Jumlah'}
                keyboardType={'number-pad'}
                style={styles.inputstock}
                onChangeText={(input) => this.setState({stock2: input})}
                value={this.state.stock2}
              />
              <View style={styles.viewtouch2}>
                <TouchableOpacity
                  style={styles.touch}
                  onPress={() => this.setState({modalVisible3: false})}>
                  <Text style={styles.txttouch}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touch2}
                  onPress={() => this.editBarang(this.state.id)}>
                  <Text style={styles.txttouch}>Ubah</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible4}>
          <View style={styles.containermodal}>
            <View style={styles.viewbayar}>
              <View style={styles.viewperusahaan}>
                <Picker
                  selectedValue={this.state.supplier_id}
                  onValueChange={(item, index) =>
                    this.setState({supplier_id: item})
                  }>
                  {this.state.data2.map((item, index) => {
                    return (
                      <Picker.Item
                        key={index}
                        label={item.name}
                        value={item.id}
                      />
                    );
                  })}
                </Picker>
              </View>
              <View style={styles.viewdibayar}>
                <View style={styles.viewrp}>
                  <Text style={styles.txtrp2}>Rp.</Text>
                </View>
                <TextInput
                  style={styles.inputbayar}
                  keyboardType={'number-pad'}
                  onChangeText={(dibayar) => this.setState({dibayar})}
                />
              </View>

              <View style={styles.viewtouch3}>
                <TouchableOpacity
                  style={styles.touchbatal2}
                  onPress={() => this.setState({modalVisible4: false})}>
                  <Text style={styles.txttouch}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchkirim}
                  onPress={() => this.kirimData()}>
                  <Text style={styles.txttouch}>Kirim</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible5}>
          <View style={styles.containermodal}>
            <View style={styles.viewmodal3}>
              <LottieView
                source={require('../../Assets/success.json')}
                autoPlay={true}
                style={styles.imgsukses}
              />
              <View style={styles.viewtxt}>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', marginLeft: 15}}>
                  Total :
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', marginRight: 15}}>
                  Rp.{this.state.data3.total}-,
                </Text>
              </View>
              <View style={styles.viewtxt2}>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', marginLeft: 15}}>
                  Dibayar :
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', marginRight: 15}}>
                  Rp.{this.state.data3.dibayar}-,
                </Text>
              </View>
              <View style={styles.viewtxt2}>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', marginLeft: 15}}>
                  Kembalian :
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', marginRight: 15}}>
                  Rp.{this.state.data3.kembalian}-,
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: '50%',
                  height: 50,
                  backgroundColor: '#696969',
                  marginTop: 50,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress = {() => this.setState({modalVisible5:false})}>
                <Text style={styles.txttouch}>Tutup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={styles.touchtambah}
          onPress={() => this.setModalVisible(true)}>
          <Image
            source={require('../../Assets/whiteplus.png')}
            style={styles.imgplus}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};
export default connect(mapStateToProps)(Tambahbarang);
