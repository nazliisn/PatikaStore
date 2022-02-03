import React from "react";
import {Text,SafeAreaView,View, FlatList,StyleSheet,TextInput} from 'react-native';
import store_data from './store_data.json';
import Card from './components/Card';


function App(){
    const renderItem=({item}) => (
    <Card product={item} ></Card> )   

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header} >PATİKASTORE</Text>
            <View >
                <FlatList 
                data={store_data}
                renderItem={renderItem}
                numColumns ={2}
                ListHeaderComponent={()=>(
                    <TextInput
                    style={styles.input}                    
                    placeholder="  Ara..."/>
                )}>     
                </FlatList>
            </View>
        </SafeAreaView>
    )};

const styles= StyleSheet.create({
    container:{
        flex:1,
        borderRadius:5 
    },
    header:{
        margin:10,
        fontSize:50,
        color:'purple',
        fontWeight:'bold'
        },
    input:{
        margin:10,
        borderRadius:10,
        backgroundColor:'#D3D3D3'
    },
})

export default App;