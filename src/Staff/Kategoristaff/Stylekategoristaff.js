import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    header: {
        width:'100%',
        height:60,
        backgroundColor:'gray',
        flexDirection:'row',
        alignItems:'center'
    },
    touchback: {
        width:'15%',
        // backgroundColor:'yellow',
        height:60,
        alignItems:'center',
        justifyContent:'center'
    },
    imgback: {
        width:'30%',
        height:25
    },
    txtkategori: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:15
    },
    view1: {
        width:'80%',
        height:250,
        backgroundColor:'gray',
        alignSelf:'center',
        marginTop:30,
        borderRadius:20,
        elevation:10,
        alignItems:'center'
    },
    viewgambar: {
        width:'100%',
        height:200,
        backgroundColor:'#fff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    imgmakanan: {
        width:'100%',
        height:150
    },
    imgelec: {
        width:'60%',
        height:170
    },
    txtmakanan: {
        fontSize:18,
        fontWeight:'bold',
        marginTop:15,
        color:'#fff'
    }
})