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
  RefreshControl
} from 'react-native';
import {styles} from './Styletambahbarang';
import {Picker} from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

class Tambahbarang extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      modalVisible2:false,
      barcode:'',
      price:'',
      stock:'',
      barcode2: ['The selected barcode is invalid.'],
      data:[],
      refresh:false,
      method:'delete',
      modalVisible3:false
      
      // supplier:this.props
    };
  }


  onRefreshControl() {
    this.setState({refresh: true});
    this.getData()
  }

  onSuccess = e => {
    ToastAndroid.show(e.data,1000)
    this.setState({barcode:e.data,modalVisible2:false})
    
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  setModalVisible2 = (visible) => {
    this.setState({modalVisible2: visible});
  };
  setModalVisible3 = (visible) => {
    this.setState({modalVisible3:visible})
  }

 
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getData()
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKEN', this.props.userToken.userReducer.token);
    console.log('Ini supplier',this.props.route.params);
  }
      
  tambahData = () => {
    console.log('mulai Mengirim');
    const {stock,price,barcode} = this.state;
    const formData = new FormData();

    formData.append('stock', parseInt(stock));
    formData.append('price', parseInt(price));
    formData.append('barcode', barcode);

    console.log('Ini data From Data', formData);
    this.setState({loading: true});
    fetch(`https://smartcash2.herokuapp.com/api/pembelian/add`, {
      method: 'POST',
      headers: {
        Accept:'application/json',
        Authorization: `Bearer ${this.props.userToken.userReducer.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('ini response', response);
        if (response.status === 'success') {
          ToastAndroid.show('Berhasil Menambah!', 1000);
          this.setState({modalVisible:false})
          this.setState({loading: false,barcode:'',stock:'',price:''});
        } 
        else if (response.errors.barcode[0] == this.state.barcode2){
          ToastAndroid.show('Barcode Tidak Ada!',1000)
          this.setState({modalVisible:false,barcode:'',stock:'',price:''})
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
        this.setState({modalVisible:false,barcode:'',stock:'',price:''})

      });
    // ToastAndroid.show('Gagal Membuat Permintaan,1000');
  };
    
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
          this.setState({refresh:false})
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({refresh:false})
      });
  }

  hapusData = (id) => {
    console.log('mulai Mengirim');

    const {method} = this.state;
    const formData = new FormData();

    formData.append('_method', method);
    // formData.append('password', password2);

    this.setState({loading: true});
    fetch(`https://smartcash2.herokuapp.com/api/pembelian/detail/delete/${id}`, {
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
          this.setState({loading: false});
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
        ToastAndroid.show('Error!', 1000);
      });
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
            <TouchableOpacity style={styles.touchback} onPress={() => this.props.navigation.goBack()}>
              <Image source={require('../../Assets/Whiteback.png')} style = {styles.imgback}/>
            </TouchableOpacity>
            <Text style={styles.txttambah}>Tambah barang</Text>
          </View>

          <View style = {styles.containerdata2}>
            <View style = {styles.touchhapus}>
              {/* <Text>Hapus</Text> */}
            </View>
            <View style = {styles.touchedit}>
              <View style = {styles.viewbarang}>
                <Text style = {styles.txtbarang2}>Barang</Text>
              </View>
              <View style = {styles.viewjumlah}>
                <Text style = {styles.txtstock}>Jumlah</Text>
              </View>
              <View style = {styles.viewharga}>
                <Text style = {styles.txtstock}>Harga</Text>
              </View>
            </View>
          </View>

         {this.state.data.map((v,i) => {
           return(
             <View style = {styles.containerdata} key = {i}>
              <TouchableOpacity style = {styles.touchhapus} onPress = {() => this.hapusData(v.id)}>
                <Image source = {require('../../Assets/sampahku.png')} style = {styles.imgsampah}/>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.touchedit} onPress = {() => this.setModalVisible3(true)}>
                <View style = {styles.viewbarang}>
                  <Text style = {styles.txtbarang2}>{v.barang.name}</Text>
                </View>
                <View style = {styles.viewjumlah}>
                  <Text style = {styles.txtstock}>{v.stock}</Text>
                </View>
                <View style = {styles.viewharga}>
                  <Text style = {styles.txtprice}>Rp.{v.price}-,</Text>
                </View>
              </TouchableOpacity>
             </View>
           )
         })}
        
         
         
        
         
         
         


         

          <View style={{width: '100%', height: 40}}></View>
        </ScrollView>

        <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
        >
        <View style = {styles.containermodal}>
          <View style = {styles.viewmodal}>
            <View style = {styles.viewbarcode}>
              <TextInput style = {styles.inputbarcode} value = {this.state.barcode} onChangeText = {(input) => this.setState({barcode:input})} keyboardType = {'number-pad'}/>
              <TouchableOpacity style = {styles.touchbarcode} onPress = {() => this.setModalVisible2(true)}>
                <Image source = {require('../../Assets/barcode.png')} style = {styles.imgbarcode}/>
              </TouchableOpacity>
            </View>
            <View style = {styles.viewharga2}>
              <View style = {styles.viewtxtharga}>
                <Text style = {styles.txtrp2}>Rp.</Text>
              </View>
              <TextInput style = {styles.inputharga2} keyboardType = {'number-pad'} onChangeText = {(price) => this.setState({price})}/>
            </View>
            <TextInput placeholder = {' Jumlah'} keyboardType = {'number-pad'} style = {styles.inputstock} onChangeText = {(stock) => this.setState({stock})}/>
            <View style = {styles.viewtouch}>
              <TouchableOpacity style = {styles.touch} onPress = {() => this.setState({modalVisible : false,price:'',barcode:'',stock:''})}>
                <Text style = {styles.txttouch}>Batal</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.touch2} onPress = {() => this.tambahData()}>
                <Text style = {styles.txttouch}>Tambah</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </Modal>

        <Modal 
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible2}
        >
        <QRCodeScanner
        onRead={this.onSuccess}
        showMarker ={true}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        containerStyle = {{backgroundColor:'rgba(0,0,0,0.5)'}}
        topContent={
          <TouchableOpacity style = {styles.touchclose} onPress = {() => this.setState({modalVisible2:false})}>
            <Image source = {require('../../Assets/blackarow.png')} style = {styles.imgblackarrow}/>
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
          visible={this.state.modalVisible3}
        >
          <View style = {styles.containermodal}>
            <View style = {styles.viewmodal2}>
              <TextInput style = {styles.inputstock2} keyboardType = {'number-pad'}/>
              <View style = {styles.viewtouch2}>
              <TouchableOpacity style = {styles.touch} onPress = {() => this.setState({modalVisible3 : false,})}>
                <Text style = {styles.txttouch}>Batal</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.touch2} onPress = {() => this.tambahData()}>
                <Text style = {styles.txttouch}>Tambah</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
        </Modal>










        <TouchableOpacity style = {styles.touchtambah} onPress = {() => this.setModalVisible(true)}>
          <Image source = {require('../../Assets/whiteplus.png')} style = {styles.imgplus}/>
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
