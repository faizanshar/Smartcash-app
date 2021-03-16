import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    header: {
        width: '100%',
        height: 60,
        backgroundColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
      },
      viewdata: {
        width: '100%',
        minHeight: 250,
        backgroundColor: '#fff',
        elevation: 10,
        marginTop: 30,
      },
      touchback: {
        width: '15%',
        // backgroundColor:'yellow',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imgback: {
        width: '30%',
        height: 25,
      },
      touchbarang: {
        width:'20%',
        height:60,
        // backgroundColor:'red',
        left:160,
        alignItems:'center',
        justifyContent:'center'
      },
      imgplus2: {
        width:'35%',
        height:25
      },
      txttambah: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        // marginLeft:15
      },
    viewtabungan: {
        width:'60%',
        height:100,
        backgroundColor:'#fff',
        marginTop:20,
        borderRadius:20,
        alignSelf:'center',
        alignItems:'center',
        elevation:10
    },
    txtsaldo: {
        fontSize:14,
        fontWeight:'bold',
        // color:'#fff',
        marginTop:10
    },
    txtuang: {
        fontSize:18,
        fontWeight:'bold',
        color:'green',
        marginTop:20
    },
    containerdata: {
        width:'100%',
        minHeight:170,
        backgroundColor:'#fff',
        elevation:10,
        marginTop:20
    },
    viewname: {
        width:'100%',
        minHeight:50,
        // backgroundColor:'red',
        flexDirection:'row',
    },
    viewname2: {
        width:'70%',
        minHeight:50,
        // backgroundColor:'yellow'
    },
    txtname: {
        fontSize:14,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:15
    },
    viewname3: {
        width:'30%',
        minHeight:50,
        // backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
    },
    txtname2: {
        fontWeight:'bold',
        fontSize:14,

    },
    viewuang: {
        width:'100%',
        height:40,
        justifyContent:"center",
        // backgroundColor:'yellow'
    },
    txtdebit: {
        fontSize:14,
        fontWeight:'bold',
        marginLeft:15,
        color:'green'
    },
    txtkredit: {
        fontSize:14,
        fontWeight:'bold',
        marginLeft:15,
        color:'red'
    },
    viewtouch: {
        width:'100%',
        height:50,
        // backgroundColor:'yellow',
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    touchhapus: {
        width:'30%',
        height:50,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
        backgroundColor:'red'
    },
    touchubah: {
        width:'30%',
        height:50,
        backgroundColor:'#696969',
        alignItems:'center',
        justifyContent:"center",
        marginRight:10,
        borderRadius:20
    },
    txttouch: {
        fontSize:13,
        fontWeight:'bold',
        color:'#fff'
    },
    containermodal: {
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        alignItems:'center',
        justifyContent:'center'
    },
    viewmodal: {
        width:'80%',
        height:320,
        backgroundColor:'#fff',
        elevation:10,
        borderRadius:20,
        alignItems:'center'
    },
    inputtype: {
        width:'80%',
        height:50,
        backgroundColor:'#fff',
        marginTop:20,
        // elevation:8,
        borderRadius:10,
        borderWidth:1,
        fontWeight:'bold'
    },
    viewtouch2: {
        width:'100%',
        height:50,
        // backgroundColor:'red',
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    touchbatal: {
        width:'40%',
        height:50,
        backgroundColor:'red',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    touchtambah: {
        width:'40%',
        height:50,
        backgroundColor:'#696969',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
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