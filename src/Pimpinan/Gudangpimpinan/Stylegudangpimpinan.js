import { StyleSheet } from 'react-native'

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
    txtgudang: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:15
    },
    containerdata: {
        width:'100%',
        height:200,
        backgroundColor:'#fff',
        elevation:10,
        marginTop:15
    },
    viewbarang: {
        width:'100%',
        minHeight:50,
        // backgroundColor:'red',
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'space-between'
    },
    txtbarang: {
        fontSize:15,
        fontWeight:'bold',
        marginLeft:15,
        color:'#000',
        marginTop:15,
        maxWidth:'76%'
    },
    viewdiskon: {
        width:'15%',
        height:45,
        backgroundColor:'yellow',
        marginRight:10,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    txtdiskon: {
        fontSize:15,
        fontWeight:'bold',
        color:'red'
    },
    viewbrand: {
        width:'100%',
        height:30,
        // backgroundColor:'yellow',
        // marginTop:10,
        // alignItems:'center',
        justifyContent:'center'
    },
    txtbrand: {
        fontSize:15,
        fontWeight:'bold',
        marginLeft:15,
        color:'gray'
    },
    viewharga: {
        width:'100%',
        minHeight:50,
        // backgroundColor:'red',
        marginTop:5,
        justifyContent:'center'
    },
    txthargadiskon: {
        fontSize:18,
        fontWeight:'bold',
        color:'gray',
        // fontStyle:'italic',
        marginLeft:20,
        textDecorationLine:'line-through'
        // flexWrap:'wrap'
    },
    txtharga: {
        fontSize:20,
        fontWeight:'bold',
        color:'green',
        marginLeft:20
    },
    viewtouch: {
        width:'100%',
        height: 50,
        // backgroundColor:'red',
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    touchhapus: {
        width:'25%',
        height:40,
        backgroundColor:'red',
        borderRadius:20,
        marginRight:10,
        alignItems:'center',
        justifyContent:'center'
    },
    touchupdate: {
        width:'25%',
        height:40,
        backgroundColor:'gray',
        borderRadius:20,
        marginRight:10,
        alignItems:'center',
        justifyContent:'center'

    },
    txthapus: {
        fontSize:13,
        fontWeight:'bold',
        color:'#fff'
    },
    txtubah: {
        fontSize:13,
        fontWeight:'bold',
        color:'#fff'
    },
    containermodal: {
        width: '100%',
        height: 690,
        // backgroundColor:'red',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
      viewmodal: {
        width: '80%',
        height: 250,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      txttanya: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      viewtanya: {
        width: '80%',
        height: 30,
        marginTop: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
      txt: {
        fontSize:15,
        fontWeight:'bold'
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