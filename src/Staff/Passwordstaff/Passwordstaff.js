import React, { Component } from 'react'
import { Text, View, Image, TextInput, ToastAndroid, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './Stylepasswordstaff'

export default class Passswordstaff extends Component {
    constructor(){
        super();
        this.state = {
            password: true,
            password2:true,
            password3:true
        }
    }
    render() {
        return (
            <View style = {styles.container}>
                <ScrollView>

                    <View style = {styles.header}>
                        <TouchableOpacity style = {styles.touchback} onPress = {()=>this.props.navigation.goBack()}>
                            <Image source = {require('../../Assets/Whiteback.png')} style = {styles.imgback}/>
                        </TouchableOpacity>
                        <Text style = {styles.txtpassword}>Password</Text>
                    </View>
                           
                    <View style = {styles.viewpassword}>
                        <TextInput placeholder = {' Passwordbaru'} style = {styles.inputpassword} secureTextEntry = {this.state.password}/>
                        <TouchableOpacity style = {styles.touchpassword} onPress = {()=>this.setState({password: !this.state.password})}>
                            <Image 
                                source = {
                                    this.state.password 
                                    ? require('../../Assets/invisible.png')
                                    : require('../../Assets/eye.png')
                                }
                                style = {styles.imgeye}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.viewpassword2}>
                        <TextInput placeholder = {' Passwordlama'} style = {styles.inputpassword} secureTextEntry = {this.state.password2}/>
                        <TouchableOpacity style = {styles.touchpassword} onPress = {()=>this.setState({password2: !this.state.password2})}>
                            <Image 
                                source = {
                                    this.state.password2 
                                    ? require('../../Assets/invisible.png')
                                    : require('../../Assets/eye.png')
                                }
                                style = {styles.imgeye}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.viewpassword2}>
                        <TextInput placeholder = {' Passwordlama'} style = {styles.inputpassword} secureTextEntry = {this.state.password3}/>
                        <TouchableOpacity style = {styles.touchpassword} onPress = {()=>this.setState({password3: !this.state.password3})}>
                            <Image 
                                source = {
                                    this.state.password3 
                                    ? require('../../Assets/invisible.png')
                                    : require('../../Assets/eye.png')
                                }
                                style = {styles.imgeye}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style = {styles.touchubah}>
                        <Text style = {styles.txtubah}>Ubah</Text>
                    </TouchableOpacity>                     
                    
                    
                    <View style = {{width:'100%',height:40}}></View>
                </ScrollView>           
            </View>
        )
    }
}
