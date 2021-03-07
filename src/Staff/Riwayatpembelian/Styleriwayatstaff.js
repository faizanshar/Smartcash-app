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
    touchdata: {
        width:'100%',
        minHeight:250,
        backgroundColor:'#fff',
        marginTop:30,
        elevation:10
    },
    viewname: {
        width:'100%',
        minHeight:50,
        // backgroundColor:'red',
        flexDirection:'row'
    },
    viewname1: {
        width:'65%',
        minHeight:50,
        // backgroundColor:'yellow',
        // justifyContent:'center'
    },
    txtname1: {
        fontSize:15,
        fontWeight:'bold',
        color:'#000',
        marginLeft:15,
        marginTop:16
    },
    viewname2: {
        width:'35%',
        height:50,
        // backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
    },
    txtname2: {
        fontSize:14,
        fontWeight:'bold',
        color:'#000'
    },
    viewnomor: {
        width:'100%',
        height:30,
        // backgroundColor:'red',
        justifyContent:'center'
    },
    txtnomor: {
        fontSize:13,
        fontWeight:'bold',
        marginLeft:15
    },
    viewaddress: {
        width:'100%',
        minHeight:50,
        // backgroundColor:'green',
        flexDirection:'row'
    },
    imgaddress: {
        width:'6%',
        height:20,
        marginLeft:15
    },
    txtaddress: {
        fontWeight:'bold',
        fontSize:13,
        marginLeft:10,
        marginTop:4
    },
    viewtotal: {
        width:"100%",
        height:70,
        // backgroundColor:'yellow',
        justifyContent:'center'
    },
    txt: {
        fontSize:15,
        fontWeight:'bold',
        marginLeft:15,
    },
    viewtouch: {
        width:'100%',
        height:40,
        // backgroundColor:'red',
        alignItems:'flex-end',
        // flexDirection:'row',
        // justifyContent:'space-around',
    },
    touchhapus: {
        width:'20%',
        height:40,
        backgroundColor:'red',
        marginRight:20,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    txthapus: {
        fontSize:13,
        fontWeight:'bold',
        color:'#fff'
    },
    viewwaktu: {
        width:'30%',
        height:40,
        backgroundColor:'yellow',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    txtdate: {
        marginRight:5
    },
    txtyear: {
        marginLeft:5
    },
    imgwait: {
        width:'80%',
        height:200,
        alignSelf:'center'
      },
      txtwait: {
        fontSize:15,
        fontWeight:'bold',
        alignSelf:'center'
      }
})