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
    txtperusahaan: {
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        // marginLeft:15
    },
    inputnama: {
        width:'80%',
        minHeight:30,
        backgroundColor:'#fff',
        elevation:5,
        alignSelf:'center',
        borderWidth:1,
        marginTop:60,
        borderRadius:10
    },
    inputtelpon: {
        width:'80%',
        minHeight:30,
        backgroundColor:'#fff',
        elevation:5,
        alignSelf:'center',
        borderWidth:1,
        marginTop:30,
        borderRadius:10
    },
    inputalamat: {
        width:'80%',
        minHeight:30,
        maxHeight:150,
        backgroundColor:'#fff',
        elevation:5,
        alignSelf:'center',
        borderWidth:1,
        marginTop:30,
        borderRadius:10
    },
    touchadd: {
        width:'80%',
        height:50,
        backgroundColor:"gray",
        alignSelf:'center',
        marginTop:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    txtadd: {
        fontSize:13,
        fontWeight:'bold',
        color:'#fff'
    }
})