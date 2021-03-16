import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  ScrollView,
  StatusBar,
  Modal,
  RefreshControl,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './Stylekasir';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

class Kasir extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      modalVisible: false,
      modalVisible2: false,
      modalVisible3: false,
      modalVisible4: false,
      modalVisible5: false,
      barcode: '',
      jumlah: '',
      kode: '',
      refresh: false,
      loading: false,
      dibayar: '',
      data3: {},
      method: 'delete',
      method2: 'patch',
      stock2: '',
      id: '',
      loading2: false,
      dataall: [],
      total: {},
      loading5: false,
      dibayar2: ['The dibayar field is required.'],
      barcode2:['The selected barcode is invalid.']
    };
  }
  setModalVisible5 = (visible, item) => {
    this.setState({modalVisible5: visible});
    console.log('ini OYY', item.quantity);
    this.setState({
      stock2: `${item.quantity}`,
      id: `${item.id}`,
    });
  };
  onSuccess = (e) => {
    ToastAndroid.show(e.data, 1000);
    this.setState({barcode: e.data, modalVisible2: false});
  };
  onRefreshControl() {
    this.setState({refresh: true});
    this.getData();
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getData();
          // this.total();
          console.log('ini OISU', this.state.dataall);
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKEN', this.props.userToken.userReducer.token);
  }
  tambahBarang = () => {
    console.log('mulai Mengirim');

    const {barcode, jumlah} = this.state;
    const formData = new FormData();

    formData.append('barcode', barcode);
    formData.append('quantity', jumlah);

    this.setState({loading2: true});
    fetch('https://smartcash2.herokuapp.com/api/transaksi/add', {
      method: 'POST',
      headers: {
        Accept:'application/json',
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
          this.setState({
            modalVisible: false,
            loading2: false,
            barcode: '',
            jumlah: '',
          });
          // this.setState({modalVisible3: true});
        }else if (response.status == 'failed') {
          ToastAndroid.show('Stock Habis', 1000);
          this.setState({
            modalVisible: false,
            barcode: '',
            jumlah: '',
            loading2: false,
          });
        // } else if (response.errors.barcode[0] == 'The selected barcode is invalid.') {
        //   ToastAndroid.show('Barcode Tidak ada!');
        //   this.setState({
        //     modalVisible: false,
        //     barcode: '',
        //     jumlah: '',
        //     loading2: false,
        //   });
        }else {
          ToastAndroid.show('Barcode Tidak Ada!',1000)
          this.setState({
                modalVisible: false,
                barcode: '',
                jumlah: '',
                loading2: false,
              });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading2: false,
          modalVisible: false,
          barcode: '',
          jumlah: '',
        });
        ToastAndroid.show('Barcode Tidak Ada!', 1000);
      });
  };

  getData() {
    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/transaksi/detail', {
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
            data: responseJson.data,
            total: responseJson.total,
            refresh: false,
            loading: false,
          });
          //   this.setState({data2: responseJson, loading: false});

          // this.setState({loading: true});
          // console.log(responseJ);
        } else {
          console.log('ini else', responseJson);
          this.setState({refresh: false, loading: false});
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({refresh: false, loading4: false});
      });
  }

  kirimData = () => {
    console.log('mulai Mengirim');
    const {kode, dibayar} = this.state;
    const formData = new FormData();

    formData.append('code_member', kode);
    formData.append('dibayar', dibayar);

    console.log('Ini data From Data', formData);
    this.setState({loading5: true});
    fetch(`https://smartcash2.herokuapp.com/api/transaksi/selesai`, {
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
          this.setState({loading5: false, supplier_id: '', price2: ''});
          this.setState({
            data3: response.data,
            modalVisible3: true,
          });
        } else if (response.message == 'fail your money is not enough') {
          ToastAndroid.show('Uang Tidak Cukup!', 1000);
          this.setState({
            modalVisible4: false,
            supplier_id: '',
            price2: '',
            loading5: false,
          });
        } else if (response.errors.dibayar[0] == this.state.dibayar2) {
          ToastAndroid.show('Pastikan Form Terisi!', 1000),
            this.setState({
              modalVisible4: false,
              supplier_id: '',
              price2: '',
              loading5: false,
            });
        }
        // else {
        //   ToastAndroid.show('Isi Form Yang kosong!,1000');
        //   this.setState({loading5: false});
        //   this.setState({modalVisible:false})

        // }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading5: false});
        ToastAndroid.show('Pastikan Form Terisi!', 1000);
        this.setState({modalVisible4: false, supplier_id: '', price2: ''});
      });
    // ToastAndroid.show('Gagal Membuat Permintaan,1000');
  };

  hapusData = (id) => {
    console.log('mulai Mengirim');

    const {method} = this.state;
    const formData = new FormData();

    formData.append('_method', method);
    // formData.append('password', password2);

    this.setState({loading: true});
    fetch(
      `https://smartcash2.herokuapp.com/api/transaksi/detail/delete/${id}`,
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
          this.getData();
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
    const {stock2, method2} = this.state;
    const formData = new FormData();

    formData.append('_method', method2);
    // formData.append('price', price2);
    formData.append('quantity', parseInt(stock2));

    console.log('Ini data From Data', formData);
    // this.setState({loading: true});
    fetch(
      `https://smartcash2.herokuapp.com/api/transaksi/detail/update/${id}`,
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
          this.setState({
            // loading: false,
            modalVisible5: false,
            price2: '',
            stock2: '',
            refresh: false,
            id: '',
          });
          // this.getData();
        } else {
          ToastAndroid.show('Gagal Membuat Permintaan,1000');
          // this.setState({loading: false});
          this.setState({
            modalVisible5: false,
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
          modalVisible5: false,
          price2: '',
          stock2: '',
          refresh: false,
          id: '',
        });
      });
    // ToastAndroid.show('Gagal Membuat Permintaan,1000');
  };

  // total = () => {
  //   // const list = []
  //   this.state.data.forEach((v,i) => {
  //     this.state.dataall.push(v.total)
  //   })
  //   const total = this.state.dataall.reduce(
  //     (previousScore, currentScore, index) => previousScore + currentScore,0
  //   );
  //   console.log('ini TOTAL',total);
  //   console.log('ini DATAKAU',this.state.dataall);
  //   return (
  //     <Text>{total}</Text>
  //   )
  // };
  render() {
    return (
      <View style={styles.container}>
        {this.state.loading !== false ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <LottieView
              source={require('../../Assets/21656-loading-basic.json')}
              autoPlay={true}
              style={styles.imgloadingscreen}
            />
            <Text style={{fontSize: 13, fontWeight: 'bold', marginTop: 150}}>
              Tunggu Sebentar...
            </Text>
          </View>
        ) : (
          <View>
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
                <Text style={styles.txtprofil}>Kasir</Text>
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
                    <View style={styles.touchsampah}></View>
                    <View style={styles.viewname}>
                      <Text style={styles.txtnama2}>Barang</Text>
                    </View>
                    <View style={styles.viewjumlah}>
                      <Text style={styles.txtjumlah}>Jumlah</Text>
                    </View>
                    <View style={styles.viewharga}>
                      <Text style={styles.txtnama2}>Harga asli</Text>
                    </View>
                    <View style={styles.viewharga2}>
                      <Text style={styles.txtnama2}>Harga total</Text>
                    </View>
                  </View>

                  {this.state.data.map((item, index) => {
                    return (
                      <View key={index} style={styles.containerdata}>
                        <TouchableOpacity
                          style={styles.touchsampah}
                          onPress={() => this.hapusData(item.id)}>
                          <Image
                            source={require('../../Assets/sampahku.png')}
                            style={styles.imgsampah}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.containeredit}
                          onPress={() => this.setModalVisible5(true, item)}>
                          <View style={styles.viewname}>
                            <Text style={styles.txtname}>
                              {item.barang_id.name}
                            </Text>
                          </View>
                          <View style={styles.viewjumlah}>
                            <Text style={styles.txtjumlah}>
                              {item.quantity}
                            </Text>
                          </View>
                          <View style={styles.viewharga}>
                            <Text style={styles.txtprice}>
                              {item.barang_id.price}
                            </Text>
                          </View>
                          <View style={styles.viewharga2}>
                            <Text style={styles.txtprice}>{item.total}</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                  <View style={styles.containerdata3}>
                    <View
                      style={{
                        width: '40%',
                        minHeight: 50,
                        borderRightWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                        Total
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '60%',
                        minHeight: 50,
                        borderRightWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          color: 'green',
                        }}>
                        Rp.{this.state.total}-,
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.touchbayar}
                    onPress={() => this.setState({modalVisible4: true})}>
                    <Text style={styles.txttouch}>Bayar</Text>
                  </TouchableOpacity>
                </View>
              )}
            </ScrollView>
            <TouchableOpacity
              style={styles.touchtambah}
              onPress={() => this.setState({modalVisible: true})}>
              <Image
                source={require('../../Assets/barcode.png')}
                style={styles.imgtambah}
              />
            </TouchableOpacity>
          </View>
        )}
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.containermodal}>
            <View style={styles.viewmodal}>
              <View style={styles.viewscan}>
                <TextInput
                  style={styles.inputscan}
                  keyboardType={'number-pad'}
                  value={this.state.barcode}
                  onChangeText={(input) => this.setState({barcode: input})}
                />
                <TouchableOpacity
                  style={styles.touchscan}
                  onPress={() => this.setState({modalVisible2: true})}>
                  <Image
                    source={require('../../Assets/barcode.png')}
                    style={styles.imgbarcode}
                  />
                </TouchableOpacity>
              </View>
              <TextInput
                placeholder={' Jumlah'}
                keyboardType={'number-pad'}
                style={styles.inputjumlah}
                onChangeText={(jumlah) => this.setState({jumlah})}
              />
              <View style={styles.viewtouch}>
                <TouchableOpacity
                  style={styles.touchbatal}
                  onPress={() =>
                    this.setState({
                      modalVisible: false,
                      barcode: '',
                      jumlah: '',
                      kode: '',
                    })
                  }>
                  <Text style={styles.txttouch}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchkirim}
                  onPress={() => this.tambahBarang()}>
                  {this.state.loading2 == false ? (
                    <Text style={styles.txttouch}>Tambah</Text>
                  ) : (
                    <LottieView
                      source={require('../../Assets/21656-loading-basic.json')}
                      autoPlay={true}
                      style={{width: '40%', height: 50}}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible2}>
          <View style={styles.containermodal}>
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
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible4}>
          <View style={styles.containermodal}>
            <View style={styles.viewdibayar}>
              <View style={styles.viewuang}>
                <View style={styles.viewrp}>
                  <Text style={styles.txtrp}>Rp.</Text>
                </View>
                <TextInput
                  style={styles.inputuang}
                  keyboardType={'number-pad'}
                  onChangeText={(dibayar) => this.setState({dibayar})}
                />
              </View>
              <TextInput
                placeholder={' Kode'}
                style={styles.inputjumlah2}
                onChangeText={(kode) => this.setState({kode})}
              />
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'red'}}>
                *Kode member(opsional)
              </Text>
              <View style={styles.viewtouch}>
                <TouchableOpacity
                  style={styles.touchbatal}
                  onPress={() => this.setState({modalVisible4: false})}>
                  <Text style={styles.txttouch}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchkirim}
                  onPress={() => this.kirimData()}>
                  {this.state.loading5 == false ? (
                    <Text style={styles.txttouch}>Bayar</Text>
                  ) : (
                    <LottieView
                      source={require('../../Assets/21656-loading-basic.json')}
                      autoPlay={true}
                      style={{width: '40%', height: 50}}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible3}>
          <View style={styles.containermodal}>
            <View style={styles.viewselesai}>
              <LottieView
                source={require('../../Assets/success.json')}
                autoPlay={true}
                style={styles.imgsukses}
              />
              <View style={styles.viewtransaksi}>
                <Text style={styles.txttransaksi}>transaksi id</Text>
                <Text style={styles.txttransaksi2}>
                  {this.state.data3.transaksi_id}
                </Text>
              </View>
              {/* <View style = {styles.viewtransaksi}>
              <Text style = {styles.txttransaksi}>Member</Text>
              <Text style = {styles.txttransaksi2}></Text>
            </View> */}
              <View style={styles.viewtransaksi}>
                <Text style={styles.txttransaksi}>Potongan</Text>
                <Text style={styles.txttransaksi2}>
                  {this.state.data3.potongan}%
                </Text>
              </View>
              <View style={styles.viewtransaksi}>
                <Text style={styles.txttransaksi}>Total</Text>
                <Text style={styles.txttransaksi2}>
                  Rp.{this.state.data3.total}-,
                </Text>
              </View>
              <View style={styles.viewtransaksi}>
                <Text style={styles.txttransaksi}>dibayar</Text>
                <Text style={styles.txttransaksi2}>
                  Rp.{this.state.data3.dibayar}-,
                </Text>
              </View>
              <View style={styles.viewtransaksi}>
                <Text style={styles.txttransaksi}>Kembalian</Text>
                <Text style={styles.txttransaksi2}>
                  Rp.{this.state.data3.kembalian}-,
                </Text>
              </View>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => this.setState({modalVisible3: false})}>
                <Text style={styles.txttouch}>Selesai</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible5}>
          <View style={styles.containermodal}>
            <View
              style={{
                width: '80%',
                height: 200,
                backgroundColor: '#fff',
                borderRadius: 20,
                alignItems: 'center',
              }}>
              <TextInput
                keyboardType={'number-pad'}
                style={{
                  width: '80%',
                  height: 50,
                  marginTop: 40,
                  borderRadius: 10,
                  borderWidth: 1,
                  fontWeight: 'bold',
                }}
                value={this.state.stock2}
                onChangeText={(input) => this.setState({stock2: input})}
              />
              <View
                style={{
                  width: '100%',
                  height: 50,
                  marginTop: 30,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  style={{
                    width: '40%',
                    height: 50,
                    backgroundColor: 'red',
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => this.setState({modalVisible5: false})}>
                  <Text style={styles.txttouch}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '40%',
                    height: 50,
                    backgroundColor: '#696969',
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => this.editBarang(this.state.id)}>
                  <Text style={styles.txttouch}>Ubah</Text>
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
export default connect(mapStateToProps)(Kasir);
