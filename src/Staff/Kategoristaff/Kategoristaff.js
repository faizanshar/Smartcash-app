import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import {styles} from './Stylekategoristaff'

export default class Kategoristaff extends Component {
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

                    <TouchableOpacity style = {styles.view1}>
                        <View style = {styles.viewgambar}>
                            <Image source = {require('../../Assets/makanan.png')} style = {styles.imgmakanan}/>
                        </View>
                        <Text style = {styles.txtmakanan}>Makanan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.view1}>
                        <View style = {styles.viewgambar}>
                            <Image source = {require('../../Assets/minuman.png')} style = {styles.imgmakanan}/>
                        </View>
                        <Text style = {styles.txtmakanan}>Minuman</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.view1}>
                        <View style = {styles.viewgambar}>
                            <Image source = {require('../../Assets/elektronic.png')} style = {styles.imgelec}/>
                        </View>
                        <Text style = {styles.txtmakanan}>Elektronic</Text>
                    </TouchableOpacity>

                    <View style = {{width:'100%',height:30}}>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

