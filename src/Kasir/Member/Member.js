import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import {styles} from './Stylemember';

export default class Member extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          
          
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
            <Text style={styles.txtprofil}>Member</Text>
          </View>

          <TextInput placeholder = {' Nama'} style = {styles.input} autoCapitalize = {'none'}/>
          <TextInput placeholder = {' Email'} style = {styles.input2} keyboardType = {'email-address'} autoCapitalize = {'none'}/>
          <TextInput placeholder = {' Nomor'} style = {styles.input2} keyboardType = {'number-pad'}/>
          <TextInput placeholder = {' Password'} style = {styles.input2} autoCapitalize = {'none'}/>
          <TextInput placeholder = {' Confirmasipassword'} style = {styles.input2} autoCapitalize = {'none'}/>
          <TextInput placeholder = {' Alamat'} style = {styles.input2}/>

          <TouchableOpacity style = {styles.touch}>
              <Text style = {styles.txt}>Kirim</Text>
          </TouchableOpacity>              
        
            <View style = {{width:'100%',height:50}}></View>
        </ScrollView>
      </View>
    );
  }
}
