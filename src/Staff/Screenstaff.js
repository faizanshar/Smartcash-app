import React, {Component} from 'react';
import {Text, View, TouchableOpacity,StatusBar,Image, Modal, RefreshControl, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {styles} from './Stylescreenstaff';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {Picker} from '@react-native-community/picker';


class Screenstaff extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:{},
            date:'',
            month:'',
            year:'',
            months: [
                'Januari',
                'Februari',
                'Maret',
                'April',
                'Mei',
                'Juni',
                'Juli',
                'Agustus',
                'September',
                'Oktober',
                'November',
                'Desember'
            ],
            modalVisible : false,
            supplier_id:'1',
            supplier:[],
            refresh : false
        }
    }
    bukaModal = () => {
        this.setState({modalVisible:true})
    }
    kirimSupplier = () => {
        const supplier_id = this.state.supplier_id;
        this.props.navigation.navigate('Tambahbarang',{item:supplier_id})
        this.setState({modalVisible:false})
    }
    onRefreshControl() {
        this.setState({refresh: true});
        this.getSupplier();
        this.ShowCurrentDate();
      }
    componentDidMount() {
        AsyncStorage.getItem('token')
          .then((value) => {
            console.log('ini Value', value);
            if (value !== null) {
              this.setState({token: value, refresh: false});
            //   this.ShowCurrentDate()  
              this.getSupplier()
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
                supplier: responseJson.data,
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

      ShowCurrentDate=()=>{
 
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
   
        this.setState({date:date,month:month,year:year})
   
       }

       getMonth = () => {
        return(

        <View>
            {this.state.months.filter((item,index) => this.state.month == index+1).map((item,index) => {
                return(
                    <View>
                        <Text>{item}</Text>
                    </View>
                )
            })}
        </View>
        )
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
                <StatusBar backgroundColor = {'gray'}/>
                    <View style = {styles.header}>
                        <View style = {styles.header1}>
                            <TouchableOpacity style = {styles.touchmenu} onPress = {()=>this.props.navigation.openDrawer()}>
                                <Image source = {require('../Assets/Whitemenu.png')} style = {styles.imgmenu}/>
                            </TouchableOpacity>
                            {/* <TouchableOpacity style = {styles.touchplus}>
                                <Image source = {require('../Assets/Whiteplus.png')} style = {styles.imgplus}/>
                            </TouchableOpacity> */}
                        </View>
                        {/* <View style = {styles.header2}>
                            <TouchableOpacity style = {styles.viewsearch}>
                                <Text style = {styles.txtsearch}>Search</Text>
                                <View style = {styles.viewtouchsearch}>
                                    <Image source = {require('../Assets/blacksearch.png')} style = {styles.imgsearch}/>
                                </View>
                            </TouchableOpacity>
                    </View> */}
                    </View>

                   <View style = {styles.view1}>
                       <TouchableOpacity style = {styles.touchalldata} onPress = {()=>this.props.navigation.navigate('Gudangstaff')}>
                           <Image source = {require('../Assets/Grayware.png')} style = {styles.imgdataall}/>
                           <Text style = {styles.txtdataall}>Gudang</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style = {styles.touchalldata} onPress = {() => this.props.navigation.navigate('Riwayatstaff')}>
                           <Image source = {require('../Assets/blackhistory.png')} style = {styles.imgdataall3}/>
                           <Text style = {styles.txtdataall2}>Riwayat pembelian</Text>
                       </TouchableOpacity>
                   </View>
                   <View style = {styles.view2}>
                       <TouchableOpacity style = {styles.touchalldata} onPress = {()=>this.props.navigation.navigate("Perusahaanstaff")}>
                          <Image source = {require('../Assets/Blackcompany.png')} style = {styles.imgdataall2}/>
                          <Text style = {styles.txtdataall2}>Perusahaan</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style = {styles.touchalldata} onPress = {()=>this.props.navigation.navigate("Kategoristaff")}>
                           <Image source = {require('../Assets/graykategori.png')} style = {styles.imgdataall2}/>
                           <Text style = {styles.txtdataall2}>kategori</Text>
                       </TouchableOpacity>
                   </View>

                    
                    

                    <View style = {{width:'100%',height:70}}></View>
            </ScrollView>

            {/* <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.modalVisible}
            >
            <View style = {styles.containermodal}>
                <View style = {styles.viewmodal}>
                    <View style={styles.viewpicker}>
                        <Picker
                        selectedValue={this.state.supplier_id}
                        onValueChange={(item, index) => this.setState({supplier_id: item})}>
                        {this.state.supplier.map((item, index) => {
                            return (
                            <Picker.Item key={index} label={item.name} value={item.id}/>
                            );
                        })}
                        </Picker>
                    </View>
                    <View style = {styles.viewtouch}>
                        <TouchableOpacity style = {styles.touchbatal} onPress = {() => this.setState({modalVisible:false})}>
                            <Text style = {styles.txt}>Batal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.touchkirim} onPress = {() => this.kirimSupplier()}>
                            <Text style = {styles.txt}>Tambah</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </Modal> */}


            <View style = {styles.viewmendata}>
                <TouchableOpacity style = {styles.touchmendata} onPress = {() => this.props.navigation.navigate('Tambahbarang')}>
                    <Image source = {require('../Assets/whiteadd.png')} style = {styles.imgmendata}/>
                </TouchableOpacity>
            </View>

        </View>
    )
  }
}
const mapStateToProps = (state) => {
    return {
      userToken: state,
    };
  };
export default connect(mapStateToProps)(Screenstaff);
                    


                    
