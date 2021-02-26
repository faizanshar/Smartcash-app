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
    txtkategori: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:15
    },
    touchdata: {
        width:'80%',
        minHeight:90,
        backgroundColor:'#fff',
        alignSelf:"center",
        borderRadius:10,
        elevation:8,
        marginTop:30
    },
    viewname: {
        width:'100%',
        minHeight:40,
        // backgroundColor:'red',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        // alignItems:"center",
        justifyContent:'center'
    },
    txtname: {
        fontSize:15,
        fontWeight:'bold',
        marginLeft:15
    },
    viewtouch: {
        width:'100%',
        height:50,
        // backgroundColor:'yellow',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    touchhapus: {
        width:'25%',
        height:35,
        backgroundColor:'red',
        marginRight:10,
        borderRadius:20,
        alignItems:'center',
        justifyContent:"center"
    },
    touchubah: {
        width:'25%',
        height:35,
        backgroundColor:'gray',
        marginRight:10,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    txt: {
        fontSize:13,
        fontWeight:'bold',
        color:'#fff'
    },
    containermodal: {
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'rgba(0, 0, 0, 0.5)'
        // backgroundColor:
    },
    viewmodal: {
        width:'80%',
        height:200,
        backgroundColor:'#fff',
        // elevation:10,
        borderRadius:20,
        // borderWidth:1
    },
    inputubah: {
        width:'80%',
        height:40,
        alignSelf:'center',
        backgroundColor:'#fff',
        elevation:10,
        marginTop:50,
        borderRadius:10,
        fontWeight:'bold',
        borderWidth:1
    },
    viewubah: {
        width:'100%',
        height:40,
        // backgroundColor:'red',
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    touchbatal: {
        width:'30%',
        height:40,
        borderRadius:10,
        // marginTop:30,
        backgroundColor:'red',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    touchedit: {
        width:'30%',
        height:40,
        borderRadius:10,
        // marginTop:30,
        backgroundColor:'gray',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    txtubah: {
        fontSize:13,
        fontWeight:'bold',
        color:'#fff'
    },
    touchtambah: {
        width:'20%',
        height:70,
        backgroundColor:'gray',
        position:'absolute',
        alignSelf:'flex-end',
        top:590,
        right:20,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
        elevation:8
        // marginRight:100
        // margin:20
    },
    imgplus: {
        width:'45%',
        height:30
    }
})