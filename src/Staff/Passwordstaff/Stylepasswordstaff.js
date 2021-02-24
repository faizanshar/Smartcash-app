import { StyleSheet } from 'react-native'

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
    txtpassword: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        // marginLeft:15
    },
    inputpassword: {
        width:'80%',
        height:50,
        // backgroundColor:'yellow',
        // borderWidth:1,
        // marginTop:80,
        // alignSelf:'center',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20
    },
    inputpassword2: {
        width:'80%',
        height:50,
        // backgroundColor:'#fff',
        // borderWidth:1,
        // marginTop:20,
        // alignSelf:'center',
        // border
    },
    viewpassword: {
        width:'80%',
        height:50,
        backgroundColor:'#fff',
        borderWidth:1,
        alignSelf:'center',
        borderRadius:30,
        marginTop:80,
        flexDirection:'row',
        alignItems:'center'
    },
    viewpassword2: {
        width:'80%',
        height:50,
        backgroundColor:'#fff',
        borderWidth:1,
        alignSelf:'center',
        borderRadius:30,
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    touchpassword: {
        width:'20%',
        height:50,
        // backgroundColor:'red',
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    imgeye: {
        width:'50%',
        height:30
    },
    touchubah: {
        width:'80%',
        height:50,
        backgroundColor:'gray',
        alignSelf:'center',
        marginTop:40,
        borderRadius:30,
        elevation:10,
        alignItems:'center',
        justifyContent:'center'
    },
    txtubah: {
        fontSize:15,
        fontWeight:'bold',
        color:'#fff'
    }
})