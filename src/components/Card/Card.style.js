import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
    margin:10,
    borderRadius:10,
    backgroundColor: '#D3D3D3',
    flex:1       
    },
    title:{
        fontSize:21,
        fontWeight:'bold',
        margin:5,
        color:'black',
    },  
    image:{
        margin:10,        
        borderRadius:10,
        height:Dimensions.get('window').height/4    
    },
    price:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:5,
    },
    stock:{       
        fontSize:21,
        color:'red',
        fontWeight:'bold',
        marginLeft:5 
    }
}
   
); 
