import {StyleSheet} from 'react-native'

export const styles =  StyleSheet.create( {
    container: {
        flex:1,
        backgroundColor:"#fff"
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
})