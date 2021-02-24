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
    txtubah: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:15
    },
    inputbarang: {
        width:'80%',
        height:50,
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:20,
        alignSelf:'center',
        marginTop:60,
        fontSize:15,
        fontWeight:'bold'
    },
    inputharga: {
        width:'80%',
        height:50,
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:20,
        alignSelf:'center',
        marginTop:30,
        fontSize:15,
        fontWeight:'bold'
    },
    inputdiskon: {
        width:'30%',
        height:50,
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:20,
        // alignSelf:'center',
        marginTop:20,
        marginLeft:40,
        fontSize:15,
        fontWeight:'bold'
    },
    touch: {
        width:'80%',
        height:50,
        borderRadius:20,
        marginTop:40,
        backgroundColor:'gray',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    txtubah2: {
        fontSize:15,
        fontWeight:'bold',
        color:'#fff'
    },
    viewpicker: {
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 30,
        marginTop:'5%',
        // elevation:8,
        alignSelf:'center',
        borderWidth:1
    
      },
})