import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Modal,
  TextInput,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import {styles} from './Stylekeuangan';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';

class Keuanganpimpinan extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      meta: [],
      modalVisible: false,
      modalVisible2: false,
      type: '',
      pemasukkan: '0',
      pengeluaran: '0',
      type2: '',
      pemasukkan2: '0',
      pengeluaran2: '0',
      method: 'patch',
      id: '',
      loading: false,
      refresh: false,
    };
  }

  setModalVisible2 = (visible, item) => {
    this.setState({modalVisible2: visible});
    console.log('ini DATAKU', item);
    this.setState({
      type2: `${item.item.output_type}`,
      pemasukkan2: `${item.item.debit}`,
      pengeluaran2: `${item.item.kredit}`,
      id: `${item.item.id}`,
    });
  };

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getData();
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKEN', this.props.userToken.userReducer.token);
  }
  getData() {
    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/keuangan', {
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
            meta: responseJson.meta,
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
    const {type, pemasukkan, pengeluaran} = this.state;
    const formData = new FormData();

    formData.append('output_type', type);
    formData.append('kredit', pengeluaran);
    formData.append('debit', pemasukkan);

    console.log('Ini data From Data', formData);
    // this.setState({loading: true});
    fetch(`https://smartcash2.herokuapp.com/api/keuangan/add`, {
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
          this.setState({type: '', pemasukkan: '', pengeluaran: ''});
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
        this.setState({type: '', pemasukkan: '', pengeluaran: ''});
      });
    // ToastAndroid.show('Gagal Membuat Permintaan,1000');
  };

  editUang = (id) => {
    console.log('mulai Mengirim');
    // console.log('ini Id',this.props.route.params.item.id);
    const {type2, pemasukkan2, pengeluaran2, method} = this.state;
    const formData = new FormData();

    formData.append('_method', method);
    formData.append('output_type', type2);
    formData.append('debit', pemasukkan2);
    formData.append('kredit', pengeluaran2);

    console.log('Ini data From Data', formData);
    // this.setState({loading: true});
    fetch(`https://smartcash2.herokuapp.com/api/keuangan/update/${id}`, {
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
            // loading: false,
            modalVisible2: false,
            // price2: '',
            // stock2: '',
            // refresh: false,
            // id: '',
          });
        } else {
          ToastAndroid.show('Gagal Membuat Permintaan,1000');
          this.setState({loading: false});
          this.setState({
            modalVisible2: false,
            // price2: '',
            // stock2: '',
            // refresh: false,
            // id: '',
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show('Gagal Membuat Permintaan', 1000);
        this.setState({
          modalVisible2: false,
          //   price2: '',
          //   stock2: '',
          //   refresh: false,
          //   id: '',
        });
      });
    // ToastAndroid.show('Gagal Membuat Permintaan,1000');
  };
  onRefreshControl() {
    this.setState({refresh: true});
    this.getData();
    // this.getKategori();
  }
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
              <Text style={styles.txttambah}>Keuangan</Text>
              <TouchableOpacity
                style={styles.touchbarang}
                onPress={() => this.setState({modalVisible: true})}>
                <Image
                  source={require('../../Assets/Whiteplus.png')}
                  style={styles.imgplus2}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.viewtabungan}>
              <Text style={styles.txtsaldo}>Saldo</Text>
              <Text style={styles.txtuang}>
                Rp.{this.state.data.tabungan}-,
              </Text>
            </View>
            {this.state.meta.length == 0 ? (
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
                {this.state.meta.map((v, i) => {
                  return (
                    <View style={styles.containerdata} key={i}>
                      <View style={styles.viewname}>
                        <View style={styles.viewname2}>
                          <Text style={styles.txtname}>{v.output_type}</Text>
                        </View>
                        <View style={styles.viewname3}>
                          <Text style={styles.txtname2}>{v.created_at}</Text>
                        </View>
                      </View>
                      <View style={styles.viewuang}>
                        {v.debit ? (
                          <Text style={styles.txtdebit}>Rp.{v.debit}-,</Text>
                        ) : (
                          <Text style={styles.txtkredit}>-Rp.{v.kredit}-,</Text>
                        )}
                      </View>
                      <View style={styles.viewtouch}>
                        <TouchableOpacity style={styles.touchhapus}>
                          <Text style={styles.txttouch}>Hapus</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.touchubah}
                          onPress={() =>
                            this.setModalVisible2(true, {item: v})
                          }>
                          <Text style={styles.txttouch}>Ubah</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>
            )}

            <View style={{width: '100%', height: 40}}></View>
          </ScrollView>
        )}

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={styles.containermodal}>
            <View style={styles.viewmodal}>
              <TextInput
                placeholder={' Type'}
                style={styles.inputtype}
                onChangeText={(type) => this.setState({type})}
              />
              <TextInput
                placeholder={' Pemasukkan'}
                style={styles.inputtype}
                onChangeText={(pemasukkan) => this.setState({pemasukkan})}
                keyboardType={'number-pad'}
              />
              <TextInput
                placeholder={' Pengeluaran'}
                style={styles.inputtype}
                onChangeText={(pengeluaran) => this.setState({pengeluaran})}
                keyboardType={'number-pad'}
              />
              <Text style={{fontSize: 12, fontWeight: 'bold', color: 'red'}}>
                *Pilih salah satu pemasukkan atau pengeluaran
              </Text>
              <View style={styles.viewtouch2}>
                <TouchableOpacity
                  style={styles.touchbatal}
                  onPress={() =>
                    this.setState({
                      modalVisible: false,
                      type: '',
                      pemasukkan: '',
                      pengeluaran: '',
                    })
                  }>
                  <Text style={styles.txttouch}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchtambah}
                  onPress={() => this.kirimData()}>
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
          <View style={styles.containermodal}>
            <View style={styles.viewmodal}>
              <TextInput
                style={styles.inputtype}
                value={this.state.type2}
                onChangeText={(input) => this.setState({type2: input})}
              />
              <TextInput
                style={styles.inputtype}
                value={this.state.pemasukkan2}
                onChangeText={(input) => this.setState({pemasukkan2: input})}
                keyboardType={'number-pad'}
              />
              <TextInput
                style={styles.inputtype}
                value={this.state.pengeluaran2}
                onChangeText={(input) => this.setState({pengeluaran2: input})}
                keyboardType={'number-pad'}
              />
              <View style={styles.viewtouch2}>
                <TouchableOpacity
                  style={styles.touchbatal}
                  onPress={() => this.setState({modalVisible2: false})}>
                  <Text style={styles.txttouch}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchtambah}
                  onPress={() => this.editUang(this.state.id)}>
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
export default connect(mapStateToProps)(Keuanganpimpinan);
