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
} from 'react-native';
import {styles} from './Stylesbarang';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {Picker} from '@react-native-community/picker';
import QRCodeScanner from 'react-native-qrcode-scanner';
import LottieView from 'lottie-react-native';

class Barang extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      data2: [],
      modalVisible: false,
      modalVisible2: false,
      modalVisible3: false,
      method: 'delete',
      kategori: '',
      name: '',
      barcode: '',
      price: '',
      diskon: '0',
      brand: '',
      refresh: false,
      name2: '',
      price2: '',
      diskon2: '',
      brand2: '',
      kategori2: '',
      method2: 'patch',
      id: '',
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
    };
  }

  setModalVisible3 = (visible, item) => {
    console.log('ini Cuy', item.item.id);
    this.setState({modalVisible3: visible});
    this.setState({
      name2: `${item.item.name}`,
      price2: `${item.item.price}`,
      diskon2: `${item.item.discount}`,
      brand2: `${item.item.brand}`,
      id: `${item.item.id}`,
    });
  };
  onSuccess = (e) => {
    ToastAndroid.show(e.data, 1000);
    this.setState({barcode: e.data, modalVisible2: false});
  };
  onRefreshControl() {
    this.setState({refresh: true});
    this.getBarang();
    this.getKategori();
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getBarang();
          this.getKategori();
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKEN', this.props.userToken.userReducer.token);
  }

  getBarang() {
    this.setState({loading4: true});
    fetch('https://smartcash2.herokuapp.com/api/barang', {
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
            refresh: false,
            loading4: false,
          });
          //   this.setState({data2: responseJson, loading: false});

          // this.setState({loading: true});
          // console.log(responseJ);
        } else {
          console.log('ini else', responseJson);
          this.setState({refresh: false, loading4: false});
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({refresh: false, loading4: false});
      });
  }

  getKategori() {
    this.setState({loading4: true});
    fetch('https://smartcash2.herokuapp.com/api/kategori', {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
      },
    })
      .then((responseJson) => responseJson.json())
      .then((responseJson) => {
        console.log('ini kate', responseJson);
        // console.log(responseJson);
        // const {status} = responseJson;
        console.log('ini Dia', responseJson);
        if (responseJson.status == 'success') {
          this.setState({
            data2: responseJson.data,
            refresh: false,
            loading4: false,
          });
          //   this.setState({data2: responseJson, loading: false});

          // this.setState({loading: true});
          // console.log(responseJ);
        } else {
          console.log('ini else', responseJson);
          this.setState({refresh: false, loading4: false});
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({refresh: false, loading4: false});
      });
  }

  hapusData = (id) => {
    console.log('mulai Mengirim');

    const {method} = this.state;
    const formData = new FormData();

    formData.append('_method', method);
    // formData.append('password', password2);

    this.setState({loading3: true});
    fetch(`https://smartcash2.herokuapp.com/api/barang/delete/${id}`, {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        // const {token, error} = response;

        // this.props.userLogin(token);

        console.log('ini response', response);
        if (response.status == 'success') {
          ToastAndroid.show('Berhasil Menghapus', 1000);
          this.setState({loading3: false});
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading3: false});
        ToastAndroid.show('Error!', 1000);
      });
  };

  tambahData = () => {
    console.log('mulai Mengirim');
    const {kategori, price, brand, barcode, name, diskon} = this.state;
    const formData = new FormData();

    formData.append('barcode', barcode);
    formData.append('name', name);
    formData.append('brand', brand);
    formData.append('price', parseInt(price));
    formData.append('category_id', parseInt(kategori));
    formData.append('discount', diskon);

    console.log('Ini data From Data', formData);
    this.setState({loading: true});
    fetch(`https://smartcash2.herokuapp.com/api/barang/add`, {
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
          this.setState({
            loading: false,
            name: '',
            barcode: '',
            brand: '',
            price: '',
            kategori: '',
          });
        }
        // else if(response.message == 'fail your money is not enough'){
        //   ToastAndroid.show('Uang Tidak Cukup!',1000)
        //   this.setState({modalVisible4:false,supplier_id:'',price2:''})
        // }
        else {
          ToastAndroid.show('Pastikan Form Terisi!', 1000);
          this.setState({loading: false});
          this.setState({modalVisible: false});
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show('Pastikan Form Terisi!', 1000);
        this.setState({
          modalVisible: false,
          name: '',
          barcode: '',
          brand: '',
          price: '',
          kategori: '',
        });
      });
    // ToastAndroid.show('Gagal Membuat Permintaan,1000');
  };
  editBarang = (id) => {
    console.log('mulai Mengirim');
    // console.log('ini Id',this.props.route.params.item.id);
    const {name2, price2, diskon2, brand2, method2} = this.state;
    const formData = new FormData();

    formData.append('_method', method2);
    formData.append('name', name2);
    formData.append('price', price2);
    formData.append('discount', diskon2);
    formData.append('brand', brand2);

    console.log('Ini data From Data', formData);
    this.setState({loading2: true});
    fetch(`https://smartcash2.herokuapp.com/api/barang/update/${id}`, {
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
            loading2: false,
            modalVisible3: false,
            name2: '',
            price2: '',
            diskon2: '',
            brand2: '',
            kategori2: '',
            refresh: false,
            id: '',
          });
        } else {
          ToastAndroid.show('Gagal Membuat Permintaan,1000');
          this.setState({loading2: false});
          this.setState({
            modalVisible3: false,
            name2: '',
            price2: '',
            diskon2: '',
            brand2: '',
            kategori2: '',
            refresh: false,
            id: '',
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading2: false});
        ToastAndroid.show('Gagal Membuat Permintaan', 1000);
        this.setState({
          modalVisible3: false,
          name2: '',
          price2: '',
          diskon2: '',
          brand2: '',
          kategori2: '',
          refresh: false,
          id: '',
        });
      });
    // ToastAndroid.show('Gagal Membuat Permintaan,1000');
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.loading4 !== false ? (
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
              }
              style={{width: '100%'}}>
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
                <Text style={styles.txttambah}>Barang</Text>
                <TouchableOpacity
                  style={styles.touchbarang}
                  onPress={() => this.setState({modalVisible: true})}>
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
                  {this.state.data.map((v, i) => {
                    return (
                      <View style={styles.containerbarang} key={i}>
                        <View style={styles.viewname}>
                          <Text style={styles.txtname}>{v.name}</Text>
                        </View>
                        <View style={styles.viewbrand}>
                          <Text style={styles.txtbrand}>Brand : {v.brand}</Text>
                        </View>
                        <View style={styles.viewstock}>
                          <Text style={styles.txtstock}>Stock : {v.stock}</Text>
                        </View>
                        <View style={styles.viewbarcode}>
                          <Text style={styles.txtbarcode}>
                            Barcode : {v.barcode}
                          </Text>
                        </View>
                        <View style={styles.viewbarcode}>
                          <Text style={styles.txtbarcode}>
                            diskon : {v.discount} %
                          </Text>
                        </View>

                        <View style={styles.viewprice}>
                          <Text style={styles.txtprice}>Rp.{v.price}-,</Text>
                        </View>

                        <View style={styles.viewtouch}>
                          <TouchableOpacity
                            style={styles.touchdelete}
                            onPress={() => this.hapusData(v.id)}>
                            {this.state.loading3 == false ? (
                              <Text style={styles.txttouch}>Hapus</Text>
                            ) : (
                              <LottieView
                                source={require('../../Assets/21656-loading-basic.json')}
                                autoPlay={true}
                                style={styles.imgloading}
                              />
                            )}
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.touchubah}
                            onPress={() =>
                              this.setModalVisible3(true, {item: v})
                            }>
                            <Text style={styles.txttouch}>Ubah</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })}
                </View>
              )}
              <View style={{width: '100%', height: 100}}></View>
            </ScrollView>
          </View>
        )}

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.containermodal}>
            <View style={styles.viewmodal}>
              <View style={styles.viewbarcode2}>
                <TextInput
                  style={styles.inputbarcode}
                  value={this.state.barcode}
                  onChangeText={(input) => this.setState({barcode: input})}
                  keyboardType={'number-pad'}
                />
                <TouchableOpacity
                  style={styles.touchbarcode}
                  onPress={() => this.setState({modalVisible2: true})}>
                  <Image
                    source={require('../../Assets/barcode.png')}
                    style={styles.imgbarcode}
                  />
                </TouchableOpacity>
              </View>
              <TextInput
                placeholder={' Barang'}
                style={styles.inputbarang}
                onChangeText={(name) => this.setState({name})}
              />
              <TextInput
                placeholder={' Brand'}
                style={styles.inputbarang}
                onChangeText={(brand) => this.setState({brand})}
              />
              <View style={styles.viewharga}>
                <View style={styles.viewrp}>
                  <Text style={styles.txtrp}>Rp.</Text>
                </View>
                <TextInput
                  style={styles.inputharga}
                  keyboardType={'number-pad'}
                  onChangeText={(price) => this.setState({price})}
                />
              </View>
              <View style={styles.viewkategori}>
                <Picker
                  selectedValue={this.state.kategori}
                  onValueChange={(item, index) =>
                    this.setState({kategori: item})
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

              <View style={styles.viewtouch2}>
                <TouchableOpacity
                  style={styles.touchbatal}
                  onPress={() =>
                    this.setState({
                      modalVisible: false,
                      barcode: '',
                      price: '',
                      name: '',
                      kategori: '',
                      brand: '',
                    })
                  }>
                  <Text style={styles.txttouch}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchtambah}
                  onPress={() => this.tambahData()}>
                  {this.state.loading == false ? (
                    <Text style={styles.txttouch}>Tambah</Text>
                  ) : (
                    <LottieView
                      source={require('../../Assets/21656-loading-basic.json')}
                      autoPlay={true}
                      style={styles.imgloading}
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
          <QRCodeScanner
            onRead={this.onSuccess}
            showMarker={true}
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
              <TouchableOpacity
                style={styles.buttonTouchable}></TouchableOpacity>
            }
          />
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible3}>
          <View style={styles.containermodal}>
            <View style={styles.viewmodal2}>
              <TextInput
                placeholder={' Barang'}
                style={styles.inputbarang}
                onChangeText={(input) => this.setState({name2: input})}
                value={this.state.name2}
              />
              <View style={styles.viewharga}>
                <View style={styles.viewrp}>
                  <Text style={styles.txtrp}>Rp.</Text>
                </View>
                <TextInput
                  style={styles.inputharga}
                  keyboardType={'number-pad'}
                  onChangeText={(input) => this.setState({price2: input})}
                  value={this.state.price2}
                />
              </View>
              <TextInput
                placeholder={' Diskon'}
                style={styles.inputbarang}
                onChangeText={(input) => this.setState({diskon2: input})}
                value={this.state.diskon2}
              />
              <TextInput
                placeholder={' Brand'}
                style={styles.inputbarang}
                onChangeText={(input) => this.setState({brand2: input})}
                value={this.state.brand2}
              />

              <View style={styles.viewtouch2}>
                <TouchableOpacity
                  style={styles.touchbatal}
                  onPress={() =>
                    this.setState({
                      modalVisible3: false,
                      barcode: '',
                      price: '',
                      name: '',
                      kategori: '',
                      brand: '',
                      id: '',
                    })
                  }>
                  <Text style={styles.txttouch}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchtambah}
                  onPress={() => this.editBarang(this.state.id)}>
                  {this.state.loading2 == false ? (
                    <Text style={styles.txttouch}>Ubah</Text>
                  ) : (
                    <LottieView
                      source={require('../../Assets/21656-loading-basic.json')}
                      autoPlay={true}
                      style={styles.imgloading}
                    />
                  )}
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
export default connect(mapStateToProps)(Barang);
