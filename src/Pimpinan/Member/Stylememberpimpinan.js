import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
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
    txtgudang: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:15
    },
    containerdata: {
        width:'100%',
        minHeight:100,
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderColor:'#ddd',
        flexDirection:'row'
        // marginTop:
    },
    viewfoto: {
        width:'17%',
        height:60,
        // backgroundColor:'red',
        marginTop:20,
        marginLeft:15,
        borderRadius:30,
        elevation:8
    },
    imgfoto: {
        width:'100%',
        height:60,
        borderRadius:30
    },
    viewname: {
        width:'75%',
        minHeight:100,
        // backgroundColor:"red",
        justifyContent:'center'
    },
    txtemail: {
        fontSize:15,
        fontWeight:'bold',
        marginLeft:20
    },
    txtnomor: {
        fontSize:13,
        fontWeight:'bold',
        marginLeft:20
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