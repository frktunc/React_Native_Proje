import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1d8499',
       
    
    },
    container2:{
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#16084c'
        
    },
    text:{
        padding:10,
        color:'#10eac9',
        textAlign:'center',
        justifyContent:'center',
        fontSize:33,
        textDecorationLine:'underline',
        backgroundColor:'#16084c'
        
    },
    button:{
     margin:10,
    borderRadius: 65,
    backgroundColor: '#1d8499',
    paddingVertical: 25,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    marginRight:10
         
        
    },
    buttonText:{
      color:'white',
      fontWeight:'bold'
    },
    modal:{
             justifyContent: 'center',
            alignItems:'center',
             backgroundColor: 'black',
          height: '60%',
          width: '100%',
        
    },
    modal_text:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
    },
    inputContainer: {
        marginBottom: 22,
        
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      input: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#f2f2f2',
        fontSize: 16,
        height:150,
        width:280,
      },
      ButtonG:{
            height:50,
            width:270,
            
      },
      messageContainer: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        marginVertical: 5,
      },
      username: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
       color:'#3a721d',
       textDecorationLine:'underline'
        
      },
      messageText: {
        fontSize: 17,
        fontWeight:'bold',
      },
      date: {
        fontSize: 14,
        color: 'gray',
        marginTop: 5,
        marginLeft:275,
        textDecorationLine:'underline'
      },
     
      flatListContent:{
        
        paddingTop:20,
        paddingBottom:20,
      
      },
      
})
export default styles;