import { StyleSheet } from 'react-native'

export const styles =  StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    header: {
        width:'100%',
        height:100,
        backgroundColor:'gray',
        elevation:8,
        flexDirection:'row',
        alignItems:'center'
    },
    viewprofil: {
        width:'70%',
        height:80,
        justifyContent:'center',
        // backgroundColor:'yellow'
    },
    txtname: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:20
        // marginTop:''
    },
    txtnomor: {
        fontSize:13,
        fontWeight:'bold',
        marginLeft:20,
        marginTop:5,
        color:'#fff'
    },
    touchfoto: {
        width:"22%",
        height:70,
        // backgroundColor:'red',
        marginLeft:15,
        borderRadius:30
    },
    imgfoto: {
        width:'100%',
        height:70,
        borderRadius:30
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
      },
      textBold: {
        fontWeight: '500',
        color: '#000'
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
      },
      buttonTouchable: {
        padding: 16
      }
})