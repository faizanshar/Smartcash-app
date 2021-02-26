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
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50
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
  view1: {
    width:'100%',
    height:150,
    // backgroundColor:'red',
    marginTop:80,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-around"
  },
  view2: {
    width:'100%',
    height:150,
    // backgroundColor:'red',
    marginTop:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-around"
  },
  touchalldata: {
    width:'40%',
    height:130,
    backgroundColor:'#fff',
    elevation:10,
    borderRadius:20,
    alignItems:'center'
  },
  imgdataall: {
    width:'30%',
    height:60,
    marginTop:25
  },
  imgdataall2: {
    width:'25%',
    height:35,
    marginTop:25
  },
  imgdataall3: {
    width:'30%',
    height:40,
    marginTop:30
  },
  txtdataall: {
    fontSize:15,
    fontWeight:'bold',
    color:"#000"
  },
  txtdataall2: {
    fontSize:15,
    fontWeight:'bold',
    color:'#000',
    marginTop:15
  },
  viewmendata: {
    width:'100%',
    height:70,
    backgroundColor:'gray',
    alignItems:'center',
    justifyContent:'center',
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    position:'absolute',
    top:620
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
