import {StyleSheet} from 'react-native'

export const styles =  StyleSheet.create( {
    container: {
        flex:1,
        backgroundColor:"#fff"
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
    touchtambah: {
        width:'20%',
        height:70,
        backgroundColor:'#fff',
        position:'absolute',
        alignSelf:'flex-end',
        top:580,
        right:20,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
        elevation:10,
        opacity:0.7
    },
    imgtambah: {
        width:'50%',
        height:30
    },
    containermodal: {
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        alignItems:'center',
        justifyContent:'center'
    },
    viewmodal: {
        width:'80%',
        height:250,
        backgroundColor:'#fff',
        borderRadius:20,
        elevation:8,
        alignItems:'center'
    },
    viewscan: {
        width:'80%',
        height:50,
        backgroundColor:'#fff',
        borderRadius:10,
        borderWidth:1,
        marginTop:30,
        flexDirection:'row',
        alignItems:'center'
    },
    inputscan: {
        width:'75%',
        height:50,
        // backgroundColor:"red",
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        fontWeight:'bold'
    },
    touchscan: {
        width:'25%',
        height:50,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        // backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:"center"
    },
    imgbarcode: {
        width:'50%',
        height:25
    },
    inputjumlah: {
        width:'80%',
        height:50,
        backgroundColor:'#fff',
        borderRadius:10,
        borderWidth:1,
        marginTop:10,
        fontWeight:'bold'
    },
    inputkode: {
        width:'80%',
        height:50,
        backgroundColor:'#fff',
        borderRadius:10,
        borderWidth:1,
        marginTop:10,
        fontWeight:'bold'
    },
    viewtouch: {
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
        borderRadius:20,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    touchkirim: {
        width:'40%',
        height:50,
        backgroundColor:'#696969',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20   
    },
    txttouch: {
        fontSize:14,
        fontWeight:'bold',
        color:'#fff'
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
      containerdata: {
          width:'100%',
          height:50,
          backgroundColor:'#fff',
          borderBottomWidth:1,
          flexDirection:'row',
      },
      containerdata2: {
        width:'100%',
        height:50,
        backgroundColor:'#fff',
        borderBottomWidth:1,
        flexDirection:'row',
        // marginTop:10,
        borderTopWidth:1
    },
    containerdata3: {
        width:'100%',
        height:50,
        backgroundColor:'#fff',
        borderBottomWidth:1,
        flexDirection:'row',
        // marginTop:10,
        // borderTopWidth:1
    },
    txtnama2: {
        fontSize:14,
        fontWeight:'bold'
    },
      touchsampah: {
          width:'10%',
          minHeight:50,
          borderRightWidth:1,
          alignItems:"center",
          justifyContent:'center'
      },
      imgsampah: {
          width:'45%',
          height:20
      },
      containeredit: {
          width:'100%',
          minHeight:50,
          flexDirection:'row'
        //   backgroundColor:'red'
      },
      viewname: {
          width:"30%",
          minHeight:50,
          borderRightWidth:1,
          alignItems:'center',
          justifyContent:'center'
      },
      txtname: {
          fontSize:13,
          fontWeight:'bold',
          marginLeft:10
      },
      viewjumlah: {
          width:'13%',
          height:50,
          borderRightWidth:1,
          alignItems:'center',
          justifyContent:'center'
      },
      txtjumlah: {
          fontSize:13,
          fontWeight:'bold'
      },
      viewharga: {
          width:'23%',
          height:50,
          borderRightWidth:1,
          alignItems:'center',
          justifyContent:'center'
      },
      txtprice: {
          fontSize:14,
          fontWeight:'bold',
          color:'green'
      },
      viewharga2: {
        width:'24%',
        height:50,
        borderRightWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    touchbayar: {
        width:"70%",
        height:50,
        backgroundColor:'#696969',
        alignSelf:'center',
        marginTop:30,
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
      },
      viewselesai: {
          width:'80%',
          height:390,
          backgroundColor:'#fff',
          borderRadius:20,
          elevation:10,
          alignItems:'center'
      },
      imgsukses: {
        width:'90%',
        height:100
      },
      viewtransaksi: {
          width:'100%',
          minHeight:30,
        //   backgroundColor:'red',
          marginTop:10,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
        //   borderBottomWidth:1
      },
      txttransaksi: {
          fontSize:13,
          fontWeight:'bold',
          marginLeft:15
      },
      txttransaksi2: {
          fontSize:13,
          fontWeight:'bold',
          marginRight:15
      },
      touch: {
          width:'40%',
          height:40,
          backgroundColor:'#696969',
          marginTop:25,
          borderRadius:30,
          alignItems:'center',
          justifyContent:'center'
      },
      viewdibayar: {
          width:'80%',
          height:240,
          backgroundColor:'#fff',
          borderRadius:20,
          elevation:10,
          alignItems:'center'
      },
      viewuang: {
          width:'80%',
          height:50,
          marginTop:15,
          borderRadius:10,
          borderWidth:1,
          flexDirection:'row',
          alignItems:'center'
      },
      viewrp: {
          width:'15%',
          height:50,
          borderBottomLeftRadius:10,
          borderTopLeftRadius:10,
        //   backgroundColor:'yellow',
          alignItems:'center',
          justifyContent:"center"
      },
      txtrp: {
          fontSize:14,
          fontWeight:"bold"
      },
      inputuang: {
          width:'85%',
          height:50,
        //   backgroundColor:"red",
          borderTopRightRadius:10,
          borderBottomRightRadius:10,
          fontWeight:'bold'
      },
      inputjumlah2: {
          width:'80%',
          height:50,
          borderRadius:10,
          borderWidth:1,
          marginTop:10,
          fontWeight:'bold'

      }  
})