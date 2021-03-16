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
    txtgudang: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:15
    },
    containerweek: {
        width:'100%',
        minHeight:250,
        backgroundColor:'#fff',
        marginTop:15,
        elevation:10,
    },
    txt: {
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:20
    },
    view1: {
        width:'100%',
        minHeight:40,
        // backgroundColor:'red',
        marginTop:25,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    txt2: {
        fontSize:16,
        fontWeight:'bold',
        marginLeft:15,
    },
    txt3: {
        fontSize:16,
        fontWeight:'bold',
        color:'green',
        marginRight:15
    },
    txt4: {
        fontSize:16,
        fontWeight:'bold',
        color:'red',
        marginRight:15
    }
})