import React, {Component} from 'react';
import {Text, View, TouchableOpacity,StatusBar,Image, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {styles} from './Stylescreenstaff';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

class Screenstaff extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:{}
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('token')
          .then((value) => {
            console.log('ini Value', value);
            if (value !== null) {
              this.setState({token: value, refresh: false});
                
            } else {
                this.props.navigation.navigate('Login');
            }
          })
          .catch((err) => console.log(err));
        console.log('ini TOKEN', this.props.userToken.userReducer.token);
      }
              
  render() {
    return (
        <View style={styles.container}>
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

            <ScrollView>
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

            <View style = {styles.viewmendata}>
                <TouchableOpacity style = {styles.touchmendata} onPress = {()=>this.props.navigation.navigate('Tambahbarang')}>
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
                    


                    
