import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  headerdata: {
    width: '100%',
    height: 30,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewnameheader: {
    width: '100%',
    minHeight: 30,
    minWidth: 10,
    maxWidth: '40%',
    borderRightWidth: 1,
    alignItems: 'center',
    // margin:5,
    // backgroundColor:'red',
    // alignItems:'center',
    justifyContent: 'center',
  },
  txtbarang: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    margin: 5,
  },
  containerdata: {
    width:'100%',
    minHeight:50,
    // backgroundColor:'yellow',
    flexDirection:'row',
    borderBottomWidth:1
  },
  containerdata2: {
    width:'100%',
    minHeight:50,
    // backgroundColor:'yellow',
    flexDirection:'row',
    borderBottomWidth:1,
    marginTop:30,
    borderTopWidth:1
  },
  touchhapus: {
    width:'15%',
    minHeight:50,
    // backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    borderRightWidth:1
  },
  imgsampah: {
    width:'40%',
    height:22
  },
  touchedit: {
    width:'85%',
    minHeight:50,
    // backgroundColor:'green',
    flexDirection:'row'
  },
  viewbarang: {
    width:'45%',
    minHeight:50,
    // backgroundColor:'yellow',
    borderRightWidth:1,
    alignItems:'center',
    justifyContent:"center"
  },
  txtbarang2: {
    fontSize:14,
    fontWeight:'bold',
    margin:10
  },
  viewjumlah: {
    width:'20%',
    minHeight:50,
    // backgroundColor:'red',
    borderRightWidth:1,
    alignItems:'center',
    justifyContent:'center'
  },
  txtstock: {
    fontSize:14,
    fontWeight:'bold'
  },
  viewharga: {
    width:'35%',
    minHeight:50,
    // backgroundColor:'yellow',
    borderRightWidth:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  txtprice: {
    fontSize:13,
    fontWeight:'bold',
    color:'green'
  },
  containermodal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewmodal: {
    width: '80%',
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 10,
  },
  touchtambah: {
    width: '20%',
    height: 70,
    backgroundColor: 'gray',
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 20,
    top: 590,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    opacity: 0.9,
  },
  imgplus: {
    width: '45%',
    height: 30,
  },
  inputharga: {
    width: '86%',
    height: 50,
    maxWidth: '100%',
    // backgroundColor:'red',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    fontSize: 14,
    fontWeight: 'bold',
  },
  containerpendata: {
    width: '100%',
    height: 280,
    backgroundColor: 'gray',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  viewbarcode: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    alignSelf: 'center',
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
  viewharga2: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
    // elevation:8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },
  viewtxtharga: {
    width: '10%',
    height: 50,
    // backgroundColor:'red',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtrp2: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  inputharga2: {
    width: '90%',
    height: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    // backgroundColor:'yellow',
    fontWeight: 'bold',
  },

  inputstock: {
    width: '80%',
    height: 50,
    // backgroundColor:'yellow',
    borderRadius: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
  },
  viewtouch: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor:'yellow',
    marginTop: 20,
  },
  viewtouch2: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor:'yellow',
    marginTop: 40,
  },
  touch: {
    width: '40%',
    height: 50,
    borderRadius: 30,
    backgroundColor: 'red',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  touch2: {
    width: '40%',
    height: 50,
    borderRadius: 30,
    backgroundColor: 'gray',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  txttouch: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
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
  viewmodal2: {
    width: '70%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 10,
    // marginBottom:200
  },
  inputstock2: {
    width:'80%',
    height:50,
    backgroundColor:'red',
    alignSelf:'center',
    marginTop:20,
    borderRadius:20,
    elevation:8
  }
});
