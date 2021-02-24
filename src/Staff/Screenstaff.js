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
                        <View style = {styles.header2}>
                            <TouchableOpacity style = {styles.viewsearch}>
                                <Text style = {styles.txtsearch}>Search</Text>
                                <View style = {styles.viewtouchsearch}>
                                    <Image source = {require('../Assets/blacksearch.png')} style = {styles.imgsearch}/>
                                </View>
                            </TouchableOpacity>
                    </View>
                    </View>

            <ScrollView>
                    <TouchableOpacity style = {styles.viewdata}>
                        <View style = {styles.viewbarang}>
                            <View style = {styles.viewnamabarang}>
                                <Text style = {styles.txtnamabarang}>Indomie Goreng sedap 200</Text>
                            </View>
                            <View style = {styles.viewdiskon}>
                                <Text style = {styles.txtdiskon}>20%</Text>
                            </View>
                        </View>
                        <View style = {styles.viewharga}>
                            <Text style = {styles.txthargaasli}>Rp.100000,-</Text>
                            <Text style = {styles.txthargadiskon}>Rp.80000,-</Text>
                        </View>
                        <View style = {styles.viewstock}>
                            <Text style = {styles.txtstock}>Stock: 10</Text>
                        </View>
                        <View style = {styles.viewtouch}>
                            <TouchableOpacity style = {styles.touchhapus}>
                                <Text style = {styles.txthapus}>Hapus</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.touchupdate}>
                                <Text style = {styles.txtupdate}>update</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.viewdata}>
                        <View style = {styles.viewbarang}>
                            <View style = {styles.viewnamabarang}>
                                <Text style = {styles.txtnamabarang}>Indomie Goreng sedap 200</Text>
                            </View>
                            <View style = {styles.viewdiskon}>
                                <Text style = {styles.txtdiskon}>20%</Text>
                            </View>
                        </View>
                        <View style = {styles.viewharga}>
                            <Text style = {styles.txthargaasli}>Rp.100000,-</Text>
                            <Text style = {styles.txthargadiskon}>Rp.80000,-</Text>
                        </View>
                        <View style = {styles.viewstock}>
                            <Text style = {styles.txtstock}>Stock: 10</Text>
                        </View>
                        <View style = {styles.viewtouch}>
                            <TouchableOpacity style = {styles.touchhapus}>
                                <Text style = {styles.txthapus}>Hapus</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.touchupdate}>
                                <Text style = {styles.txtupdate}>update</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.viewdata}>
                        <View style = {styles.viewbarang}>
                            <View style = {styles.viewnamabarang}>
                                <Text style = {styles.txtnamabarang}>Indomie Goreng sedap 200</Text>
                            </View>
                            <View style = {styles.viewdiskon}>
                                <Text style = {styles.txtdiskon}>20%</Text>
                            </View>
                        </View>
                        <View style = {styles.viewharga}>
                            <Text style = {styles.txthargaasli}>Rp.100000,-</Text>
                            <Text style = {styles.txthargadiskon}>Rp.80000,-</Text>
                        </View>
                        <View style = {styles.viewstock}>
                            <Text style = {styles.txtstock}>Stock: 10</Text>
                        </View>
                        <View style = {styles.viewtouch}>
                            <TouchableOpacity style = {styles.touchhapus}>
                                <Text style = {styles.txthapus}>Hapus</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.touchupdate}>
                                <Text style = {styles.txtupdate}>update</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
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
                    


                    
