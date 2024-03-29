import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'gray',
        elevation:10
    },
    viewprofil: {
        width:'100%',
        // backgroundColor:'yellow',
        height:80,
        marginTop:30,
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'center'
    },
    viewfoto: {
        width:'22%',
        height:60,
        // backgroundColor:'red',
        // marginLeft:10,
        borderRadius:40,
        elevation:10,
        alignItems:'center',
        justifyContent:'center',
        left:20,
        top:10
    },
    imgfoto: {
        width: '100%',
        height:60,
        borderRadius:40
    },
    touchclose: {
        width:'20%',
        height:40,
        // backgroundColor:'red',
        left:81,
        alignItems:'center',
        justifyContent:'center'
    },
    imgclose: {
        width:'25%',
        height:20
    },
    viewtxt: {
        width:'100%',
        height:60,
        // backgroundColor:'red',
        // justifyContent:'center',
        alignItems:'center',
        marginTop:10
        // marginLeft:10
    },
    txtemail: {
        fontSize:16,
        fontWeight:'bold',
        color:'#fff',
        // marginLeft:10
        // marginTop:5
    },
    txtnomor: {
        fontSize:14,
        fontWeight:'bold',
        color:'#fff',
        // marginLeft:10
    },
    touchabsen: {
        width:'40%',
        height:40,
        backgroundColor:'#fff',
        alignSelf:'center',
        marginRight:18,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        marginTop:10
    },
    txtabsen: {
        fontSize:14,
        fontWeight:'bold'
    },
    containermodal: {
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        alignItems:'center',
        justifyContent:"center"
    },
    viewmodal: {
        width:'80%',
        height:200,
        backgroundColor:"#fff",
        borderRadius:20
    },
    inputkode: {
        width:'80%',
        minHeight:50,
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:20,
        alignSelf:'center',
        marginTop:30
    },
    viewtouch: {
        width:'100%',
        height:50,
        marginTop:40,
        // backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    touchkirim: {
        width:'40%',
        height:50,
        backgroundColor:'#696969',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:"center",
        // marginTop:40,
        borderRadius:30
    },
    touchbatal: {
        width:'40%',
        height:50,
        backgroundColor:'red',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:"center",
        // marginTop:40,
        borderRadius:30
    },
    touch: {
        width:'100%',
        height:60,
        // backgroundColor:'red',
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'space-between'
    },
    touch2: {
        width:'100%',
        height:60,
        // backgroundColor:'red',
        marginTop:5,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'space-between'
    },
    view: {
        width:'80%',
        height:60,
        // backgroundColor:'green',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    viewicon: {
        width:'16%',
        height:44,
        backgroundColor:'#fff',
        marginLeft:10,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        elevation:8
    },
    imgprofile: {
        width:'66%',
        height:30
    },
    txticonname: {
        fontSize:16,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:30
    },
    imgarrow: {
        width:'5%',
        height:15,
        marginRight:15
    }
    // toucharrow: {
    //     width:'10%',
    //     height:30,
    //     backgroundColor:'yellow'
    // } 
})