import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 120,
    backgroundColor: 'gray',
    elevation: 10,
    alignItems:'center',
    justifyContent:'center'
    // borderBottomLeftRadius: 50,
    // borderBottomRightRadius: 50,
  },
  header1: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  header2: {
    width:'100%',
    height:60,
    // backgroundColor:'red',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  txtemail: {
      fontSize:17,
      fontWeight:'bold',
      color:'#fff'
  },
  txtnomor: {
    fontSize:13,
    fontWeight:'bold',
    color:'#fff'
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
    width: '20%',
    height: 60,
    //   backgroundColor:'green',
    //   marginRight:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgmenu: {
    width: '60%',
    height: 30,
  },
  viewfoto: {
      width:'15%',
      height:50,
      backgroundColor:'#fff',
      marginRight:15,
      marginBottom:10,
      borderRadius:20
  },
  imgfoto: {
      width:'100%',
      height:50,
      borderRadius:20
  },
  touch1: {
      width:'80%',
      alignSelf:'center',
      height:80,
      backgroundColor:'#fff',
      borderRadius:20,
      marginTop:40,
      elevation:10,
      flexDirection:'row',
      alignItems:'center',
    //   justifyContent:'space-around'
  },
  touch2: {
    width:'80%',
    alignSelf:'center',
    height:80,
    backgroundColor:'#fff',
    borderRadius:20,
    marginTop:20,
    elevation:10,
    flexDirection:'row',
    alignItems:'center'
},
imgprofile: {
    width:'12%',
    height:35,
    // marginRight:30/
    marginLeft:15
},
viewname: {
    width:'77%',
    height:80,
    // backgroundColor:'red',
    marginLeft:15,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
},
txtprofile: {
    fontSize:16,
    fontWeight:'bold',
    marginLeft:15
},
touch: {
    width:'25%',
    height:80,
    // backgroundColor:'red',
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    alignItems:'center',
    justifyContent:'center'
},
img: {
    width:'20%',
    height:20
}
});
