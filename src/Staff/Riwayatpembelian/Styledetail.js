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
    txtriwayat: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        // marginLeft:15
    },
    containerdata: {
        width:'100%',
        minHeight:140,
        backgroundColor:'#fff',
        marginTop:30,
        elevation:10
    },
    viewname: {
        width:'100%',
        minHeight:50,
        // backgroundColor:'red',
        // justifyContent:'center'
    },
    txtname: {
        fontSize:14,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:15
    },
    viewstock: {
        width:'100%',
        height:30,
        // backgroundColor:'yellow',
        justifyContent:'center'
    },
    txtstock: {
        fontSize:13,
        fontWeight:'bold',
        marginLeft:15
    },
    viewuang: {
        width:'100%',
        height:40,
        // backgroundColor:'red',
        marginTop:20,
        justifyContent:'center'
    },
    txtuang: {
        fontSize:16,
        fontWeight:'bold',
        color:'green',
        marginLeft:15
    }
})