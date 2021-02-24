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
} from 'react-native';
import {styles} from './Styletambahbarang';
import {Picker} from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import _ from 'lodash'

class Tambahbarang extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      list: [],
      newItem: '',
      modalVisible: false,
      data2: [],
      alldata:[]
    };
    // const alldata = _.find(this.state.data2.barcode,{id:this.state.list.id})
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  // let data2 = {...this.state.data}
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini Value', value);
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getSupplier();
          this.getBarang();
        } else {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((err) => console.log(err));
    console.log('ini TOKEN', this.props.userToken.userReducer.token);
  }

  
  getSupplier() {
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

  getBarang() {
    this.setState({loading: true});
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
            data2: responseJson.data,
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

  add = (item) => {
    // const alldata = _.find(this.state.data2.barcode,{id:this.state.list.id})
    // if(alldata){
    //   tambahData(alldata.id,alldata.stock + 1)
    // }else{
    //   addData(item.id,1)
    //     .the
    // }
    this.setState({list: this.state.list.concat(this.state.newItem)});
    this.setState({newItem: ''});
    this.setModalVisible(!this.state.modalVisible);
  };

  hapus = () => {
    this.setState({list: []});
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          
          <StatusBar backgroundColor={'gray'} />
          <View style={styles.header}>
            <TouchableOpacity style={styles.touchback} onPress={() => this.props.navigation.goBack()}>
              <Image source={require('../../Assets/Whiteback.png')} style = {styles.imgback}/>
            </TouchableOpacity>
            <Text style={styles.txttambah}>Tambah barang</Text>
          </View>



          {this.state.data2.map((item,index) => {
            return(
              <View style = {styles.containerdata} key = {index}>
                <View style = {styles.viewbarang}>
                  <Text style = {styles.txtname}>{item.name}</Text>
                </View>
                <View style = {styles.viewjumlah}>
                  <Text style = {styles.txtjumlah}>Jumlah</Text>
                  <TextInput style = {styles.inputjumlah} keyboardType = {'number-pad'}/>
                </View>
                <View style = {styles.viewharga}>
                  <Text style = {styles.txtrp}>Rp.</Text>
                  <TextInput style = {styles.inputharga} keyboardType = {'number-pad'}/>
                </View>
              </View>
            )
          })}



         
        
         
         
        
         
         
         
          {/* <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.containermodal}>
              <TextInput
                style={styles.inputdata}
                onChangeText={(newItem) => this.setState({newItem})}
              />
              <TouchableOpacity
                style={styles.touchdata}
                onPress={() => this.add()}>
                <Text style={styles.txtdata}>Data</Text>
              </TouchableOpacity>
            </View>
          </Modal> */}

          {/* <TouchableOpacity
            style={styles.toucharrowatas}
            onPress={() => this.setModalVisible(true)}>
            <Image
              source={require('../../Assets/Arrowatas.png')}
              style={styles.imgarrowatas}
            />
          </TouchableOpacity> */}

          <View style={{width: '100%', height: 40}}></View>
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
export default connect(mapStateToProps)(Tambahbarang);
