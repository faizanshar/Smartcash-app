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
    txtprofil: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:15
    },
    containerdata: {
        width:'100%',
        height:250,
        backgroundColor:'#fff',
        elevation:10,
        marginTop:30
    },
    viewname: {
        width:'100%',
        height:50,
        // backgroundColor:'red'
    },
    txtname: {
        fontSize:15,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:15
    },
    viewharga: {
        width:'100%',
        height:50,
        // backgroundColor:'yellow',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    txtharga: {
        fontSize:14,
        fontWeight:'bold',
        marginLeft:15
    },
    txtprice: {
        fontSize:14,
        fontWeight:'bold',
        marginRight:15,
        color:'green'
    },
    txtjumlah: {
        fontSize:14,
        fontWeight:'bold',
        marginRight:15,
        // color:'green'
    }
})