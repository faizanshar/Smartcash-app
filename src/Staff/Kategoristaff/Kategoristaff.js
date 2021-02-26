import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, ToastAndroid, Modal, TextInput } from 'react-native'
import {styles} from './Stylekategoristaff'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

class Kategoristaff extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            method:'delete',
            name:'',
            method2:'patch',
            modalVisible:false,
            data2:{},
            modalVisible2:false,
            name2:''
        }
    }

    setModalVisible = (visible,item) => {
      console.log('iniii',item.item.id);
        this.setState({modalVisible:visible})
        this.setState({name:item.item.name})
        this.setState({data2:item.item})
        console.log('ini nama',this.state.name);
        console.log('ini id',this.state.data2.id);

        // console.log(data2);
        // const item = this.state;
        // this.setState({name:data2.name})
    }
    setModalVisible2 = (visible) => {
      this.setState({modalVisible2:visible})
    }
    componentDidMount() {
        AsyncStorage.getItem('token')
          .then((value) => {
            console.log('ini Value', value);
            if (value !== null) {
              this.setState({token: value, refresh: false});
              this.getKategori()  
            } else {
                this.props.navigation.navigate('Login');
            }
          })
          .catch((err) => console.log(err));
        console.log('ini TOKEN', this.props.userToken.userReducer.token);
        // console.log('ini data', this.props.route.params);
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
            console.log('ini Dia',responseJson);
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

      editKategori = (id) => {
        console.log('mulai Mengirim');
        // console.log('ini Id',this.props.route.params.item.id);
        const {name,method2} = this.state;
        const formData = new FormData();
    
        formData.append('name', name);
        formData.append('_method',method2);
        
    
    
       
        console.log('Ini data From Data', formData);
        this.setState({loading: true});
        fetch(`https://smartcash2.herokuapp.com/api/kategori/update/${id}`, {
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
              this.props.navigation.navigate('Drawer1');
              this.setState({loading: false});
              this.setState({modalVisible:false})
            } else {
              ToastAndroid.show('Gagal Membuat Permintaan,1000');
              this.setState({loading: false});
              this.setState({modalVisible:false})

            }
          })
          .catch((error) => {
            console.log(error);
            this.setState({loading: false});
            ToastAndroid.show('Gagal Membuat Permintaan', 1000);
            this.setState({modalVisible:false})

          });
        // ToastAndroid.show('Gagal Membuat Permintaan,1000');
      };

      tambahKategori = () => {
        console.log('mulai Mengirim');
        const {name2} = this.state;
        const formData = new FormData();
    
        formData.append('name', name2);
        
    
    
       
        console.log('Ini data From Data', formData);
        this.setState({loading: true});
        fetch(`https://smartcash2.herokuapp.com/api/kategori/add`, {
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
              ToastAndroid.show('Berhasil Menambah!', 1000);
              this.props.navigation.navigate('Drawer1');
              this.setState({loading: false});
              this.setState({modalVisible2:false})
            } else {
              ToastAndroid.show('Gagal Membuat Permintaan,1000');
              this.setState({loading: false});
              this.setState({modalVisible2:false})

            }
          })
          .catch((error) => {
            console.log(error);
            this.setState({loading: false});
            ToastAndroid.show('Error!', 1000);
            this.setState({modalVisible2:false})

          });
        // ToastAndroid.show('Gagal Membuat Permintaan,1000');
      };

      hapusKategori = (id) => {
        console.log('mulai Mengirim');
    
        const {method} = this.state;
        const formData = new FormData();
    
        formData.append('_method', method);
        // formData.append('password', password2);
    
        this.setState({loading: true});
        fetch(`https://smartcash2.herokuapp.com/api/kategori/delete/${id}`, {
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
              this.props.navigation.navigate('Drawer1')
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
            <View style = {styles.container}>
                <ScrollView>
                    
                    <View style = {styles.header}>
                        <TouchableOpacity style = {styles.touchback} onPress = {()=>this.props.navigation.goBack()}>
                            <Image source = {require('../../Assets/Whiteback.png')} style = {styles.imgback}/>
                        </TouchableOpacity>
                        <Text style = {styles.txtkategori}>Kategori</Text>
                    </View>

                {this.state.data.map((item,index) => {
                    return(
                        <View key = {index}>
                            <View style = {styles.touchdata}>
                                <View style = {styles.viewname}>
                                    <Text style = {styles.txtname}>{item.name}</Text>
                                </View>
                                <View style = {styles.viewtouch}>
                                    <TouchableOpacity style = {styles.touchhapus} onPress = {() => this.hapusKategori(item.id)}>
                                        <Text style = {styles.txt}>Hapus</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {styles.touchubah} onPress = {() => this.setModalVisible(true,{item:item})}>
                                        <Text style = {styles.txt}>Ubah</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                })}
                
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    // onRequestClose={() => {
                    //     Alert.alert('Modal has been closed.')}}    
                >
                <View style = {styles.containermodal}>
                    <View style = {styles.viewmodal}>
                      <TextInput style = {styles.inputubah} value = {this.state.name} onChangeText = {(input) => this.setState({name:input})}/>
                      <View style = {styles.viewubah}>
                        <TouchableOpacity style = {styles.touchbatal} onPress={() => this.setState({modalVisible:false})}>
                          <Text style = {styles.txtubah}>Batal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.touchedit} onPress = {() => this.editKategori(this.state.data2.id)}>
                          <Text style = {styles.txtubah}>Ubah</Text>
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
                 <View style = {styles.containermodal}>
                    <View style = {styles.viewmodal}>
                      <TextInput style = {styles.inputubah} onChangeText = {(name2) => this.setState({name2})}/>
                      <View style = {styles.viewubah}>
                        <TouchableOpacity style = {styles.touchbatal} onPress={() => this.setState({modalVisible2:false})}>
                          <Text style = {styles.txtubah}>Batal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.touchedit} onPress = {() => this.tambahKategori()}>
                          <Text style = {styles.txtubah}>Tambah</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                </View>
                </Modal>
                      

                    <View style = {{width:'100%',height:100}}></View>
                </ScrollView>
                <TouchableOpacity style = {styles.touchtambah} onPress = {() => this.setModalVisible2(true)}>
                  <Image source = {require('../../Assets/whiteplus.png')} style = {styles.imgplus}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      userToken: state,
    };
  };
export default connect(mapStateToProps)(Kategoristaff);
