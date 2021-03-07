import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  ScrollView,
  StatusBar,
} from 'react-native';
import {styles} from './Stylekasir'



export default class Kasir extends Component {
  render() {
    return (
      <View style = {styles.container}>
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
            <Text style={styles.txtprofil}>Kasir</Text>
          </View>
        
        
        </ScrollView>
      </View>
    );
  }
}
