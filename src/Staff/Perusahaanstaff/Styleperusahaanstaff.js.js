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
    header2: {
        width:'85%',
        height:60,
        // backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    touchadd: {
        width:'22%',
        height:60,
        // backgroundColor:'yellow',
        marginRight:8,
        alignItems:'center',
        justifyContent:'center'
    },
    imgadd: {
        width:'45%',
        height:30
    },
    txtperusahaan: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        // marginLeft:15
    },
    viewdata: {
        width:'100%',
        // height:200,
        minHeight:170,
        backgroundColor:'#fff',
        marginTop:30,
        elevation:10
    },
    viewnama: {
        width:'100%',
        // height:60,
        // backgroundColor:'red',
        justifyContent:'flex-end',
        marginTop:15
    },
    txtnama: {
        fontSize:15,
        fontWeight:'bold',
        color:'#000',
        marginLeft:20
    },
    viewnomor: {
        width:'100%',
        // height:30,
        // backgroundColor:'yellow',
        justifyContent:'center'
    },
    txtnomor: {
        fontSize:13,
        fontWeight:'bold',
        marginLeft:20,
        color:'#000'
    },
    viewalamat: {
        width:'100%',
        minHeight:40,
        // backgroundColor:'green',
        marginTop:10,
        flexDirection:'row',
        // justifyContent:'center'
    },
    viewimgalamat: {
        width:'13%',
        height:40,
        // backgroundColor:'yellow',
        marginLeft:10,
        alignItems:"center",
        justifyContent:'center'
    },
    imgalamat: {
        width:'28%',
        height:25
    },
    viewtxtalamat: {
        width:'80%',
        justifyContent:'center',
        // backgroundColor:'red',
        maxWidth:'80%',
        marginTop:5
    },
    txtalamat: {
        fontSize:13,
        fontWeight:'bold',
        color:'#000',
        // marginLeft:5,
        // maxWidth:'80%'
    },
    viewtouch: {
        width:'100%',
        minHeight:57,
        // backgroundColor:'yellow',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:30
        // alignSelf:'stretch'
    },
    touchhapus: {
        width:'25%',
        height:50,
        backgroundColor:'red',
        // marginLeft:10,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10
    },
    txthapus: {
        fontSize:13,
        fontWeight:'bold',
        color:'#fff'
    },
    touchubah: {
        width:'25%',
        height:50,
        backgroundColor:'gray',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10

    },
    txtubah: {
        fontSize:13,
        fontWeight:'bold',
        color:'#fff'
    },
    containermodal: {
        flex:1,
        // backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    viewmodal: {
        width:'70%',
        height:200,
        backgroundColor:'#000'
    }
})