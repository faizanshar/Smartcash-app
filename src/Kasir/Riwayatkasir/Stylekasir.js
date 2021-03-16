import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
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
    txtprofil: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:15
    },
    containerdata: {
        width:'100%',
        height:190,
        backgroundColor:'#fff',
        elevation:10,
        marginTop:10
    },
    viewname: {
        width:'100%',
        minHeight:50,
        // backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center'
    },
    viewkode: {
        width:'70%',
        minHeight:50,
        // backgroundColor:'yellow'
    },
    txtkode: {
        fontSize:14,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:15
    },
    viewtgl: {
        width:'30%',
        minHeight:50,
        // backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
    },
    txttgl: {
        fontSize:14,
        fontWeight:'bold'
    },
    viewtotal: {
        width:'100%',
        minHeight:40,
        // backgroundColor:'green',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    txttotal: {
        fontSize:14,
        fontWeight:'bold',
        marginLeft:15
    },
    txttotal2: {
        fontSize:14,
        fontWeight:'bold',
        color:'green',
        marginRight:15
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