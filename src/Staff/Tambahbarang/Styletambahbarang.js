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
      width:'100%',
      minHeight:250,
      backgroundColor:'#fff',
      elevation:10,
      marginTop:30
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
    width:'100%',
    height:30,
    borderWidth:1,
    flexDirection:'row',
    alignItems:'center'
  },
  viewnameheader: {
    width:'100%',
    minHeight:30,
    minWidth:10,
    maxWidth:'40%',
    borderRightWidth:1,
    alignItems:'center',
    // margin:5,
    // backgroundColor:'red',
    // alignItems:'center',
    justifyContent:'center'
  },
  txtbarang: {
    fontSize:14,
    fontWeight:'bold',
    color:'#000',
    margin:5
  },
  containerdata: {
    width:'100%',
    minHeight:200,
    backgroundColor:'#fff',
    marginTop:20,
    elevation:10
  },
  viewbarang: {
    width:'100%',
    minHeight:50,
    // backgroundColor:'yellow',
    // alignItems:'center',
    justifyContent:'center'
  },
  txtname: {
    fontSize:15,
    fontWeight:'bold',
    color:'#000',
    marginLeft:15
  },
  viewjumlah: {
    width:'100%',
    minHeight:50,
    // backgroundColor:'red',
    marginTop:10,
    flexDirection:'row',
    alignItems:'center'
  },
  txtjumlah: {
    fontSize:15,
    fontWeight:'bold',
    color:'#000',
    marginLeft:15,
  },
  inputjumlah: {
    minWidth:'17%',
    borderWidth:1,
    borderRadius:20,
    height:35,
    marginLeft:10,
    maxWidth:'70%'
  },
  viewharga: {
    width:'60%',
    height:50,
    maxWidth:'80%',
    // backgroundColor:'yellow',
    // alignSelf:'center',
    marginTop:10,
    borderRadius:30,
    borderWidth:1,
    marginLeft:15,
    flexDirection:'row',
    alignItems:'center'
  },
  txtrp: {
    fontSize:14,
    fontWeight:'bold',
    color:'#000',
    marginLeft:10,
  },
  inputharga: {
    width:'86%',
    height:50,
    maxWidth:'100%',
    // backgroundColor:'red',
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    fontSize:14,
    fontWeight:'bold'
  }
});
