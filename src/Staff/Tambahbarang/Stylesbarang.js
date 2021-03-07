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
      txttambah: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        // marginLeft:15
      },
      containerbarang: {
          width:'100%',
          minHeight:320,
          backgroundColor:'#fff',
          elevation:8,
          marginTop:30
      },
      viewname: {
          width:'100%',
          minHeight:50,
        //   backgroundColor:"red",
        //   justifyContent:'center'
      },
      txtname: {
          fontSize:15,
          fontWeight:'bold',
          marginTop:15,
          marginLeft:15
      },
      viewbrand: {
          width:'100%',
          height:30,
        //   backgroundColor:'yellow',
          justifyContent:'center',
          marginTop:20
      },
      viewstock: {
        width:'100%',
        height:30,
        // backgroundColor:'red',
        justifyContent:'center',
        // marginTop:20
    },
    viewbarcode: {
        width:'100%',
        height:30,
        // backgroundColor:'yellow',
        justifyContent:'center',
        // marginTop:20
    },
    viewprice: {
        width:'100%',
        height:40,
        // backgroundColor:'yellow',
        justifyContent:'center',
        marginTop:10
    },
    txtbrand: {
        fontSize:13,
        fontWeight:'bold',
        marginLeft:15
    },
    txtstock: {
        fontSize:13,
        fontWeight:'bold',
        marginLeft:15
    },
    txtbarcode: {
        fontSize:13,
        fontWeight:'bold',
        marginLeft:15
    },
    txtprice: {
        fontSize:15,
        fontWeight:'bold',
        color:'green',
        marginLeft:15
    },
    touchbarang: {
        width:'20%',
        height:60,
        // backgroundColor:'red',
        left:170,
        alignItems:'center',
        justifyContent:'center'
      },
      imgplus2: {
        width:'35%',
        height:25
      },
    viewtouch: {
        width:'100%',
        height:50,
        // backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:20
    },
    touchdelete: {
        width:'30%',
        height:50,
        backgroundColor:'red',
        marginRight:20,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    touchubah: {
        width:"30%",
        height:50,
        backgroundColor:'#696969',
        marginRight:20,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    txttouch: {
        fontSize:13,
        fontWeight:'bold',
        color:"#fff"
    },
    containermodal: {
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        alignItems:'center',
        justifyContent:'center'
    },
    viewmodal: {
        width:'80%',
        height:410,
        backgroundColor:'#fff',
        elevation:8,
        borderRadius:10,
        // justifyContent:"center",
        alignItems:'center'
    },
    viewmodal2: {
        width:'80%',
        height:330,
        backgroundColor:'#fff',
        elevation:8,
        borderRadius:10,
        // justifyContent:"center",
        alignItems:'center'
    },
    viewbarcode2: {
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        // alignSelf: 'center',
        marginTop: 20,
        // elevation:8,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
      },
      inputbarcode: {
        width: '75%',
        height: 50,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        fontWeight:'bold'
        // backgroundColor:'red'
      },
      touchbarcode: {
        width: '25%',
        height: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        // backgroundColor:'yellow',
        alignItems: 'center',
        justifyContent: 'center',
      },
      imgbarcode: {
        width: '50%',
        height: 30,
      },
      inputbarang: {
          width:'80%',
          height:50,
          backgroundColor:'#fff',
          marginTop:10,
          borderWidth:1,
          borderRadius:10,
          fontWeight:'bold'
      },
      viewharga: {
          width:'80%',
          height:50,
          borderRadius:10,
          borderWidth:1,
          marginTop:10,
          flexDirection:'row',
          alignItems:'center'
      },
      viewrp: {
          width:'15%',
          height:50,
          alignItems:'center',
          justifyContent:"center",
        //   backgroundColor:'yellow',
          borderBottomLeftRadius:10,
          borderTopLeftRadius:10
      },
      txtrp: {
          fontSize:14,
          fontWeight:'bold',
      },
      inputharga: {
          width:'85%',
          height:50,
          borderTopRightRadius:10,
          borderBottomRightRadius:10,
        //   backgroundColor:'red',
          fontWeight:'bold'
      },
      viewkategori: {
          width:'80%',
          height:50,
          backgroundColor:'#fff',
          borderWidth:1,
          borderRadius:10,
          marginTop:10
      },
      viewtouch2: {
          width:'100%',
          height:50,
        //   backgroundColor:"yellow",
          marginTop:30,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-around'
      },
      touchbatal: {
          width:'40%',
          height:50,
          backgroundColor:'red',
          borderRadius:20,
          alignItems:'center',
          justifyContent:"center"
      },
      touchtambah: {
          width:'40%',
          height:50,
          backgroundColor:'#696969',
          borderRadius:20,
          alignItems:'center',
          justifyContent:'center'
      },
      touchclose: {
        width: '13%',
        height: 45,
        backgroundColor: 'rgba(255,255,255,0.9)',
        alignSelf: 'flex-start',
        bottom: 50,
        marginLeft: 10,
        borderRadius: 30,
        alignItems:'center',
        justifyContent:'center'
      },
      imgblackarrow: {
        width:'50%',
        height:25
      },
      imgloading: {
        width:'40%',
        height:50
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
      