import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
            fontSize:90,
            margin:30,
            color:'#1e2291',
            textDecorationLine:'underline',
            fontWeight:'bold',
            fontStyle:'italic',
    },
    container:{
        paddingTop:30,
        alignItems:'center',
        flex:1,
        backgroundColor:'#77f9a3',
      },
        Tinput:{
          backgroundColor:'white',
          width:'90%',
          height:40,
        borderWidth:1,
        borderColor:'#daf2df',
        alignItems:'center',
        borderRadius:6,
        justifyContent:'center'
      },
      Şinput:{
        
        backgroundColor:'white',
        width:'90%',
        height:40,
      borderWidth:1,
      borderColor:'#daf2df',
      alignItems:'center',
      borderRadius:6,
      justifyContent:'center',
      marginTop:20,
      
      },
      button:{
        marginTop:30,
        width:'80%',
        height:40
      },
      
      
})
export default styles;