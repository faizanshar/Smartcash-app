import {StyleSheet} from 'react-native'

export const styles =  StyleSheet.create({
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
    input: {
        width:'80%',
        height:50,
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:10,
        alignSelf:'center',
        marginTop:80,
        fontWeight:'bold'
    },
    input2: {
        width:'80%',
        height:50,
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:10,
        alignSelf:'center',
        marginTop:20,
        fontWeight:'bold'
    },
    touchubah: {
        width:'80%',
        height:50,
        backgroundColor:'gray',
        elevation:8,
        marginTop:40,
        alignSelf:'center',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    txtedit: {
        fontWeight:'bold',
        fontSize:16,
        color:'#fff'
    }
})