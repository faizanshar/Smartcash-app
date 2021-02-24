import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
    // backgroundColor: '#ebffeb',
  },
  header: {
    width: '100%',
    height: 120,
    backgroundColor: 'gray',
    elevation: 10,
  },
  header1: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    justifyContent:'space-between'
  },
  header2: {
    width: '100%',
    height: 60,
    // backgroundColor:'green',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchmenu: {
    width: '15%',
    height: 60,
    // backgroundColor:'yellow',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  touchplus: {
      width:'20%',
      height:60,
    //   backgroundColor:'green',
    //   marginRight:10,
      alignItems:'center',
      justifyContent:'center'
  },
  imgplus: {
      width:'40%',
      height:30,
      marginLeft:10
  },
  imgmenu: {
    width: '60%',
    height: 30,
  },
  viewsearch: {
      width:'80%',
      height:45,
      backgroundColor:'#fff',
      borderRadius:30,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    //   alignSelf:"center"
  },
  txtsearch: {
      fontSize:13,
      marginLeft:10
    //   fontWeight:'bold',
    //   color:'#ddd'
  },
  viewtouchsearch: {
      width:'20%',
      height:45,
    //   backgroundColor:'black',
      borderTopRightRadius:30,
      borderBottomRightRadius:30,
      alignItems:'center',
      justifyContent:"center"
  },
  imgsearch: {
      width:'43%',
      height:25
  },
  viewdata: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
    marginTop: 30,
    elevation: 10,
  },
  viewbarang: {
    width: '100%',
    height: 50,
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewnamabarang: {
    width: '80%',
    height: 50,
    // backgroundColor:'yellow',
    justifyContent: 'center',
  },
  txtnamabarang: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  viewdiskon: {
    width: '18%',
    height: 50,
    backgroundColor: 'yellow',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtdiskon: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'red',
  },
  viewharga: {
    width: '100%',
    height: 50,
    // backgroundColor:'green',
    justifyContent: 'center',
  },
  txthargaasli: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
    marginLeft: 15,
    textDecorationLine: 'line-through',
    // textDecorationStyle:'solid'
  },
  txthargadiskon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 15,
  },
  viewstock: {
    width: '100%',
    height: 40,
    // backgroundColor:'yellow',
    justifyContent: 'center',
    // alignItems:'center'
  },
  txtstock: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  viewtouch: {
    width: '100%',
    height: 60,
    // backgroundColor:'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  touchhapus: {
    width: '20%',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    marginRight: 10,
  },
  txthapus: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
  },
  touchupdate: {
    width: '22%',
    height: 40,
    backgroundColor: '#c4ffc4',
    borderRadius: 10,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  txtupdate: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  viewmendata: {
    width:'100%',
    height:60,
    backgroundColor:'gray',
    alignItems:'center',
    justifyContent:'center',
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    position:'absolute',
    top:630
    // flexDirection:'row'
  },
  touchmendata: {
    width:'14%',
    height:45,
    // backgroundColor:'red',
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center'
    // alignSelf:'center'
  },
  imgmendata: {
    width:'80%',
    height:40
  }
});
