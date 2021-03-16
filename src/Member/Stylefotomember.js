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
    touchfoto: {
        width:'50%',
        height:180,
        backgroundColor:'#fff',
        elevation:10,
        alignSelf:'center',
        marginTop:80,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center"
    },
    imgfoto: {
        width:'100%',
        height:180,
        borderRadius:20
    },
    touchubah: {
        width:'50%',
        height:50,
        backgroundColor:'#696969',
        borderRadius:20,
        alignSelf:'center',
        marginTop:50,
        elevation:10,
        alignItems:"center",
        justifyContent:'center'
    },
    txtubah: {
        fontSize:15,
        fontWeight:'bold',
        color:'#fff'
    }
})