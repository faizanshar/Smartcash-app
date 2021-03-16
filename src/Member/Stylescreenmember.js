import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#696969',
        // alignItems:'center',
        // justifyContent:'center'
    },
    touchkeluar: {
        width:'13%',
        height:45,
        backgroundColor:'rgba(255,255,255,0.8)',
        marginLeft:15,
        marginTop:15,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center'
    },
    imgkeluar: {
        width:'40%',
        height:20
    },
    viewdata: {
        width:'85%',
        minHeight:310,
        backgroundColor:'#fff',
        elevation:10,
        alignSelf:'center',
        marginTop:30,
        borderRadius:20,
        alignItems:'center'
    },
    touchfoto: {
        width:'40%',
        height:120,
        backgroundColor:'#fff',
        alignSelf:'center',
        marginTop:30,
        borderRadius:20,
        elevation:10
    },
    imgfoto: {
        width:'100%',
        height:120,
        borderRadius:20
    },
    viewname: {
        width:'100%',
        height:50,
        // backgroundColor:'red',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1
    },
    txtname: {
        fontSize:13,
        fontWeight:'bold',
        marginLeft:15
    },
    txtname2: {
        fontSize:13,
        fontWeight:'bold',
        marginRight:15
    },
    touchubah: {
        width:'30%',
        height:40,
        backgroundColor:'#696969'
    }

})