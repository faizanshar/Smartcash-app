import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableOpacityBase,
  ToastAndroid
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {styles} from './Styleubahdatastaff';
import {Picker} from '@react-native-community/picker';

class Ubahdatastaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      kategori: '',
      name: '',
      price: '',
      discount: '',
      brand: '',
      method: 'patch',
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          const {item} = this.props.route.params;
          this.setState({
            token: value,
            refresh: false,
            name: item.name,
            price: item.price.toString(),
            brand: item.brand,
            discount: item.discount.toString(),
            kategori: item.kategori
          });
          this.getKategori();
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKEN', this.props.userToken.userReducer.token);
    console.log('Ini Cuy', this.props.route.params.item.id);
  }

  getKategori() {
    this.setState({loading: true});
    fetch('https://smartcash2.herokuapp.com/api/kategori', {
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
            // refresh: false,
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

  editBarang = () => {
    console.log('mulai Mengirim');
    console.log('ini Id',this.props.route.params.item.id);
    const {name,brand,kategori,discount,price,method} = this.state;
    const formData = new FormData();

    formData.append('name', name);
    formData.append('price',price.substring());
    formData.append('_method', method);
    formData.append('discount', discount.substring());
    formData.append('brand', brand);
    formData.append('category_id', kategori);


   
    console.log('Ini data From Data', formData);
    this.setState({loading: true});
    fetch(`https://smartcash2.herokuapp.com/api/barang/update/${this.props.route.params.item.id}`, {
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
          ToastAndroid.show('Berhasil Membuat Permintaan!', 1000);
          this.props.navigation.navigate('Drawer1');
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
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.touchback}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../Assets/Whiteback.png')}
                style={styles.imgback}
              />
            </TouchableOpacity>
            <Text style={styles.txtubah}>Ubah data</Text>
          </View>

          <TextInput
            placeholder={' barang'}
            style={styles.inputbarang}
            value={this.state.name}
            onChangeText = {(input)=>this.setState({name:input})}
          />
          <TextInput
            placeholder={' harga'}
            style={styles.inputharga}
            keyboardType={'number-pad'}
            value = {this.state.price}
            onChangeText = {(input)=>this.setState({price:input})}
          />
          <TextInput
            placeholder={' brand'}
            style={styles.inputharga}
            // keyboardType={'number-pad'}
            value = {this.state.brand}
            onChangeText = {(input)=>this.setState({brand:input})}
          />
          <View style={styles.viewpicker}>
            <Picker
              selectedValue={this.state.kategori}
              onValueChange={(item, index) => this.setState({kategori: item})}>
              {this.state.data.map((item, index) => {
                return (
                  <Picker.Item key={index} label={item.name} value={item.id}/>
                );
              })}
            </Picker>
          </View>
          <TextInput
            placeholder={' diskon'}
            style={styles.inputdiskon}
            keyboardType={'number-pad'}
            value = {this.state.discount}
            onChangeText = {(input)=>this.setState({discount:input})}
          />
          <TouchableOpacity style={styles.touch} onPress = {()=>this.editBarang()}>
            <Text style={styles.txtubah2}>Ubah</Text>
          </TouchableOpacity>
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
export default connect(mapStateToProps)(Ubahdatastaff);
