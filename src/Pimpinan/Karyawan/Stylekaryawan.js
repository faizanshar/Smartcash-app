import {StyleSheet} from 'react-native'

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
        minHeight:190,
        backgroundColor:'#fff',
        marginTop:30,
        elevation:10
    },
    viewname: {
        width:'100%',
        minHeight:50,
        // backgroundColor:'red',
        flexDirection:'row',
        marginTop:10
    },
    viewimg: {
        width:'15%',
        height:50,
        backgroundColor:'#fff',
        marginLeft:15,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        elevation:10
        // alignSelf:'center'
    },
    imgfoto: {
        width:'100%',
        height:50,
        borderRadius:30
    },
    viewname2: {
        marginTop:10,
        marginLeft:10,
        // backgroundColor:'yellow'
    },
    txtemail: {
        fontSize:15,
        fontWeight:'bold',

    },
    txtnomor: {
        fontSize:13,
        fontWeight:'bold',
        marginTop:5
    },
    view1: {
        width:'100%',
        // minHeight:40,
        // backgroundColor:'red',
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:"space-between",
    },
    view2: {
        width:'100%',
        // minHeight:40,
        // backgroundColor:'red',
        marginTop:5,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:"space-between",
    },
    txt: {
        fontSize:14,
        fontWeight:'bold',
        marginLeft:15,
    },
    txt2: {
        fontSize:14,
        fontWeight:'bold',
        marginRight:15
    },
    viewname3: {
        width:'100%',
        // minHeight:40,
        // backgroundColor:'yellow',
        marginLeft:20,
        justifyContent:'center'
    },
    txt3: {
        fontSize:14,
        fontWeight:'bold',
        color:'red',
    },
    txt4: {
        fontSize:14,
        fontWeight:'bold',
        color:'green'
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