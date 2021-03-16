import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create( {
    container: {
        flex:1,
        backgroundColor:'#fff',
        
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
    txtprofil: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:15
    },
    viewimg: {
        width:'30%',
        height:100,
        // backgroundColor:'red',
        alignSelf:'center',
        marginTop:50,
        borderRadius:30,
        elevation:10
    },
    img: {
        width:'100%',
        height:100,
        borderRadius:30
    },
    viewnama: {
        width:'80%',
        // height:50,
        // backgroundColor:'red',
        alignSelf:'center',
        flexDirection:'row',
        // alignItems:'center',
        marginTop:50,
        maxHeight:100
    },
    viewicon: {
        width:'20%',
        height:50,
        // backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    imgprofile: {
        width:'55%',
        height:30
    },
    inputemail: {
        width:"70%",
        borderBottomWidth:1,
        // height:50,
        // backgroundColor:'green'
    },
    viewemail: {
        width:'80%',
        // height:50,
        // backgroundColor:'red',
        alignSelf:'center',
        flexDirection:'row',
        // alignItems:'center',
        marginTop:20,
        maxHeight:100
    },
    touchedit: {
        width:'50%',
        height:50,
        backgroundColor:'gray',
        alignSelf:'center',
        marginTop:40,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    txtedit: {
        fontSize:13,
        fontWeight:'bold',
        color:'#fff'
    }
})